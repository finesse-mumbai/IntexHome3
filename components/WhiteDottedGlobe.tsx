import React, { useEffect, useRef } from 'react';

export type CountryKey = 'bangladesh' | 'srilanka' | 'india' | 'indonesia';

interface WhiteDottedGlobeProps {
  activeCountry: CountryKey;
  className?: string;
  size?: number;
}

// Natural Earth 110m real-world continent landmask (1.2KB Base64 PNG)
const REAL_WORLD_MAP_BASE64 =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAACAAQAAAADMzoqnAAAECklEQVR42u3VsW4jRRzH8d94gzfF4Q0VQaC4vBLTRTp0mze4ggfAPAE5XQEFsGNAVIjwBrmW7h7gJE+giKjyABTZE4g06LKJETdRJvtD65kdz6yduKABiW+TVfzRf2bXYxtcE/59YJCz6YdbgQF6ACSRrwYKYImmh5PbwOewlV3wlQNbAN6SEExjUOO+BU0aCSnxReHABUlK4YFQeJeUT3da8IIkZ6NGoSnFY5KsMoVzMKfECUnqxgPYRArarmUCndHwzIEaQEpg5xVdBXROl8mpAQx5dUgPiHoYAAkg5w3JABR06byGAVgcRGAz5bznj6phBQNRFwyqgdxebH6gshJAesWoFhgYpApAFoG8BIZ/fEhSox5jDjQXmV0Ar5XJfAIrALi3URVs09gHIL4XJCkLC5LH9JWiArABFCSrQjdgkBzRJ0WJeUOSNyQAfJJwUSWUBRlJQ8oGHATACGlBynnzy2kEYLNjrxouigD8BZcgOeVPqh12RtufaCN5wCPVDpvQ9lsIrqndsJtDcWqBCpf4hWN7OdWHBw58FwIaNOU/n1TpMW2DFaD48cmr4185T8NHkpUFX749pQPVdgRKC/DGoQPVeAEKv+WHvY8OOWNTPRp5kHuwSf8wzXtVBKR7YwEH9H3lQUaypUfSATOALyVNu5vZJW31Bnx98nkLfDUWJaz6ixvm+RIQRdl3kmRxxiaDoGnZW4CpPfkaQadlcPim1xOSvETQo7Lv75enVAXJ3xGUlony4KQBBWUM1NiDc6qhyS8RgQs18OCMMtPDaAUIyg0PZkRWDqs+wnKJBTDI1Js6BolegOsKmUxNDBAAKqQyMQmidhegBlLZ+wwKYdv5M/8x1khkb1cgKqP2H+MKyV5vS+whrE8DQDgAlUAoRBX056EElJCjJVACeJBZgNfVp+iCCm4RBWCgKsRxASSA9KgDhDtCiTuMyfHsKXzhC6wNAIjjWb8LKAOA2ctk3FmCOlgKFy8f1N0JJtgsxinYnVAHt4t3gPzZXSCTyCWCQmBT91QE3B5yarSN40dNHYPka4TlDhTUI8zLvl0JSL3vZn6DsCFZOeB2yROEpR68sECQQA++xIGCR2X7DwlEoLRgUrZrqlUg50S1uy43YqDcN6UFBVkhAjWiCV2Q0jgQPdplMKxvBXodcOfAwJYvgdL+1etA1YJJfBcZlQV7sO1i2gHoNiyxtQ5sBsCgWyoxCHiFFd2L5nUTCqMAqGUgsQ9f5kCcCiZgRYkMgMTd5WsB1rTzj0Em14BE4r+QxN1lCEsVur2PoF5Wbg8RJXR4djgvBgauhLywoEZQrt1KKRdVS4CdlJ8qafyP+9KIj/nE/d7kKwH9jgS72e9DV+kvfTWgct4ZyP8Byb8BPG7MaaIIkAQAAAAASUVORK5CYII=";

