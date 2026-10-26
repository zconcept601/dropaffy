import Link from 'next/link';
import { Copy, ExternalLink, Share2, TrendingUp } from 'lucide-react';

import { memberLinks } from '@/src/data/demo';

export default function LiensPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-24 pt-6 text-[var(--text)] md:pb-10">
      <div className="card p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--accent)]">Mes liens</div>
            <h1 className="mt-2 text-3xl font-black tracking-[-0.05em] text-[var(--primary)]">Mes liens</h1>
          </div>
          <button type="button" className="btn-primary">Partager</button>
        </div>

        <div className="mt-5 space-y-4">
          {memberLinks.map((item) => (
            <div key={item.id} className="rounded-[22px] border border-[var(--primary)]/10 bg-[var(--surface-soft)] p-4">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-sm font-bold text-[var(--text)]">{item.product}</div>
                  <div className="mt-2 break-all text-xs text-[var(--muted)]">{item.link}</div>
                </div>
                <div className="flex gap-2">
                  <button type="button" className="rounded-full bg-[var(--primary)] px-3 py-2 text-xs font-semibold text-white">Copier</button>
                  <button type="button" className="rounded-full border border-[var(--primary)]/10 bg-white px-3 py-2 text-xs font-semibold text-[var(--text)]">Partager</button>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-4">
                <div className="rounded-2xl bg-white p-3 text-center">
                  <div className="text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">Clics</div>
                  <div className="mt-1 text-lg font-black text-[var(--text)]">{item.clicks}</div>
                </div>
                <div className="rounded-2xl bg-white p-3 text-center">
                  <div className="text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">Vues</div>
                  <div className="mt-1 text-lg font-black text-[var(--text)]">{item.views}</div>
                </div>
                <div className="rounded-2xl bg-white p-3 text-center">
                  <div className="text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">Ventes</div>
                  <div className="mt-1 text-lg font-black text-[var(--text)]">{item.sales}</div>
                </div>
                <div className="rounded-2xl bg-white p-3 text-center">
                  <div className="text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">Commission</div>
                  <div className="mt-1 text-lg font-black text-[var(--text)]">{item.commission.toLocaleString('fr-FR')}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
