'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  baseOpacity: number;
  z: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    let mouse = { x: -1000, y: -1000, active: false };
    let scrollY = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const isMobile = window.innerWidth < 768;
      const density = isMobile ? 8000 : 4000; // Divisor reduced to render more dots/stars
      const count = Math.floor((canvas.width * canvas.height) / density);
      
      particles = [];
      for (let i = 0; i < count; i++) {
        const radius = Math.random() * 2.4 + 0.4; // Star size variance
        const opacity = (radius / 2.8) * 0.22 + 0.05; // Closer dots are slightly brighter
        const px = Math.random() * canvas.width;
        const py = Math.random() * canvas.height;
        particles.push({
          x: px,
          y: py,
          originX: px,
          originY: py,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          radius,
          opacity,
          baseOpacity: opacity,
          z: radius * 0.15, // Parallax depth scroll factor
        });
      }
    };

    const drawConnection = (x1: number, y1: number, x2: number, y2: number, distance: number, maxDist: number, baseWeight = 0.07) => {
      const opacity = (1 - distance / maxDist) * baseWeight;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.lineWidth = 0.45;
      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Render spotlight vignette glow
      if (mouse.active && mouse.x > -1000) {
        const spotGlow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 380);
        spotGlow.addColorStop(0, 'rgba(255, 255, 255, 0.03)');
        spotGlow.addColorStop(0.5, 'rgba(255, 255, 255, 0.005)');
        spotGlow.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = spotGlow;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Update and draw particles with depth parallax
      const renderedParticles = particles.map((p) => {
        // Scroll drift offset
        const yOffset = scrollY * p.z;
        let drawY = p.y - yOffset;
        drawY = ((drawY % canvas.height) + canvas.height) % canvas.height;

        // Mouse repulsion physics
        let dx = p.x - mouse.x;
        let dy = drawY - mouse.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 160 && mouse.active) {
          const force = (160 - dist) / 160;
          p.vx += (dx / dist) * force * 0.25;
          p.vy += (dy / dist) * force * 0.25;
        }

        // Apply velocities
        p.x += p.vx;
        p.y += p.vy;

        // Friction damping (inertia return)
        p.vx *= 0.95;
        p.vy *= 0.95;

        // Background drift (slow continuous movement)
        p.x += p.vx === 0 ? (Math.random() - 0.5) * 0.05 : 0;
        p.y += p.vy === 0 ? (Math.random() - 0.5) * 0.05 : 0;

        // Wrap boundaries
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Recalculate draw coordinates after wrapping and velocities
        const finalDrawY = ((p.y - (scrollY * p.z)) % canvas.height + canvas.height) % canvas.height;

        // Increase opacity when mouse is close (glow effect)
        let opacity = p.opacity;
        if (dist < 180 && mouse.active) {
          const factor = 1 - dist / 180;
          opacity = p.opacity + factor * 0.28;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, finalDrawY, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();

        return { p, drawX: p.x, drawY: finalDrawY };
      });

      // Draw connections
      const maxConnectDist = 110;
      for (let i = 0; i < renderedParticles.length; i++) {
        const p1 = renderedParticles[i];

        // Connect particles to each other
        for (let j = i + 1; j < renderedParticles.length; j++) {
          const p2 = renderedParticles[j];

          // Connect if both are closer background layers (keeps it clean)
          if (p1.p.radius < 1.6 && p2.p.radius < 1.6) {
            const dx = p1.drawX - p2.drawX;
            const dy = p1.drawY - p2.drawY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < maxConnectDist) {
              drawConnection(p1.drawX, p1.drawY, p2.drawX, p2.drawY, distance, maxConnectDist, 0.075);
            }
          }
        }

        // Magnetic link from particles to mouse
        if (mouse.active && mouse.x > -1000) {
          const mDx = p1.drawX - mouse.x;
          const mDy = p1.drawY - mouse.y;
          const mDist = Math.sqrt(mDx * mDx + mDy * mDy);
          const maxMouseConnectDist = 140;
          if (mDist < maxMouseConnectDist) {
            drawConnection(p1.drawX, p1.drawY, mouse.x, mouse.y, mDist, maxMouseConnectDist, 0.095);
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    resize();
    createParticles();
    animate();

    const handleResize = () => {
      resize();
      createParticles();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="particle-canvas" />
      <div className="grain-overlay" />
    </>
  );
}
