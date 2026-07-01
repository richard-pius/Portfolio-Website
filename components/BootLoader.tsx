'use client';

import React, { useState, useEffect, useRef } from 'react';

interface BootLoaderProps {
  onComplete: () => void;
}

export default function BootLoader({ onComplete }: BootLoaderProps) {
  const [lines, setLines] = useState<string[]>([]);
  const [phase, setPhase] = useState<'booting' | 'loginPrompt' | 'typingLogin' | 'passwordPrompt' | 'typingPassword' | 'welcome' | 'done'>('booting');
  const [loginText, setLoginText] = useState('');
  const [passwordText, setPasswordText] = useState('');
  const logEndRef = useRef<HTMLDivElement | null>(null);

  const bootLogs = [
    'Initializing R OS boot sequence...',
    '[  OK  ] Mounted /sys/kernel/security',
    '[  OK  ] Started Create Static Device Nodes in /dev',
    '[  OK  ] Started Cryptography Setup for crypt_root',
    '[  OK  ] Reached target Local File Systems (pre)',
    '[  OK  ] Mounted /boot/efi',
    '[  OK  ] Reached target Local File Systems',
    '[  OK  ] Started LSB: Security audits daemon',
    '[  OK  ] Started Network Time Synchronization',
    '[  OK  ] Started Network Manager',
    '[  OK  ] Reached target Multi-User System',
    '[  OK  ] Reached target Graphical Interface',
  ];

  useEffect(() => {
    if (logEndRef.current) {
      logEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [lines, loginText, passwordText]);

  // Phase 1: Boot Logs printing
  useEffect(() => {
    let index = 0;
    const printLog = () => {
      if (index < bootLogs.length) {
        setLines((prev) => [...prev, bootLogs[index]]);
        index++;
        setTimeout(printLog, Math.random() * 180 + 40);
      } else {
        setTimeout(() => setPhase('loginPrompt'), 300);
      }
    };
    printLog();
  }, []);

  // Phase 2: Typing Login
  useEffect(() => {
    if (phase === 'loginPrompt') {
      setPhase('typingLogin');
    }
  }, [phase]);

  useEffect(() => {
    if (phase === 'typingLogin') {
      const username = 'richard';
      let charIdx = 0;
      const typeUser = () => {
        if (charIdx < username.length) {
          setLoginText((prev) => prev + username[charIdx]);
          charIdx++;
          setTimeout(typeUser, 150);
        } else {
          setTimeout(() => setPhase('passwordPrompt'), 200);
        }
      };
      typeUser();
    }
  }, [phase]);

  // Phase 3: Typing Password
  useEffect(() => {
    if (phase === 'passwordPrompt') {
      setPhase('typingPassword');
    }
  }, [phase]);

  useEffect(() => {
    if (phase === 'typingPassword') {
      const password = '********';
      let charIdx = 0;
      const typePass = () => {
        if (charIdx < password.length) {
          setPasswordText((prev) => prev + password[charIdx]);
          charIdx++;
          setTimeout(typePass, 120);
        } else {
          setTimeout(() => setPhase('welcome'), 300);
        }
      };
      typePass();
    }
  }, [phase]);

  // Phase 4: Welcome & Complete
  useEffect(() => {
    if (phase === 'welcome') {
      setLines((prev) => [
        ...prev,
        `r_os login: richard`,
        `Password: ${passwordText}`,
        '',
        `Last login: Wed Jul 01 22:20:02 on tty1`,
        `Welcome to R OS v1.0.0 (kernel 6.1.0-r-os-x86_64)`,
        `[SYSTEM] Security clearance: OVERLORD status authenticated.`,
        `[SYSTEM] Launching GUI desktop environment...`,
      ]);
      
      setTimeout(() => {
        setPhase('done');
        onComplete();
      }, 1000);
    }
  }, [phase]);

  return (
    <div className="fixed inset-0 bg-[#05070a] text-[#00f3ff] p-6 font-mono text-[10px] sm:text-xs leading-normal select-none z-50 overflow-y-auto flex flex-col justify-start">
      <div className="max-w-2xl w-full mx-auto space-y-1">
        {/* Render printed lines */}
        {lines.map((line, idx) => (
          <div key={idx} className={line && line.startsWith('[  OK  ]') ? 'text-emerald-400' : 'text-[#00f3ff]'}>
            {line}
          </div>
        ))}

        {/* Render input lines during login phase */}
        {phase === 'typingLogin' && (
          <div>
            <span>r_os login: </span>
            <span>{loginText}</span>
            <span className="w-1.5 h-3 bg-[#00f3ff] inline-block animate-pulse ml-0.5" />
          </div>
        )}

        {(phase === 'passwordPrompt' || phase === 'typingPassword') && (
          <>
            <div>
              <span>r_os login: richard</span>
            </div>
            <div>
              <span>Password: </span>
              <span>{passwordText}</span>
              <span className="w-1.5 h-3 bg-[#00f3ff] inline-block animate-pulse ml-0.5" />
            </div>
          </>
        )}

        <div ref={logEndRef} />
      </div>
    </div>
  );
}
