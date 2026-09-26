import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const FlipCard = ({
  front,
  back,
  className = '',
  containerClassName = '',
  flipDirection = 'horizontal', // 'horizontal' | 'vertical'
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const isHorizontal = flipDirection === 'horizontal';

  return (
    <div
      className={`group relative perspective-1000 w-full min-h-[320px] h-full cursor-pointer select-none ${containerClassName}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped((prev) => !prev)}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className={`relative w-full h-full min-h-[320px] will-change-transform ${className}`}
        style={{ transformStyle: 'preserve-3d' }}
        animate={{
          rotateY: isHorizontal ? (isFlipped ? 180 : 0) : 0,
          rotateX: !isHorizontal ? (isFlipped ? 180 : 0) : 0,
        }}
        transition={{
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {/* Front Side */}
        <div
          className={`absolute inset-0 w-full h-full backface-hidden transition-opacity duration-300 ${
            isFlipped ? 'pointer-events-none' : 'pointer-events-auto'
          }`}
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          {front}
        </div>

        {/* Back Side */}
        <div
          className={`absolute inset-0 w-full h-full backface-hidden transition-opacity duration-300 ${
            !isFlipped ? 'pointer-events-none' : 'pointer-events-auto'
          }`}
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: isHorizontal ? 'rotateY(180deg)' : 'rotateX(180deg)',
          }}
        >
          {back}
        </div>
      </motion.div>
    </div>
  );
};
