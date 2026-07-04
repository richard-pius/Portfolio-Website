'use client';

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalData } from '../constants/data';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-zinc-100 dark:border-zinc-900 transition-colors duration-300">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-6 text-zinc-500 dark:text-zinc-400">
        
        {/* Copyright */}
        <span className="text-xs font-light">
          &copy; {new Date().getFullYear()} {personalData.name}. All rights reserved.
        </span>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            title="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            title="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${personalData.email}`}
            className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            title="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
