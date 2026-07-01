'use client';

import React, { useState } from 'react';
import BootLoader from '@/components/BootLoader';
import Desktop from '@/components/Desktop';

export default function Home() {
  const [isBooted, setIsBooted] = useState(false);

  return (
    <main className="w-screen h-screen overflow-hidden relative">
      {!isBooted ? (
        <BootLoader onComplete={() => setIsBooted(true)} />
      ) : (
        <Desktop />
      )}
    </main>
  );
}
