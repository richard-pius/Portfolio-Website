'use client';

import { ReactNode } from 'react';

interface MarqueeButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
}

export default function MarqueeButton({
  children,
  href,
  onClick,
  className = '',
  target,
}: MarqueeButtonProps) {
  const content = (
    <>
      <span className="btn-text relative z-10">{children}</span>
      <div className="btn-marquee">
        <div className="btn-marquee-inner">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i}>{children}</span>
          ))}
        </div>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`marquee-btn ${className}`}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`marquee-btn ${className}`}>
      {content}
    </button>
  );
}
