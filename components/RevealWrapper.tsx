
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type RevealType = 'slide' | 'center-split-v' | 'center-split-h' | 'bands-v' | 'bands-h';

interface RevealWrapperProps {
  children: React.ReactNode;
  text?: string;
  subtext?: string;
  delay?: number;
  type?: RevealType;
  direction?: 'up' | 'left' | 'right' | 'down';
  amount?: "some" | "all" | number;
}

const RevealWrapper: React.FC<RevealWrapperProps> = ({
  children,
  text = "INTEX.",
  subtext = "ARCHIVE_RECORD",
  delay = 0.1,
  type = 'slide',
  direction = 'up',
  amount = 0.2
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: amount });

  const renderShutter = () => {
    // Cast to any to resolve complex Framer Motion cubic-bezier type inference errors
    const commonTransition: any = {
      duration: 1.4,
      ease: [0.76, 0, 0.24, 1],
      delay: delay
    };

    const textLayer = (
      <div className="absolute inset-0 z-[41] flex flex-col items-center justify-center pointer-events-none">
        <div className="flex flex-col items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 0, y: -30, transition: { ...commonTransition, duration: 0.8 } } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: delay + 0.2 }}
            className="text-white text-2xl md:text-4xl font-serif font-black uppercase tracking-[0.1em] px-12 text-center"
          >
            {text}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0, transition: { ...commonTransition, duration: 0.5 } } : { opacity: 0.4 }}
            transition={{ duration: 0.5, delay: delay + 0.5 }}
            className="text-archive-clay text-[10px] font-mono font-black tracking-[0.8em] uppercase"
          >
            {subtext}
          </motion.div>
        </div>
      </div>
    );

    if (type === 'slide') {
      const variants = {
        up: { initial: { y: 0 }, animate: { y: '-100%' } },
        left: { initial: { x: 0 }, animate: { x: '-100%' } },
        right: { initial: { x: 0 }, animate: { x: '100%' } },
        down: { initial: { y: 0 }, animate: { y: '100%' } }
      };
      return (
        <>
          <motion.div
            initial={variants[direction].initial}
            animate={isInView ? variants[direction].animate : variants[direction].initial}
            transition={commonTransition}
            className="absolute inset-0 z-[40] bg-black pointer-events-none"
          />
          {textLayer}
        </>
      );
    }

    if (type === 'center-split-v') {
      return (
        <>
          <motion.div
            initial={{ y: 0 }}
            animate={isInView ? { y: '-100%' } : { y: 0 }}
            transition={commonTransition}
            className="absolute top-0 left-0 w-full h-1/2 z-[40] bg-black pointer-events-none"
          />
          <motion.div
            initial={{ y: 0 }}
            animate={isInView ? { y: '100%' } : { y: 0 }}
            transition={commonTransition}
            className="absolute bottom-0 left-0 w-full h-1/2 z-[40] bg-black pointer-events-none"
          />
          {textLayer}
        </>
      );
    }

    if (type === 'center-split-h') {
      return (
        <>
          <motion.div
            initial={{ x: 0 }}
            animate={isInView ? { x: '-100%' } : { x: 0 }}
            transition={commonTransition}
            className="absolute top-0 left-0 h-full w-1/2 z-[40] bg-black pointer-events-none"
          />
          <motion.div
            initial={{ x: 0 }}
            animate={isInView ? { x: '100%' } : { x: 0 }}
            transition={commonTransition}
            className="absolute top-0 right-0 h-full w-1/2 z-[40] bg-black pointer-events-none"
          />
          {textLayer}
        </>
      );
    }

    if (type === 'bands-v') {
      const bands = [0, 1, 2, 3, 4];
      return (
        <>
          {bands.map((i) => (
            <motion.div
              key={i}
              initial={{ y: 0 }}
              animate={isInView ? { y: '-100%' } : { y: 0 }}
              transition={{ ...commonTransition, delay: delay + (i * 0.1) }}
              className="absolute top-0 z-[40] bg-black pointer-events-none"
              style={{ left: `${i * 20}%`, width: '20.5%', height: '100%' }}
            />
          ))}
          {textLayer}
        </>
      );
    }

    if (type === 'bands-h') {
      const bands = [0, 1, 2, 3, 4];
      return (
        <>
          {bands.map((i) => (
            <motion.div
              key={i}
              initial={{ x: 0 }}
              animate={isInView ? { x: '100%' } : { x: 0 }}
              transition={{ ...commonTransition, delay: delay + (i * 0.1) }}
              className="absolute left-0 z-[40] bg-black pointer-events-none"
              style={{ top: `${i * 20}%`, height: '20.5%', width: '100%' }}
            />
          ))}
          {textLayer}
        </>
      );
    }

    return null;
  };

  return (
    <div ref={ref} className="relative overflow-hidden w-full">
      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: delay + 0.8 }}
      >
        {children}
      </motion.div>

      {/* Shutter Layer */}
      {renderShutter()}
    </div>
  );
};

export default RevealWrapper;
