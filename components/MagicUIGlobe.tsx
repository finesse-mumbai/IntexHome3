import React, { useEffect, useRef } from 'react';
import createGlobe from './cobe';

export type CountryKey = 'bangladesh' | 'srilanka' | 'india';

interface MagicUIGlobeProps {
  activeCountry: CountryKey;
  className?: string;
}

const COUNTRY_COORDS: Record<CountryKey, [number, number]> = {
  bangladesh: [23.8103, 90.4125], // Dhaka
  india: [28.6139, 77.2090],      // New Delhi
  srilanka: [6.9271, 79.8612],     // Colombo
};

// Target phi to center each country facing the viewer
const COUNTRY_TARGET_PHI: Record<CountryKey, number> = {
  bangladesh: -3.15,
  india: -2.95,
  srilanka: -2.98,
};

export const MagicUIGlobe: React.FC<MagicUIGlobeProps> = ({ activeCountry, className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const phiRef = useRef<number>(-3.15);
  const targetPhiRef = useRef<number>(-3.15);
  const isAligningRef = useRef<boolean>(false);
  const alignTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isDraggingRef = useRef<boolean>(false);
  const startXRef = useRef<number>(0);
  const dragVelocityRef = useRef<number>(0);
  const activeCountryRef = useRef<CountryKey>(activeCountry);
  const globeRef = useRef<any>(null);

  // When active country changes, smoothly align to it and update marker sizes
  useEffect(() => {
    activeCountryRef.current = activeCountry;
    targetPhiRef.current = COUNTRY_TARGET_PHI[activeCountry] ?? -3.15;
    isAligningRef.current = true;

    if (globeRef.current) {
      globeRef.current.update({
        markers: [
          { location: COUNTRY_COORDS.bangladesh, size: activeCountry === 'bangladesh' ? 0.085 : 0.05, color: [0.09, 0.64, 0.28] },
          { location: COUNTRY_COORDS.india, size: activeCountry === 'india' ? 0.085 : 0.05, color: [0.09, 0.64, 0.28] },
          { location: COUNTRY_COORDS.srilanka, size: activeCountry === 'srilanka' ? 0.085 : 0.05, color: [0.09, 0.64, 0.28] },
        ],
      });
    }

    if (alignTimerRef.current) clearTimeout(alignTimerRef.current);
    alignTimerRef.current = setTimeout(() => {
      isAligningRef.current = false;
    }, 2200);

    return () => {
      if (alignTimerRef.current) clearTimeout(alignTimerRef.current);
    };
  }, [activeCountry]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let width = container.clientWidth || 240;

    const onResize = () => {
      if (container) {
        width = container.clientWidth;
      }
    };
    window.addEventListener('resize', onResize);

    const globe = createGlobe(canvas, {
      devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
      width: width,
      height: width,
      phi: phiRef.current,
      theta: 0.32, // Authentic Earth axial tilt (~18.3° forward viewing angle)
      dark: 0,     // Clean light mode (transparent ocean, dark slate continent dots)
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 4.8,
      baseColor: [0.18, 0.18, 0.22], // Elegant dark slate continent dots
      markerColor: [0.09, 0.64, 0.28], // Vibrant Emerald Green for INTEX destinations
      glowColor: [0.92, 0.94, 0.96],  // Subtle atmospheric halo
      arcColor: [0.09, 0.64, 0.28],   // Emerald green connecting arcs
      arcWidth: 1.4,
      arcHeight: 0.16,
      opacity: 0.95,
      scale: 1.06,
      markers: [
        { location: COUNTRY_COORDS.bangladesh, size: activeCountry === 'bangladesh' ? 0.085 : 0.05, color: [0.09, 0.64, 0.28] },
        { location: COUNTRY_COORDS.india, size: activeCountry === 'india' ? 0.085 : 0.05, color: [0.09, 0.64, 0.28] },
        { location: COUNTRY_COORDS.srilanka, size: activeCountry === 'srilanka' ? 0.085 : 0.05, color: [0.09, 0.64, 0.28] },
      ],
      arcs: [
        { from: COUNTRY_COORDS.india, to: COUNTRY_COORDS.bangladesh, color: [0.09, 0.64, 0.28] },
        { from: COUNTRY_COORDS.india, to: COUNTRY_COORDS.srilanka, color: [0.09, 0.64, 0.28] },
        { from: COUNTRY_COORDS.bangladesh, to: COUNTRY_COORDS.srilanka, color: [0.09, 0.64, 0.28] },
      ],
      onRender: (state) => {
        // Continuous rotation + smooth alignment
        if (!isDraggingRef.current) {
          if (isAligningRef.current) {
            const diff = targetPhiRef.current - phiRef.current;
            const normalizedDiff = Math.atan2(Math.sin(diff), Math.cos(diff));
            phiRef.current += normalizedDiff * 0.055;
          } else {
            // Natural Earth planetary spin (West to East)
            phiRef.current += 0.003 + dragVelocityRef.current;
            dragVelocityRef.current *= 0.92; // smooth inertia damping
          }
        }

        state.phi = phiRef.current;
        state.width = width;
        state.height = width;
      },
    });

    globeRef.current = globe;

    // Mouse & Touch interaction
    const onMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      startXRef.current = e.clientX;
      dragVelocityRef.current = 0;
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const deltaX = e.clientX - startXRef.current;
      startXRef.current = e.clientX;
      const step = deltaX * 0.006;
      phiRef.current += step;
      dragVelocityRef.current = step;
    };
    const onMouseUp = () => {
      isDraggingRef.current = false;
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        isDraggingRef.current = true;
        startXRef.current = e.touches[0].clientX;
        dragVelocityRef.current = 0;
      }
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current || e.touches.length === 0) return;
      const deltaX = e.touches[0].clientX - startXRef.current;
      startXRef.current = e.touches[0].clientX;
      const step = deltaX * 0.006;
      phiRef.current += step;
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

    return () => {
      window.removeEventListener('resize', onResize);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      globe.destroy();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`w-full flex items-center justify-center cursor-grab active:cursor-grabbing select-none relative ${className || ''}`}
      style={{
        height: '240px',
        maxWidth: '100%',
        aspectRatio: '1 / 1',
        margin: '0 auto',
        overflow: 'hidden',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          contain: 'layout paint size',
          opacity: 1,
          transition: 'opacity 0.5s ease',
        }}
      />
    </div>
  );
};

export default MagicUIGlobe;
