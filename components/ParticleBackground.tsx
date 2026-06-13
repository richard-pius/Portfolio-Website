'use client';

import { useEffect, useState } from 'react';

export default function ParticleBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Static Technical Grid Overlay */}
      <div className="static-grid" />

      {/* Dynamic Mouse Spotlight Glow */}
      <div
        className="spotlight-glow"
        style={{
          background: visible
            ? `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.035), transparent 80%)`
            : 'none',
        }}
      />

      {/* Retro Film Grain Overlay */}
      <div className="grain-overlay" />
    </>
  );
}
