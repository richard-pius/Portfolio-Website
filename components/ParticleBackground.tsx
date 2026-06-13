'use client';

import React from 'react';

const asciiArts = [
  // Art 1: Mechanical macro pad keyboard
  ` _________________________________________
|| Esc ||  1  ||  2  ||  3  ||  4  ||  5  ||
||-----+-----+-----+-----+-----+-----||
|| Tab ||  Q  ||  W  ||  E  ||  R  ||  T  ||
||-----+-----+-----+-----+-----+-----||
|| Caps||  A  ||  S  ||  D  ||  F  ||  G  ||
||-----+-----+-----+-----+-----+-----||
|| Shift  ||  Z  ||  X  ||  C  ||  V  ||
||--------+-----+-----+-----+---------||
|| Ctrl || Alt ||    Space    || Enter||
 \\______\\______\\______________\\_______/`,

  // Art 2: Terminal node / Server blade
  `  ___________________________________
 / [  R OS v1.0  ] [ SYSTEM: OK ]    \\
|====================================|
| [o] [o] [o] [o] [o] [o] [o] [o]    |
| [--------------------------------] |
| [o] [o] [o] [o] [o] [o] [o] [o]    |
| [--------------------------------] |
 \\__________________________________/`,

  // Art 3: CPU schematic / ALU Unit
  `     +---------------------------+
     |   +---+   +---+   +---+   |
  ---|   |ALU|   |REG|   |FPU|   |---
  ---|   +---+   +---+   +---+   |---
     |                           |
  ---|       CONTROL  UNIT       |---
  ---|                           |---
     +---------------------------+`
];

export default function ParticleBackground() {
  // Generate 24 items repeating the 3 arts to cover the viewport
  const items = Array.from({ length: 24 }).map((_, i) => asciiArts[i % asciiArts.length]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none select-none z-0 opacity-[0.015] font-mono text-[9px] leading-tight text-white flex flex-wrap gap-16 p-8 justify-around items-center content-around">
      {items.map((art, idx) => (
        <pre key={idx} className="m-4">
          {art}
        </pre>
      ))}
    </div>
  );
}
