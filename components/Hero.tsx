import React, { useState, useRef, useEffect } from 'react';
import { WhiteDottedGlobe } from './WhiteDottedGlobe';

const slides = [
  '/assets/Web Banner-01.png',
  '/assets/Web Banner-02.png',
  '/assets/Web Banner-03.png',
];

// ── Cinematic Strip Wipe Transition Config ─────────────────────────────────
const NUM_STRIPS = 9;    // 9 horizontal strips = ultra-cinematic
const STRIP_MS = 650;    // each strip's slide duration
const STAGGER_MS = 140;  // gap/delay between boxes as they appear and disappear
const SLIDE_INTERVAL = 13000; // 13s delay between slides
const PAINT_BUFFER = 160; // delay between boxes appearing (covered) and disappearing (revealed)

const COVER_MS = STAGGER_MS * (NUM_STRIPS - 1) + STRIP_MS;
const REVEAL_MS = COVER_MS;                                  // 1240ms

type StripPhase = 'idle' | 'covering' | 'revealing';

type CountryKey = 'bangladesh' | 'srilanka' | 'india' | 'indonesia';

interface CountryEventInfo {
  showName: string;
  dates: string;
  monthYear: string;
  venue: string;
  marker: { cx: number; cy: number };
}

const COUNTRY_DATA: Record<CountryKey, CountryEventInfo> = {
  bangladesh: {
    showName: 'INTEX BANGLADESH',
    dates: '22-23-24',
    monthYear: 'JUNE 2027',
    venue: 'ICCB, DHAKA',
    marker: { cx: 128, cy: 116 },
  },
  srilanka: {
    showName: 'INTEX SRI LANKA',
    dates: '05-06-07',
    monthYear: 'AUGUST 2026',
    venue: 'BMICH, COLOMBO',
    marker: { cx: 109, cy: 160 },
  },
  india: {
    showName: 'INTEX INDIA',
    dates: '03-04-05',
    monthYear: 'DECEMBER 2026',
    venue: 'IICC, NEW DELHI',
    marker: { cx: 106, cy: 122 },
  },
  indonesia: {
    showName: 'INTEX INDONESIA',
    dates: '1ST EDITION',
    monthYear: 'ANNOUNCING SOON',
    venue: 'JAKARTA, INDONESIA',
    marker: { cx: 160, cy: 150 },
  },
};