export const WhiteDottedGlobe: React.FC<WhiteDottedGlobeProps> = ({ activeCountry, className, size = 320 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const beaconRef = useRef<HTMLDivElement>(null);

  const targetRotationY = useRef<number>(-1.58);
  const currentRotationY = useRef<number>(-1.58);
  const aligningRef = useRef<boolean>(false);
  const alignTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isDraggingRef = useRef<boolean>(false);
  const prevMouseXRef = useRef<number>(0);
  const dragVelocityRef = useRef<number>(0);
  const activeCountryRef = useRef<CountryKey>(activeCountry);

  // Smooth alignment when activeCountry changes
  useEffect(() => {
    activeCountryRef.current = activeCountry;
    const targets: Record<CountryKey, number> = {
      bangladesh: -1.58,
      india: -1.38,
      srilanka: -1.41,
      indonesia: -1.86,
    };
    targetRotationY.current = targets[activeCountry] ?? -1.58;
    aligningRef.current = true;

    if (alignTimeoutRef.current) clearTimeout(alignTimeoutRef.current);
    alignTimeoutRef.current = setTimeout(() => {
      aligningRef.current = false;
    }, 2400);

    return () => {
      if (alignTimeoutRef.current) clearTimeout(alignTimeoutRef.current);
    };
  }, [activeCountry]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const gl = canvas.getContext('webgl', { alpha: true, antialias: true });
    if (!gl) return;

    // ── Vertex Shader with Earth's 23.4° Axial Tilt ──────────────────
    const vsSource = `
      attribute vec3 a_pos;
      attribute vec3 a_col;
      attribute float a_sz;

      uniform vec2 u_rot;   // y = polar spin angle
      uniform vec2 u_tilt;  // x = tiltX, y = tiltZ
      uniform float u_scale;
      uniform float u_dpr;

      varying vec3 v_col;
      varying float v_depth;

      void main() {
        // 1. Polar spin around Y (West to East)
        float cy = cos(u_rot.y);
        float sy = sin(u_rot.y);
        float x1 = cy * a_pos.x + sy * a_pos.z;
        float z1 = -sy * a_pos.x + cy * a_pos.z;
        float y1 = a_pos.y;

        // 2. Earth authentic axial tilt (~23.4°)
        float cz = cos(u_tilt.y);
        float sz = sin(u_tilt.y);
        float x2 = cz * x1 - sz * y1;
        float y2 = sz * x1 + cz * y1;

        float cx = cos(u_tilt.x);
        float sx = sin(u_tilt.x);
        float y3 = cx * y2 - sx * z1;
        float z3 = sx * y2 + cx * z1;

        // Perspective projection
        float dist = 2.5;
        float pz = z3 + dist;
        float invZ = 1.0 / pz;

        // Guaranteed 1:1 circular projection
        gl_Position = vec4(x2 * u_scale * invZ, y3 * u_scale * invZ, (pz - 1.0) / 4.0, 1.0);

        v_col = a_col;
        v_depth = z3;
        gl_PointSize = a_sz * u_dpr * (invZ * 2.5);
      }
    `;

    // ── Fragment Shader for Crisp Anti-Aliased Dots ───────────────────
    const fsSource = `
      precision mediump float;
      varying vec3 v_col;
      varying float v_depth;

      void main() {
        // Discard back-facing hemisphere dots (clean white ocean sphere behind)
        if (v_depth < -0.02) {
          discard;
        }

        // Circular dot shape
        vec2 p = gl_PointCoord - vec2(0.5);
        float d = length(p);
        if (d > 0.5) {
          discard;
        }

        float alpha = smoothstep(0.5, 0.35, d);
        // Subtle depth fade at sphere horizon
        float depthFade = smoothstep(-0.02, 0.85, v_depth);
        alpha *= (0.4 + 0.6 * depthFade);

        gl_FragColor = vec4(v_col, alpha * 0.96);
      }
    `;

    const compileShader = (src: string, type: number) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };

    const program = gl.createProgram()!;
    gl.attachShader(program, compileShader(vsSource, gl.VERTEX_SHADER));
    gl.attachShader(program, compileShader(fsSource, gl.FRAGMENT_SHADER));
    gl.linkProgram(program);
    gl.useProgram(program);

    const uRotLoc = gl.getUniformLocation(program, 'u_rot');
    const uTiltLoc = gl.getUniformLocation(program, 'u_tilt');
    const uScaleLoc = gl.getUniformLocation(program, 'u_scale');
    const uDprLoc = gl.getUniformLocation(program, 'u_dpr');

    let pointCount = 0;
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

    const stride = 7 * 4;
    const aPosLoc = gl.getAttribLocation(program, 'a_pos');
    const aColLoc = gl.getAttribLocation(program, 'a_col');
    const aSzLoc = gl.getAttribLocation(program, 'a_sz');

    gl.enableVertexAttribArray(aPosLoc);
    gl.vertexAttribPointer(aPosLoc, 3, gl.FLOAT, false, stride, 0);

    gl.enableVertexAttribArray(aColLoc);
    gl.vertexAttribPointer(aColLoc, 3, gl.FLOAT, false, stride, 3 * 4);

    gl.enableVertexAttribArray(aSzLoc);
    gl.vertexAttribPointer(aSzLoc, 1, gl.FLOAT, false, stride, 6 * 4);

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.clearColor(0, 0, 0, 0);

    // ── Sample Real Earth Landmask into Fibonacci Sphere Points ───────
    const buildRealEarthPoints = (img: HTMLImageElement) => {
      const maskCanvas = document.createElement('canvas');
      maskCanvas.width = 256;
      maskCanvas.height = 128;
      const mctx = maskCanvas.getContext('2d', { willReadFrequently: true })!;
      mctx.drawImage(img, 0, 0);
      const imgData = mctx.getImageData(0, 0, 256, 128).data;

      const NUM_SAMPLES = 15000;
      const vertexData: number[] = [];

      const isSouthAsia = (lat: number, lon: number) => {
        return lat >= 5 && lat <= 32 && lon >= 66 && lon <= 94;
      };

      for (let i = 0; i < NUM_SAMPLES; i++) {
        const phi = Math.acos(1 - 2 * (i + 0.5) / NUM_SAMPLES);
        const theta = Math.PI * (1 + Math.sqrt(5)) * i;

        const lat = 90 - (phi * 180 / Math.PI);
        let lon = ((theta * 180 / Math.PI) % 360) - 180;
        if (lon < -180) lon += 360;

        // Equirectangular sampling of Natural Earth coastline map
        const x = Math.min(255, Math.max(0, Math.floor(((lon + 180) / 360) * 256)));
        const y = Math.min(127, Math.max(0, Math.floor(((90 - lat) / 180) * 128)));
        const pixelVal = imgData[(y * 256 + x) * 4];

        // Only REAL LAND gets dots! Ocean (pixelVal == 0) remains EMPTY WHITE SPACE!
        if (pixelVal > 25) {
          const radTheta = lon * (Math.PI / 180);
          const px = Math.sin(phi) * Math.sin(radTheta);
          const py = Math.cos(phi);
          const pz = Math.sin(phi) * Math.cos(radTheta);

          if (isSouthAsia(lat, lon)) {
            // Emerald Green for INTEX South Asia
            vertexData.push(px, py, pz, 0.08, 0.65, 0.28, 4.2);
          } else {
            // Crisp Charcoal / Slate dots on the White Globe
            vertexData.push(px, py, pz, 0.16, 0.17, 0.22, 3.2);
          }
        }
      }

      // Add green connecting trade arcs between Delhi -> Dhaka, Delhi -> Colombo, Dhaka -> Colombo
      const createArcPoints = (lat1: number, lon1: number, lat2: number, lon2: number, count = 28) => {
        for (let s = 0; s <= count; s++) {
          const t = s / count;
          const curLat = lat1 + (lat2 - lat1) * t;
          const curLon = lon1 + (lon2 - lon1) * t;
          const elevation = 1.0 + Math.sin(t * Math.PI) * 0.045;
          const phi = (90 - curLat) * (Math.PI / 180);
          const radTheta = curLon * (Math.PI / 180);
          const px = Math.sin(phi) * Math.sin(radTheta) * elevation;
          const py = Math.cos(phi) * elevation;
          const pz = Math.sin(phi) * Math.cos(radTheta) * elevation;
          vertexData.push(px, py, pz, 0.12, 0.72, 0.32, 2.6);
        }
      };

      createArcPoints(28.6, 77.2, 23.8, 90.4); // Delhi to Dhaka
      createArcPoints(28.6, 77.2, 6.9, 79.9);  // Delhi to Colombo
      createArcPoints(23.8, 90.4, 6.9, 79.9);  // Dhaka to Colombo
      createArcPoints(23.8, 90.4, -6.2, 106.8); // Dhaka to Jakarta
      createArcPoints(6.9, 79.9, -6.2, 106.8);  // Colombo to Jakarta

      pointCount = vertexData.length / 7;
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData), gl.STATIC_DRAW);
    };

    const landImg = new Image();
    landImg.src = REAL_WORLD_MAP_BASE64;
    if (landImg.complete) {
      buildRealEarthPoints(landImg);
    } else {
      landImg.onload = () => buildRealEarthPoints(landImg);
    }

    // ── Mouse & Touch Drag ───────────────────────────────────────────
    const onMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      prevMouseXRef.current = e.clientX;
      dragVelocityRef.current = 0;
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const deltaX = e.clientX - prevMouseXRef.current;
      prevMouseXRef.current = e.clientX;
      const step = deltaX * 0.007;
      currentRotationY.current += step;
      dragVelocityRef.current = step;
    };
    const onMouseUp = () => {
      isDraggingRef.current = false;
    };

    let touchStartX = 0;
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        isDraggingRef.current = true;
        touchStartX = e.touches[0].clientX;
        dragVelocityRef.current = 0;
      }
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current || e.touches.length === 0) return;
      const deltaX = e.touches[0].clientX - touchStartX;
      touchStartX = e.touches[0].clientX;
      const step = deltaX * 0.007;
      currentRotationY.current += step;
      dragVelocityRef.current = step;
    };
    const onTouchEnd = () => {
      isDraggingRef.current = false;
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // ── Render Loop & Guaranteed 1:1 Aspect Ratio ────────────────────
    let animId = 0;
    const tiltX = -0.24; // Elevate South Asia / highlighted part into upper visible hemisphere
    const tiltZ = -0.06; // Authentic Earth lateral tilt

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = size * dpr;
      canvas.height = size * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform1f(uDprLoc, dpr);
      gl.uniform1f(uScaleLoc, 2.35); // 1:1 circular scale
    };

    resize();
    window.addEventListener('resize', resize);

    const getCountryCoords = (c: CountryKey) => {
      switch (c) {
        case 'bangladesh': return { lat: 23.8, lon: 90.4 };
        case 'srilanka': return { lat: 7.8, lon: 80.7 };
        case 'india': return { lat: 20.6, lon: 78.9 };
        case 'indonesia': return { lat: -6.2, lon: 106.8 };
      }
    };

    const render = () => {
      animId = requestAnimationFrame(render);

      // Continuous Earth rotation (West to East) + smooth alignment
      if (!isDraggingRef.current) {
        if (aligningRef.current) {
          const diff = targetRotationY.current - currentRotationY.current;
          const normalizedDiff = Math.atan2(Math.sin(diff), Math.cos(diff));
          currentRotationY.current += normalizedDiff * 0.055;
        } else {
          // Earth continuously spins West-to-East with slight inertia damping
          currentRotationY.current += 0.003 + dragVelocityRef.current;
          dragVelocityRef.current *= 0.92;
        }
      }

      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform2f(uRotLoc, 0.0, currentRotationY.current);
      gl.uniform2f(uTiltLoc, tiltX, tiltZ);
      if (pointCount > 0) {
        gl.drawArrays(gl.POINTS, 0, pointCount);
      }

      // ── Update 3D Beacon for Active Country ────────────────────────
      if (beaconRef.current) {
        const { lat, lon } = getCountryCoords(activeCountryRef.current);
        const phi = (90 - lat) * (Math.PI / 180);
        const radTheta = lon * (Math.PI / 180);

        const px = Math.sin(phi) * Math.sin(radTheta);
        const py = Math.cos(phi);
        const pz = Math.sin(phi) * Math.cos(radTheta);

        const cy = Math.cos(currentRotationY.current);
        const sy = Math.sin(currentRotationY.current);

        const x1 = cy * px + sy * pz;
        const z1 = -sy * px + cy * pz;
        const y1 = py;

        const cz = Math.cos(tiltZ);
        const sz = Math.sin(tiltZ);
        const x2 = cz * x1 - sz * y1;
        const y2 = sz * x1 + cz * y1;

        const cx = Math.cos(tiltX);
        const sx = Math.sin(tiltX);
        const y3 = cx * y2 - sx * z1;
        const z3 = sx * y2 + cx * z1;

        if (z3 > 0.02) {
          const dist = 2.5;
          const invZ = 1.0 / (z3 + dist);
          const sxNorm = x2 * 2.35 * invZ;
          const syNorm = y3 * 2.35 * invZ;

          const screenX = (sxNorm * 0.5 + 0.5) * size;
          const screenY = (-syNorm * 0.5 + 0.5) * size;

          beaconRef.current.style.display = 'block';
          beaconRef.current.style.transform = `translate(${screenX}px, ${screenY}px)`;
          const edgeFade = Math.min(1, Math.max(0, (z3 - 0.02) / 0.22));
          beaconRef.current.style.opacity = edgeFade.toString();
        } else {
          beaconRef.current.style.display = 'none';
        }
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', resize);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
    };
  }, [size]);

  return (
    <div
      className={`select-none ${className || ''}`}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* ── 3D Illuminated White Spherical Globe Body (Empty White Space = Oceans) ── */}
      <div
        ref={containerRef}
        className="cursor-grab active:cursor-grabbing"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '50%',
          position: 'relative',
          // 3D Spherical white ocean curvature shading: light source from top-left, soft curvature towards right-bottom
          background: 'radial-gradient(circle at 36% 28%, #ffffff 0%, #f9fafb 42%, #e5e7eb 78%, #d1d5db 100%)',
          boxShadow: '0 20px 48px -10px rgba(0, 0, 0, 0.16), inset -10px -12px 26px rgba(0, 0, 0, 0.09), inset 6px 6px 14px rgba(255, 255, 255, 0.95)',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Subtle Atmospheric Halo Glow around White Globe */}
        <div
          style={{
            position: 'absolute',
            inset: '-1px',
            borderRadius: '50%',
            border: '1.5px solid rgba(255, 255, 255, 0.8)',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />

        {/* WebGL Canvas rendering the rotating continent dots and arcs (Oceans are empty space) */}
        <canvas
          ref={canvasRef}
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
            position: 'relative',
            zIndex: 3,
          }}
        />

        {/* 3D Projected Pulsing Beacon tracking the active country */}
        <div
          ref={beaconRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '0px',
            height: '0px',
            pointerEvents: 'none',
            zIndex: 10,
            display: 'none',
          }}
        >
          <div style={{ position: 'relative', width: '22px', height: '22px', margin: '-11px 0 0 -11px' }}>
            <div
              className="animate-ping"
              style={{
                position: 'absolute',
                inset: '2px',
                borderRadius: '50%',
                border: '2px solid #16a34a',
                opacity: 0.8,
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: '6px',
                borderRadius: '50%',
                backgroundColor: '#15803d',
                border: '1.5px solid #ffffff',
                boxShadow: '0 0 8px rgba(22, 163, 74, 0.7)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhiteDottedGlobe;
