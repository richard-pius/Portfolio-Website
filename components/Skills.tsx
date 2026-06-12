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
    <section id="skills" className="section-padding px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl">
        {/* Section label */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-16 md:mb-24">
            <Asterisk className="w-6 h-6 star-spin" strokeWidth={1.5} />
            <span className="text-body-lg text-white/50">What I work with</span>
          </div>
        </ScrollReveal>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {skillCategories.map((category, catIdx) => (
            <ScrollReveal key={category.title} delay={catIdx * 100}>
              <div>
                <h3 className="text-xs tracking-[0.3em] uppercase text-white/40 font-medium mb-6">
                  {category.title}
                </h3>
                <div className="space-y-0">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="border-t border-white/10 py-3 group"
                    >
                      <span className="text-sm md:text-base uppercase tracking-[0.05em] font-medium group-hover:tracking-[0.15em] transition-all duration-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                  <div className="border-t border-white/10" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
