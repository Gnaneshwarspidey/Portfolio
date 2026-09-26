/**
 * card-3d — React port of registry.inspira-ui.com/card-3d.json
 *
 * Components:
 *   <CardContainer>   — perspective wrapper, tracks mouse → rotateX/Y
 *   <CardBody>        — sets transform-style: preserve-3d on the card surface
 *   <CardItem>        — individual element lifted/pushed in Z-space on hover
 *
 * Usage:
 *   <CardContainer>
 *     <CardBody className="w-80 h-96 bg-dark-900 rounded-2xl border border-white/10">
 *       <CardItem translateZ={40} className="text-xl font-bold text-white">
 *         Title
 *       </CardItem>
 *       <CardItem translateZ={20} className="text-sm text-white/60 mt-2">
 *         Description
 *       </CardItem>
 *       <CardItem translateZ={60} as="img" src={img} className="w-full rounded-xl mt-4" />
 *     </CardBody>
 *   </CardContainer>
 */

import React, {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
} from 'react';

/* ─────────────────────────────────────────────
   Context — shares mouse-entered state
   (mirrors useMouseState composable from Vue)
───────────────────────────────────────────── */
const MouseStateContext = createContext({ isMouseEntered: false });

/* ─────────────────────────────────────────────
   CardContainer
   perspective: 1000px  +  rotateX/Y on move
───────────────────────────────────────────── */
export function CardContainer({
  children,
  className = '',
  containerClass = '',
}) {
  const containerRef = useRef(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  function handleMouseMove(e) {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  }

  function handleMouseEnter() {
    setIsMouseEntered(true);
  }

  function handleMouseLeave() {
    setIsMouseEntered(false);
    if (containerRef.current) {
      containerRef.current.style.transform =
        'rotateY(0deg) rotateX(0deg)';
    }
  }

  return (
    <MouseStateContext.Provider value={{ isMouseEntered }}>
      <div
        style={{ perspective: '1000px' }}
        className={`flex items-center justify-center p-2 ${containerClass}`}
      >
        <div
          ref={containerRef}
          style={{ transformStyle: 'preserve-3d' }}
          className={`relative flex items-center justify-center transition-all duration-200 ease-linear ${className}`}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {children}
        </div>
      </div>
    </MouseStateContext.Provider>
  );
}

/* ─────────────────────────────────────────────
   CardBody
   transform-style: preserve-3d  +  sizing
───────────────────────────────────────────── */
export function CardBody({ children, className = '' }) {
  return (
    <div
      style={{ transformStyle: 'preserve-3d' }}
      className={`h-96 w-96 ${className}`}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   CardItem
   Depth element — lifts/pushes on hover via
   translateX/Y/Z  +  rotateX/Y/Z
───────────────────────────────────────────── */
export function CardItem({
  as: Tag = 'div',
  children,
  className = '',
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}) {
  const { isMouseEntered } = useContext(MouseStateContext);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    if (isMouseEntered) {
      ref.current.style.transform = [
        `translateX(${translateX}px)`,
        `translateY(${translateY}px)`,
        `translateZ(${translateZ}px)`,
        `rotateX(${rotateX}deg)`,
        `rotateY(${rotateY}deg)`,
        `rotateZ(${rotateZ}deg)`,
      ].join(' ');
    } else {
      ref.current.style.transform =
        'translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)';
    }
  }, [isMouseEntered, translateX, translateY, translateZ, rotateX, rotateY, rotateZ]);

  return (
    <Tag
      ref={ref}
      className={`w-fit transition duration-500 ease-in-out ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
