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
    period: 'September 2022 — March 2024',
    points: [
      'Actively participated in community development programs, social service initiatives, and campus outreach events.',
      'Developed strong leadership, teamwork, and interpersonal communication skills through collaborative social welfare projects.',
    ],
  },
];

export default function Work() {
  return (
    <section id="work" className="section-padding px-6 md:px-12 lg:px-20 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-12 md:mb-16">
            <Asterisk className="w-5 h-5 star-spin text-[#00f3ff]" strokeWidth={1.5} />
            <span className="text-body-lg text-white/50 font-mono tracking-wider">// PROFESSIONAL JOURNEY</span>
          </div>
        </ScrollReveal>

        {/* Section heading */}
        <ScrollReveal animation="slide-left">
          <h2 className="text-heading mb-16 md:mb-24">
            Work Experience<span className="text-[#ff00a0]">.</span>
          </h2>
        </ScrollReveal>

        {/* Timeline Container */}
        <div className="relative pl-6 md:pl-10 ml-2 md:ml-4 space-y-12">
          {/* Vertical gradient line */}
          <div className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-[1.5px] bg-gradient-to-b from-[#00f3ff] via-[#ff00a0] to-neutral-900/10 pointer-events-none" />

          {experiences.map((exp, idx) => (
            <ScrollReveal key={exp.role} delay={idx * 100} animation="slide-right">
              <div className="relative group">
                {/* Glowing Node Dot */}
                <span className="absolute -left-[30px] md:-left-[44px] top-2 w-2.5 h-2.5 rounded-full bg-black border-2 border-[#ff00a0] group-hover:border-[#00f3ff] group-hover:scale-125 transition-all duration-300 shadow-[0_0_8px_rgba(255,0,160,0.4)] group-hover:shadow-[0_0_12px_#00f3ff]" />

                <div className="border border-white/5 bg-black/45 hover:bg-neutral-900/20 hover:border-white/10 p-6 md:p-8 rounded transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 border-b border-white/5 pb-4 mb-6">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold uppercase tracking-tight text-white group-hover:text-[#00f3ff] transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <span className="text-xs uppercase tracking-[0.15em] text-[#ff00a0] font-mono mt-1 block">
                        {exp.company}
                      </span>
                    </div>
                    <span className="text-xs tracking-[0.1em] uppercase text-white/40 font-mono">
                      {exp.period}
                    </span>
                  </div>

                  {/* Points list */}
                  <ul className="space-y-3 list-none p-0">
                    {exp.points.map((point, pIdx) => (
                      <li 
                        key={pIdx} 
                        className="text-xs md:text-sm uppercase tracking-[0.02em] text-white/50 leading-relaxed max-w-3xl flex items-start gap-3 transition-colors duration-300 group-hover:text-white/80"
                      >
                        <span className="text-[#00f3ff]/60 mt-1 flex-shrink-0 text-xs">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Add Tech tags to look professional */}
                  {exp.company.includes('IPSR') && (
                    <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/5">
                      {['AWS Cloud', 'Linux Admin', 'Docker', 'Git Pipeline', 'Threat Mitigation', 'Network Security'].map((tag) => (
                        <span key={tag} className="text-[9px] font-mono uppercase tracking-widest border border-[#ff00a0]/30 bg-[#ff00a0]/5 px-2.5 py-1 text-white/70">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  {exp.company.includes('National') && (
                    <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/5">
                      {['Leadership', 'Teamwork', 'Social Service', 'Community Outreach'].map((tag) => (
                        <span key={tag} className="text-[9px] font-mono uppercase tracking-widest border border-[#00f3ff]/30 bg-[#00f3ff]/5 px-2.5 py-1 text-white/70">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
