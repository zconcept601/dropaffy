import { ArrowUpRight, BriefcaseBusiness, PackageCheck, Users } from 'lucide-react';

import { networkStats } from '@/src/data/demo';

const items = [
  { label: 'Membres', value: networkStats.members.toLocaleString('fr-FR'), icon: Users },
  { label: 'Fournisseurs', value: networkStats.suppliers.toLocaleString('fr-FR'), icon: BriefcaseBusiness },
  { label: 'Produits', value: networkStats.products.toLocaleString('fr-FR'), icon: PackageCheck },
  { label: 'Ventes confirmées', value: networkStats.confirmedSales.toLocaleString('fr-FR'), icon: ArrowUpRight }
];

export default function ResauPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 text-[var(--text)]">
      <div className="card p-5 sm:p-8">
        <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--accent)]">Le réseau en chiffres</div>
        <h1 className="mt-2 text-3xl font-black tracking-[-0.05em] text-[var(--primary)]">Le réseau en chiffres</h1>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {items.map(({ label, value, icon: Icon }) => (
            <div key={label} className="rounded-[22px] border border-[var(--primary)]/10 bg-[var(--surface-soft)] p-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--primary-soft)] text-[var(--primary)]">
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-4 text-2xl font-black text-[var(--text)]">{value}</div>
              <div className="mt-1 text-sm text-[var(--muted)]">{label}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-[22px] bg-[var(--primary)] p-5 text-white">
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-100">Volume</div>
          <div className="mt-2 text-3xl font-black">{networkStats.volume}</div>
        </div>
      </div>
    </main>
  );
}
