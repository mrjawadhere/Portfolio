import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cursorOuterRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Handle hovering over interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    // Cursor should vanish on mobile
    const disableCursor = () => {
      if (cursorOuterRef.current) {
        cursorOuterRef.current.style.display = 'none';
      }
    };

    // Check if touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      disableCursor();
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
    },
    hover: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      scale: 1.5,
    },
  };

  const variantsOuter = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1.2,
    },
  };

  return (
    <>
      <motion.div
        className="fixed w-5 h-5 rounded-full bg-[#00f2fe80] pointer-events-none z-[9999] mix-blend-difference"
        style={{ originX: 0.5, originY: 0.5 }}
        variants={variants}
        animate={isHovering ? 'hover' : 'default'}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      <motion.div
        ref={cursorOuterRef}
        className="fixed w-10 h-10 rounded-full border-2 border-[#9d00ff80] pointer-events-none z-[9998]"
        style={{ originX: 0.5, originY: 0.5 }}
        variants={variantsOuter}
        animate={isHovering ? 'hover' : 'default'}
        transition={{ type: 'spring', stiffness: 250, damping: 28, delay: 0.03 }}
      />
    </>
  );
};

export default CustomCursor;
