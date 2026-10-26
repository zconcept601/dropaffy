'use client';

import { useState } from 'react';

import { demoProfiles, type DemoProfile } from '@/src/data/demo';

export function DemoModeSwitcher() {
  const [profile, setProfile] = useState<DemoProfile>('Visiteur');

  return (
    <div className="fixed bottom-20 right-3 z-50 md:bottom-5 md:right-5">
      <div className="rounded-2xl border border-[var(--primary)]/15 bg-[var(--surface)] p-2 shadow-[var(--shadow)] backdrop-blur-sm">
        <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
          Mode démo
        </div>
        <div className="flex flex-wrap gap-1.5">
          {demoProfiles.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setProfile(item)}
              className={`rounded-full px-2.5 py-1.5 text-[11px] font-medium transition ${
                profile === item
                  ? 'bg-[var(--primary)] text-white'
                  : 'bg-[var(--surface-soft)] text-[var(--text)]'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
