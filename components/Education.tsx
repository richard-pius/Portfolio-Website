'use client';

import ScrollReveal from './ScrollReveal';
import { Asterisk } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="section-padding px-6 md:px-12 lg:px-20 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-12 md:mb-16">
            <Asterisk className="w-5 h-5 star-spin text-[#00f3ff]" strokeWidth={1.5} />
            <span className="text-body-lg text-white/50 font-mono tracking-wider">// ACADEMIC CREDENTIALS</span>
          </div>
        </ScrollReveal>

        {/* Section heading */}
        <ScrollReveal animation="slide-left">
          <h2 className="text-heading mb-16 md:mb-24">
            Education<span className="text-[#ff00a0]">.</span>
          </h2>
        </ScrollReveal>

        {/* Education Timeline */}
        <div className="relative pl-6 md:pl-10 ml-2 md:ml-4 space-y-12">
          {/* Vertical gradient line */}
          <div className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-[1.5px] bg-gradient-to-b from-[#ff00a0] via-[#00f3ff] to-neutral-900/10 pointer-events-none" />

          <ScrollReveal delay={100} animation="slide-right">
            <div className="relative group">
              {/* Glowing Node Dot */}
              <span className="absolute -left-[30px] md:-left-[44px] top-2 w-2.5 h-2.5 rounded-full bg-black border-2 border-[#ff00a0] group-hover:border-[#00f3ff] group-hover:scale-125 transition-all duration-300 shadow-[0_0_8px_rgba(255,0,160,0.4)] group-hover:shadow-[0_0_12px_#00f3ff]" />

              <div className="border border-white/5 bg-black/45 hover:bg-neutral-900/20 hover:border-white/10 p-6 md:p-8 rounded transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 border-b border-white/5 pb-4 mb-6">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold uppercase tracking-tight text-white group-hover:text-[#00f3ff] transition-colors duration-300">
                      Santhigiri College of Computer Science
                    </h3>
                    <p className="text-xs uppercase tracking-[0.15em] text-[#ff00a0] font-mono mt-1">
                      Bachelor of Computer Applications (BCA)
                    </p>
                  </div>
                  <div className="text-xs tracking-[0.1em] uppercase text-white/40 font-mono md:text-right">
                    <p className="font-semibold text-white">July 2024 — Present</p>
                    <p className="mt-1 text-[10px]">Idukki, Kerala</p>
                  </div>
                </div>
                
                <p className="text-xs md:text-sm uppercase tracking-[0.02em] text-white/50 leading-relaxed max-w-3xl">
                  Focused on software engineering, database management systems, web technology, object-oriented methodologies, and computer science foundations.
                </p>

                <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/5">
                  {['Software Engineering', 'Database Design', 'OOPs Java', 'Web Programming', 'Data Structures'].map((tag) => (
                    <span key={tag} className="text-[9px] font-mono uppercase tracking-widest border border-[#00f3ff]/30 bg-[#00f3ff]/5 px-2.5 py-1 text-white/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} animation="slide-right">
            <div className="relative group">
              {/* Glowing Node Dot */}
              <span className="absolute -left-[30px] md:-left-[44px] top-2 w-2.5 h-2.5 rounded-full bg-black border-2 border-[#00f3ff] group-hover:border-[#ff00a0] group-hover:scale-125 transition-all duration-300 shadow-[0_0_8px_rgba(0,243,255,0.4)] group-hover:shadow-[0_0_12px_#ff00a0]" />

              <div className="border border-white/5 bg-black/45 hover:bg-neutral-900/20 hover:border-white/10 p-6 md:p-8 rounded transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 border-b border-white/5 pb-4 mb-6">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold uppercase tracking-tight text-white group-hover:text-[#00f3ff] transition-colors duration-300">
                      St. George&apos;s Higher Secondary School
                    </h3>
                    <p className="text-xs uppercase tracking-[0.15em] text-[#ff00a0] font-mono mt-1">
                      Computer Science Stream
                    </p>
                  </div>
                  <div className="text-xs tracking-[0.1em] uppercase text-white/40 font-mono md:text-right">
                    <p className="font-semibold text-white">July 2022 — March 2024</p>
                    <p className="mt-1 text-[10px]">Kerala, India</p>
                  </div>
                </div>

                <p className="text-xs md:text-sm uppercase tracking-[0.02em] text-white/50 leading-relaxed max-w-3xl">
                  Higher Secondary Education with core specializations in computer programming, algebraic mathematics, Newtonian physics, and systems logic.
                </p>

                <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/5">
                  {['Computer Science', 'Mathematics', 'Physics', 'C++', 'System Logic'].map((tag) => (
                    <span key={tag} className="text-[9px] font-mono uppercase tracking-widest border border-[#ff00a0]/30 bg-[#ff00a0]/5 px-2.5 py-1 text-white/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
