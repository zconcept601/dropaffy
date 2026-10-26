import Link from 'next/link';
import { ArrowRight, Activity, Bell, ChevronRight, Sparkles, TrendingUp, Wallet } from 'lucide-react';

import { recentActivity, revenueOverview } from '@/src/data/demo';

export default function EspacePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-24 pt-6 text-[var(--text)] md:pb-10">
      <div className="card p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--accent)]">Accueil</div>
            <h1 className="mt-2 text-3xl font-black tracking-[-0.05em] text-[var(--primary)]">Bonjour, Marie !</h1>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)] text-lg font-bold text-white">M</div>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {[{ label: 'Commissions gagnées', value: `${revenueOverview.earned.toLocaleString('fr-FR')} FCFA`, icon: Wallet }, { label: 'Ventes confirmées', value: `${revenueOverview.confirmedSales}`, icon: TrendingUp }, { label: 'Clics', value: `${revenueOverview.clicks.toLocaleString('fr-FR')}`, icon: Activity }].map(({ label, value, icon: Icon }) => (
            <div key={label} className="rounded-[22px] border border-[var(--primary)]/10 bg-[var(--surface-soft)] p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[var(--muted)]">{label}</span>
                <Icon className="h-4 w-4 text-[var(--primary)]" />
              </div>
              <div className="mt-3 text-xl font-black text-[var(--text)]">{value}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
        <div className="card p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-[var(--primary)]">Activité récente</h2>
            <span className="text-xs text-[var(--muted)]">7 jours</span>
          </div>
          <div className="mt-5 space-y-3">
            {recentActivity.map((item) => (
              <div key={item.id} className="flex items-center justify-between rounded-2xl bg-[var(--surface-soft)] p-3">
                <div>
                  <div className="font-semibold text-[var(--text)]">{item.title}</div>
                  <div className="text-xs text-[var(--muted)]">{item.time}</div>
                </div>
                <ChevronRight className="h-4 w-4 text-[var(--muted)]" />
              </div>
            ))}
          </div>
        </div>

        <div className="card p-5">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-[var(--primary-soft)] p-2 text-[var(--primary)]"><Bell className="h-4 w-4" /></div>
            <h2 className="text-lg font-bold text-[var(--primary)]">Actions rapides</h2>
          </div>
          <div className="mt-4 space-y-3">
            {[
              ['Découvrir les offres', '/centrale'],
              ['Mes liens', '/liens'],
              ['Portefeuille', '/portefeuille'],
              ['Aide', '/aide']
            ].map(([label, href], index) => (
              <Link key={label} href={href} className="flex items-center justify-between rounded-2xl border border-[var(--primary)]/10 bg-[var(--surface-soft)] p-3 text-sm font-semibold text-[var(--text)]">
                {label}
                <ArrowRight className="h-4 w-4 text-[var(--primary)]" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <Link href="/centrale" className="btn-primary">
          <Sparkles className="mr-2 h-4 w-4" /> Explorer les offres
        </Link>
      </div>
    </main>
  );
}
