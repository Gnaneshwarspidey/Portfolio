import React, { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    // Global event listeners for hover targets
    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const type = target.getAttribute('data-cursor');
        if (type === 'view') {
          setCursorText('VIEW');
          setCursorVariant('view');
        } else if (type === 'explore') {
          setCursorText('EXPLORE');
          setCursorVariant('explore');
        } else if (type === 'link') {
          setCursorText('');
          setCursorVariant('link');
        }
      } else {
        const link = e.target.closest('a, button, input, textarea');
        if (link) {
          setCursorVariant('link');
          setCursorText('');
        } else {
          setCursorVariant('default');
          setCursorText('');
        }
      }
    };

    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const isExpanded = cursorVariant === 'view' || cursorVariant === 'explore';
  const isLink = cursorVariant === 'link';

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center font-mono font-bold text-[10px] tracking-widest uppercase select-none"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
      }}
    >
      <div
        className={`rounded-full flex items-center justify-center transition-all duration-200 border ${
          isExpanded
            ? 'w-16 h-16 bg-white text-dark-950 border-white shadow-2xl scale-100 backdrop-blur-sm'
            : isLink
            ? 'w-10 h-10 bg-white/20 border-white/60 scale-100 backdrop-blur-md'
            : 'w-3 h-3 bg-white border-white/80'
        }`}
      >
        {cursorText && <span>{cursorText}</span>}
      </div>
    </div>
  );
};

