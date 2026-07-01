'use client';

import ScrollReveal from './ScrollReveal';
import { Code, Globe, Smartphone, ShieldCheck } from 'lucide-react';

const roles = [
  {
    icon: Code,
    title: 'Software Developer',
    accent: '#00f3ff',
  },
  {
    icon: Globe,
    title: 'Full Stack Web Developer',
    accent: '#ff00a0',
  },
  {
    icon: Smartphone,
    title: 'Android & Mobile Developer',
    accent: '#00f3ff',
  },
  {
    icon: ShieldCheck,
    title: 'Cyber Security Enthusiast',
    accent: '#ff00a0',
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding px-6 md:px-12 lg:px-20 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <ScrollReveal>
          <span className="text-xs tracking-[0.3em] uppercase text-[#00f3ff] font-mono block mb-4">
            // INTRODUCTION
          </span>
        </ScrollReveal>

        {/* Section heading */}
        <ScrollReveal animation="slide-left">
          <h2 className="text-heading mb-12 md:mb-16">
            Overview<span className="text-[#ff00a0]">.</span>
          </h2>
        </ScrollReveal>

        {/* Split Grid for Bio & Cyber Graphic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16 md:mb-24">
          <div className="lg:col-span-7">
            <ScrollReveal delay={100}>
              <p className="text-body-lg text-white/80 leading-relaxed mb-6">
                I&apos;m Richard Pius, a third year BCA student passionate about computer science. As a dedicated computer enthusiast, I&apos;m eager to explore the world of programming and software development.
              </p>
              <p className="text-sm uppercase tracking-[0.05em] text-white/45 leading-relaxed max-w-2xl font-mono">
                Focused on engineering robust systems, writing clean code, and securing network topologies. Currently delving into full-stack modern frameworks, AWS cloud systems, and cybersecurity paradigms.
              </p>
            </ScrollReveal>
          </div>
          
          {/* Cybernetic Core SVG Graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <ScrollReveal delay={200} animation="scale-up" className="w-full max-w-[320px]">
              <div className="border border-[#00f3ff]/10 bg-black/60 p-6 rounded relative overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.6)]">
                {/* corner details */}
                <div className="absolute top-2 left-2 font-mono text-[7px] text-[#00f3ff]/40">NODE_ID // 0x7E1A</div>
                <div className="absolute bottom-2 right-2 font-mono text-[7px] text-[#ff00a0]/40">R_OS_CORE // OK</div>
                
                {/* SVG Core */}
                <svg viewBox="0 0 100 100" className="w-full h-44 drop-shadow-[0_0_15px_rgba(0,243,255,0.15)]">
                  {/* Rotating Ring 1 */}
                  <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(0, 243, 255, 0.25)" strokeWidth="0.75" strokeDasharray="10 5 2 5" className="animate-spin-slow" />
                  
                  {/* Rotating Ring 2 (Reverse) */}
                  <circle cx="50" cy="50" r="32" fill="none" stroke="rgba(255, 0, 160, 0.3)" strokeWidth="0.75" strokeDasharray="5 15" style={{ animation: 'spinSlow 10s linear infinite reverse' }} />
                  
                  {/* Circuit Nodes */}
                  <line x1="50" y1="12" x2="50" y2="88" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                  <line x1="12" y1="50" x2="88" y2="50" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                  
                  {/* Glowing center node */}
                  <circle cx="50" cy="50" r="8" fill="rgba(0, 243, 255, 0.05)" stroke="#00f3ff" strokeWidth="1" className="animate-pulse" />
                  <circle cx="50" cy="50" r="4" fill="#ff00a0" />
                  
                  {/* Satellites */}
                  <circle cx="50" cy="18" r="2.5" fill="#00f3ff" className="animate-pulse" />
                  <circle cx="50" cy="82" r="2.5" fill="#00f3ff" className="animate-pulse" />
                  <circle cx="18" cy="50" r="2.5" fill="#ff00a0" />
                  <circle cx="82" cy="50" r="2.5" fill="#ff00a0" />
                  
                  {/* Data waves */}
                  <circle cx="50" cy="50" r="24" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                </svg>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {roles.map((role, idx) => (
            <ScrollReveal key={role.title} delay={idx * 100} animation="scale-up">
              <div className="role-card">
                <div className="role-card-content">
                  <div 
                    className="role-icon w-10 h-10 border border-white/10 rounded-sm flex items-center justify-center mb-6 transition-all duration-300"
                    style={{ color: role.accent }}
                  >
                    <role.icon className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xs uppercase tracking-[0.1em] font-semibold text-white/90">
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
