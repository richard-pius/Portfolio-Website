'use client';

import ScrollReveal from './ScrollReveal';
import { Asterisk } from 'lucide-react';

const experiences = [
  {
    role: 'AI-Integrated Cloud & DevOps Intern',
    company: 'IPSR Solutions Ltd',
    period: 'April 2026 — June 2026',
    points: [
      'Gained hands-on infrastructure engineering experience spanning AWS Cloud computing deployments, Linux system administration, and automated configuration management.',
      'Engineered containerized application environments utilizing Docker and designed automated delivery flows leveraging Git, GitHub, and continuous deployment pipelines.',
      'Applied foundational cybersecurity threat mitigation strategies, system access controls, and log monitoring protocols to secure virtualized application topologies.',
    ],
  },
  {
    role: 'NSS Volunteer',
    company: 'National Service Scheme (NSS)',
    period: 'July 2024 — Present',
    points: [
      'Actively participated in community development programs, social service initiatives, and campus outreach events.',
      'Developed strong leadership, teamwork, and interpersonal communication skills through collaborative social welfare projects.',
    ],
  },
];

export default function Work() {
  return (
    <section id="work" className="section-padding px-6 md:px-12 lg:px-20 relative z-10">
      <div className="max-w-6xl">
        {/* Section label */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-12 md:mb-16">
            <Asterisk className="w-6 h-6 star-spin" strokeWidth={1.5} />
            <span className="text-body-lg text-white/50">What I have done so far</span>
          </div>
        </ScrollReveal>

        {/* Section heading */}
        <ScrollReveal animation="slide-left">
          <h2 className="text-heading mb-16 md:mb-24">
            Work Experience<span className="text-white/20">.</span>
          </h2>
        </ScrollReveal>

        {/* Experience List */}
        <div className="space-y-0">
          {experiences.map((exp, idx) => (
            <ScrollReveal key={exp.role} delay={idx * 100} animation="slide-right">
              <div className="border-t border-white/10 py-10 md:py-16 group hover:border-white transition-colors duration-300">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                  {/* Period */}
                  <div className="md:col-span-3">
                    <span className="text-xs tracking-[0.2em] uppercase text-white/30 font-semibold block pt-1">
                      {exp.period}
                    </span>
                  </div>

                  {/* Role & Company */}
                  <div className="md:col-span-9">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                      <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-white group-hover:tracking-[0.02em] transition-all duration-300">
                        {exp.role}
                      </h3>
                      <span className="text-xs uppercase tracking-[0.1em] text-white/50 font-medium">
                        {exp.company}
                      </span>
                    </div>
                    
                    {/* Points list */}
                    <ul className="mt-6 space-y-3 list-none p-0">
                      {exp.points.map((point, pIdx) => (
                        <li 
                          key={pIdx} 
                          className="text-sm md:text-base uppercase tracking-[0.02em] text-white/40 leading-relaxed max-w-3xl flex items-start gap-3 transition-colors duration-300 group-hover:text-white/70"
                        >
                          <span className="text-white/25 mt-1.5 flex-shrink-0 text-xs">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}
