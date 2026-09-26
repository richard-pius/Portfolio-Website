'use client';

import React from 'react';
import { personalData } from '../constants/data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 bg-background border-t border-border/30">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        
        <div>
          &copy; {year} {personalData.name}. All rights reserved.
        </div>

        <div className="flex gap-4">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
          <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
