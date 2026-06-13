'use client';

import React, { useState, useEffect, useRef } from 'react';

// Chibified Anime Character in a Suit (SVG)
const CharacterSVG = ({ isWalking, walkFrame, direction }: { isWalking: boolean; walkFrame: number; direction: 'left' | 'right' }) => {
  const scaleX = direction === 'left' ? -1 : 1;
  
  return (
    <svg 
      width="48" 
      height="64" 
      viewBox="0 0 48 64" 
      style={{ transform: `scaleX(${scaleX})`, transition: 'transform 0.15s' }}
      className="filter drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]"
    >
      {/* Custom 3-Node Network Core Halo (glowing gold) - Copyright Safe alternative to Arasaka */}
      <g transform="translate(24, 6)" opacity="0.95" className="animate-pulse">
        {/* Outer Ring */}
        <circle cx="0" cy="0" r="5.5" fill="none" stroke="#ffd700" strokeWidth="0.75" />
        {/* Network connections */}
        <line x1="0" y1="0" x2="0" y2="-3" stroke="#ffd700" strokeWidth="0.75" />
        <line x1="0" y1="0" x2="-2.5" y2="1.5" stroke="#ffd700" strokeWidth="0.75" />
        <line x1="0" y1="0" x2="2.5" y2="1.5" stroke="#ffd700" strokeWidth="0.75" />
        {/* Network nodes (dots) */}
        <circle cx="0" cy="-3" r="1.2" fill="#ffd700" />
        <circle cx="-2.5" cy="1.5" r="1.2" fill="#ffd700" />
        <circle cx="2.5" cy="1.5" r="1.2" fill="#ffd700" />
        {/* Center hub core */}
        <circle cx="0" cy="0" r="0.75" fill="#ffffff" />
      </g>

      {/* Slicked Back Hair (Back) */}
      <path d="M 14,19 Q 11,10 18,8 Q 24,4 30,8 Q 37,10 34,19 Z" fill="#e5e5e5" />
      
      {/* Chibi Head (with taller forehead for receding hair) */}
      <rect x="15" y="17" width="18" height="15" rx="5" fill="#fcfcfc" stroke="#111" strokeWidth="1.5" />
      
      {/* Eyes & Round Gold Spectacles */}
      <circle cx="20" cy="25" r="1" fill="#111" />
      <circle cx="28" cy="25" r="1" fill="#111" />
      {/* Gold Rimmed Round Glasses */}
      <circle cx="20" cy="25" r="2.5" fill="none" stroke="#ffd700" strokeWidth="1" />
      <circle cx="28" cy="25" r="2.5" fill="none" stroke="#ffd700" strokeWidth="1" />
      <line x1="22.5" y1="25" x2="25.5" y2="25" stroke="#ffd700" strokeWidth="1" />
      
      {/* Cyberware cheek seams */}
      <path d="M 17,27 L 17,30 L 19,30" stroke="#ffd700" strokeWidth="0.5" fill="none" opacity="0.6" />
      <path d="M 31,27 L 31,30 L 29,30" stroke="#ffd700" strokeWidth="0.5" fill="none" opacity="0.6" />
      
      {/* Slicked Back Hair (Front/Bangs) - High receding hairline */}
      <path d="M 14,17 Q 18,12 21,15 Q 24,10 27,15 Q 30,12 34,17 Q 30,6 18,9 Z" fill="#d2d2d2" />
      <path d="M 23,13 Q 25,9 27,12" stroke="#ff0055" strokeWidth="1" fill="none" opacity="0.6" />
      
      {/* White Inner Shirt Collar */}
      <path d="M 17,32 L 31,32 L 31,37 L 17,37 Z" fill="#ffffff" stroke="#111" strokeWidth="1.5" />
      {/* Golden/Yellow Tie */}
      <path d="M 23.5,37 L 24.5,37 L 25,42 L 24,44 L 23,42 Z" fill="#ffd700" stroke="#c59b27" strokeWidth="0.5" />

      {/* Double-Breasted Jet-Black Corporate Suit Jacket */}
      <path d="M 15,32 L 33,32 L 35,46 L 13,46 Z" fill="#111111" stroke="#ffd700" strokeWidth="1" />
      {/* Gold Suit Lapel linings */}
      <path d="M 17,32 L 21,39" stroke="#ffd700" strokeWidth="0.75" />
      <path d="M 31,32 L 27,39" stroke="#ffd700" strokeWidth="0.75" />
      {/* Double Breasted Buttons */}
      <circle cx="21" cy="40" r="0.75" fill="#ffd700" />
      <circle cx="27" cy="40" r="0.75" fill="#ffd700" />
      <circle cx="21" cy="43" r="0.75" fill="#ffd700" />
      <circle cx="27" cy="43" r="0.75" fill="#ffd700" />

      {/* Stance: Hands Held Behind Back (Sleeves draping back) */}
      <path d="M 14,34 C 11,38 11,43 13,45" stroke="#111111" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M 34,34 C 37,38 37,43 35,45" stroke="#111111" strokeWidth="3.5" strokeLinecap="round" />

      {/* Walking Suit Pants Leg cycles */}
      {isWalking ? (
        walkFrame === 0 ? (
          <>
            {/* Left Leg Forward */}
            <path d="M 19,46 L 15,60 L 12,60" stroke="#111" strokeWidth="4.5" strokeLinecap="round" />
            {/* Right Leg Back */}
            <path d="M 29,46 L 31,58 L 34,58" stroke="#333" strokeWidth="4.5" strokeLinecap="round" />
          </>
        ) : (
          <>
            {/* Left Leg Back */}
            <path d="M 19,46 L 21,58 L 24,58" stroke="#333" strokeWidth="4.5" strokeLinecap="round" />
            {/* Right Leg Forward */}
            <path d="M 29,46 L 33,60 L 36,60" stroke="#111" strokeWidth="4.5" strokeLinecap="round" />
          </>
        )
      ) : (
        <>
          {/* Standing legs */}
          <path d="M 20,46 L 20,60 L 17,60" stroke="#111" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M 28,46 L 28,60 L 31,60" stroke="#111" strokeWidth="4.5" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
};

export default function CyberCharacter() {
  const [mounted, setMounted] = useState(false);
  const [pos, setPos] = useState({ x: 50, y: 82 }); // position in percentage
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isWalking, setIsWalking] = useState(false);
  const [walkFrame, setWalkFrame] = useState(0);
  const [targetPos, setTargetPos] = useState<{ x: number; y: number } | null>(null);
  const [isManualTarget, setIsManualTarget] = useState(false);
  const [fact, setFact] = useState<string | null>(null);

  const keysPressed = useRef<Set<string>>(new Set());
  const factTimeoutRef = useRef<number | null>(null);

  const facts = [
    "Fact: Creeper, written in 1971, was the first experimental self-replicating computer virus.",
    "Fact: 95% of cybersecurity breaches are caused by human error, like weak passwords.",
    "Security Tip: Enable Multi-Factor Authentication (MFA) to stop over 99% of bulk attacks.",
    "Warning: Ransomware attacks occur every 11 seconds globally. Backup your systems!",
    "Security Tip: Use a password manager. Reusing passwords across sites is a major risk.",
    "Fact: Phishing is the vector for over 80% of reported security incidents.",
    "Security Tip: Never plug in random USB drives. They can contain keyboard emulation payloads.",
    "Security Tip: Keep your OS, browser, and package dependencies updated to patch CVEs.",
    "Fact: The average time to detect and contain a data breach is 277 days.",
    "Fact: A hacker attack occurs every 39 seconds on average.",
    "Fact: Strong passphrases (e.g., 'blue-carrot-stable-bridge') are harder to brute-force than short complex ones."
  ];

  // Set mounted status to prevent hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // Keyboard controls listener
  useEffect(() => {
    if (!mounted) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (['arrowleft', 'arrowright', 'arrowup', 'arrowdown', 'w', 'a', 's', 'd'].includes(key)) {
        if (e.key.startsWith('Arrow')) {
          e.preventDefault(); // Prevent standard page scroll
        }
        keysPressed.current.add(e.key);
        keysPressed.current.add(key);
        setTargetPos(null); // Overwrite mouse click destination
        setIsManualTarget(true);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      keysPressed.current.delete(e.key);
      keysPressed.current.delete(key);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [mounted]);

  // Click & Touch (Mobile) listener
  useEffect(() => {
    if (!mounted) return;

    const handleWindowClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, input, textarea, [role="button"], #terminal, .nav-link, .role-card')) {
        return; // Ignore interactive components
      }
      
      const targetX = (e.clientX / window.innerWidth) * 100;
      const targetY = (e.clientY / window.innerHeight) * 100;
      
      // Constrain Y to a walkable corridor at the bottom
      const constrainedY = Math.min(Math.max(targetY, 78), 88);
      const constrainedX = Math.min(Math.max(targetX, 5), 90);
      
      setTargetPos({ x: constrainedX, y: constrainedY });
      setIsManualTarget(true);
    };

    const handleWindowTouch = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      const target = e.target as HTMLElement;
      if (target.closest('button, a, input, textarea, [role="button"], #terminal, .nav-link, .role-card')) {
        return; // Ignore interactive components
      }

      const clientX = e.touches[0].clientX;
      const clientY = e.touches[0].clientY;
      
      const targetX = (clientX / window.innerWidth) * 100;
      const targetY = (clientY / window.innerHeight) * 100;
      
      const constrainedY = Math.min(Math.max(targetY, 78), 88);
      const constrainedX = Math.min(Math.max(targetX, 5), 90);
      
      setTargetPos({ x: constrainedX, y: constrainedY });
      setIsManualTarget(true);
    };

    window.addEventListener('click', handleWindowClick);
    window.addEventListener('touchstart', handleWindowTouch, { passive: true });
    
    return () => {
      window.removeEventListener('click', handleWindowClick);
      window.removeEventListener('touchstart', handleWindowTouch);
    };
  }, [mounted]);

  // 60FPS Game Loop / RequestAnimationFrame tick
  useEffect(() => {
    if (!mounted) return;

    let animationId: number;
    let lastTime = performance.now();

    const tick = (time: number) => {
      const delta = time - lastTime;
      if (delta >= 16) { // ~60fps lock
        lastTime = time;

        setPos((prev) => {
          // 1. Keyboard Controls
          if (keysPressed.current.size > 0) {
            let dx = 0;
            let dy = 0;
            if (keysPressed.current.has('ArrowLeft') || keysPressed.current.has('a')) dx = -1;
            if (keysPressed.current.has('ArrowRight') || keysPressed.current.has('d')) dx = 1;
            if (keysPressed.current.has('ArrowUp') || keysPressed.current.has('w')) dy = -1;
            if (keysPressed.current.has('ArrowDown') || keysPressed.current.has('s')) dy = 1;

            if (dx !== 0 || dy !== 0) {
              const speed = 0.5; // percent increment per frame
              const newX = Math.min(Math.max(prev.x + dx * speed, 5), 90);
              const newY = Math.min(Math.max(prev.y + dy * speed, 78), 88);
              
              if (dx !== 0) {
                setDirection(dx < 0 ? 'left' : 'right');
              }
              setIsWalking(true);
              return { x: newX, y: newY };
            }
          }

          // 2. Target Pathfinding (Clicks/Taps/Wandering)
          if (targetPos) {
            const dx = targetPos.x - prev.x;
            const dy = targetPos.y - prev.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 1) {
              setTargetPos(null);
              setIsWalking(false);
              return prev;
            } else {
              const speed = 0.6; // percent per frame
              const ratio = speed / distance;
              const stepX = dx * ratio;
              const stepY = dy * ratio;
              
              const newX = prev.x + (Math.abs(stepX) > Math.abs(dx) ? dx : stepX);
              const newY = prev.y + (Math.abs(stepY) > Math.abs(dy) ? dy : stepY);
              
              setDirection(dx < 0 ? 'left' : 'right');
              setIsWalking(true);
              return { x: newX, y: newY };
            }
          }

          setIsWalking(false);
          return prev;
        });
      }
      animationId = requestAnimationFrame(tick);
    };

    animationId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationId);
  }, [mounted, targetPos]);

  // Leg swing walk-cycle frame toggler
  useEffect(() => {
    if (!isWalking) return;
    const interval = setInterval(() => {
      setWalkFrame((f) => (f === 0 ? 1 : 0));
    }, 150);
    return () => clearInterval(interval);
  }, [isWalking]);

  // Random wandering AI logic
  useEffect(() => {
    if (isWalking || targetPos || isManualTarget) return;

    const delay = Math.random() * 3000 + 4000; // Wander every 4-7 seconds
    const wanderTimeout = setTimeout(() => {
      const randomX = Math.random() * 85 + 5;
      const randomY = Math.random() * 10 + 78;
      setTargetPos({ x: randomX, y: randomY });
    }, delay);

    return () => clearTimeout(wanderTimeout);
  }, [isWalking, targetPos, isManualTarget]);

  // Inactivity timeout to switch back to autonomous wandering
  useEffect(() => {
    if (!isManualTarget) return;
    
    const inactivityTimeout = setTimeout(() => {
      setIsManualTarget(false);
    }, 10000); // Resume auto wandering after 10s of no input
    
    return () => clearTimeout(inactivityTimeout);
  }, [isManualTarget, targetPos, isWalking]);

  // Cybersecurity facts speech bubble manager
  useEffect(() => {
    const triggerFact = () => {
      const randomFact = facts[Math.floor(Math.random() * facts.length)];
      setFact(randomFact);
      
      if (factTimeoutRef.current) {
        window.clearTimeout(factTimeoutRef.current);
      }
      
      // Clear fact bubble after 6s
      factTimeoutRef.current = window.setTimeout(() => {
        setFact(null);
        factTimeoutRef.current = null;
      }, 6000);
    };

    const initialTimeout = setTimeout(triggerFact, 4000);
    const interval = setInterval(triggerFact, 18000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
      if (factTimeoutRef.current) {
        window.clearTimeout(factTimeoutRef.current);
      }
    };
  }, []);

  // Listen to custom commands triggered from the interactive Terminal
  useEffect(() => {
    if (!mounted) return;

    const handlePetCommand = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      const command = customEvent.detail;
      
      if (command === 'walk') {
        const randomX = Math.random() * 85 + 5;
        const randomY = Math.random() * 10 + 78;
        setTargetPos({ x: randomX, y: randomY });
        setIsManualTarget(true);
      } else if (command === 'fact') {
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        setFact(randomFact);
        
        if (factTimeoutRef.current) {
          window.clearTimeout(factTimeoutRef.current);
        }
        
        factTimeoutRef.current = window.setTimeout(() => {
          setFact(null);
          factTimeoutRef.current = null;
        }, 6000);
      }
    };

    window.addEventListener('pet-command', handlePetCommand);
    return () => window.removeEventListener('pet-command', handlePetCommand);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      <div 
        className="absolute transition-all duration-100 ease-linear"
        style={{
          left: `${pos.x}%`,
          top: `${pos.y}%`,
          transform: 'translate(-50%, -100%)',
        }}
      >
        {/* Playable Hitbox */}
        <div className="pointer-events-auto cursor-pointer relative group">
          
          {/* Fact Speech Bubble */}
          {fact && (
            <div className="absolute bottom-[75px] left-1/2 -translate-x-1/2 w-48 sm:w-56 p-3 bg-black/95 border border-[#ffd700]/35 rounded font-mono text-[9px] sm:text-[10px] leading-normal text-white shadow-[0_0_15px_rgba(255,215,0,0.25)] animate-fade-in z-50 select-text pointer-events-auto">
              <div className="relative">
                <span className="text-[#ffd700] font-bold block mb-1">R_OS_CORP //</span>
                {fact}
                {/* Speech Bubble Arrow */}
                <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 w-0 h-0 border-8 border-transparent border-t-black" />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-8 border-transparent border-t-[#ffd700]/30 -z-10" />
              </div>
            </div>
          )}

          {/* Sprite SVG */}
          <CharacterSVG isWalking={isWalking} walkFrame={walkFrame} direction={direction} />
          
          {/* Label Tooltip */}
          <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono text-[6px] sm:text-[7px] text-[#ffd700]/95 tracking-wider whitespace-nowrap bg-black/95 px-1.5 py-0.5 rounded border border-[#ffd700]/30 uppercase shadow-[0_0_8px_rgba(255,215,0,0.15)] flex flex-col items-center gap-0.5">
            <span className="font-bold text-[#ffd700]">Richard Pius // Head of Deep State & Military</span>
            <span className="text-white/40 text-[5px] sm:text-[6px]">WASD / Arrow Keys / Click to Move</span>
          </div>
        </div>
      </div>
    </div>
  );
}
