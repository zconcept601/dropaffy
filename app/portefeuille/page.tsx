import { CheckCircle2, CircleDashed, Clock3 } from 'lucide-react';

import { declarations } from '@/src/data/demo';

export default function DeclarerVentePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 pb-24 pt-6 text-[var(--text)] md:pb-10">
      <div className="card p-5 sm:p-6">
        <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--accent)]">Déclarer une vente</div>
        <h1 className="mt-2 text-3xl font-black tracking-[-0.05em] text-[var(--primary)]">Déclarer une vente</h1>

        <form className="mt-6 space-y-4">
          <select className="w-full rounded-2xl border border-[var(--primary)]/10 bg-[var(--surface-soft)] px-4 py-3 text-sm outline-none">
            <option>Choisir un produit lié à votre lien</option>
            <option>Huile d’Argan 100 ml</option>
            <option>Sac à main premium</option>
          </select>
          <input type="number" placeholder="Quantité" className="w-full rounded-2xl border border-[var(--primary)]/10 bg-[var(--surface-soft)] px-4 py-3 text-sm outline-none" />
          <input type="text" placeholder="Nom du client" className="w-full rounded-2xl border border-[var(--primary)]/10 bg-[var(--surface-soft)] px-4 py-3 text-sm outline-none" />
          <input type="tel" placeholder="Contact du client" className="w-full rounded-2xl border border-[var(--primary)]/10 bg-[var(--surface-soft)] px-4 py-3 text-sm outline-none" />
          <textarea placeholder="Note" className="min-h-[110px] w-full rounded-2xl border border-[var(--primary)]/10 bg-[var(--surface-soft)] px-4 py-3 text-sm outline-none" />
          <button type="submit" className="btn-primary w-full">Déclarer la vente</button>
        </form>
      </div>

      <div className="mt-6 card p-5">
        <h2 className="text-lg font-bold text-[var(--primary)]">Mes déclarations</h2>
        <div className="mt-4 space-y-3">
          {declarations.map((entry) => (
            <div key={entry.id} className="rounded-2xl border border-[var(--primary)]/10 bg-[var(--surface-soft)] p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="font-semibold text-[var(--text)]">{entry.product}</div>
                  <div className="text-xs text-[var(--muted)]">{entry.client} · {entry.contact}</div>
                </div>
                <div className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold ${entry.status === 'Confirmée' ? 'bg-[rgba(31,157,98,0.12)] text-[var(--success)]' : entry.status === 'En attente' ? 'bg-[rgba(234,125,42,0.12)] text-[var(--warning)]' : 'bg-[rgba(217,60,47,0.12)] text-[var(--danger)]'}`}>
                  {entry.status === 'Confirmée' ? <CheckCircle2 className="h-3.5 w-3.5" /> : entry.status === 'En attente' ? <Clock3 className="h-3.5 w-3.5" /> : <CircleDashed className="h-3.5 w-3.5" />}
                  {entry.status}
                </div>
              </div>
              <div className="mt-2 text-xs text-[var(--muted)]">Quantité : {entry.qty} · {entry.note}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
