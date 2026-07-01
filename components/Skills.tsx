'use client';

import ScrollReveal from './ScrollReveal';
import { Asterisk } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['C', 'C++', 'Java', 'Python', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Frameworks',
    skills: ['React', 'Next.js', 'Kaboom.js', 'Bootstrap 5', 'WordPress'],
  },
  {
    title: 'Tools & Databases',
    skills: ['Git', 'VS Code', 'GitHub', 'Linux', 'Power BI', 'Tableau', 'SQL', 'MongoDB'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding px-6 md:px-12 lg:px-20 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-16 md:mb-24">
            <Asterisk className="w-5 h-5 star-spin text-[#00f3ff]" strokeWidth={1.5} />
            <span className="text-body-lg text-white/50 font-mono tracking-wider">// TECHNICAL DEVELOPER TOOLKIT</span>
          </div>
        </ScrollReveal>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {skillCategories.map((category, catIdx) => (
            <ScrollReveal key={category.title} delay={catIdx * 100}>
              <div className="border border-white/5 bg-black/45 p-6 rounded shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                <div className="flex justify-between items-baseline mb-6 border-b border-white/5 pb-4">
                  <h3 className="text-xs tracking-[0.3em] uppercase text-white/70 font-semibold font-mono">
                    {category.title}
                  </h3>
                  <span className="font-mono text-[8px] text-[#00f3ff]/60 tracking-widest">
                    [ {category.skills.length} TOOLS ]
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="border border-white/5 hover:border-[#00f3ff]/30 bg-white/5 hover:bg-[#00f3ff]/5 px-3 py-2 transition-all duration-300 flex items-center gap-2 group cursor-default"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff00a0] group-hover:bg-[#00f3ff] transition-colors duration-300 flex-shrink-0" />
                      <span className="text-xs uppercase tracking-[0.05em] font-mono text-white/70 group-hover:text-white transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
