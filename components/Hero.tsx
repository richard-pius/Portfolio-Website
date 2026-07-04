'use client';

import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalData } from '../constants/data';
import ThreeCanvas from './ThreeCanvas';

export default function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center py-20 px-6 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[70%] max-w-3xl h-[300px] bg-gradient-to-tr from-indigo-500/10 to-emerald-500/10 dark:from-indigo-900/10 dark:to-emerald-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Column (Content Text) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-7 text-left space-y-6"
        >
          {/* Short welcome tag */}
          <motion.span 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 text-[10px] font-mono tracking-widest text-zinc-500 dark:text-zinc-400 uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Available for Opportunities
          </motion.span>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.1]"
          >
            Hi, I&apos;m <span className="bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">{personalData.name}</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase"
          >
            {personalData.title}
          </motion.p>

          {/* Description summary */}
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-light"
          >
            {personalData.bio}
          </motion.p>

          {/* Action button pills */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-950 font-semibold text-xs uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/10"
            >
              View Work
              <ArrowRight size={14} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-200 hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700 bg-white hover:bg-zinc-50 dark:bg-zinc-950 dark:hover:bg-zinc-900 text-zinc-600 dark:text-zinc-300 font-semibold text-xs uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Contact Me
              <Mail size={14} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column (3D Interactive Canvas Element) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="md:col-span-5 flex items-center justify-center"
        >
          <ThreeCanvas />
        </motion.div>

      </div>
    </section>
  );
}
