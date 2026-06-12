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
    <footer id="contact" className="section-padding px-6 md:px-12 lg:px-20 relative z-10">
      <div className="max-w-6xl">
        
        {/* Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 md:mb-32">
          <div>
            <ScrollReveal>
              <span className="text-xs tracking-[0.3em] uppercase text-white/40 font-medium block mb-4">
                Get in touch
              </span>
              <h2 className="text-heading mb-8">
                Contact<span className="text-white/20">.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-body-lg text-white/50 max-w-md leading-relaxed mb-12">
                Have a project in mind, want to collaborate, or just want to say hi? Fill out the form or shoot me an email directly.
              </p>
            </ScrollReveal>
            
            {/* Quick CTAs */}
            <ScrollReveal delay={150}>
              <div className="flex flex-wrap gap-2">
                <a href="mailto:piusrichard713@gmail.com?subject=Cybersecurity%20Consulting" className="project-tech text-[0.65rem] tracking-[0.1em] uppercase border border-white/20 px-3 py-1 hover:bg-white hover:text-black transition-colors duration-300 no-underline text-white">
                  Cybersecurity
                </a>
                <a href="mailto:piusrichard713@gmail.com?subject=Software%20Development" className="project-tech text-[0.65rem] tracking-[0.1em] uppercase border border-white/20 px-3 py-1 hover:bg-white hover:text-black transition-colors duration-300 no-underline text-white">
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
                <span className="text-xs tracking-[0.3em] uppercase text-white/40 font-medium block mb-4">
                  Contact
                </span>
                <div className="space-y-2">
                  <a
                    href="mailto:piusrichard713@gmail.com"
                    className="social-link block"
                  >
                    piusrichard713@gmail.com
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                  <a href="tel:+919446931260" className="social-link block">
                    +91 9446931260
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Social Links */}
            <ScrollReveal delay={100}>
              <div>
                <span className="text-xs tracking-[0.3em] uppercase text-white/40 font-medium block mb-4">
                  Social
                </span>
                <div className="space-y-2">
                  <a
                    href="https://github.com/richard-pius"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link block"
                  >
                    GitHub
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/richard-pius-developer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link block"
                  >
                    LinkedIn
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Location */}
            <ScrollReveal delay={200}>
              <div>
                <span className="text-xs tracking-[0.3em] uppercase text-white/40 font-medium block mb-4">
                  Location
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
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[0.65rem] tracking-[0.2em] uppercase text-white/30">
            © {new Date().getFullYear()} Richard Pius. All rights reserved.
          </p>
          <a
            href="#hero"
            className="text-[0.65rem] tracking-[0.2em] uppercase text-white/30 hover:text-white transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
