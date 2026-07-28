import React, { useEffect, useRef, useState } from 'react';

export interface PrintingRollProps {
  initialUnsplashUrl?: string;
}

export const PrintingRoll: React.FC<PrintingRollProps> = ({
  initialUnsplashUrl = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // HUD State
  const [pagesPrinted, setPagesPrinted] = useState(0);
  const [meterProgress, setMeterProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hintText, setHintText] = useState('Move to steer — click to pause');
  const [showHint, setShowHint] = useState(true);
  const [heroImageUrl, setHeroImageUrl] = useState(initialUnsplashUrl);
  const [isControlOpen, setIsControlOpen] = useState(false);
  const [edition, setEdition] = useState('2019 — 2026');

  // References for mutable engine state inside loop
  const engineRef = useRef<{
    setPaused: (p: boolean) => void;
    updateAtlasImage: (url: string) => void;
  } | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Safely retrieve THREE and GSAP from window global scope (loaded via index.html script tags)
    const THREE = typeof window !== 'undefined' ? (window as any).THREE : null;
    const gsap = typeof window !== 'undefined' ? (window as any).gsap : null;

    /* ============================================================
       VX — THE PRINTING ROLL (THREE.JS + GSAP)
       ============================================================ */
    const RIBBON_W = 1.4625;
    const ATLAS_N = 8;
    const ROLL_R = 1.70625;
    const CARD_LEN = (2 * Math.PI * ROLL_R) / ATLAS_N;
    const INNER_R = ROLL_R * 0.52;
    const STEP = 0.12;
    const MAX_PTS = 760;
    const CURL_SEG = 16;
    const MAX_SEG = MAX_PTS + CURL_SEG + 2;
    const FLOOR_RGB = 'vec3(1.0, 1.0, 1.0)';

    // Renderer & Scene Initialization with Fallbacks
    const canvas = canvasRef.current;
    let renderer: any = null;

    if (THREE) {
      const rendererOptionsList: any[] = [
        { canvas, antialias: false, alpha: false, failIfMajorPerformanceCaveat: false, powerPreference: 'default' },
        { canvas, antialias: false, alpha: false, failIfMajorPerformanceCaveat: false, powerPreference: 'low-power' },
        { canvas, failIfMajorPerformanceCaveat: false },
        { canvas },
      ];

      for (const opts of rendererOptionsList) {
        try {
          renderer = new THREE.WebGLRenderer(opts);
          if (renderer && renderer.getContext()) {
            break;
          }
        } catch (err) {
          console.warn('WebGL context creation attempt failed:', err);
          renderer = null;
        }
      }
    }

    // FALLBACK: 2D Canvas Interactive Engine if WebGL is unsupported
    if (!renderer || !THREE) {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      let anim2dId = 0;
      let pages = 0;
      let rollPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
      let targetPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
      let trail: { x: number; y: number }[] = [];
      let isPaused2D = false;

      const loadedHero = new Image();
      loadedHero.crossOrigin = 'anonymous';
      loadedHero.src = heroImageUrl;

      const onMouseMove2D = (e: MouseEvent | TouchEvent) => {
        let x = 0;
        let y = 0;
        if ('touches' in e && (e as TouchEvent).touches?.length) {
          x = (e as TouchEvent).touches[0].clientX;
          y = (e as TouchEvent).touches[0].clientY;
        } else if ('clientX' in e) {
          x = (e as MouseEvent).clientX;
          y = (e as MouseEvent).clientY;
        }
        if (x || y) {
          targetPos = { x, y };
        }
      };

      const onPointerUp2D = () => {
        isPaused2D = !isPaused2D;
        setIsPaused(isPaused2D);
        setHintText(isPaused2D ? 'Paused — click anywhere to resume' : 'Rolling — click to pause');
      };

      window.addEventListener('mousemove', onMouseMove2D);
      window.addEventListener('touchmove', onMouseMove2D);
      window.addEventListener('click', onPointerUp2D);

      const resize2D = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      resize2D();
      window.addEventListener('resize', resize2D);

      let stepCount = 0;

      const loop2D = () => {
        anim2dId = requestAnimationFrame(loop2D);

        if (!isPaused2D) {
          rollPos.x += (targetPos.x - rollPos.x) * 0.08;
          rollPos.y += (targetPos.y - rollPos.y) * 0.08;

          stepCount++;
          if (stepCount % 6 === 0) {
            trail.unshift({ x: rollPos.x, y: rollPos.y });
            if (trail.length > 80) trail.pop();
            pages = Math.floor(stepCount / 20);
            setPagesPrinted(pages);
            setMeterProgress(((stepCount % 200) / 200) * 100);
          }
        }

        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw Paper Trail
        if (trail.length > 1) {
          ctx.beginPath();
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 117;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.shadowColor = 'rgba(0,0,0,0.08)';
          ctx.shadowBlur = 12;
          ctx.shadowOffsetY = 4;

          ctx.moveTo(trail[0].x, trail[0].y);
          for (let i = 1; i < trail.length; i++) {
            ctx.lineTo(trail[i].x, trail[i].y);
          }
          ctx.stroke();
          ctx.shadowColor = 'transparent';

          for (let i = 0; i < trail.length; i += 12) {
            const pt = trail[i];
            ctx.save();
            ctx.translate(pt.x, pt.y);
            ctx.fillStyle = '#ffffff';
            ctx.strokeStyle = 'rgba(0,0,0,0.1)';
            ctx.lineWidth = 1;
            ctx.fillRect(-43.5, -33.75, 87, 67.5);
            ctx.strokeRect(-43.5, -33.75, 87, 67.5);

            if (i === 0 && loadedHero.complete && loadedHero.naturalWidth !== 0) {
              try {
                ctx.drawImage(loadedHero, -39, -29.25, 78, 43.5);
              } catch {
                ctx.fillStyle = '#e4551f';
                ctx.fillRect(-39, -29.25, 78, 43.5);
              }
            } else {
              ctx.fillStyle = i % 24 === 0 ? '#e4551f' : '#aa3bff';
              ctx.fillRect(-39, -29.25, 78, 43.5);
            }

            ctx.fillStyle = '#161616';
            ctx.font = '10px monospace';
            ctx.fillText(`VX CARD 0${(i / 12) % 8 + 1}`, -39, 25.5);
            ctx.restore();
          }
        }

        ctx.save();
        ctx.translate(rollPos.x, rollPos.y);

        ctx.fillStyle = 'rgba(20,20,22,0.15)';
        ctx.beginPath();
        ctx.ellipse(0, 15, 73, 24, 0, 0, Math.PI * 2);
        ctx.fill();

        const grad = ctx.createLinearGradient(-68, -34, 68, 34);
        grad.addColorStop(0, '#f0f0f2');
        grad.addColorStop(0.5, '#ffffff');
        grad.addColorStop(1, '#d8d8dc');
        ctx.fillStyle = grad;
        ctx.beginPath();
        if (typeof ctx.roundRect === 'function') {
          ctx.roundRect(-68, -34, 136, 68, 11);
        } else {
          ctx.rect(-68, -34, 136, 68);
        }
        ctx.fill();
        ctx.strokeStyle = '#141414';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = '#e4551f';
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText('VX PRESS', -30, 5);

        ctx.restore();
      };

      loop2D();

      engineRef.current = {
        setPaused: (p: boolean) => {
          isPaused2D = p;
          setIsPaused(p);
        },
        updateAtlasImage: (url: string) => {
          loadedHero.src = url;
        },
      };

      return () => {
        cancelAnimationFrame(anim2dId);
        window.removeEventListener('mousemove', onMouseMove2D);
        window.removeEventListener('touchmove', onMouseMove2D);
        window.removeEventListener('click', onPointerUp2D);
        window.removeEventListener('resize', resize2D);
      };
    }

    if (renderer) {
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      if (THREE.SRGBColorSpace) {
        renderer.outputColorSpace = THREE.SRGBColorSpace;
      }
    }

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    scene.fog = new THREE.Fog(0xffffff, 24, 58);

    const camera = new THREE.PerspectiveCamera(
      32,
      window.innerWidth / window.innerHeight,
      0.5,
      200
    );

    const hemi = new THREE.HemisphereLight(0xffffff, 0xffffff, 1.0);
    scene.add(hemi);

    const sun = new THREE.DirectionalLight(0xffffff, 0.85);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left = -9;
    sun.shadow.camera.right = 9;
    sun.shadow.camera.top = 9;
    sun.shadow.camera.bottom = -9;
    sun.shadow.camera.near = 1;
    sun.shadow.camera.far = 40;
    sun.shadow.bias = -0.0004;
    sun.shadow.normalBias = 0.02;
    scene.add(sun);
    scene.add(sun.target);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
    fillLight.position.set(-6, 4, -8);
    scene.add(fillLight);

    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(400, 400),
      new THREE.ShadowMaterial({
        opacity: 0.05,
      })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    let seed = 7;
    function rand() {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    }

    const loadedHeroImg = new Image();
    loadedHeroImg.crossOrigin = 'anonymous';
    let heroImgLoaded = false;

    loadedHeroImg.onload = () => {
      heroImgLoaded = true;
      rebuildAtlasCanvas();
    };
    loadedHeroImg.src = heroImageUrl;

    const atlasCanvas = document.createElement('canvas');
    const CELL = 512;
    atlasCanvas.width = CELL * ATLAS_N;
    atlasCanvas.height = CELL;
    const atlasTex = new THREE.CanvasTexture(atlasCanvas);
    atlasTex.wrapS = THREE.RepeatWrapping;
    atlasTex.wrapT = THREE.ClampToEdgeWrapping;
    if (THREE.SRGBColorSpace) {
      atlasTex.colorSpace = THREE.SRGBColorSpace;
    }
    atlasTex.anisotropy = renderer?.capabilities?.getMaxAnisotropy() ?? 1;

    function rebuildAtlasCanvas() {
      const g = atlasCanvas.getContext('2d');
      if (!g) return;

      const INK = '#161616';
      const PAPER = '#ffffff';
      const ORANGE = '#e4551f';
      const AMBER = '#f0a32e';
      const BLUE = '#1e4fd6';

      g.fillStyle = '#ffffff';
      g.fillRect(0, 0, atlasCanvas.width, atlasCanvas.height);

      seed = 7;
      for (let i = 0; i < 2600; i++) {
        g.fillStyle = 'rgba(180,180,180,' + (0.01 + rand() * 0.02) + ')';
        g.fillRect(
          rand() * atlasCanvas.width,
          rand() * atlasCanvas.height,
          1 + rand() * 2,
          1
        );
      }

      function bars(x: number, y: number, w: number, n: number, lh: number, color?: string) {
        g!.fillStyle = color || '#e8e7e2';
        for (let r = 0; r < n; r++) {
          const bw = w * (0.55 + rand() * 0.45);
          g!.fillRect(x, y + r * lh, bw, Math.max(2, lh * 0.42));
        }
      }

      function label(x: number, y: number, txt: string, color?: string, size?: number) {
        g!.fillStyle = color || INK;
        g!.font =
          '700 ' +
          (size || 13) +
          'px -apple-system, "Segoe UI", Helvetica, Arial, sans-serif';
        g!.fillText(txt, x, y);
      }

      function mono(x: number, y: number, txt: string, color?: string, size?: number) {
        g!.fillStyle = color || '#b2b2ae';
        g!.font =
          '600 ' +
          (size || 11) +
          'px "SF Mono", Menlo, Consolas, monospace';
        g!.fillText(txt, x, y);
      }

      function photo(x: number, y: number, w: number, h: number, tint: [string, string], customImg?: HTMLImageElement) {
        if (customImg && heroImgLoaded) {
          g!.save();
          g!.beginPath();
          g!.rect(x, y, w, h);
          g!.clip();
          g!.drawImage(customImg, x, y, w, h);
          g!.restore();
          return;
        }

        const gr = g!.createLinearGradient(x, y, x + w, y + h);
        gr.addColorStop(0, tint[0]);
        gr.addColorStop(1, tint[1]);
        g!.fillStyle = gr;
        g!.fillRect(x, y, w, h);

        for (let b = 0; b < 9; b++) {
          const bw = w * (0.08 + rand() * 0.3);
          const bh = h * (0.1 + rand() * 0.5);
          const bx = x + rand() * (w - bw);
          const by = y + h - bh - rand() * h * 0.25;
          g!.fillStyle =
            'rgba(' +
            (rand() < 0.5 ? '20,20,22' : '245,244,240') +
            ',' +
            (0.12 + rand() * 0.3) +
            ')';
          g!.fillRect(bx, by, bw, bh);
        }
        const hl = g!.createLinearGradient(x, y, x, y + h * 0.5);
        hl.addColorStop(0, 'rgba(255,255,255,0.28)');
        hl.addColorStop(1, 'rgba(255,255,255,0)');
        g!.fillStyle = hl;
        g!.fillRect(x, y, w, h * 0.5);
      }

      const M = 30;

      function cardFrame(cx: number) {
        const x = cx + M;
        const y = M;
        const w = CELL - M * 2;
        const h = CELL - M * 2;
        g!.save();
        g!.shadowColor = 'rgba(30,30,30,0.10)';
        g!.shadowBlur = 14;
        g!.shadowOffsetY = 3;
        g!.fillStyle = PAPER;
        g!.fillRect(x, y, w, h);
        g!.restore();
        g!.strokeStyle = 'rgba(20,20,20,0.08)';
        g!.lineWidth = 1;
        g!.strokeRect(x + 0.5, y + 0.5, w - 1, h - 1);
        return { x, y, w, h };
      }

      function indexTag(f: { x: number; y: number; w: number; h: number }, n: number) {
        g!.save();
        g!.translate(f.x + f.w - 12, f.y + f.h - 14);
        g!.rotate(-Math.PI / 2);
        mono(0, 0, '0' + String(n) + '/008', '#9a9994', 11);
        g!.restore();
      }

      const draws = [
        (f: { x: number; y: number; w: number; h: number }) => {
          label(f.x + 22, f.y + 36, 'VX PRESS', INK, 15);
          mono(f.x + f.w - 96, f.y + 34, 'A/W 26');
          photo(f.x + 22, f.y + 54, f.w - 44, f.h - 150, [ORANGE, '#b83204'], loadedHeroImg);
          bars(f.x + 22, f.y + f.h - 78, f.w * 0.5, 3, 15);
          label(f.x + f.w - 130, f.y + f.h - 30, 'ATELIER 041', '#8a8a86', 11);
        },
        (f: { x: number; y: number; w: number; h: number }) => {
          photo(f.x + 20, f.y + 20, f.w - 40, f.h * 0.62, ['#3a3a3e', '#0e0e10']);
          label(f.x + 22, f.y + f.h * 0.62 + 52, 'CONCRETE INDEX', INK, 17);
          bars(f.x + 22, f.y + f.h * 0.62 + 70, f.w - 60, 3, 15);
          mono(f.x + 22, f.y + f.h - 26, 'PP. 112 — 139');
        },
        (f: { x: number; y: number; w: number; h: number }) => {
          g!.fillStyle = INK;
          g!.font =
            '800 italic 128px -apple-system, "Segoe UI", Helvetica, Arial, sans-serif';
          g!.fillText('VX', f.x + 26, f.y + 148);
          g!.fillStyle = ORANGE;
          g!.fillRect(f.x + 30, f.y + 176, 66, 10);
          bars(f.x + 30, f.y + 214, f.w - 90, 7, 22, '#b9b8b2');
          label(f.x + 30, f.y + f.h - 34, 'MANIFESTO — TEN RULES OF PRINT', '#5c5c60', 12);
        },
        (f: { x: number; y: number; w: number; h: number }) => {
          label(f.x + 22, f.y + 36, 'STUDIES', INK, 14);
          mono(f.x + f.w - 108, f.y + 34, 'GRID 3×2');
          const tints: [string, string][] = [
            ['#c9c9ce', '#8f8f96'],
            [AMBER, '#c77e14'],
            ['#2c2c30', '#141416'],
            ['#dcd9d2', '#b0aca2'],
            [BLUE, '#123089'],
            ['#7d7d84', '#4c4c52'],
          ];
          const gw = (f.w - 44 - 24) / 3;
          const gh = (f.h - 170) / 2;
          for (let i2 = 0; i2 < 6; i2++) {
            const gx = f.x + 22 + (i2 % 3) * (gw + 12);
            const gy = f.y + 56 + Math.floor(i2 / 3) * (gh + 12);
            photo(gx, gy, gw, gh, tints[i2]);
          }
          bars(f.x + 22, f.y + f.h - 84, f.w * 0.6, 3, 15);
        },
        (f: { x: number; y: number; w: number; h: number }) => {
          g!.fillStyle = AMBER;
          g!.fillRect(f.x + 20, f.y + 20, f.w - 40, f.h - 40);
          g!.strokeStyle = 'rgba(251,250,247,0.9)';
          g!.lineWidth = 7;
          for (let a2 = 0; a2 < 5; a2++) {
            g!.beginPath();
            g!.arc(f.x + f.w * 0.5, f.y + f.h * 0.86, 46 + a2 * 34, Math.PI, Math.PI * 2);
            g!.stroke();
          }
          g!.fillStyle = 'rgba(22,18,10,0.9)';
          g!.fillRect(f.x + 42, f.y + 46, 88, 12);
          label(f.x + 42, f.y + 84, 'SOUND / SHAPE', '#161616', 15);
          mono(f.x + 42, f.y + f.h - 44, 'INSTALLATION — HALL B', 'rgba(22,18,10,0.75)');
        },
        (f: { x: number; y: number; w: number; h: number }) => {
          g!.fillStyle = BLUE;
          g!.fillRect(f.x + 20, f.y + f.h * 0.58, f.w - 40, f.h * 0.42 - 20);
          label(f.x + 24, f.y + 42, 'INTERFACE No.9', INK, 15);
          bars(f.x + 24, f.y + 58, f.w * 0.55, 2, 14);
          const dw = f.w * 0.44;
          const dh = f.h * 0.52;
          const dx = f.x + f.w / 2 - dw / 2;
          const dy = f.y + f.h * 0.3;
          g!.save();
          g!.shadowColor = 'rgba(10,20,60,0.35)';
          g!.shadowBlur = 18;
          g!.shadowOffsetY = 8;
          g!.fillStyle = '#101014';
          g!.fillRect(dx, dy, dw, dh);
          g!.restore();
          g!.fillStyle = '#fbfaf7';
          g!.fillRect(dx + 8, dy + 8, dw - 16, dh - 16);
          photo(dx + 8, dy + 8, dw - 16, (dh - 16) * 0.5, ['#9aa8d8', '#5468b8']);
          bars(dx + 16, dy + 12 + (dh - 16) * 0.5 + 8, dw - 44, 4, 12);
          mono(f.x + 26, f.y + f.h - 32, 'CASE — LEDGER APP', 'rgba(251,250,247,0.85)');
        },
        (f: { x: number; y: number; w: number; h: number }) => {
          const pw = f.w * 0.42;
          const ph = f.h * 0.4;
          photo(f.x + (f.w - pw) / 2, f.y + 72, pw, ph, ['#d9d6cd', '#a8a49a']);
          g!.fillStyle = ORANGE;
          g!.beginPath();
          g!.arc(f.x + (f.w + pw) / 2 - 8, f.y + 72 + 8, 9, 0, Math.PI * 2);
          g!.fill();
          label(f.x + f.w / 2 - 62, f.y + 96 + ph + 26, 'STILL LIFE, 04', INK, 14);
          bars(f.x + f.w / 2 - 84, f.y + 96 + ph + 44, 168, 3, 14);
          mono(f.x + f.w / 2 - 46, f.y + f.h - 30, 'EDITION 2026');
        },
        (f: { x: number; y: number; w: number; h: number }) => {
          g!.fillStyle = '#141416';
          g!.fillRect(f.x + 20, f.y + 20, f.w - 40, f.h - 40);
          g!.strokeStyle = 'rgba(251,250,247,0.35)';
          g!.lineWidth = 1;
          for (let l2 = 0; l2 < 6; l2++) {
            g!.beginPath();
            g!.moveTo(f.x + 44, f.y + 70 + l2 * 26);
            g!.lineTo(f.x + f.w - 44, f.y + 70 + l2 * 26);
            g!.stroke();
          }
          g!.fillStyle = ORANGE;
          g!.beginPath();
          g!.arc(f.x + f.w - 78, f.y + 96, 16, 0, Math.PI * 2);
          g!.fill();
          g!.fillStyle = '#fbfaf7';
          g!.font =
            '800 italic 44px -apple-system, "Segoe UI", Helvetica, Arial, sans-serif';
          g!.fillText('END / LOOP', f.x + 44, f.y + f.h - 96);
          mono(f.x + 44, f.y + f.h - 52, 'THE ROLL CONTINUES', 'rgba(251,250,247,0.6)');
        },
      ];

      for (let c = 0; c < ATLAS_N; c++) {
        const frame = cardFrame(c * CELL);
        draws[c](frame);
        indexTag(frame, c + 1);
      }

      atlasTex.needsUpdate = true;
    }

    rebuildAtlasCanvas();

    function buildCapTexture() {
      const S = 1024;
      const cv = document.createElement('canvas');
      cv.width = S;
      cv.height = S;
      const g = cv.getContext('2d');
      if (!g) return new THREE.Texture();
      const cx = S / 2;
      const innerPx = (INNER_R / ROLL_R) * (S / 2);

      g.fillStyle = '#f2f1ec';
      g.fillRect(0, 0, S, S);

      let localSeed = 7;
      function localRand() {
        localSeed = (localSeed * 16807) % 2147483647;
        return (localSeed - 1) / 2147483646;
      }

      for (let r = innerPx; r < S / 2 - 1; r += 2.1) {
        const a = 0.045 + localRand() * 0.1 + (r % 29 < 2.2 ? 0.12 : 0);
        g.strokeStyle = 'rgba(112,110,102,' + a.toFixed(3) + ')';
        g.lineWidth = localRand() < 0.12 ? 1.6 : 0.8;
        g.beginPath();
        g.arc(cx, cx, r, 0, Math.PI * 2);
        g.stroke();
      }

      g.strokeStyle = 'rgba(90,88,80,0.35)';
      g.lineWidth = 1.4;
      g.beginPath();
      const turns = 26;
      for (let t = 0; t <= 1; t += 0.002) {
        const rr = innerPx + t * (S / 2 - innerPx - 2);
        const an = t * turns * Math.PI * 2;
        const px = cx + Math.cos(an) * rr;
        const py = cx + Math.sin(an) * rr;
        if (t === 0) g.moveTo(px, py);
        else g.lineTo(px, py);
      }
      g.stroke();

      const sh = g.createRadialGradient(cx, cx, innerPx, cx, cx, innerPx + 90);
      sh.addColorStop(0, 'rgba(60,58,52,0.20)');
      sh.addColorStop(1, 'rgba(60,58,52,0)');
      g.fillStyle = sh;
      g.beginPath();
      g.arc(cx, cx, S / 2, 0, Math.PI * 2);
      g.fill();

      const rim = g.createRadialGradient(cx, cx, S / 2 - 26, cx, cx, S / 2);
      rim.addColorStop(0, 'rgba(60,58,52,0)');
      rim.addColorStop(1, 'rgba(60,58,52,0.14)');
      g.fillStyle = rim;
      g.beginPath();
      g.arc(cx, cx, S / 2, 0, Math.PI * 2);
      g.fill();

      const tex = new THREE.CanvasTexture(cv);
      if (THREE.SRGBColorSpace) {
        tex.colorSpace = THREE.SRGBColorSpace;
      }
      tex.anisotropy = renderer?.capabilities?.getMaxAnisotropy() ?? 1;
      return tex;
    }

    function buildBlobTexture() {
      const S = 256;
      const cv = document.createElement('canvas');
      cv.width = S;
      cv.height = S;
      const g = cv.getContext('2d');
      if (!g) return new THREE.Texture();
      const gr = g.createRadialGradient(S / 2, S / 2, 6, S / 2, S / 2, S / 2);
      gr.addColorStop(0, 'rgba(20,20,22,0.20)');
      gr.addColorStop(0.55, 'rgba(20,20,22,0.08)');
      gr.addColorStop(1, 'rgba(20,20,22,0)');
      g.fillStyle = gr;
      g.fillRect(0, 0, S, S);
      return new THREE.CanvasTexture(cv);
    }

    const capTex = buildCapTexture();

    const rollGroup = new THREE.Group();
    const spinner = new THREE.Group();
    rollGroup.add(spinner);
    scene.add(rollGroup);

    const barrelTex = atlasTex.clone();
    barrelTex.needsUpdate = true;
    barrelTex.wrapS = THREE.RepeatWrapping;
    barrelTex.wrapT = THREE.ClampToEdgeWrapping;
    barrelTex.repeat.set(1, 1);
    barrelTex.offset.x = 0.25;

    const paperMat = new THREE.MeshStandardMaterial({
      map: barrelTex,
      roughness: 0.92,
      metalness: 0,
    });

    const barrelGeo = new THREE.CylinderGeometry(
      ROLL_R,
      ROLL_R,
      RIBBON_W,
      96,
      1,
      true
    );
    barrelGeo.rotateZ(Math.PI / 2);
    const barrel = new THREE.Mesh(barrelGeo, paperMat);
    barrel.castShadow = true;
    spinner.add(barrel);

    const capMat = new THREE.MeshStandardMaterial({
      map: capTex,
      roughness: 0.95,
      metalness: 0,
    });
    const capGeo = new THREE.RingGeometry(INNER_R, ROLL_R, 96, 1);
    const capR = new THREE.Mesh(capGeo, capMat);
    capR.rotation.y = Math.PI / 2;
    capR.position.x = RIBBON_W / 2 + 0.001;
    capR.castShadow = true;
    spinner.add(capR);

    const capL = new THREE.Mesh(capGeo, capMat);
    capL.rotation.y = -Math.PI / 2;
    capL.position.x = -RIBBON_W / 2 - 0.001;
    capL.castShadow = true;
    spinner.add(capL);

    const coreGeo = new THREE.CylinderGeometry(
      INNER_R,
      INNER_R,
      RIBBON_W * 1.002,
      48,
      1,
      true
    );
    coreGeo.rotateZ(Math.PI / 2);
    const core = new THREE.Mesh(
      coreGeo,
      new THREE.MeshStandardMaterial({
        color: 0xf0f0f2,
        roughness: 1,
        metalness: 0,
        side: THREE.DoubleSide,
      })
    );
    spinner.add(core);

    const blob = new THREE.Mesh(
      new THREE.PlaneGeometry(ROLL_R * 3.4, RIBBON_W * 2.2),
      new THREE.MeshBasicMaterial({
        map: buildBlobTexture(),
        transparent: true,
        depthWrite: false,
      })
    );
    blob.rotation.x = -Math.PI / 2;
    blob.renderOrder = 1;
    scene.add(blob);

    const VERTS = (MAX_SEG + 1) * 2;
    const posArr = new Float32Array(VERTS * 3);
    const nrmArr = new Float32Array(VERTS * 3);
    const uvArr = new Float32Array(VERTS * 2);
    const sArr = new Float32Array(VERTS);
    const idxArr = new Uint16Array(MAX_SEG * 6);

    for (let iq = 0; iq < MAX_SEG; iq++) {
      const v0 = iq * 2;
      idxArr[iq * 6 + 0] = v0;
      idxArr[iq * 6 + 1] = v0 + 1;
      idxArr[iq * 6 + 2] = v0 + 2;
      idxArr[iq * 6 + 3] = v0 + 1;
      idxArr[iq * 6 + 4] = v0 + 3;
      idxArr[iq * 6 + 5] = v0 + 2;
    }

    const ribbonGeo = new THREE.BufferGeometry();
    ribbonGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(posArr, 3).setUsage(THREE.DynamicDrawUsage)
    );
    ribbonGeo.setAttribute(
      'normal',
      new THREE.BufferAttribute(nrmArr, 3).setUsage(THREE.DynamicDrawUsage)
    );
    ribbonGeo.setAttribute(
      'uv',
      new THREE.BufferAttribute(uvArr, 2).setUsage(THREE.DynamicDrawUsage)
    );
    ribbonGeo.setAttribute(
      'aS',
      new THREE.BufferAttribute(sArr, 1).setUsage(THREE.DynamicDrawUsage)
    );
    ribbonGeo.setIndex(new THREE.BufferAttribute(idxArr, 1));
    ribbonGeo.setDrawRange(0, 0);

    const uTailS = { value: 0 };

    const ribbonMat = new THREE.MeshStandardMaterial({
      map: atlasTex,
      roughness: 0.9,
      metalness: 0,
      side: THREE.DoubleSide,
    });

    ribbonMat.onBeforeCompile = (shader: any) => {
      shader.uniforms.uTailS = uTailS;
      shader.vertexShader = shader.vertexShader
        .replace(
          '#include <common>',
          '#include <common>\nattribute float aS;\nvarying float vS;'
        )
        .replace(
          '#include <begin_vertex>',
          '#include <begin_vertex>\nvS = aS;'
        );
      shader.fragmentShader = shader.fragmentShader
        .replace(
          '#include <common>',
          '#include <common>\nvarying float vS;\nuniform float uTailS;'
        )
        .replace(
          '#include <map_fragment>',
          '#include <map_fragment>\n' +
            'float tail = smoothstep(uTailS, uTailS + 3.0, vS);\n' +
            'diffuseColor.rgb = mix(' +
            FLOOR_RGB +
            ', diffuseColor.rgb, tail);'
        );
    };

    const ribbon = new THREE.Mesh(ribbonGeo, ribbonMat);
    ribbon.frustumCulled = false;
    ribbon.receiveShadow = true;
    scene.add(ribbon);

    const pos = new THREE.Vector2(0, 0);
    const vel = new THREE.Vector2(0, 0);
    const target = new THREE.Vector2(0, 0);
    let yaw = 0;
    let sTotal = 0;
    const REV = 2 * Math.PI * ROLL_R;

    const SPRING = 16.0;
    const DAMP = 5.4;
    const MAX_SPEED = 9.0;

    const hx = new Float32Array(MAX_PTS);
    const hz = new Float32Array(MAX_PTS);
    const hs = new Float32Array(MAX_PTS);
    let head = -1;
    let count = 0;

    function pushPoint(x: number, z: number, s: number) {
      head = (head + 1) % MAX_PTS;
      hx[head] = x;
      hz[head] = z;
      hs[head] = s;
      if (count < MAX_PTS) count++;
    }

    function getPt(i: number, out: { x: number; z: number; s: number }) {
      const k = (head - (count - 1) + i + MAX_PTS * 2) % MAX_PTS;
      out.x = hx[k];
      out.z = hz[k];
      out.s = hs[k];
    }

    pushPoint(0, 0, 0);

    function angleLerp(a: number, b: number, t: number) {
      let d = b - a;
      while (d > Math.PI) d -= Math.PI * 2;
      while (d < -Math.PI) d += Math.PI * 2;
      return a + d * t;
    }

    const _acc = new THREE.Vector2();
    const _dp = new THREE.Vector2();

    function stepMotion(dt: number) {
      _acc.copy(target).sub(pos).multiplyScalar(SPRING);
      _acc.addScaledVector(vel, -DAMP);
      vel.addScaledVector(_acc, dt);
      const sp = vel.length();
      if (sp > MAX_SPEED) vel.multiplyScalar(MAX_SPEED / sp);
      _dp.copy(vel).multiplyScalar(dt);
      const ds = _dp.length();
      if (ds > 1e-6) {
        pos.add(_dp);
        sTotal += ds;
        if (sp > 0.06) {
          const ty = Math.atan2(vel.x, vel.y);
          yaw = angleLerp(yaw, ty, 1 - Math.exp(-7 * dt));
        }
        const lx = hx[head];
        const lz = hz[head];
        const ddx = pos.x - lx;
        const ddz = pos.y - lz;
        if (ddx * ddx + ddz * ddz >= STEP * STEP) {
          pushPoint(pos.x, pos.y, sTotal);
        }
      }
    }

    const _a = { x: 0, z: 0, s: 0 };
    const _b = { x: 0, z: 0, s: 0 };
    const _c = { x: 0, z: 0, s: 0 };
    const CURL_MAX = 0.85;

    function writeVert(
      vi: number,
      x: number,
      y: number,
      z: number,
      nx: number,
      ny: number,
      nz: number,
      u: number,
      vv: number,
      s: number
    ) {
      const p3 = vi * 3;
      const p2 = vi * 2;
      posArr[p3] = x;
      posArr[p3 + 1] = y;
      posArr[p3 + 2] = z;
      nrmArr[p3] = nx;
      nrmArr[p3 + 1] = ny;
      nrmArr[p3 + 2] = nz;
      uvArr[p2] = u;
      uvArr[p2 + 1] = vv;
      sArr[vi] = s;
    }

    function rebuildRibbon() {
      const n = count;
      if (n < 2) {
        ribbonGeo.setDrawRange(0, 0);
        return;
      }

      getPt(0, _a);
      const sTail = _a.s;
      const half = RIBBON_W / 2;
      let vi = 0;
      const uSpan = CARD_LEN * ATLAS_N;
      const uBase = Math.floor(sTail / uSpan) * uSpan;

      const fx = Math.sin(yaw);
      const fz = Math.cos(yaw);
      const sxc = fz;
      const szc = -fx;

      let ptx = 0;
      let ptz = 0;
      let hasPrev = false;

      for (let i = 0; i < n; i++) {
        getPt(i, _b);
        let tx: number;
        let tz: number;
        if (i === n - 1) {
          tx = fx;
          tz = fz;
        } else {
          const i0 = i > 0 ? i - 1 : 0;
          const i1 = i + 1;
          getPt(i0, _a);
          getPt(i1, _c);
          tx = _c.x - _a.x;
          tz = _c.z - _a.z;
        }
        const tl = Math.sqrt(tx * tx + tz * tz);
        if (tl < 1e-4) {
          tx = hasPrev ? ptx : fx;
          tz = hasPrev ? ptz : fz;
        } else {
          tx /= tl;
          tz /= tl;
        }
        if (hasPrev && tx * ptx + tz * ptz < 0) {
          tx = ptx;
          tz = ptz;
        }
        ptx = tx;
        ptz = tz;
        hasPrev = true;
        const sx = tz;
        const sz = -tx;

        let w = half;
        const fromTail = _b.s - sTail;
        if (fromTail < 3.0) w *= fromTail / 3.0;

        let y = 0.012 + (_b.s - sTail) * 0.0008;
        const headBlend = 1 - (sTotal - _b.s) / 1.5;
        if (headBlend > 0) y += 0.0035 * headBlend;
        const u = (_b.s - uBase) / uSpan;

        writeVert(vi++, _b.x + sx * w, y, _b.z + sz * w, 0, 1, 0, u, 0, _b.s - uBase);
        writeVert(vi++, _b.x - sx * w, y, _b.z - sz * w, 0, 1, 0, u, 1, _b.s - uBase);
      }

      const yTop = 0.012 + (sTotal - sTail) * 0.0008 + 0.0035;
      const uC = (sTotal - uBase) / uSpan;
      writeVert(vi++, pos.x + sxc * half, yTop, pos.y + szc * half, 0, 1, 0, uC, 0, sTotal - uBase);
      writeVert(vi++, pos.x - sxc * half, yTop, pos.y - szc * half, 0, 1, 0, uC, 1, sTotal - uBase);

      for (let j = 1; j <= CURL_SEG; j++) {
        const th = (j / CURL_SEG) * CURL_MAX;
        const rr = ROLL_R + 0.012;
        const px = pos.x + fx * Math.sin(th) * rr;
        const pz = pos.y + fz * Math.sin(th) * rr;
        const py = yTop + rr * (1 - Math.cos(th));
        const nx = -fx * Math.sin(th);
        const nyv = Math.cos(th);
        const nz = -fz * Math.sin(th);
        const sHere = sTotal + th * ROLL_R;
        const uH = (sHere - uBase) / uSpan;
        writeVert(vi++, px + sxc * half, py, pz + szc * half, nx, nyv, nz, uH, 0, sHere - uBase);
        writeVert(vi++, px - sxc * half, py, pz - szc * half, nx, nyv, nz, uH, 1, sHere - uBase);
      }

      const segs = vi / 2 - 1;
      ribbonGeo.setDrawRange(0, segs * 6);
      ribbonGeo.attributes.position.needsUpdate = true;
      ribbonGeo.attributes.normal.needsUpdate = true;
      ribbonGeo.attributes.uv.needsUpdate = true;
      ribbonGeo.attributes.aS.needsUpdate = true;

      uTailS.value = sTail - uBase;
    }

    const raycaster = new THREE.Raycaster();
    const ndc = new THREE.Vector2(0, 0);
    const floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    const hit = new THREE.Vector3();
    let pointerActive = false;
    let lastPointerT = -1e9;
    let autoAngle = Math.PI * 0.25;

    function onPointer(e: MouseEvent | TouchEvent) {
      let x = 0;
      let y = 0;
      if ('touches' in e && (e as TouchEvent).touches?.length) {
        x = (e as TouchEvent).touches[0].clientX;
        y = (e as TouchEvent).touches[0].clientY;
      } else if ('clientX' in e) {
        x = (e as MouseEvent).clientX;
        y = (e as MouseEvent).clientY;
      }
      if (!x && !y) return;
      ndc.x = (x / window.innerWidth) * 2 - 1;
      ndc.y = -(y / window.innerHeight) * 2 + 1;
      pointerActive = true;
      lastPointerT = performance.now();
    }

    window.addEventListener('pointermove', onPointer, { passive: true });
    window.addEventListener('pointerdown', onPointer, { passive: true });
    window.addEventListener('touchmove', onPointer, { passive: true });
    window.addEventListener('touchstart', onPointer, { passive: true });

    let localPaused = false;
    let downX = 0;
    let downY = 0;
    let downT = 0;

    function handlePointerDown(e: MouseEvent) {
      downX = e.clientX;
      downY = e.clientY;
      downT = performance.now();
    }

    function handlePointerUp(e: MouseEvent) {
      const dx = e.clientX - downX;
      const dy = e.clientY - downY;
      if (dx * dx + dy * dy < 64 && performance.now() - downT < 450) {
        localPaused = !localPaused;
        setIsPaused(localPaused);
        if (localPaused) {
          setHintText('Paused — click anywhere to resume');
          setShowHint(true);
        } else {
          setHintText('Rolling — click to pause');
          setShowHint(true);
        }
      }
    }

    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    window.addEventListener('pointerup', handlePointerUp, { passive: true });

    function updateTarget(t: number, dt: number) {
      const idle = performance.now() - lastPointerT > 3200;
      if (pointerActive && !idle) {
        raycaster.setFromCamera(ndc, camera);
        if (raycaster.ray.intersectPlane(floorPlane, hit)) {
          target.set(hit.x, hit.z);
        }
      } else {
        autoAngle +=
          dt *
          (0.34 +
            0.5 * Math.sin(t * 0.31) +
            0.3 * Math.sin(t * 0.113 + 2.1));
        target.set(
          pos.x + Math.sin(autoAngle) * 5.2,
          pos.y + Math.cos(autoAngle) * 5.2
        );
      }
    }

    const camOffset = new THREE.Vector3(7.6, 8.8, 10.8);
    const camPos = new THREE.Vector3();
    const lookAt = new THREE.Vector3(0, 0.6, 0);
    const _desired = new THREE.Vector3();
    const intro = { zoom: 1.5 };

    function updateCamera(dt: number) {
      _desired.set(pos.x, 0, pos.y).addScaledVector(camOffset, intro.zoom);
      const k = 1 - Math.exp(-2.6 * dt);
      camPos.lerp(_desired, k);
      _desired.set(pos.x, 0.55, pos.y);
      lookAt.lerp(_desired, k);
      camera.position.copy(camPos);
      camera.lookAt(lookAt);
    }

    let lastPrinted = -1;
    function updateHUD() {
      const printed = Math.floor(sTotal / CARD_LEN);
      if (printed !== lastPrinted) {
        lastPrinted = printed;
        setPagesPrinted(printed);
      }
      const frac = (sTotal % CARD_LEN) / CARD_LEN;
      setMeterProgress(frac * 100);
    }

    (function preroll() {
      let t0 = 0;
      for (let i = 0; i < 560; i++) {
        t0 += 1 / 60;
        autoAngle +=
          (1 / 60) *
          (0.34 +
            0.5 * Math.sin(t0 * 0.31) +
            0.3 * Math.sin(t0 * 0.113 + 2.1));
        target.set(
          pos.x + Math.sin(autoAngle) * 5.2,
          pos.y + Math.cos(autoAngle) * 5.2
        );
        stepMotion(1 / 60);
      }
      camPos.set(pos.x, 0, pos.y).addScaledVector(camOffset, intro.zoom);
      lookAt.set(pos.x, 0.55, pos.y);
    })();

    const clock = new THREE.Clock();
    let elapsed = 0;
    let animFrameId = 0;

    function frame() {
      animFrameId = requestAnimationFrame(frame);
      const dt = Math.min(clock.getDelta(), 1 / 30);
      elapsed += dt;

      if (!localPaused) {
        updateTarget(elapsed, dt);
        stepMotion(dt);

        rollGroup.position.set(pos.x, ROLL_R, pos.y);
        rollGroup.rotation.y = yaw;
        spinner.rotation.x = (sTotal % REV) / ROLL_R;

        rebuildRibbon();

        blob.position.set(pos.x, 0.006, pos.y);
        blob.rotation.z = yaw - Math.PI / 2;

        floor.position.set(pos.x, 0, pos.y);
        sun.position.set(pos.x + 5, 10, pos.y + 4);
        sun.target.position.set(pos.x, 0, pos.y);
      }

      updateCamera(dt);
      updateHUD();

      renderer?.render(scene, camera);
    }

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer?.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    if (gsap) {
      gsap.to(intro, { zoom: 1, duration: 2.2, ease: 'power3.out' });
    }

    frame();

    engineRef.current = {
      setPaused: (p: boolean) => {
        localPaused = p;
        setIsPaused(p);
      },
      updateAtlasImage: (url: string) => {
        loadedHeroImg.src = url;
      },
    };

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', onPointer);
      window.removeEventListener('pointerdown', onPointer);
      window.removeEventListener('touchmove', onPointer);
      window.removeEventListener('touchstart', onPointer);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      renderer?.dispose();
    };
  }, []);

  const handleApplyUnsplash = (url: string) => {
    setHeroImageUrl(url);
    if (engineRef.current) {
      engineRef.current.updateAtlasImage(url);
    }
  };

  const pad4 = (num: number) => String(num).padStart(4, '0');

  return (
    <div ref={containerRef} style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      <canvas id="stage" ref={canvasRef} />

      <div className="hud" id="brand" style={{ opacity: 1 }}>
        <div className="mark">
          VX<sup>®</sup>
        </div>
        <div className="sub">Press Division</div>
      </div>

      <div className="hud" id="edition" style={{ opacity: 1 }}>
        Selected works
        <br />
        <b>Edition {edition}</b>
      </div>

      <div className="hud" id="counter" style={{ opacity: 1 }}>
        <div className="num" id="counterNum">
          {pad4(pagesPrinted)}
        </div>
        <div className="lbl">Pages printed</div>
      </div>

      <div className="hud" id="meter" style={{ opacity: 1 }}>
        <div className="fill" id="meterFill" style={{ width: `${meterProgress.toFixed(1)}%` }} />
      </div>

      {showHint && (
        <div className="hud" id="hint" style={{ opacity: 1, display: 'flex' }}>
          <div className="dot" style={{ background: isPaused ? '#aa3bff' : '#e4551f' }} />
          <span id="hintText">{hintText}</span>
        </div>
      )}

    </div>
  );
};

export const Hero2: React.FC = () => {
  return <PrintingRoll />;
};

export default Hero2;
