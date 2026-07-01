'use client';

import React from 'react';
import ScrollReveal from './ScrollReveal';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget;
    const name = (target.elements.namedItem('name') as HTMLInputElement).value;
    const email = (target.elements.namedItem('email') as HTMLInputElement).value;
    const message = (target.elements.namedItem('message') as HTMLTextAreaElement).value;

    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    window.location.href = `mailto:piusrichard713@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <footer id="contact" className="section-padding px-6 md:px-12 lg:px-20 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 md:mb-32">
          <div>
            <ScrollReveal>
              <span className="text-xs tracking-[0.3em] uppercase text-[#00f3ff] font-mono block mb-4">
                // GET IN TOUCH
              </span>
              <h2 className="text-heading mb-8">
                Contact<span className="text-[#ff00a0]">.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-body-lg text-white/50 max-w-md leading-relaxed mb-12">
                Have a project in mind, want to collaborate, or just want to say hi? Fill out the form or shoot me an email directly.
              </p>
            </ScrollReveal>
            
            {/* Quick CTAs */}
            <ScrollReveal delay={150}>
              <div className="flex flex-wrap gap-3">
                <a href="mailto:piusrichard713@gmail.com?subject=Cybersecurity%20Consulting" className="project-tech font-mono text-[9px] tracking-[0.1em] uppercase border border-[#00f3ff]/30 hover:border-[#00f3ff] hover:bg-[#00f3ff]/5 text-[#00f3ff] px-3.5 py-1.5 transition-all duration-300 no-underline rounded-sm">
                  Cybersecurity
                </a>
                <a href="mailto:piusrichard713@gmail.com?subject=Software%20Development" className="project-tech font-mono text-[9px] tracking-[0.1em] uppercase border border-[#ff00a0]/30 hover:border-[#ff00a0] hover:bg-[#ff00a0]/5 text-[#ff00a0] px-3.5 py-1.5 transition-all duration-300 no-underline rounded-sm">
                  Software Development
                </a>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="text-[0.65rem] tracking-[0.2em] uppercase text-white/30 font-semibold block mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="What's your good name?"
                  className="contact-input"
                />
              </div>

              <div>
                <label className="text-[0.65rem] tracking-[0.2em] uppercase text-white/30 font-semibold block mb-1">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="What's your web address?"
                  className="contact-input"
                />
              </div>

              <div>
                <label className="text-[0.65rem] tracking-[0.2em] uppercase text-white/30 font-semibold block mb-1">
                  Your Message
                </label>
                <textarea
                  name="message"
                  required
                  placeholder="What you want to say?"
                  className="contact-textarea"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="marquee-btn w-full justify-center text-center"
                >
                  <span className="btn-text">Send</span>
                  <span className="btn-marquee">
                    <span className="btn-marquee-inner">
                      <span>Send</span>
                      <span>Send</span>
                      <span>Send</span>
                      <span>Send</span>
                    </span>
                  </span>
                </button>
              </div>
            </form>
          </ScrollReveal>
        </div>

        {/* Contact Details */}
        <div className="border-t border-white/10 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Contact Info */}
            <ScrollReveal>
              <div>
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#00f3ff] font-mono block mb-4">
                  // CONTACT
                </span>
                <div className="space-y-2 font-mono">
                  <a
                    href="mailto:piusrichard713@gmail.com"
                    className="social-link block text-white/60 hover:text-white"
                  >
                    piusrichard713@gmail.com
                    <ArrowUpRight className="w-3 h-3 text-[#ff00a0]" />
                  </a>
                  <a href="tel:+919446931260" className="social-link block text-white/60 hover:text-white">
                    +91 9446931260
                    <ArrowUpRight className="w-3 h-3 text-[#ff00a0]" />
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Social Links */}
            <ScrollReveal delay={100}>
              <div>
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#00f3ff] font-mono block mb-4">
                  // SOCIAL
                </span>
                <div className="space-y-2 font-mono">
                  <a
                    href="https://github.com/richard-pius"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link block text-white/60 hover:text-white"
                  >
                    GitHub
                    <ArrowUpRight className="w-3 h-3 text-[#ff00a0]" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/richard-pius-developer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link block text-white/60 hover:text-white"
                  >
                    LinkedIn
                    <ArrowUpRight className="w-3 h-3 text-[#ff00a0]" />
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Location */}
            <ScrollReveal delay={200}>
              <div>
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#00f3ff] font-mono block mb-4">
                  // LOCATION
                </span>
                <p className="text-sm uppercase tracking-[0.05em] text-white/50">
                  Idukki, Kerala
                </p>
                <p className="text-sm uppercase tracking-[0.05em] text-white/50">
                  India
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-[9px] md:text-[10px] tracking-[0.25em] text-white/30 uppercase">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <p className="m-0">
              © {new Date().getFullYear()} RICHARD PIUS. ALL RIGHTS RESERVED.
            </p>
            <span className="hidden md:inline text-white/10">|</span>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f3ff] shadow-[0_0_6px_#00f3ff]" />
              <span>R_OS // SSL_SECURE // IST (UTC+5:30)</span>
            </div>
          </div>
          <a
            href="#hero"
            className="text-white/30 hover:text-[#00f3ff] hover:text-shadow-[0_0_8px_rgba(0,243,255,0.5)] transition-all duration-300 no-underline"
          >
            BACK TO TOP ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
