'use client';

import React, { useState, useEffect } from 'react';
import { 
  Terminal as TerminalIcon, 
  FileText, 
  Code, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  Award, 
  Monitor, 
  Clock, 
  Cpu, 
  Activity, 
  Network,
  RotateCcw,
  LayoutGrid,
  Wifi,
  Battery,
  Signal,
  ChevronLeft,
  Circle,
  Square as SquareIcon,
  Sun,
  Moon,
  Bot
} from 'lucide-react';
import Window from './Window';
import About from './About';
import Skills from './Skills';
import Work from './Work';
import Education from './Education';
import Projects from './Projects';
import Certifications from './Certifications';
import ContactForm from './ContactForm';
import Terminal from './Terminal';
import CyberCharacter from './CyberCharacter';

interface WindowState {
  id: string;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  x: number;
  y: number;
  width: string;
  height: string;
}

export default function Desktop() {
  const [mode, setMode] = useState<'gui' | 'cli'>('gui');
  const [isLauncherOpen, setIsLauncherOpen] = useState(false);
  const [activeWindowId, setActiveWindowId] = useState<string | null>(null);
  const [uptime, setUptime] = useState(0);
  const [cpuLoad, setCpuLoad] = useState(18);
  const [localTime, setLocalTime] = useState('');
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [showPet, setShowPet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Sync theme with document class list
  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [theme]);

  // Track window resizing for mobile mode switcher
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initial Window states
  const [windows, setWindows] = useState<WindowState[]>([
    {
      id: 'bio',
      title: 'Bio.txt',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 10,
      x: 60,
      y: 60,
      width: 'min(640px, 90vw)',
      height: 'min(500px, 70vh)',
    },
    {
      id: 'skills',
      title: 'Skills.sys',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 10,
      x: 120,
      y: 90,
      width: 'min(680px, 92vw)',
      height: 'min(440px, 68vh)',
    },
    {
      id: 'experience',
      title: 'Experience.log',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 10,
      x: 180,
      y: 120,
      width: 'min(720px, 95vw)',
      height: 'min(520px, 75vh)',
    },
    {
      id: 'education',
      title: 'Education.edu',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 10,
      x: 240,
      y: 70,
      width: 'min(700px, 92vw)',
      height: 'min(500px, 70vh)',
    },
    {
      id: 'projects',
      title: 'Projects.exe',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 10,
      x: 90,
      y: 150,
      width: 'min(750px, 95vw)',
      height: 'min(550px, 80vh)',
    },
    {
      id: 'certs',
      title: 'Certificates.db',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 10,
      x: 150,
      y: 110,
      width: 'min(720px, 92vw)',
      height: 'min(480px, 70vh)',
    },
    {
      id: 'contact',
      title: 'Contact.bat',
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      zIndex: 10,
      x: 210,
      y: 160,
      width: 'min(680px, 92vw)',
      height: 'min(480px, 70vh)',
    },
    {
      id: 'terminal',
      title: 'Terminal.sh',
      isOpen: true, // Boot open by default to welcome users
      isMinimized: false,
      isMaximized: false,
      zIndex: 20,
      x: 80,
      y: 50,
      width: 'min(550px, 90vw)',
      height: 'min(400px, 60vh)',
    },
  ]);

  // System statistics loops
  useEffect(() => {
    const timer = setInterval(() => setUptime((prev) => prev + 1), 1000);
    const cpuTimer = setInterval(() => {
      setCpuLoad(Math.floor(10 + Math.random() * 25));
    }, 3000);

    const clockTimer = setInterval(() => {
      const now = new Date();
      setLocalTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
          timeZone: 'Asia/Kolkata',
        }) + ' IST'
      );
    }, 1000);

    return () => {
      clearInterval(timer);
      clearInterval(cpuTimer);
      clearInterval(clockTimer);
    };
  }, []);

  // Listen to CLI switch-os-mode events
  useEffect(() => {
    const handleSwitch = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail === 'cli') {
        setMode('cli');
        // Minimize all windows or keep them open behind CLI
      } else if (customEvent.detail === 'gui') {
        setMode('gui');
        // Re-focus terminal window in GUI
        openWindow('terminal');
      }
    };
    window.addEventListener('switch-os-mode', handleSwitch);
    return () => window.removeEventListener('switch-os-mode', handleSwitch);
  }, []);

  const openWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((win) => {
        if (win.id === id) {
          return { ...win, isOpen: true, isMinimized: false };
        }
        return win;
      })
    );
    focusWindow(id);
    setIsLauncherOpen(false);
  };

  const closeWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((win) => {
        if (win.id === id) {
          return { ...win, isOpen: false };
        }
        return win;
      })
    );
    if (activeWindowId === id) {
      setActiveWindowId(null);
    }
  };

  const minimizeWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((win) => {
        if (win.id === id) {
          return { ...win, isMinimized: true };
        }
        return win;
      })
    );
    if (activeWindowId === id) {
      setActiveWindowId(null);
    }
  };

  const maximizeWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((win) => {
        if (win.id === id) {
          return { ...win, isMaximized: !win.isMaximized };
        }
        return win;
      })
    );
  };

  const focusWindow = (id: string) => {
    setActiveWindowId(id);
    setWindows((prev) => {
      const maxZ = Math.max(...prev.map((w) => w.zIndex), 10);
      return prev.map((win) => {
        if (win.id === id) {
          return { ...win, zIndex: maxZ + 1 };
        }
        return win;
      });
    });
  };

  const appIcons = [
    { id: 'bio', title: 'Bio.txt', icon: FileText, color: 'text-cyan-400' },
    { id: 'skills', title: 'Skills.sys', icon: Code, color: 'text-pink-500' },
    { id: 'experience', title: 'Experience.log', icon: Briefcase, color: 'text-emerald-400' },
    { id: 'education', title: 'Education.edu', icon: GraduationCap, color: 'text-blue-400' },
    { id: 'projects', title: 'Projects.exe', icon: Monitor, color: 'text-amber-400' },
    { id: 'certs', title: 'Certificates.db', icon: Award, color: 'text-purple-400' },
    { id: 'contact', title: 'Contact.bat', icon: Mail, color: 'text-red-400' },
    { id: 'terminal', title: 'Terminal.sh', icon: TerminalIcon, color: 'text-green-400 animate-pulse' },
  ];

  // Pure CLI mode rendering
  if (mode === 'cli') {
    return (
      <div className="fixed inset-0 bg-black z-50 p-4 font-mono">
        {/* CLI Floating Exit Switch */}
        <div className="absolute top-4 right-6 flex items-center gap-4 text-[10px] tracking-widest text-[#00f3ff] z-50">
          <span>// PURE_CLI_ACTIVE</span>
          <button 
            onClick={() => setMode('gui')}
            className="border border-[#00f3ff] hover:bg-[#00f3ff] hover:text-black px-3 py-1 transition-all rounded font-mono text-[9px] cursor-pointer"
          >
            BOOT GUI (gui)
          </button>
        </div>
        <div className="w-full h-full pt-10">
          <Terminal isFullscreen={true} />
        </div>
      </div>
    );
  }

  return (
    <div className="os-desktop select-none">
      {/* 1. Mobile Android Top Status Bar */}
      {isMobile && (
        <div className="fixed top-0 left-0 right-0 h-8 bg-black/80 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-5 text-[9px] font-mono tracking-widest text-white/70 z-40 select-none">
          <div className="flex items-center gap-1">
            <span>R_OS</span>
            <span className="text-white/20">|</span>
            <span>{localTime ? localTime.slice(0, 5) : '00:00'}</span>
          </div>
          <div className="flex items-center gap-2">
            <Signal className="w-3 h-3 text-[#00f3ff]" />
            <Wifi className="w-3 h-3 text-[#00f3ff]" />
            <div className="flex items-center gap-1">
              <Battery className="w-3.5 h-3.5 text-emerald-400" />
              <span>98%</span>
            </div>
          </div>
        </div>
      )}

      {/* 2. Desktop Shortcuts Grid (Windows 11 Left alignment OR Android launcher layout) */}
      <div 
        className={`absolute z-10 ${
          isMobile 
            ? 'top-14 left-0 right-0 px-6 py-4 grid grid-cols-4 gap-y-8 gap-x-4 justify-items-center' 
            : 'top-16 left-6 flex flex-col gap-6 items-start'
        }`}
      >
        {appIcons.map((app) => {
          const Icon = app.icon;
          return (
            <div
              key={app.id}
              onClick={() => openWindow(app.id)}
              className={`${isMobile ? 'flex flex-col items-center gap-1.5' : 'os-icon'}`}
              style={{ cursor: 'pointer' }}
            >
              <div className={`p-3 bg-black/40 border border-white/5 rounded-lg ${app.color} shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-200`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-[9px] font-mono text-white/80 font-medium tracking-wide">
                {app.title}
              </span>
            </div>
          );
        })}
      </div>

      {/* 3. Window Instances Container */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <div className="relative w-full h-full pointer-events-auto">
          {windows.map((win) => (
            <Window
              key={win.id}
              id={win.id}
              title={win.title}
              isOpen={win.isOpen}
              isMinimized={win.isMinimized}
              isMaximized={win.isMaximized}
              zIndex={win.zIndex === Math.max(...windows.map((w) => w.zIndex)) ? 100 : win.zIndex}
              defaultX={win.x}
              defaultY={win.y}
              defaultWidth={win.width}
              defaultHeight={win.height}
              onClose={() => closeWindow(win.id)}
              onMinimize={() => minimizeWindow(win.id)}
              onMaximize={() => maximizeWindow(win.id)}
              onFocus={() => focusWindow(win.id)}
            >
              {win.id === 'bio' && <About />}
              {win.id === 'skills' && <Skills />}
              {win.id === 'experience' && <Work />}
              {win.id === 'education' && <Education />}
              {win.id === 'projects' && <Projects />}
              {win.id === 'certs' && <Certifications />}
              {win.id === 'contact' && <ContactForm />}
              {win.id === 'terminal' && <Terminal />}
            </Window>
          ))}
        </div>
      </div>

      {/* 4. Windows 11 Bottom Taskbar (Desktop) OR Android Navigation Bar (Mobile) */}
      {isMobile ? (
        /* Android 3-Button Navigation Bar */
        <div className="fixed bottom-0 left-0 right-0 h-12 bg-black/95 border-t border-white/5 flex items-center justify-around z-40 select-none px-6">
          {/* Back button (Triangle/Chevron) - Closes active process */}
          <button
            onClick={() => {
              if (activeWindowId) {
                closeWindow(activeWindowId);
              }
            }}
            className="p-2 text-white/50 hover:text-white transition-colors cursor-pointer border-none bg-transparent"
            title="Back"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Home button (Circle) - Minimizes all processes */}
          <button
            onClick={() => {
              setWindows((prev) => prev.map((w) => ({ ...w, isMinimized: true })));
              setActiveWindowId(null);
            }}
            className="p-2 text-white/50 hover:text-white transition-colors cursor-pointer border-none bg-transparent"
            title="Home"
          >
            <Circle className="w-4.5 h-4.5" />
          </button>

          {/* Recents button (Square) - Focuses/Opens closed windows */}
          <button
            onClick={() => {
              const closed = windows.filter((w) => !w.isOpen);
              if (closed.length > 0) {
                openWindow(closed[0].id);
              } else {
                setWindows((prev) => prev.map((w) => ({ ...w, isMinimized: false })));
              }
            }}
            className="p-2 text-white/50 hover:text-white transition-colors cursor-pointer border-none bg-transparent"
            title="Recents"
          >
            <SquareIcon className="w-4 h-4" />
          </button>
        </div>
      ) : (
        /* Windows 11 Desktop Taskbar */
        <>
          {/* Centered App Taskbar */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-fit z-40 pointer-events-auto shadow-lg rounded-xl border border-white/5">
            <div className="os-dock flex items-center justify-center gap-3 px-5 py-3">
              {/* Windows 11 Start Menu Trigger Icon */}
              <button
                onClick={() => setIsLauncherOpen(!isLauncherOpen)}
                className={`p-2 rounded-lg border transition-all ${
                  isLauncherOpen
                    ? 'bg-[#00f3ff]/15 border-[#00f3ff] text-[#00f3ff]'
                    : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                } cursor-pointer`}
                title="Start Menu"
              >
                <LayoutGrid className="w-4.5 h-4.5" />
              </button>

              <div className="w-[1px] h-5 bg-white/10" />

              {/* Running Apps Centered */}
              {appIcons.map((app) => {
                const Icon = app.icon;
                const win = windows.find((w) => w.id === app.id);
                const isOpen = win?.isOpen;
                const isActive = activeWindowId === app.id && !win?.isMinimized;

                return (
                  <div key={app.id} className="relative flex flex-col items-center group">
                    <button
                      onClick={() => {
                        if (isOpen) {
                          if (isActive) {
                            minimizeWindow(app.id);
                          } else {
                            focusWindow(app.id);
                            setWindows(prev => prev.map(w => w.id === app.id ? { ...w, isMinimized: false } : w));
                          }
                        } else {
                          openWindow(app.id);
                        }
                      }}
                      className={`os-dock-icon p-2 rounded-lg border transition-all ${
                        isActive
                          ? 'bg-[#00f3ff]/10 border-[#00f3ff]/40 text-[#00f3ff]'
                          : isOpen
                          ? 'bg-white/10 border-white/20 text-white'
                          : 'bg-black/20 border-white/5 text-white/50 hover:text-white'
                      } cursor-pointer`}
                    >
                      <Icon className="w-4 h-4" />
                    </button>

                    {/* Windows-style under-indicator light bar */}
                    {isOpen && (
                      <span
                        className={`absolute bottom-0 w-2.5 h-[2px] rounded-full transition-all ${
                          isActive ? 'bg-[#00f3ff] shadow-[0_0_8px_#00f3ff]' : 'bg-white/40'
                        }`}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Windows 11 Bottom-Right System Tray */}
          <div className="absolute bottom-6 right-6 px-4 py-3 bg-black/60 backdrop-blur-md border border-white/5 rounded-xl shadow-lg flex items-center gap-3.5 text-white/60 font-mono text-[9px] tracking-widest z-40 select-none">
            <Wifi className="w-3.5 h-3.5 text-white/60" />
            <div className="flex items-center gap-1">
              <Battery className="w-3.5 h-3.5 text-emerald-400" />
              <span>98%</span>
            </div>
            
            <div className="w-[1px] h-4 bg-white/15" />
            
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}
              className="text-white/60 hover:text-[#00f3ff] transition-colors bg-transparent border-none p-0 cursor-pointer"
              title={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            >
              {theme === 'light' ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
            </button>
            
            <div className="w-[1px] h-4 bg-white/15" />
            
            <div className="flex items-center gap-1.5 text-white/80">
              <Clock className="w-3 h-3 text-white/45" />
              <span>{localTime || '00:00:00 IST'}</span>
            </div>
          </div>
        </>
      )}

      {/* 5. Windows 11 Centered Start Menu Launcher */}
      {isLauncherOpen && (
        <div 
          className="absolute w-[290px] sm:w-[360px] bg-[#0b0f17]/95 border border-white/10 rounded-xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-50 pointer-events-auto animate-fade-in font-mono text-[10px] text-white/80"
          style={{
            bottom: '80px',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          {/* Header */}
          <div className="border-b border-white/5 pb-3 mb-4 flex items-center justify-between">
            <span className="text-[8px] text-white/40 uppercase tracking-widest">// OS_LAUNCH_GRID</span>
            <span className="text-[#00f3ff]">R OS v1.0</span>
          </div>

          {/* Windows 11 Pinned Apps Grid */}
          <div className="grid grid-cols-3 gap-2.5 mb-5">
            {appIcons.slice(0, 6).map((app) => {
              const Icon = app.icon;
              return (
                <div
                  key={app.id}
                  onClick={() => openWindow(app.id)}
                  className="flex flex-col items-center gap-1 p-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded-lg cursor-pointer transition-all hover:scale-102"
                >
                  <Icon className={`w-4 h-4 ${app.color}`} />
                  <span className="text-[8px] truncate max-w-full text-white/80 font-medium">{app.title}</span>
                </div>
              );
            })}
          </div>

          {/* Recommended Section (Simulated System Stats) */}
          <div className="border-t border-white/5 pt-3 mb-4">
            <span className="text-[8px] text-white/40 uppercase tracking-widest block mb-2">// RECOMMENDED_LOGS</span>
            <div className="space-y-1.5">
              <div className="flex justify-between items-center bg-black/40 px-3 py-1.5 border border-white/5 rounded text-[9px]">
                <span className="text-white/40 flex items-center gap-1"><Cpu className="w-3 h-3 text-[#00f3ff]" /> CPU</span>
                <span className="text-[#00f3ff] font-semibold">{cpuLoad}%</span>
              </div>
              <div className="flex justify-between items-center bg-black/40 px-3 py-1.5 border border-white/5 rounded text-[9px]">
                <span className="text-white/40 flex items-center gap-1"><Activity className="w-3 h-3 text-[#ff00a0]" /> UPTIME</span>
                <span className="text-white/80 font-semibold">{uptime}s</span>
              </div>
            </div>
          </div>

          {/* Toggle Assistant Option */}
          <div className="flex justify-between items-center bg-black/40 px-3 py-2 border border-white/5 rounded mb-4 text-[9px]">
            <span className="text-white/40 flex items-center gap-1.5">
              <Bot className="w-3.5 h-3.5 text-[#00f3ff]" /> PET ASSISTANT
            </span>
            <button
              onClick={() => setShowPet((prev) => !prev)}
              className={`px-3 py-0.5 rounded border text-[8px] font-semibold transition-all cursor-pointer ${
                showPet
                  ? 'border-[#00f3ff] text-[#00f3ff] bg-[#00f3ff]/10'
                  : 'border-white/20 text-white/50 bg-white/5'
              }`}
            >
              {showPet ? 'ON' : 'OFF'}
            </button>
          </div>

          {/* Footer profile bar */}
          <div className="flex items-center justify-between border-t border-white/5 pt-3.5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#00f3ff] to-[#ff00a0] flex items-center justify-center font-bold text-black text-[10px]">
                RP
              </div>
              <div>
                <p className="font-bold text-white leading-none">RICHARD PIUS</p>
                <p className="text-[7px] text-white/35 mt-0.5 tracking-wider">ADMINISTRATOR</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setMode('cli');
                  setIsLauncherOpen(false);
                }}
                className="p-1.5 border border-[#00f3ff]/30 text-[#00f3ff] hover:bg-[#00f3ff] hover:text-black rounded transition-all cursor-pointer"
                title="TTY Shell"
              >
                <TerminalIcon className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => window.location.reload()}
                className="p-1.5 border border-[#ff00a0]/30 text-[#ff00a0] hover:bg-[#ff00a0] hover:text-white rounded transition-all cursor-pointer"
                title="Reboot"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* 6. Optional Pet Assistant */}
      {showPet && <CyberCharacter />}
    </div>
  );
}
