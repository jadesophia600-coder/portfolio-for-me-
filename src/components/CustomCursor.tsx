import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      const clickable = target.closest('a, button, input, textarea, select, [data-cursor="pointer"]');
      setIsPointer(!!clickable);

      const hoveredItem = target.closest('[data-cursor="expand"]');
      setIsHovered(!!hoveredItem);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision center dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#1447E6] pointer-events-none z-[9999]"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.1 }}
      />
      {/* Fluid ambient follower ring */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border border-[#1447E6]/40 transition-colors duration-200 ${
          isHovered ? 'bg-[#1447E6]/10 border-[#1447E6]' : ''
        }`}
        style={{
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          width: isHovered ? 64 : isPointer ? 44 : 28,
          height: isHovered ? 64 : isPointer ? 44 : 28,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.2 }}
      />
    </>
  );
};

