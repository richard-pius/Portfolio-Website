'use client';

import React from 'react';
import { Mail, MapPin, ExternalLink } from 'lucide-react';
import { personalData } from '../constants/data';

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 px-6 bg-background">
      <div className="max-w-4xl mx-auto space-y-16 text-center">
        
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Let's build something together.
          </h2>
          <p className="text-lg text-muted-foreground">
            {personalData.availabilityStatus}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href={`mailto:${personalData.email}`}
            className="minimal-btn minimal-btn-primary w-full sm:w-auto"
          >
            <Mail size={18} />
            <span>{personalData.email}</span>
          </a>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin size={18} />
            <span>{personalData.location}</span>
          </div>
        </div>

        <div className="pt-12 border-t border-border/50">
          <p className="text-sm text-muted-foreground mb-6">Find me elsewhere on the web</p>
          <div className="flex items-center justify-center gap-6">
            <a 
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent font-medium flex items-center gap-1 transition-colors"
            >
              GitHub <ExternalLink size={14} />
            </a>
            <a 
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent font-medium flex items-center gap-1 transition-colors"
            >
              LinkedIn <ExternalLink size={14} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
