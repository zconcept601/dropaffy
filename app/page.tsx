import Link from 'next/link';

import { Header } from '@/components/header';
import { MobileShell } from '@/components/mobile-shell';
import { products, realEstate } from '@/src/data/demo';

export default function VisitorHomePage() {
  return (
    <>
      <Header />
      <main className="pb-24 md:pb-10">
        <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <div className="card p-5 sm:p-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/10 bg-[var(--primary-soft)] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
              Bienvenue sur DropAffy
            </div>
            <h1 className="text-3xl font-black tracking-[-0.06em] text-[var(--primary)] sm:text-5xl">Bienvenue sur DropAffy</h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">Un réseau commercial et d’opportunités pour l’Afrique de l’Ouest, pensé pour le partage, la vente et les commissions.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/centrale" className="btn-primary">Découvrir les offres</Link>
              <Link href="/aide" className="btn-secondary">Comprendre comment ça marche</Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-2 sm:px-6">
          <div className="mb-4 text-xl font-black tracking-[-0.04em] text-[var(--primary)]">Comment ça marche</div>
          <div className="grid gap-4 md:grid-cols-3">
            {['Choisissez une offre', 'Partagez votre lien', 'Suivez vos ventes et vos commissions'].map((title, index) => (
              <div key={title} className="card p-5">
                <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--accent)]">0{index + 1}</div>
                <h3 className="mt-3 text-lg font-bold text-[var(--text)]">{title}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-black tracking-[-0.04em] text-[var(--primary)]">Offres</h2>
            <Link href="/centrale" className="text-sm font-semibold text-[var(--primary)]">Voir tout</Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {products.slice(0, 3).map((item) => (
              <article key={item.id} className="card overflow-hidden">
                <img src={item.image} alt={item.name} className="h-36 w-full object-cover" loading="lazy" />
                <div className="p-4">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">{item.category}</div>
                  <div className="mt-2 text-lg font-bold text-[var(--text)]">{item.name}</div>
                  <div className="mt-2 text-base font-black text-[var(--primary)]">{item.price.toLocaleString('fr-FR')} FCFA</div>
                  <div className="mt-3 rounded-full bg-[var(--accent-soft)] px-2.5 py-1 text-[11px] font-bold text-[var(--accent)]">Commission {item.commission.toLocaleString('fr-FR')} FCFA · {item.commissionRate}%</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-black tracking-[-0.04em] text-[var(--primary)]">Immobilier</h2>
            <Link href="/immobilier" className="text-sm font-semibold text-[var(--primary)]">Voir tout</Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {realEstate.slice(0, 2).map((item) => (
              <article key={item.id} className="card overflow-hidden">
                <img src={item.image} alt={item.title} className="h-44 w-full object-cover" loading="lazy" />
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[var(--primary-soft)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--primary)]">{item.type}</span>
                    <span className="text-[10px] text-[var(--muted)]">{item.city}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-[var(--text)]">{item.title}</h3>
                  <div className="mt-2 text-base font-black text-[var(--primary)]">{item.price.toLocaleString('fr-FR')} FCFA</div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <MobileShell />
    </>
  );
}

