import { useEffect, useRef } from 'react';
import { useDeviceDetect } from '../../hooks/useDeviceDetect';
import './CustomCursor.css';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const { isTouch } = useDeviceDetect();

  useEffect(() => {
    if (isTouch) return;

    // Add class to body
    document.body.classList.add('custom-cursor-active');

    let ringX = 0, ringY = 0;
    let dotX = 0, dotY = 0;
    let mouseX = 0, mouseY = 0;
    let isHovering = false;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onEnter = () => { isHovering = true; };
    const onLeave = () => { isHovering = false; };

    const interactiveSelectors = 'a, button, [role="button"], input, textarea, label';

    document.addEventListener('mousemove', onMove, { passive: true });

    // Delegate hover detection
    document.addEventListener('mouseover', (e) => {
      if ((e.target as Element).closest(interactiveSelectors)) onEnter();
    });
    document.addEventListener('mouseout', (e) => {
      if ((e.target as Element).closest(interactiveSelectors)) onLeave();
    });

    const animate = () => {
      // Dot follows directly
      dotX = mouseX;
      dotY = mouseY;

      // Ring lerps — smooth trailing
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotX - 3}px, ${dotY - 3}px)`;
      }

      if (ringRef.current) {
        const ringSize = isHovering ? 40 : 24;
        ringRef.current.style.transform = `translate(${ringX - ringSize / 2}px, ${ringY - ringSize / 2}px)`;
        ringRef.current.style.width = `${ringSize}px`;
        ringRef.current.style.height = `${ringSize}px`;
        ringRef.current.style.borderColor = isHovering ? 'rgba(110,231,183,0.8)' : 'rgba(255,255,255,0.4)';
        ringRef.current.style.opacity = isHovering ? '1' : '0.6';
      }

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      document.body.classList.remove('custom-cursor-active');
      document.removeEventListener('mousemove', onMove);
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
