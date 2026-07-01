'use client';

import React, { useState, useEffect, useRef } from 'react';

interface TerminalLine {
  text: string;
  type: 'input' | 'output' | 'error' | 'success';
}

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

export default function Terminal({ isFullscreen = false }: { isFullscreen?: boolean }) {
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState<number>(-1);
  const [inputVal, setInputVal] = useState<string>('');
  const [lines, setLines] = useState<TerminalLine[]>([
    { text: 'R OS v1.0.0 (TTY1) - Secure System Initialized.', type: 'output' },
    { text: 'Type "help" to view list of available operations.', type: 'output' },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const logEndRef = useRef<HTMLDivElement>(null);
  const sessionStartRef = useRef<number>(performance.now());

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  // Auto-focus terminal on mount
  useEffect(() => {
    focusInput();
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent page reload or form submit action
      const command = inputVal.trim();
      if (!command) return;

      const newLines = [...lines, { text: `richard@pius:~$ ${command}`, type: 'input' as const }];
      setLines(newLines);
      processCommand(command, newLines);

      setHistory([...history, command]);
      setHistoryIdx(-1);
      setInputVal('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIdx = historyIdx === -1 ? history.length - 1 : Math.max(0, historyIdx - 1);
      setHistoryIdx(nextIdx);
      setInputVal(history[nextIdx]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx === -1) return;
      const nextIdx = historyIdx + 1;
      if (nextIdx >= history.length) {
        setHistoryIdx(-1);
        setInputVal('');
      } else {
        setHistoryIdx(nextIdx);
        setInputVal(history[nextIdx]);
      }
    }
  };

  const processCommand = (cmd: string, currentLines: TerminalLine[]) => {
    const parts = cmd.toLowerCase().split(' ');
    const baseCmd = parts[0];
    const args = parts.slice(1);

    const addOutput = (...outputs: { text: string; type?: 'output' | 'error' | 'success' }[]) => {
      setLines([
        ...currentLines,
        ...outputs.map((o) => ({ text: o.text, type: o.type || 'output' })),
      ]);
    };

    switch (baseCmd) {
      case 'help':
        addOutput(
          { text: 'Available commands:', type: 'success' },
          { text: '  about      - Profile introduction summary' },
          { text: '  skills     - Technical developer toolkit' },
          { text: '  projects   - Show projects & source code links' },
          { text: '  open <num> - Open project link (e.g., "open 1")' },
          { text: '  education  - Academic credentials' },
          { text: '  work       - Employment & DevOps experience' },
          { text: '  contact    - Retrieve contact methods' },
          { text: '  neofetch   - Display specs and ASCII art' },
          { text: '  pet <cmd>  - Command background pet (walk, fact, hide, show)' },
          { text: '  ping       - Ping simulated host network' },
          { text: '  weather    - Query simulated Kochi weather report' },
          { text: '  secret     - Decrypt counter-intelligence database' },
          { text: '  whoami     - Print current user session details' },
          { text: '  date       - Print current local date/time' },
          { text: '  uptime     - Display system execution uptime' },
          { text: '  history    - Display command line history logs' },
          { text: '  clear      - Wipe screen buffer history' },
          { text: '  sudo       - Elevate privileges' }
        );
        break;

      case 'about':
        addOutput(
          { text: 'Profile Summary:', type: 'success' },
          { text: "I'm Richard Pius, a third-year BCA student passionate about computer science, programming, software engineering, and cybersecurity. I specialize in cloud infrastructure (AWS), docker containerization, mobile architecture (Flutter), and system-level hacking." }
        );
        break;

      case 'skills':
        addOutput(
          { text: 'Technical Toolkit:', type: 'success' },
          { text: '  Languages  : C, C++, Java, Python, Lisp, HTML/CSS, JS' },
          { text: '  Frameworks : React, Next.js, Flutter, Kaboom.js, Bootstrap' },
          { text: '  Developer  : Docker, AWS, Git, GitHub, Linux, SQL, MongoDB, Tableau' }
        );
        break;

      case 'projects':
        addOutput(
          { text: 'Project Catalog:', type: 'success' },
          { text: '  [1] Semantic Book Recommender - Python NLP AI engine' },
          { text: '  [2] ClearBreeze Forecast      - Responsive Dart/Flutter app' },
          { text: '  [3] Simple Linux Distro       - Text-based Common Lisp OS' },
          { text: 'Type "open 1", "open 2", or "open 3" to load code in a new tab.', type: 'success' }
        );
        break;

      case 'open':
        const num = args[0];
        if (num === '1') {
          window.open('https://github.com/richard-pius/A-semantic-library-book-recommender', '_blank');
          addOutput({ text: 'Launching Semantic Book Recommender GitHub repository...', type: 'success' });
        } else if (num === '2') {
          window.open('https://github.com/richard-pius/ClearBreeze-Forecast', '_blank');
          addOutput({ text: 'Launching ClearBreeze Forecast GitHub repository...', type: 'success' });
        } else if (num === '3') {
          window.open('https://github.com/richard-pius/simple-linux-distro-', '_blank');
          addOutput({ text: 'Launching Simple Linux Distro GitHub repository...', type: 'success' });
        } else {
          addOutput({ text: 'Error: Invalid repository index. Specify 1, 2, or 3.', type: 'error' });
        }
        break;

      case 'education':
        addOutput(
          { text: 'Academic Milestones:', type: 'success' },
          { text: '  Santhigiri College of Computer Science (BCA)' },
          { text: '    Bachelor of Computer Applications | July 2024 — Present' },
          { text: "  St. George's Higher Secondary School" },
          { text: '    Computer Science Stream | July 2022 — March 2024' }
        );
        break;

      case 'work':
        addOutput(
          { text: 'Experience Timeline:', type: 'success' },
          { text: '  IPSR Solutions Ltd — AI-Integrated Cloud & DevOps Intern' },
          { text: '    April 2026 — June 2026' },
          { text: '    • AWS clouds configurations and Linux administration' },
          { text: '    • Containerized environments (Docker) & automated Git pipelines' },
          { text: '  National Service Scheme (NSS) — Volunteer' },
          { text: '    September 2022 — March 2024' }
        );
        break;

      case 'contact':
        addOutput(
          { text: 'Get in touch:', type: 'success' },
          { text: '  Email: piusrichard713@gmail.com' },
          { text: '  Phone: +91 9446931260' },
          { text: '  GitHub: github.com/richard-pius' },
          { text: '  LinkedIn: linkedin.com/in/richard-pius-developer/' }
        );
        break;

      case 'neofetch':
        addOutput(
          { text: 'richard@r-os', type: 'success' },
          { text: '----------------' },
          { text: 'OS: R OS v1.0.0 x86_64' },
          { text: 'Host: Santhigiri College Nodes' },
          { text: 'Kernel: Next.js v16.2.9 (Turbopack)' },
          { text: 'Uptime: 2 hours' },
          { text: 'Shell: bash v5.2.15' },
          { text: 'CPU: BCA Student (Cybersecurity & Dev)' },
          { text: 'Memory: 16GB / Enthusiast' },
          { text: laptopAscii, type: 'output' }
        );
        break;

      case 'clear':
        setLines([]);
        break;

      case 'sudo':
        addOutput({ text: 'Error: Privilege escalation blocked. Richard is the only superuser.', type: 'error' });
        break;

      case 'history':
        if (history.length === 0) {
          addOutput({ text: 'No command history recorded.' });
        } else {
          addOutput(
            { text: 'Command history:', type: 'success' },
            ...history.map((cmdLine, index) => ({ text: `  ${index + 1}  ${cmdLine}` }))
          );
        }
        break;

      case 'date':
        addOutput({ text: new Date().toString(), type: 'success' });
        break;

      case 'uptime':
        const uptimeSecs = Math.floor((performance.now() - sessionStartRef.current) / 1000);
        const hrs = Math.floor(uptimeSecs / 3600);
        const mins = Math.floor((uptimeSecs % 3600) / 60);
        const secs = uptimeSecs % 60;
        addOutput({ text: `System uptime: ${hrs}h ${mins}m ${secs}s (Running under R OS Core)`, type: 'success' });
        break;

      case 'whoami':
        addOutput({ text: 'richard@r-os (uid: 0, gid: 0, role: superuser, head of deep state & military)', type: 'success' });
        break;

      case 'weather':
        addOutput(
          { text: 'ClearBreeze Weather Engine (v2.0.4)', type: 'success' },
          { text: '  Location: Kochi, Kerala, India' },
          { text: '  Temperature: 31°C (RealFeel: 35°C)' },
          { text: '  Humidity: 78% | Sky: Clear Blue Sky' },
          { text: '  Wind: 14 km/h NE' },
          { text: '  "Always keep a clear breeze in your forecast!"' }
        );
        break;

      case 'secret':
        addOutput(
          { text: '🔐 ACCESSING CLASSIFIED COUNTER-INTELLIGENCE DATABASE...', type: 'error' },
          { text: '  [STATUS] Security Firewall: INTACT' },
          { text: '  [STATUS] NetWatch intrusion attempts: BLOCKED' },
          { text: '  [STATUS] R_OS_CORP Relic project: SECURED (Level 10)' },
          { text: '  [NOTICE] Richard Pius security clearance status: MAXIMAL (OVERLORD)' }
        );
        break;

      case 'ping':
        const host = args[0] || 'r-os.corp';
        addOutput(
          { text: `PING ${host} (192.168.1.1): 56 data bytes`, type: 'success' },
          { text: `64 bytes from 192.168.1.1: icmp_seq=1 time=${Math.floor(Math.random() * 10) + 5}ms` },
          { text: `64 bytes from 192.168.1.1: icmp_seq=2 time=${Math.floor(Math.random() * 10) + 5}ms` },
          { text: `64 bytes from 192.168.1.1: icmp_seq=3 time=${Math.floor(Math.random() * 10) + 5}ms` },
          { text: `--- ${host} ping statistics ---` },
          { text: '3 packets transmitted, 3 packets received, 0% packet loss' }
        );
        break;

      case 'pet':
        const sub = args[0];
        if (sub === 'walk') {
          window.dispatchEvent(new CustomEvent('pet-command', { detail: 'walk' }));
          addOutput({ text: 'Instructing R_OS_CORP agent to move to new coordinates...', type: 'success' });
        } else if (sub === 'fact') {
          window.dispatchEvent(new CustomEvent('pet-command', { detail: 'fact' }));
          addOutput({ text: 'Forcing R_OS_CORP agent to broadcast security intelligence...', type: 'success' });
        } else if (sub === 'hide') {
          window.dispatchEvent(new CustomEvent('pet-command', { detail: 'hide' }));
          addOutput({ text: 'Cloak activated. Background pet character hidden.', type: 'success' });
        } else if (sub === 'show') {
          window.dispatchEvent(new CustomEvent('pet-command', { detail: 'show' }));
          addOutput({ text: 'Cloak deactivated. Background pet character visible.', type: 'success' });
        } else {
          addOutput(
            { text: 'Pet Controls Hub:', type: 'success' },
            { text: '  pet walk  - Force pet agent to wander to new coordinate' },
            { text: '  pet fact  - Force pet agent to speak a cybersecurity fact' },
            { text: '  pet hide  - Hide/cloak the background pet agent' },
            { text: '  pet show  - Show the background pet agent' }
          );
        }
        break;

      case 'cli':
        window.dispatchEvent(new CustomEvent('switch-os-mode', { detail: 'cli' }));
        addOutput({ text: 'Switching system to full-screen Command Line Interface...', type: 'success' });
        break;

      case 'gui':
        window.dispatchEvent(new CustomEvent('switch-os-mode', { detail: 'gui' }));
        addOutput({ text: 'System Notice: Booting Graphical User Interface desktop environment...', type: 'success' });
        break;

      default:
        addOutput({ text: `command not found: "${cmd}". Type "help" to see operations list.`, type: 'error' });
        break;
    }
  };

  return (
    <div
      onClick={focusInput}
      className={`w-full font-mono text-[10px] sm:text-xs leading-relaxed text-white/70 cursor-text select-none transition-all duration-500 ${
        isFullscreen
          ? 'h-full bg-black flex flex-col p-4'
          : 'max-w-lg bg-black/75 border border-white/10 hover:border-[#00f3ff]/30 p-5 rounded shadow-[0_20px_50px_rgba(0,0,0,0.7),_0_0_30px_rgba(0,243,255,0.02)]'
      }`}
    >
      {/* Title bar */}
      {!isFullscreen && (
        <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff00a0]/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#00f3ff]/80" />
            <span className="text-[10px] text-[#00f3ff] ml-2 tracking-wider font-semibold">R OS // TTY1</span>
          </div>
          <span className="text-[9px] text-[#ff00a0] uppercase tracking-widest font-bold">Interactive Shell</span>
        </div>
      )}

      {/* Terminal log window */}
      <div 
        className={`${
          isFullscreen ? 'flex-1 overflow-y-auto' : 'max-h-[260px] overflow-y-auto'
        } space-y-1.5 pr-2 scrollbar-thin`}
      >
        {lines.map((line, idx) => (
          <div
            key={idx}
            className={`whitespace-pre-wrap break-all ${
              line.type === 'input'
                ? 'text-[#00f3ff]'
                : line.type === 'error'
                ? 'text-[#ff00a0] font-semibold'
                : line.type === 'success'
                ? 'text-white font-semibold'
                : 'text-white/60'
            }`}
          >
            {line.text}
          </div>
        ))}
        <div ref={logEndRef} />
      </div>

      {/* Input prompt line */}
      <div className="flex items-center gap-2 mt-3 pt-3 border-t border-white/5 text-white">
        <span className="text-[#00f3ff]/60 font-semibold flex-shrink-0">richard@r-os:~$</span>
        <div className="relative flex-1 flex items-center">
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent border-none outline-none font-mono text-[#00f3ff] text-[10px] sm:text-xs p-0 caret-[#00f3ff] selection:bg-white/10"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
          />
        </div>
      </div>
    </div>
  );
}
