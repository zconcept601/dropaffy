import { ArrowRight, BadgeCheck, CircleDashed, Wallet } from 'lucide-react';

import { wallet } from '@/src/data/demo';

export default function PortefeuillePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 pb-24 pt-6 text-[var(--text)] md:pb-10">
      <div className="card p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-[var(--primary-soft)] p-3 text-[var(--primary)]"><Wallet className="h-5 w-5" /></div>
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--accent)]">Portefeuille</div>
            <h1 className="mt-1 text-3xl font-black tracking-[-0.05em] text-[var(--primary)]">Portefeuille</h1>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-[22px] bg-[var(--primary)] p-5 text-white">
            <div className="text-xs uppercase tracking-[0.2em] text-primary-100">Solde disponible</div>
            <div className="mt-3 text-3xl font-black">{wallet.balance.toLocaleString('fr-FR')} FCFA</div>
            <div className="mt-2 text-sm text-primary-100">Commission en attente de validation : {wallet.pending.toLocaleString('fr-FR')} FCFA</div>
          </div>
          <div className="rounded-[22px] border border-[var(--primary)]/10 bg-[var(--surface-soft)] p-5">
            <div className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">Méthode de retrait</div>
            <div className="mt-3 text-lg font-bold text-[var(--text)]">{wallet.method}</div>
            <div className="mt-2 text-sm text-[var(--muted)]">{wallet.number}</div>
            <button type="button" className="btn-primary mt-4 w-full">Demander un retrait</button>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-bold text-[var(--primary)]">Historique des retraits</h2>
          <div className="mt-4 space-y-3">
            {wallet.history.map((entry) => (
              <div key={entry.id} className="flex items-center justify-between rounded-2xl border border-[var(--primary)]/10 bg-[var(--surface-soft)] p-4">
                <div>
                  <div className="font-semibold text-[var(--text)]">{entry.amount.toLocaleString('fr-FR')} FCFA</div>
                  <div className="text-xs text-[var(--muted)]">{entry.date}</div>
                </div>
                <div className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold ${entry.status === 'Complété' ? 'bg-[rgba(31,157,98,0.12)] text-[var(--success)]' : 'bg-[rgba(234,125,42,0.12)] text-[var(--warning)]'}`}>
                  {entry.status === 'Complété' ? <BadgeCheck className="h-3.5 w-3.5" /> : <CircleDashed className="h-3.5 w-3.5" />}
                  {entry.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
