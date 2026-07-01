'use client';

import React, { useState, useEffect, useRef } from 'react';
import { X, Minus, Square } from 'lucide-react';

interface WindowProps {
  id: string;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  defaultX: number;
  defaultY: number;
  defaultWidth: string;
  defaultHeight: string;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  onFocus: () => void;
  children: React.ReactNode;
}

export default function Window({
  id,
  title,
  isOpen,
  isMinimized,
  isMaximized,
  zIndex,
  defaultX,
  defaultY,
  defaultWidth,
  defaultHeight,
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
  children,
}: WindowProps) {
  const [position, setPosition] = useState({ x: defaultX, y: defaultY });
  const [size, setSize] = useState({ width: defaultWidth, height: defaultHeight });
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dragRef = useRef<{ startX: number; startY: number; posX: number; posY: number } | null>(null);
  const windowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMobile || isMaximized) return;
    onFocus();
    setIsDragging(true);
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      posX: position.x,
      posY: position.y,
    };
    e.preventDefault();
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !dragRef.current) return;
      const deltaX = e.clientX - dragRef.current.startX;
      const deltaY = e.clientY - dragRef.current.startY;
      
      // Boundaries check
      let newX = dragRef.current.posX + deltaX;
      let newY = dragRef.current.posY + deltaY;

      // Restrict top bar from leaving the top of viewport
      newY = Math.max(0, Math.min(newY, window.innerHeight - 40));
      newX = Math.max(-200, Math.min(newX, window.innerWidth - 100));

      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      dragRef.current = null;
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  if (!isOpen) return null;
  if (isMinimized) return null;

  const windowStyle: React.CSSProperties = isMobile
    ? {
        position: 'fixed',
        top: '60px',
        left: 0,
        right: 0,
        bottom: '80px',
        zIndex,
      }
    : isMaximized
    ? {
        position: 'absolute',
        top: '10px',
        left: '10px',
        right: '10px',
        bottom: '85px',
        zIndex,
      }
    : {
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: size.width,
        height: size.height,
        zIndex,
      };

  return (
    <div
      ref={windowRef}
      style={windowStyle}
      onClick={onFocus}
      className={`os-window ${zIndex === 100 ? 'active' : ''} rounded-lg flex flex-col overflow-hidden`}
    >
      {/* Title bar */}
      <div
        onMouseDown={handleMouseDown}
        className="os-window-header flex items-center justify-between pl-4 pr-1 py-1.5 bg-black/60 border-b border-white/5 select-none"
      >
        {/* Title (left aligned Windows 11 style) */}
        <span className="text-[10px] sm:text-xs font-mono font-semibold tracking-wider text-white/80 select-none truncate">
          {title}
        </span>

        {/* Windows 11 Style Controls (right aligned) */}
        <div className="flex items-center gap-0.5 flex-shrink-0">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMinimize();
            }}
            className="w-7 h-7 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors border-none p-0 cursor-pointer rounded-sm"
            title="Minimize"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMaximize();
            }}
            className="w-7 h-7 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors border-none p-0 cursor-pointer rounded-sm"
            title="Maximize"
          >
            <Square className="w-3 h-3" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="w-7 h-7 flex items-center justify-center text-white/60 hover:text-white hover:bg-red-600 transition-colors border-none p-0 cursor-pointer rounded-sm"
            title="Close"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Content area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 scrollbar-thin bg-black/30">
        {children}
      </div>
    </div>
  );
}
