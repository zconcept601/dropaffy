'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Filter, Search, SlidersHorizontal, Star } from 'lucide-react';

import { products } from '@/src/data/demo';

export default function CentralePage() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <main className="mx-auto max-w-6xl px-4 pb-24 pt-6 text-[var(--text)] md:pb-10">
      <div className="card p-4 sm:p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">La Centrale</div>
            <h1 className="mt-2 text-3xl font-black tracking-[-0.05em] text-[var(--primary)]">La Centrale</h1>
          </div>
          <button type="button" onClick={() => setShowFilters(true)} className="btn-secondary w-full md:w-auto">
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Afficher le filtre
          </button>
        </div>

        <div className="mt-5 flex flex-col gap-3 md:flex-row">
          <label className="flex flex-1 items-center gap-2 rounded-full border border-[var(--primary)]/10 bg-[var(--surface-soft)] px-4 py-3">
            <Search className="h-4 w-4 text-[var(--muted)]" />
            <input
              placeholder="Rechercher un produit"
              className="w-full bg-transparent text-sm text-[var(--text)] outline-none placeholder:text-[var(--muted)]"
            />
          </label>
          <button type="button" className="btn-primary md:w-auto">
            Trier
          </button>
        </div>

        <div className="mt-5 flex gap-2 overflow-x-auto pb-2">
          {['Tous', 'Beauté', 'Mode', 'Électronique', 'Services'].map((category) => (
            <button
              key={category}
              type="button"
              className={`shrink-0 rounded-full px-3 py-2 text-xs font-semibold ${
                category === 'Tous'
                  ? 'bg-[var(--primary)] text-white'
                  : 'bg-[var(--surface-soft)] text-[var(--text)]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {products.map((item) => (
          <article key={item.id} className="card overflow-hidden">
            <div className="grid gap-0 md:grid-cols-[180px_1fr]">
              <img src={item.image} alt={item.name} className="h-36 w-full object-cover md:h-full" loading="lazy" />
              <div className="p-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-[var(--accent-soft)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1 text-[var(--warning)]">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-[10px] font-semibold">4.8</span>
                  </div>
                </div>
                <h3 className="mt-3 text-xl font-bold text-[var(--primary)]">{item.name}</h3>
                <div className="mt-2 text-2xl font-extrabold text-[var(--text)]">{item.price.toLocaleString('fr-FR')} FCFA</div>
                <div className="mt-3 inline-flex rounded-full bg-[var(--accent-soft)] px-2.5 py-1 text-[11px] font-bold text-[var(--accent)]">
                  Commission {item.commission.toLocaleString('fr-FR')} FCFA · {item.commissionRate} %
                </div>
                <div className="mt-3 text-[11px] text-[var(--muted)]">{item.activeAffiliates} affiliés actifs</div>
                <Link href={`/centrale/${item.id}`} className="mt-4 block w-full rounded-full bg-[var(--primary)] px-4 py-3 text-center text-sm font-bold text-white">
                  Promouvoir ce produit →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {showFilters && (
        <div className="fixed inset-0 z-50 flex items-end bg-black/30 md:items-center md:justify-center">
          <div className="w-full rounded-t-[24px] bg-[var(--surface)] p-5 shadow-[var(--shadow)] md:max-w-md md:rounded-[24px]">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[var(--primary)]">Filtrer</h3>
              <button onClick={() => setShowFilters(false)} type="button" className="text-sm text-[var(--muted)]">
                Fermer
              </button>
            </div>
            <div className="mt-5 space-y-4">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[var(--text)]">Catégorie</label>
                <select className="w-full rounded-2xl border border-[var(--primary)]/10 bg-[var(--surface-soft)] px-3 py-3 text-sm outline-none">
                  <option>Beauté</option>
                  <option>Mode</option>
                  <option>Électronique</option>
                  <option>Services</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-[var(--text)]">Tranche de commission</label>
                <select className="w-full rounded-2xl border border-[var(--primary)]/10 bg-[var(--surface-soft)] px-3 py-3 text-sm outline-none">
                  <option>1 000 - 3 000 FCFA</option>
                  <option>3 000 - 8 000 FCFA</option>
                  <option>8 000 FCFA +</option>
                </select>
              </div>
              <button type="button" className="text-sm font-semibold text-[var(--primary)]">
                Voir plus de filtres
              </button>
            </div>
            <button type="button" onClick={() => setShowFilters(false)} className="btn-primary mt-6 w-full">
              Appliquer
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
