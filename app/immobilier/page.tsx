import Link from 'next/link';
import { ArrowRight, BedDouble, Bath, MapPin, Ruler, Star } from 'lucide-react';

import { realEstate } from '@/src/data/demo';

const listing = realEstate[0];

export default function ImmobilierPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-24 pt-6 text-[var(--text)] md:pb-10">
      <div className="card p-4 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">Immobilier</div>
            <h1 className="mt-2 text-3xl font-black tracking-[-0.05em] text-[var(--primary)]">Immobilier</h1>
          </div>
          <button type="button" className="btn-primary">Publier une annonce</button>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-3">
          <select className="rounded-2xl border border-[var(--primary)]/10 bg-[var(--surface-soft)] px-3 py-3 text-sm outline-none">
            <option>Type</option>
            <option>Vente</option>
            <option>Location</option>
          </select>
          <select className="rounded-2xl border border-[var(--primary)]/10 bg-[var(--surface-soft)] px-3 py-3 text-sm outline-none">
            <option>Ville</option>
            <option>Abidjan</option>
            <option>Dakar</option>
          </select>
          <select className="rounded-2xl border border-[var(--primary)]/10 bg-[var(--surface-soft)] px-3 py-3 text-sm outline-none">
            <option>Tranche de prix</option>
            <option>0 - 20 M</option>
            <option>20 M +</option>
          </select>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {realEstate.map((item) => (
          <article key={item.id} className="card overflow-hidden">
            <div className="grid gap-0 md:grid-cols-[180px_1fr]">
              <img src={item.image} alt={item.title} className="h-36 w-full object-cover md:h-full" loading="lazy" />
              <div className="p-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-[var(--primary-soft)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--primary)]">
                    {item.type}
                  </span>
                  <span className="text-[10px] text-[var(--muted)]">{item.city}</span>
                </div>
                <h3 className="mt-3 text-xl font-bold text-[var(--primary)]">{item.title}</h3>
                <div className="mt-2 flex items-center gap-2 text-xs text-[var(--muted)]">
                  <MapPin className="h-4 w-4 text-[var(--primary)]" />
                  {item.district}, {item.city}
                </div>
                <div className="mt-3 flex items-center gap-4 text-[11px] text-[var(--muted)]">
                  <span className="inline-flex items-center gap-1"><Ruler className="h-4 w-4 text-[var(--primary)]" /> {item.surface} m²</span>
                  <span className="inline-flex items-center gap-1"><BedDouble className="h-4 w-4 text-[var(--primary)]" /> 4 chambres</span>
                </div>
                <div className="mt-4 text-2xl font-black text-[var(--text)]">{item.price.toLocaleString('fr-FR')} FCFA</div>
                <Link href={`/immobilier/${item.id}`} className="mt-4 block w-full rounded-full bg-[var(--primary)] px-4 py-3 text-center text-sm font-bold text-white">
                  Faire une demande
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
