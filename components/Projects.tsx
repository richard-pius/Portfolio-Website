'use client';

import ScrollReveal from './ScrollReveal';
import MarqueeButton from './MarqueeButton';
import { Asterisk, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    index: '01',
    title: 'Semantic Book Recommender',
    description:
      'A powerful semantic library book recommendation engine built using Python that uses AI to find books matching your exact contextual interests.',
    tech: ['Python', 'AI', 'NLP', 'Semantic Search'],
    link: 'https://github.com/richard-pius/A-semantic-library-book-recommender',
  },
  {
    index: '02',
    title: 'ClearBreeze Forecast',
    description:
      'A beautiful, fluid, and responsive mobile weather application developed from scratch to display real-time conditions and forecasts.',
    tech: ['Flutter', 'Dart', 'Mobile Dev', 'API Integration'],
    link: 'https://github.com/richard-pius/ClearBreeze-Forecast',
  },
  {
    index: '03',
    title: 'Simple Linux Distro',
    description:
      'A lightweight, text-based Linux distribution built from scratch using Common Lisp for deep system-level experimentation.',
    tech: ['Lisp', 'Linux', 'OS Development', 'Common Lisp'],
    link: 'https://github.com/richard-pius/simple-linux-distro-',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding px-6 md:px-12 lg:px-20 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-16 md:mb-24">
            <Asterisk className="w-5 h-5 star-spin text-[#00f3ff]" strokeWidth={1.5} />
            <span className="text-body-lg text-white/50 font-mono tracking-wider">// CODE LABS & PORTFOLIO</span>
          </div>
        </ScrollReveal>

        {/* Section heading */}
        <ScrollReveal animation="slide-left">
          <h2 className="text-heading mb-16 md:mb-24">
            Projects<span className="text-[#ff00a0]">.</span>
          </h2>
        </ScrollReveal>

        {/* Project list */}
        <div className="space-y-6">
          {projects.map((project, idx) => (
            <ScrollReveal key={project.index} delay={idx * 100} animation="scale-up">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card block px-6 md:px-10 py-8 md:py-12 group no-underline text-white"
              >
                <div className="project-content flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
                  {/* Index */}
                  <span className="project-index font-mono text-xs tracking-[0.2em] uppercase text-white/35 font-medium md:pt-2 transition-colors duration-300">
                    {project.index} //
                  </span>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-tight leading-none group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00f3ff] group-hover:to-[#ff00a0] transition-all duration-300">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="project-arrow w-5 h-5 md:w-6 md:h-6 flex-shrink-0 text-white/30 transition-all duration-300" />
                    </div>

                    <p className="text-xs md:text-sm uppercase tracking-[0.02em] text-white/50 mt-4 leading-relaxed max-w-2xl transition-colors duration-300 group-hover:text-white/80">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mt-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="project-tech font-mono text-[9px] tracking-[0.1em] uppercase border border-white/5 bg-white/5 text-white/50 px-2.5 py-1 transition-all duration-300 group-hover:border-[#00f3ff]/30 group-hover:text-[#00f3ff]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* More projects link */}
        <ScrollReveal delay={400} animation="scale-up">
          <div className="mt-20 flex justify-center">
            <MarqueeButton
              href="https://github.com/richard-pius?tab=repositories"
              target="_blank"
              className="w-full md:w-auto !border-[#ff00a0] !text-[#ff00a0] hover:!bg-[#ff00a0] hover:!text-white"
            >
              More Repositories on GitHub
            </MarqueeButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
