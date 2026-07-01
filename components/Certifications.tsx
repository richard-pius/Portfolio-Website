'use client';

import ScrollReveal from './ScrollReveal';
import { Asterisk, ArrowUpRight } from 'lucide-react';

const certifications = [
  {
    name: 'NPTEL Cloud Computing',
    issuer: 'NPTEL / IIT',
    type: 'Certification',
  },
  {
    name: 'Cyber Security Bootcamp',
    issuer: 'Bootcamp',
    type: 'Certification',
  },
  {
    name: 'Google Cloud AI in Action',
    issuer: 'Google Cloud',
    type: 'Certification',
  },
  {
    name: 'Python Programming',
    issuer: 'IPSR Solutions',
    type: 'Certification',
  },
  {
    name: 'Linux System Administration',
    issuer: 'IPSR Solutions',
    type: 'Certification',
  },
  {
    name: 'Gen AI Integration',
    issuer: 'IPSR Solutions',
    type: 'Certification',
  },
];

const honors = [
  {
    name: 'Orchestrate AI Hackathon',
    detail: 'Top 50% Finisher — #672 / 1,349',
    description: 'Engineered a RAG-based autonomous support agent',
    type: 'Honor',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding px-6 md:px-12 lg:px-20 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-16 md:mb-24">
            <Asterisk className="w-5 h-5 star-spin text-[#00f3ff]" strokeWidth={1.5} />
            <span className="text-body-lg text-white/50 font-mono tracking-wider">// SYSTEM CREDENTIALS & RECOGNITION</span>
          </div>
        </ScrollReveal>

        {/* Section heading */}
        <ScrollReveal animation="slide-left">
          <h2 className="text-heading mb-16 md:mb-24">
            Certifications
            <br />
            <span className="text-[#ff00a0]">&</span> Awards
          </h2>
        </ScrollReveal>

        {/* Table header */}
        <ScrollReveal>
          <div className="hidden md:grid grid-cols-3 gap-4 px-6 pb-4 border-b border-white/5 mb-2 font-mono">
            <span className="text-[10px] tracking-[0.2em] uppercase text-white/30 font-medium">Name</span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-white/30 font-medium">Issuer</span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-white/30 font-medium text-right">Type</span>
          </div>
        </ScrollReveal>

        {/* Certification rows */}
        <div className="border border-white/5 bg-black/45 rounded overflow-hidden">
          {certifications.map((cert, idx) => (
            <ScrollReveal key={cert.name} delay={idx * 50} animation="slide-right">
              <div className="cert-row px-4 md:px-6 py-4 md:py-5 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 items-center cursor-default">
                <span className="text-xs md:text-sm uppercase tracking-[0.05em] font-semibold text-white/95 group-hover:text-white">
                  {cert.name}
                </span>
                <span className="text-[10px] md:text-xs uppercase tracking-[0.05em] text-white/40 font-mono">
                  {cert.issuer}
                </span>
                <span className="cert-tag text-[8px] font-mono tracking-[0.1em] uppercase border border-white/10 bg-white/5 px-2.5 py-1 w-fit md:ml-auto text-white/60">
                  {cert.type}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Honors section */}
        <div className="mt-16 md:mt-24">
          <ScrollReveal>
            <span className="text-xs tracking-[0.3em] uppercase text-[#00f3ff] font-mono block mb-8">
              // COMPETITIVE HONORS
            </span>
          </ScrollReveal>

          {honors.map((honor, idx) => (
            <ScrollReveal key={honor.name} delay={idx * 100}>
              <div className="border border-white/5 bg-black/45 hover:border-[#00f3ff]/30 p-6 md:p-8 rounded transition-all duration-300 cursor-default shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold uppercase tracking-tight text-white group-hover:text-[#00f3ff] transition-colors duration-300">
                      {honor.name}
                    </h3>
                    <p className="text-xs md:text-sm uppercase tracking-[0.02em] text-white/50 mt-2 font-mono">
                      {honor.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono tracking-[0.1em] uppercase border border-[#ff00a0]/30 bg-[#ff00a0]/5 px-3 py-1.5 whitespace-nowrap text-[#ff00a0] font-semibold">
                      {honor.detail}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-white/20 flex-shrink-0" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
