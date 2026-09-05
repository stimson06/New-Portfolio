import React, { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  // Position references to avoid re-renders on every frame
  const mousePos = useRef({ x: -100, y: -100 });
  const trailPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect coarse pointer (mobile/touch device)
    const mediaQuery = window.matchMedia('(pointer: coarse)');
    const checkTouch = () => {
      setIsTouchDevice(mediaQuery.matches || 'ontouchstart' in window);
    };
    checkTouch();
    mediaQuery.addEventListener?.('change', checkTouch);

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (!isVisible) {
        setIsVisible(true);
        // Instant sync on first movement
        trailPos.current = { x: e.clientX, y: e.clientY };
      }

      // Check if current target or ancestor is interactive
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive =
          target.closest(
            'a, button, [role="button"], [role="tab"], input, select, textarea, label, [data-interactive="true"], .cursor-pointer'
          ) || (target instanceof Element && window.getComputedStyle(target).cursor === 'pointer');
        setIsHovered(Boolean(interactive));
      }
    };

    const onMouseDown = () => setIsMouseDown(true);
    const onMouseUp = () => setIsMouseDown(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Continuous 60-120fps Lerp loop for buttery fluid trail
    const loop = () => {
      // Lerp factor: 0.18 provides silky smooth follow with delicate inertia
      trailPos.current.x += (mousePos.current.x - trailPos.current.x) * 0.18;
      trailPos.current.y += (mousePos.current.y - trailPos.current.y) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }

      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${trailPos.current.x}px, ${trailPos.current.y}px, 0)`;
      }

      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);

    return () => {
      mediaQuery.removeEventListener?.('change', checkTouch);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  // Don't render on touch screens or mobile
  if (isTouchDevice) {
    return null;
  }

  return (
    <div
      id="magnetic-custom-cursor"
      className={`fixed inset-0 pointer-events-none z-[99999] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* Outer Fluid Trailing Ring */}
      <div
        ref={trailRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none will-change-transform"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      >
        <div
          className={`rounded-full transition-all duration-300 ease-out border ${
            isHovered
              ? 'w-14 h-14 border-[#558b85] dark:border-[#6eb7b0] bg-[#558b85]/15 dark:bg-[#6eb7b0]/20 backdrop-blur-[1px] shadow-[0_0_20px_rgba(85,139,133,0.3)]'
              : 'w-9 h-9 border-[#558b85]/40 dark:border-[#6eb7b0]/50 bg-[#558b85]/5 dark:bg-[#6eb7b0]/5'
          } ${isMouseDown ? 'scale-75 opacity-90' : 'scale-100 opacity-100'}`}
        />
      </div>

      {/* Inner Pinpoint Dot (Direct Follow) */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none will-change-transform"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      >
        <div
          className={`rounded-full bg-[#558b85] dark:bg-[#6eb7b0] transition-all duration-200 ease-out shadow-sm ${
            isHovered
              ? 'w-2 h-2 opacity-60 scale-75'
              : 'w-2.5 h-2.5 opacity-95 scale-100'
          } ${isMouseDown ? 'scale-125 bg-emerald-500' : ''}`}
        />
      </div>
    </div>
  );
}
