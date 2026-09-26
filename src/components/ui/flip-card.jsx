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
      className={`group relative perspective-1000 w-full h-full ${containerClassName}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped((prev) => !prev)}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className={`relative w-full h-full duration-700 ease-in-out ${className}`}
        style={{ transformStyle: 'preserve-3d' }}
        animate={{
          rotateY: isHorizontal ? (isFlipped ? 180 : 0) : 0,
          rotateX: !isHorizontal ? (isFlipped ? 180 : 0) : 0,
        }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          {front}
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 w-full h-full backface-hidden"
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
