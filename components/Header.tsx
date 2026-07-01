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
      <header className="fixed top-0 left-0 w-full z-50 bg-[#080a0f]/60 backdrop-blur-md border-b border-[#00f3ff]/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
        <div className="flex items-center justify-between px-6 md:px-12 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('hero');
              }}
              className="text-sm tracking-[0.15em] uppercase font-bold text-white hover:text-[#00f3ff] transition-colors duration-300 no-underline"
            >
              Richard Pius
            </a>
            <span className="text-white/20">|</span>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f3ff] animate-pulse shadow-[0_0_8px_#00f3ff]" />
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#00f3ff] font-mono">
                R_OS // ONLINE
              </span>
            </div>
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

      <div className={`mobile-menu-overlay bg-black/95 backdrop-blur-xl ${menuOpen ? 'open' : ''}`}>
        <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }} className="mobile-menu-link">About</a>
        <a href="#education" onClick={(e) => { e.preventDefault(); handleNavClick('education'); }} className="mobile-menu-link">Education</a>
        <a href="#work" onClick={(e) => { e.preventDefault(); handleNavClick('work'); }} className="mobile-menu-link">Work</a>
        <a href="#projects" onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }} className="mobile-menu-link">Projects</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }} className="mobile-menu-link">Contact</a>
      </div>
    </>
  );
}
