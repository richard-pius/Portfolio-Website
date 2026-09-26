'use client';

import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Freelance', href: '#freelance' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 pt-4 sm:pt-6 px-4 sm:px-6 flex justify-center pointer-events-none`}
      >
        <div 
          className={`pointer-events-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 w-full max-w-4xl ${
            scrolled ? 'glass-panel shadow-glass' : 'bg-transparent'
          }`}
        >
          {/* Logo / Monogram */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-sans font-bold text-lg tracking-tight hover:opacity-70 transition-opacity">
              RP.
            </span>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-muted transition-colors text-foreground"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a 
              href="#contact" 
              className="hidden md:inline-flex minimal-btn minimal-btn-primary text-sm py-2 px-5"
            >
              Contact
            </a>
            
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-3xl p-6 flex flex-col">
          <div className="flex justify-end">
            <button 
              className="p-2 text-foreground rounded-full hover:bg-muted" 
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col gap-6 mt-12 px-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-semibold tracking-tight text-foreground"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-semibold tracking-tight text-accent mt-4"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </>
  );
}
