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
    <section id="certifications" className="section-padding px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl">
        {/* Section label */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-16 md:mb-24">
            <Asterisk className="w-6 h-6 star-spin" strokeWidth={1.5} />
            <span className="text-body-lg text-white/50">Recognition</span>
          </div>
        </ScrollReveal>

        {/* Section heading */}
        <ScrollReveal animation="slide-left">
          <h2 className="text-heading mb-16 md:mb-24">
            Certifications
            <br />
            <span className="text-white/30">&</span> Awards
          </h2>
        </ScrollReveal>

        {/* Table header */}
        <ScrollReveal>
          <div className="hidden md:grid grid-cols-3 gap-4 px-6 pb-4">
            <span className="text-xs tracking-[0.2em] uppercase text-white/30 font-medium">Name</span>
            <span className="text-xs tracking-[0.2em] uppercase text-white/30 font-medium">Issuer</span>
            <span className="text-xs tracking-[0.2em] uppercase text-white/30 font-medium text-right">Type</span>
          </div>
        </ScrollReveal>

        {/* Certification rows */}
        <div>
          {certifications.map((cert, idx) => (
            <ScrollReveal key={cert.name} delay={idx * 50} animation="slide-right">
              <div className="cert-row px-4 md:px-6 py-4 md:py-5 grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4 items-center transition-all duration-300 cursor-default">
                <span className="text-sm md:text-base uppercase tracking-[0.02em] font-medium">
                  {cert.name}
                </span>
                <span className="text-xs md:text-sm uppercase tracking-[0.05em] text-white/50 transition-colors duration-300">
                  {cert.issuer}
                </span>
                <span className="cert-tag text-[0.65rem] tracking-[0.1em] uppercase border border-white/20 px-3 py-1 w-fit md:ml-auto transition-colors duration-300">
                  {cert.type}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Honors section */}
        <div className="mt-16 md:mt-24">
          <ScrollReveal>
            <span className="text-xs tracking-[0.3em] uppercase text-white/40 font-medium block mb-8">
              Honors
            </span>
          </ScrollReveal>

          {honors.map((honor, idx) => (
            <ScrollReveal key={honor.name} delay={idx * 100}>
              <div className="cert-row px-4 md:px-6 py-6 md:py-8 transition-all duration-300 cursor-default">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-8">
                  <div>
                    <h3 className="text-lg md:text-2xl font-bold uppercase tracking-tight">
                      {honor.name}
                    </h3>
                    <p className="text-sm uppercase tracking-[0.02em] text-white/50 mt-1 transition-colors duration-300">
                      {honor.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="cert-tag text-[0.65rem] tracking-[0.1em] uppercase border border-white/20 px-3 py-1 whitespace-nowrap transition-colors duration-300">
                      {honor.detail}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-white/30 flex-shrink-0" />
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
