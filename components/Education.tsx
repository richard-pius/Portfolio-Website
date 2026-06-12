'use client';

import ScrollReveal from './ScrollReveal';
import { Asterisk } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="section-padding px-6 md:px-12 lg:px-20 relative z-10">
      <div className="max-w-6xl">
        {/* Section label */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-12 md:mb-16">
            <Asterisk className="w-6 h-6 star-spin" strokeWidth={1.5} />
            <span className="text-body-lg text-white/50">My Academic Path</span>
          </div>
        </ScrollReveal>

        {/* Section heading */}
        <ScrollReveal animation="slide-left">
          <h2 className="text-heading mb-16 md:mb-24">
            Education<span className="text-white/20">.</span>
          </h2>
        </ScrollReveal>

        {/* Education Timeline */}
        <div className="space-y-12">
          <ScrollReveal delay={100} animation="slide-right">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 border-b border-white/10 pb-8 hover:border-white transition-colors duration-300">
              <div className="max-w-3xl">
                <h3 className="text-xl md:text-3xl font-bold uppercase tracking-tight">
                  Santhigiri College of Computer Science
                </h3>
                <p className="text-body text-white/50 uppercase tracking-[0.05em] mt-2">
                  Bachelor of Computer Applications (BCA)
                </p>
                <p className="text-xs text-white/30 uppercase mt-4">
                  Focused on software engineering, database management, and programming foundations.
                </p>
              </div>
              <div className="text-xs tracking-[0.15em] uppercase text-white/40 md:text-right mt-1 whitespace-nowrap">
                <p className="font-semibold text-white">July 2024 — Present</p>
                <p className="mt-1">Idukki, Kerala</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} animation="slide-right">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 border-b border-white/10 pb-8 hover:border-white transition-colors duration-300">
              <div className="max-w-3xl">
                <h3 className="text-xl md:text-3xl font-bold uppercase tracking-tight">
                  St. George&apos;s Higher Secondary School
                </h3>
                <p className="text-body text-white/50 uppercase tracking-[0.05em] mt-2">
                  Computer Science Stream
                </p>
                <p className="text-xs text-white/30 uppercase mt-4">
                  Higher Secondary Education with a core specialization in Computer Science, Mathematics, and Physics.
                </p>
              </div>
              <div className="text-xs tracking-[0.15em] uppercase text-white/40 md:text-right mt-1 whitespace-nowrap">
                <p className="font-semibold text-white">July 2022 — March 2024</p>
                <p className="mt-1">Kerala, India</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
