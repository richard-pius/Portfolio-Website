'use client';

import MarqueeButton from './MarqueeButton';

const laptopAscii = `
        _________________________________
       /                                 \\
      |   _____________________________   |
      |  |                             |  |
      |  |  richard@pius:~$ whoami     |  |
      |  |  just a dev & student       |  |
      |  |                             |  |
      |  |  richard@pius:~$ status     |  |
      |  |  building fun software...   |  |
      |  |                             |  |
      |  |_____________________________|  |
      |                                   |
       \\_________________________________/
       _________________|_________________
      /                                   \\
     /  _________________________________  \\
    / /                                 \\ \\ \\
   / /                                   \\ \\ \\
  (_/_____________________________________\\_)
`;

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-28 pb-16 relative z-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full max-w-7xl mx-auto">
        
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Stacked massive text */}
          <div className="mb-12">
            <div className="clip-overflow mb-4">
              <span className="inline-block text-sm md:text-base tracking-[0.3em] uppercase text-white/30 font-medium animate-stagger-1 opacity-0">
                Hi, I&apos;m
              </span>
            </div>
            <div className="clip-overflow">
              <h1 className="text-display animate-stagger-2 opacity-0">
                Richard
              </h1>
            </div>
            <div className="clip-overflow">
              <h1 className="text-display animate-stagger-3 opacity-0">
                Pius
              </h1>
            </div>
          </div>

          {/* Tagline + CTA */}
          <div className="max-w-xl">
            <div className="clip-overflow mb-4">
              <p className="text-body-lg text-white/70 animate-stagger-4 opacity-0">
                A BCA Student who likes to build fun software
              </p>
            </div>
            <div className="clip-overflow mb-10">
              <p className="text-body-lg text-white/40 animate-stagger-5 opacity-0">
                and also a Cybersecurity Enthusiast
              </p>
            </div>
            <div className="flex flex-wrap gap-4 animate-stagger-6 opacity-0">
              <MarqueeButton href="#contact">Get in touch</MarqueeButton>
              <MarqueeButton href="#projects">View works</MarqueeButton>
            </div>
          </div>
        </div>

        {/* Right Column: ASCII Laptop Art Terminal */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end animate-stagger-6 opacity-0">
          <div className="w-full max-w-md bg-black/40 border border-white/10 p-6 rounded-lg font-mono text-[9px] sm:text-xs leading-none text-white/40 select-none hover:text-white hover:border-white/30 transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.02)]">
            <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="text-[10px] text-white/20 ml-2 tracking-wider">TERMINAL // RICHARD_PIUS</span>
            </div>
            <pre className="whitespace-pre overflow-x-auto leading-tight font-mono text-[8px] sm:text-xs">
              {laptopAscii}
            </pre>
          </div>
        </div>

      </div>
    </section>
  );
}
