'use client';

import ScrollReveal from './ScrollReveal';
import { Code, Globe, Smartphone, ShieldCheck } from 'lucide-react';

const roles = [
  {
    icon: Code,
    title: 'Software Developer',
  },
  {
    icon: Globe,
    title: 'Full Stack Web Developer',
  },
  {
    icon: Smartphone,
    title: 'Android & Mobile Developer',
  },
  {
    icon: ShieldCheck,
    title: 'Cyber Security Enthusiast',
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding px-6 md:px-12 lg:px-20 relative z-10">
      <div className="max-w-6xl">
        {/* Section label */}
        <ScrollReveal>
          <span className="text-xs tracking-[0.3em] uppercase text-white/40 font-medium block mb-4">
            Introduction
          </span>
        </ScrollReveal>

        {/* Section heading */}
        <ScrollReveal animation="slide-left">
          <h2 className="text-heading mb-12 md:mb-16">
            Overview<span className="text-white/20">.</span>
          </h2>
        </ScrollReveal>

        {/* Bio */}
        <ScrollReveal delay={100}>
          <p className="text-body-lg text-white/60 max-w-4xl mb-16 md:mb-24 leading-relaxed">
            I&apos;m Richard Pius, a third year BCA student passionate about computer science. As a dedicated computer enthusiast, I&apos;m eager to explore the world of programming and software development. I&apos;m committed to learning new technologies and applying my skills to create innovative solutions.
          </p>
        </ScrollReveal>

        {/* Role Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {roles.map((role, idx) => (
            <ScrollReveal key={role.title} delay={idx * 100} animation="scale-up">
              <div className="role-card">
                <div className="role-card-content">
                  <div className="role-icon w-10 h-10 border border-white/20 rounded-full flex items-center justify-center mb-6 transition-colors duration-400">
                    <role.icon className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm uppercase tracking-[0.05em] font-semibold">
                    {role.title}
                  </h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
