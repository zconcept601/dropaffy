import { ChevronDown, Headphones } from 'lucide-react';

import { helpItems } from '@/src/data/demo';

export default function AidePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 pb-24 pt-6 text-[var(--text)] md:pb-10">
      <div className="card p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-[var(--primary-soft)] p-3 text-[var(--primary)]"><Headphones className="h-5 w-5" /></div>
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--accent)]">Aide</div>
            <h1 className="mt-1 text-3xl font-black tracking-[-0.05em] text-[var(--primary)]">Aide</h1>
          </div>
        </div>

        <div className="mt-5 space-y-3">
          {helpItems.map((item) => (
            <div key={item.question} className="rounded-2xl border border-[var(--primary)]/10 bg-[var(--surface-soft)] p-4">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-bold text-[var(--text)]">{item.question}</h3>
                <ChevronDown className="h-4 w-4 text-[var(--muted)]" />
              </div>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-[22px] border border-dashed border-[var(--primary)]/20 bg-[var(--surface-soft)] p-4">
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">Contacter le support</div>
          <div className="mt-3 text-sm text-[var(--muted)]">WhatsApp : vide pour l’instant</div>
          <button type="button" disabled className="btn-secondary mt-4 w-full opacity-60">
            Bientôt disponible
          </button>
        </div>
      </div>
    </main>
  );
}