const Hero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState<CountryKey>('bangladesh');
  const [stripPhase, setStripPhase] = useState<StripPhase>('idle');
  const [wipeDirection, setWipeDirection] = useState<'down' | 'up'>('down');
  const [isPaused, setIsPaused] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const isTransitioningRef = useRef(false);
  const currentSlideRef = useRef(0);
  const wipeDirRef = useRef<'down' | 'up'>('down');
  const t1Ref = useRef<ReturnType<typeof setTimeout> | null>(null);
  const t2Ref = useRef<ReturnType<typeof setTimeout> | null>(null);
  const safetyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* ── CINEMATIC STRIP WIPE TRANSITION ──────────────────────────────────
     Step 1: Strips cover  (COVER_MS)    — vertical columns enter (top-down or bottom-up)
     Step 2: Image swaps   (+0ms)        — silently under full coverage
     Step 3: Paint buffer  (PAINT_BUFFER)— React flushes new image to DOM
     Step 4: Strips reveal (REVEAL_MS)   — columns exit to reveal new slide
     Step 5: Reset idle                  — columns snap back off-screen   */
  const triggerTransition = (nextSlide: number) => {
    if (isTransitioningRef.current || nextSlide === currentSlideRef.current) return;
    isTransitioningRef.current = true;

    // Alternate direction between top-to-bottom and bottom-to-top
    const nextDir = wipeDirRef.current === 'down' ? 'up' : 'down';
    wipeDirRef.current = nextDir;
    setWipeDirection(nextDir);

    // Step 1 — cover screen
    setStripPhase('covering');

    if (t1Ref.current) clearTimeout(t1Ref.current);
    if (t2Ref.current) clearTimeout(t2Ref.current);
    if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);

    t1Ref.current = setTimeout(() => {
      // Step 2 — swap image silently under full black coverage
      currentSlideRef.current = nextSlide;
      setCurrentSlide(nextSlide);

      t2Ref.current = setTimeout(() => {
        // Step 4 — reveal new slide
        setStripPhase('revealing');

        setTimeout(() => {
          // Step 5 — reset to idle
          setStripPhase('idle');
          isTransitioningRef.current = false;
        }, REVEAL_MS + 40);

      }, PAINT_BUFFER);

    }, COVER_MS + 40);

    // Safety fallback: prevents screen from EVER sticking in black state
    safetyTimeoutRef.current = setTimeout(() => {
      setStripPhase('idle');
      isTransitioningRef.current = false;
    }, COVER_MS + PAINT_BUFFER + REVEAL_MS + 300);
  };

  /* ── AUTO-ADVANCE SLIDER (Decoupled from transition, pauses cleanly on card hover) ── */
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      const next = (currentSlideRef.current + 1) % slides.length;
      triggerTransition(next);
    }, SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    if (isTransitioningRef.current || index === currentSlideRef.current) return;
    triggerTransition(index);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden selection:bg-archive-clay selection:text-white">

      {/* ── CSS KEYFRAMES ── */}
      <style>{`
        @keyframes slideUpLeft {
          from { transform: translateX(-60px) translateY(50px); opacity: 0; }
          to   { transform: translateX(0)     translateY(0);    opacity: 1; }
        }
        @keyframes slideUpRight {
          from { transform: translateX(60px)  translateY(50px); opacity: 0; }
          to   { transform: translateX(0)     translateY(0);    opacity: 1; }
        }
        @keyframes growDotLine {
          from { opacity: 0; transform: scaleX(0); }
          to   { opacity: 1; transform: scaleX(1); }
        }
        @keyframes fadeInSlideRight {
          from { transform: translateX(50px); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
        @keyframes expandLine {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes spinOrbit {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>

      {/* ── BACKGROUND VIDEO ── */}
      <video
        ref={videoRef}
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src="/assets/website video intex  Copy 03.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* ── BLACK OVERLAY ON VIDEO ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: 'rgba(0,0,0,0.75)', zIndex: 5 }}
      />

      {/* ── CURRENT SLIDE IMAGE ──
          mix-blend-mode:screen → white stays white, text/graphics reveal video. */}
      <img
        key={currentSlide}
        src={slides[currentSlide]}
        alt={`slide ${currentSlide + 1}`}
        style={{
          position: 'absolute', top: 0, left: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          mixBlendMode: 'screen',
          pointerEvents: 'none',
          zIndex: 10,
        }}
      />

      {/* ── SLIDE 1 TEXT OVERLAY: "of ··· Exhibition" ──
          "of"         ← slides up from bottom-left
          dotted line  ─ grows from centre outward
          "Exhibition" → slides up from bottom-right
          Positioned at 10% from the bottom of the viewport.              */}
      {currentSlide === 0 && (
        <div
          key={`s1-text-${currentSlide}`}
          style={{
            position: 'absolute',
            bottom: '12%',
            left: '8%',
            right: '12%',
            display: 'flex',
            alignItems: 'center',
            zIndex: 15,
            pointerEvents: 'none',
            overflow: 'hidden',
          }}
        >
          {/* "of" — slides up from bottom-left */}
          <span
            style={{
              color: '#000000',
              fontSize: 'clamp(1.3rem, 1.8vw, 1.85rem)',
              fontWeight: 800,
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '0.04em',
              whiteSpace: 'nowrap',
              animation: 'slideUpLeft 0.9s cubic-bezier(0.22,1,0.36,1) 0.3s both',
            }}
          >
            of
          </span>

          {/* Dotted line — grows from centre */}
          <div
            style={{
              flex: 1,
              height: '2px',
              margin: '0 18px',
              backgroundImage: 'radial-gradient(circle, #000000 1.5px, transparent 1.5px)',
              backgroundSize: '12px 2px',
              backgroundRepeat: 'repeat-x',
              backgroundPosition: 'center',
              transformOrigin: 'center',
              animation: 'growDotLine 1s cubic-bezier(0.22,1,0.36,1) 0.5s both',
            }}
          />

          {/* "Exhibition" — slides up from bottom-right */}
          <span
            style={{
              color: '#000000',
              fontSize: 'clamp(1.3rem, 1.8vw, 1.85rem)',
              fontWeight: 800,
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '0.04em',
              whiteSpace: 'nowrap',
              animation: 'slideUpRight 0.9s cubic-bezier(0.22,1,0.36,1) 0.3s both',
            }}
          >
            Exhibition
          </span>
        </div>
      )}

      {/* ── SLIDE 2 OVERLAY: Globe Box + BANGLADESH / SRI LANKA / INDIA (Pre-mounted for instant 0ms load) ── */}
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{
          position: 'absolute',
          top: '18%',
          bottom: '6%',
          right: '6%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          zIndex: 15,
          opacity: currentSlide === 1 ? 1 : 0,
          pointerEvents: currentSlide === 1 ? 'auto' : 'none',
          visibility: currentSlide === 1 ? 'visible' : 'hidden',
          transform: currentSlide === 1 ? 'translateX(0)' : 'translateX(30px)',
          transition: 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), visibility 0.6s',
        }}
      >
        {/* ── GLOBE CARD (WIDTH +20%, HEIGHT +10%, 50% GLOBE AT BOTTOM) ── */}
        <div
          style={{
            width: 'clamp(288px, 25.2vw, 366px)',
            minHeight: 'clamp(418px, 47.3vh, 506px)',
            backgroundColor: 'rgba(248, 248, 248, 1)',
            borderRadius: '26px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 20px 40px -12px rgba(0,0,0,0.12)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {/* Card text with Show Name */}
          <div style={{ padding: '26px 26px 6px 26px' }}>
            {/* Show Name badge */}
            <div
              style={{
                fontSize: 'clamp(0.72rem, 0.88vw, 0.92rem)',
                fontWeight: 300,
                color: '#15803d',
                textTransform: 'uppercase',
                marginBottom: '8px',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              {COUNTRY_DATA[selectedCountry].showName}
            </div>

            {/* Dates & Month */}
            <div
              style={{
                fontSize: 'clamp(1.6rem, 2.15vw, 2.2rem)',
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                color: '#000000',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              {COUNTRY_DATA[selectedCountry].dates}
            </div>
            <div
              style={{
                fontSize: 'clamp(1.6rem, 2.15vw, 2.2rem)',
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                color: '#000000',
                fontFamily: 'Inter, sans-serif',
                marginTop: '2px',
              }}
            >
              {COUNTRY_DATA[selectedCountry].monthYear}
            </div>

            {/* Venue */}
            <div
              style={{
                fontSize: 'clamp(0.75rem, 0.9vw, 0.95rem)',
                fontWeight: 600,
                letterSpacing: '0.05em',
                color: '#374151',
                textTransform: 'uppercase',
                marginTop: '8px',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              {COUNTRY_DATA[selectedCountry].venue}
            </div>
          </div>

          {/* ── 50% Visible Globe Dome (rest 50% hidden in bottom of box) ── */}
          <div
            style={{
              width: '100%',
              height: '190px',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              marginTop: 'auto',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              <WhiteDottedGlobe activeCountry={selectedCountry} size={370} />
            </div>
          </div>
        </div>

        {/* ── COUNTRIES & CONNECTING LINES (Covers top-to-bottom layout) ── */}
        <div
          style={{
            width: 'clamp(380px, 44vw, 560px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            gap: 'clamp(14px, 2.5vh, 26px)',
            paddingBottom: '8px',
          }}
        >
          {/* Row 1: BANGLADESH */}
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <button
              type="button"
              onClick={() => setSelectedCountry('bangladesh')}
              onMouseEnter={() => setSelectedCountry('bangladesh')}
              style={{
                fontSize: 'clamp(1.3rem, 1.8vw, 1.85rem)',
                fontWeight: 800,
                fontFamily: 'Inter, sans-serif',
                color: '#000000',
                letterSpacing: '0.03em',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '2px 0 4px 0',
                transition: 'transform 0.2s ease, opacity 0.2s ease',
                opacity: selectedCountry === 'bangladesh' ? 1 : 0.75,
                transform: selectedCountry === 'bangladesh' ? 'translateX(-2px)' : 'none',
              }}
            >
              BANGLADESH
            </button>
            {/* Horizontal line extending left */}
            <div
              style={{
                width: '165%',
                height: '1.5px',
                backgroundColor: '#000000',
                transformOrigin: 'right',
                animation: 'expandLine 0.8s cubic-bezier(0.22,1,0.36,1) 0.5s both',
              }}
            />
          </div>

          {/* Row 2: SRI LANKA */}
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <button
              type="button"
              onClick={() => setSelectedCountry('srilanka')}
              onMouseEnter={() => setSelectedCountry('srilanka')}
              style={{
                fontSize: 'clamp(1.3rem, 1.8vw, 1.85rem)',
                fontWeight: 800,
                fontFamily: 'Inter, sans-serif',
                color: '#000000',
                letterSpacing: '0.03em',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '2px 0 4px 0',
                transition: 'transform 0.2s ease, opacity 0.2s ease',
                opacity: selectedCountry === 'srilanka' ? 1 : 0.75,
                transform: selectedCountry === 'srilanka' ? 'translateX(-2px)' : 'none',
              }}
            >
              SRI LANKA
            </button>
            {/* Horizontal line extending left */}
            <div
              style={{
                width: '143%',
                height: '1.5px',
                backgroundColor: '#000000',
                transformOrigin: 'right',
                animation: 'expandLine 0.8s cubic-bezier(0.22,1,0.36,1) 0.6s both',
              }}
            />
          </div>

          {/* Row 3: INDIA */}
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <button
              type="button"
              onClick={() => setSelectedCountry('india')}
              onMouseEnter={() => setSelectedCountry('india')}
              style={{
                fontSize: 'clamp(1.3rem, 1.8vw, 1.85rem)',
                fontWeight: 800,
                fontFamily: 'Inter, sans-serif',
                color: '#000000',
                letterSpacing: '0.03em',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '2px 0',
                transition: 'transform 0.2s ease, opacity 0.2s ease',
                opacity: selectedCountry === 'india' ? 1 : 0.75,
                transform: selectedCountry === 'india' ? 'translateX(-2px)' : 'none',
              }}
            >
              INDIA
            </button>
          </div>
        </div>
      </div>

      {/* ── SLIDE 3 OVERLAY: Free-Floating 3D Spherical Globe & ASEAN Orbital Layout (Distinct from Slide 2) ── */}
      {/* 1. Left-to-Center Free-Floating 3D Globe with Orbital Rings & Editorial Badges */}
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{
          position: 'absolute',
          top: '50%',
          left: 'clamp(4%, 7vw, 11%)',
          transform: currentSlide === 2 ? 'translateY(-50%)' : 'translateY(-50%) translateX(-35px)',
          zIndex: 15,
          opacity: currentSlide === 2 ? 1 : 0,
          pointerEvents: currentSlide === 2 ? 'auto' : 'none',
          visibility: currentSlide === 2 ? 'visible' : 'hidden',
          transition: 'opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1), visibility 0.7s',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Top Floating Pill Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '7px 18px',
            borderRadius: '999px',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            boxShadow: '0 6px 20px -4px rgba(0, 0, 0, 0.08)',
            marginBottom: '16px',
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#15803d',
              boxShadow: '0 0 8px rgba(21, 128, 61, 0.7)',
              display: 'inline-block',
            }}
          />
          <span
            style={{
              fontSize: 'clamp(0.7rem, 0.82vw, 0.85rem)',
              fontWeight: 700,
              letterSpacing: '0.08em',
              color: '#15803d',
              textTransform: 'uppercase',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            EXPANDING INTO ASEAN · 1ST EDITION
          </span>
        </div>

        {/* ── Full Spherical 3D Globe with Orbital Radar Rings ── */}
        <div
          style={{
            position: 'relative',
            width: 'clamp(300px, 28vw, 390px)',
            height: 'clamp(300px, 28vw, 390px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Outer Dashed Orbit Ring */}
          <div
            style={{
              position: 'absolute',
              inset: '-22px',
              borderRadius: '50%',
              border: '1px dashed rgba(0, 0, 0, 0.16)',
              pointerEvents: 'none',
              animation: 'spinOrbit 80s linear infinite',
            }}
          />

          {/* Inner Accent Ring */}
          <div
            style={{
              position: 'absolute',
              inset: '-8px',
              borderRadius: '50%',
              border: '1px solid rgba(238, 117, 57, 0.3)',
              pointerEvents: 'none',
            }}
          />

          {/* Coordinate Marks at Cardinal Points */}
          <div
            style={{
              position: 'absolute',
              top: '-34px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '10px',
              fontWeight: 700,
              color: 'rgba(0, 0, 0, 0.4)',
              fontFamily: 'Inter, monospace',
              letterSpacing: '0.1em',
              pointerEvents: 'none',
            }}
          >
            LAT -6.2° S
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: '-34px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '10px',
              fontWeight: 700,
              color: 'rgba(0, 0, 0, 0.4)',
              fontFamily: 'Inter, monospace',
              letterSpacing: '0.1em',
              pointerEvents: 'none',
            }}
          >
            LON 106.8° E
          </div>

          {/* The 3D Dotted Globe (Full 360° Sphere, not cropped) */}
          <WhiteDottedGlobe activeCountry="indonesia" size={380} />
        </div>

        {/* Bottom Floating Info Tag */}
        <div
          style={{
            marginTop: '16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: 'clamp(1.3rem, 1.7vw, 1.85rem)',
              fontWeight: 800,
              fontFamily: 'Inter, sans-serif',
              color: '#000000',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            INTEX INDONESIA
          </div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: 'clamp(0.72rem, 0.85vw, 0.88rem)',
              fontWeight: 600,
              letterSpacing: '0.06em',
              color: '#4b5563',
              textTransform: 'uppercase',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            <span>JAKARTA</span>
            <span style={{ color: '#d1d5db' }}>•</span>
            <span style={{ color: '#EE7539', fontWeight: 700 }}>DATES ANNOUNCING SOON</span>
          </div>
        </div>
      </div>

      {/* 2. Right-Side INDONESIA with bottom border */}
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '20%',
          zIndex: 15,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          pointerEvents: 'none',
          opacity: currentSlide === 2 ? 1 : 0,
          visibility: currentSlide === 2 ? 'visible' : 'hidden',
          transform: currentSlide === 2 ? 'translateX(0)' : 'translateX(30px)',
          transition: 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), visibility 0.6s',
        }}
      >
        <span
          style={{
            fontSize: 'clamp(1.3rem, 1.8vw, 1.85rem)',
            fontWeight: 800,
            fontFamily: 'Inter, sans-serif',
            color: '#000000',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            paddingBottom: '6px',
          }}
        >
          INDONESIA
        </span>
        <div
          style={{
            width: '300%',
            height: '2px',
            backgroundColor: '#000000',
            transformOrigin: 'right',
            animation: currentSlide === 2 ? 'expandLine 0.8s cubic-bezier(0.22,1,0.36,1) 0.3s both' : 'none',
          }}
        />
      </div>

      {/* ── CINEMATIC ORANGE VERTICAL STRIP WIPE (TOP-TO-BOTTOM & BOTTOM-TO-TOP) ──
          Each strip occupies 1/NUM_STRIPS of the screen width.
          Alternates between TOP-TO-BOTTOM and BOTTOM-TO-TOP motion.
          Covering  → vertical columns slide in from top/bottom to fill screen.
          Revealing → columns continue sliding out bottom/top to reveal new slide.
          Idle      → columns sit off-screen. */}
      {Array.from({ length: NUM_STRIPS }, (_, i) => {
        const isCovering = stripPhase === 'covering';
        const isRevealing = stripPhase === 'revealing';

        // translateY destination based on wipeDirection ('down' vs 'up')
        let ty: string;
        if (wipeDirection === 'down') {
          ty = '-101%';                          // idle: hidden top
          if (isCovering) ty = '0%';            // covering: slide down to fill
          if (isRevealing) ty = '101%';          // revealing: slide down out bottom
        } else {
          ty = '101%';                           // idle: hidden bottom
          if (isCovering) ty = '0%';            // covering: slide up to fill
          if (isRevealing) ty = '-101%';         // revealing: slide up out top
        }

        // stagger delay across columns (left-to-right on enter, right-to-left on exit)
        const delay = isCovering
          ? i * STAGGER_MS
          : (NUM_STRIPS - 1 - i) * STAGGER_MS;

        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: 0,
              left: `${(i / NUM_STRIPS) * 100}%`,
              width: `${100 / NUM_STRIPS}%`,
              height: '100%',
              backgroundColor: '#EE7539',
              borderLeft: '2px solid transparent',
              borderRight: '2px solid transparent',
              boxSizing: 'border-box',
              zIndex: 20,
              transform: `translateY(${ty})`,
              transition: stripPhase === 'idle'
                ? 'none'
                : `transform ${STRIP_MS}ms cubic-bezier(0.87, 0, 0.13, 1) ${delay}ms`,
              pointerEvents: 'none',
            }}
          />
        );
      })}

      {/* ── DOT INDICATORS ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="transition-all duration-300 rounded-full"
            style={{
              width: index === currentSlide ? '28px' : '10px',
              height: '10px',
              background: index === currentSlide ? '#ffffff' : 'rgba(255,255,255,0.45)',
            }}
            title={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
};

export default Hero;
