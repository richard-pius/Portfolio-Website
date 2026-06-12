'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div
        className="progress-bar"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />
      <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference">
        <div className="flex items-center justify-between px-6 md:px-12 py-5">
          <div className="flex items-center gap-3">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('hero');
              }}
              className="text-sm tracking-[0.1em] uppercase font-bold text-white no-underline"
            >
              Richard Pius
            </a>
            <span className="text-white/30">|</span>
            <span className="text-xs tracking-[0.15em] uppercase text-white/40 font-medium">
              Just a DEV
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }} className="nav-link">About</a>
            <a href="#education" onClick={(e) => { e.preventDefault(); handleNavClick('education'); }} className="nav-link">Education</a>
            <a href="#work" onClick={(e) => { e.preventDefault(); handleNavClick('work'); }} className="nav-link">Work</a>
            <a href="#projects" onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }} className="nav-link">Projects</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }} className="nav-link">Contact</a>
          </nav>

          <button
            className={`hamburger md:hidden ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`}>
        <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }} className="mobile-menu-link">About</a>
        <a href="#education" onClick={(e) => { e.preventDefault(); handleNavClick('education'); }} className="mobile-menu-link">Education</a>
        <a href="#work" onClick={(e) => { e.preventDefault(); handleNavClick('work'); }} className="mobile-menu-link">Work</a>
        <a href="#projects" onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }} className="mobile-menu-link">Projects</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }} className="mobile-menu-link">Contact</a>
      </div>
    </>
  );
}
