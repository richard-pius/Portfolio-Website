'use client';

import React from 'react';

export default function ContactForm() {
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
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-4">
      <div className="lg:col-span-5 flex flex-col justify-between">
        <div>
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#00f3ff] font-mono block mb-2">
            // GET IN TOUCH
          </span>
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-4">
            Contact<span className="text-[#ff00a0]">.</span>
          </h2>
          <p className="text-xs text-white/50 leading-relaxed mb-6 font-mono">
            Have a project in mind, want to collaborate, or just want to say hi? Fill out the form or shoot me an email directly.
          </p>
        </div>
        
        {/* Quick CTAs */}
        <div className="flex flex-col gap-2.5">
          <span className="text-[9px] tracking-[0.25em] uppercase text-white/30 font-mono">
            // QUICK_LINKS
          </span>
          <div className="flex flex-wrap gap-2">
            <a href="mailto:piusrichard713@gmail.com?subject=Cybersecurity%20Consulting" className="project-tech font-mono text-[9px] tracking-[0.1em] uppercase border border-[#00f3ff]/30 hover:border-[#00f3ff] hover:bg-[#00f3ff]/5 text-[#00f3ff] px-3.5 py-1.5 transition-all duration-300 no-underline rounded-sm">
              Cybersecurity
            </a>
            <a href="mailto:piusrichard713@gmail.com?subject=Software%20Development" className="project-tech font-mono text-[9px] tracking-[0.1em] uppercase border border-[#ff00a0]/30 hover:border-[#ff00a0] hover:bg-[#ff00a0]/5 text-[#ff00a0] px-3.5 py-1.5 transition-all duration-300 no-underline rounded-sm">
              Software Development
            </a>
          </div>
        </div>
      </div>

      <div className="lg:col-span-7">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-[9px] tracking-[0.2em] uppercase text-white/30 font-semibold block mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="What's your good name?"
              className="w-full bg-black/40 border border-white/10 px-3 py-2 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#00f3ff] transition-all"
            />
          </div>

          <div>
            <label className="text-[9px] tracking-[0.2em] uppercase text-white/30 font-semibold block mb-1">
              Your email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="What's your web address?"
              className="w-full bg-black/40 border border-white/10 px-3 py-2 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#00f3ff] transition-all"
            />
          </div>

          <div>
            <label className="text-[9px] tracking-[0.2em] uppercase text-white/30 font-semibold block mb-1">
              Your Message
            </label>
            <textarea
              name="message"
              required
              placeholder="What you want to say?"
              rows={4}
              className="w-full bg-black/40 border border-white/10 px-3 py-2 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#00f3ff] transition-all"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full font-mono text-[10px] tracking-[0.2em] uppercase border border-[#00f3ff] hover:bg-[#00f3ff] hover:text-black py-2.5 transition-all duration-300 rounded-sm"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
