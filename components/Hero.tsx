'use client';

import MarqueeButton from './MarqueeButton';
import Terminal from './Terminal';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-28 pb-16 relative z-10 overflow-hidden"
    >
      {/* Ambient background glows for atmosphere */}
      <div className="glow-blob bg-[#00f3ff]/8 top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2" />
      <div className="glow-blob bg-[#ff00a0]/6 bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full max-w-7xl mx-auto relative z-10">
        
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Stacked massive text */}
          <div className="mb-8">
            <div className="clip-overflow mb-3">
              <span className="inline-block text-xs md:text-sm tracking-[0.4em] uppercase text-[#00f3ff] font-mono animate-stagger-1 opacity-0">
                // SYSTEM.USER.INIT
              </span>
            </div>
            <div className="clip-overflow">
              <h1 className="text-display animate-stagger-2 opacity-0 text-transparent bg-clip-text bg-gradient-to-r from-[#00f3ff] via-[#33f5ff] to-[#ff00a0] pb-2 font-extrabold">
                Richard
              </h1>
            </div>
            <div className="clip-overflow">
              <h1 className="text-display animate-stagger-3 opacity-0 text-transparent bg-clip-text bg-gradient-to-r from-[#ff00a0] via-[#00f3ff] to-[#ff00a0] font-extrabold">
                Pius
              </h1>
            </div>
          </div>

          {/* High-tech status dashboard */}
          <div className="flex flex-wrap gap-3 items-center mb-10 font-mono text-[9px] md:text-[10px] tracking-[0.2em] text-[#00f3ff]/70 uppercase animate-stagger-4 opacity-0">
            <span className="flex items-center gap-1.5 border border-[#00f3ff]/20 bg-[#00f3ff]/5 backdrop-blur px-3 py-1.5 rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f3ff] animate-pulse shadow-[0_0_8px_#00f3ff]" />
              ACCESS: OVERLORD
            </span>
            <span className="flex items-center gap-1.5 border border-[#ff00a0]/20 bg-[#ff00a0]/5 backdrop-blur px-3 py-1.5 rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff00a0] shadow-[0_0_8px_#ff00a0]" />
              LOC: IN // KERALA
            </span>
            <span className="flex items-center gap-1.5 border border-[#00f3ff]/10 bg-white/5 backdrop-blur px-3 py-1.5 rounded-sm">
              NET_CONN: SECURE
            </span>
          </div>

          {/* Tagline + CTA */}
          <div className="max-w-xl">
            <div className="clip-overflow mb-2">
              <p className="text-body-lg text-white/80 animate-stagger-4 opacity-0">
                A BCA Student who likes to build fun software
              </p>
            </div>
            <div className="clip-overflow mb-10">
              <p className="text-body-lg text-white/40 animate-stagger-5 opacity-0">
                and also a Cybersecurity Enthusiast
              </p>
            </div>
            <div className="flex flex-wrap gap-4 animate-stagger-6 opacity-0">
              <MarqueeButton 
                href="#contact" 
                className="!border-[#00f3ff] !text-[#00f3ff] hover:!bg-[#00f3ff] hover:!text-black"
              >
                Get in touch
              </MarqueeButton>
              <MarqueeButton href="#projects" className="hover:!border-[#ff00a0] hover:!text-[#ff00a0]">
                View works
              </MarqueeButton>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive OS Terminal Widget */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end animate-stagger-6 opacity-0">
          <Terminal />
        </div>

      </div>
    </section>
  );
}
