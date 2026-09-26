'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { personalData } from '../constants/data';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden bg-background">
      
      {/* Subtle ambient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl w-full mx-auto flex flex-col items-center text-center z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/50 bg-muted/50 backdrop-blur-sm text-sm font-medium text-muted-foreground mb-4">
            <span>Available for new opportunities</span>
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[120px] font-bold tracking-tighter text-foreground leading-[0.9] pb-4">
            Software <br />
            <span className="text-accent">Developer.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl text-muted-foreground font-normal leading-relaxed mt-6">
            Building intuitive interfaces and scalable applications with clean code. Specialist in modern web technologies, UX-driven development, and elegant solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-12"
        >
          <a
            href="#projects"
            className="minimal-btn minimal-btn-primary w-full sm:w-auto"
          >
            <span>View Projects</span>
            <ArrowRight size={18} />
          </a>
          <a
            href="#about"
            className="minimal-btn minimal-btn-secondary w-full sm:w-auto"
          >
            <span>About Me</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
