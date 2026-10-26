import Link from 'next/link';
import { Bath, BedDouble, MapPin, Ruler, Sparkles } from 'lucide-react';

import { realEstate } from '@/src/data/demo';

const listing = realEstate[0];

export default function ImmobilierDetailPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 pb-24 pt-6 text-[var(--text)] md:pb-10">
      <div className="card overflow-hidden">
        <div className="grid gap-0 md:grid-cols-[1.2fr_0.8fr]">
          <div className="p-3">
            <div className="grid grid-cols-2 gap-2">
              {listing.gallery.map((image, index) => (
                <img key={index} src={image} alt={listing.title} className="h-40 w-full rounded-2xl object-cover" loading="lazy" />
              ))}
            </div>
          </div>
          <div className="p-5">
            <div className="inline-flex rounded-full bg-[var(--primary-soft)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--primary)]">
              {listing.type}
            </div>
            <h1 className="mt-3 text-2xl font-black tracking-[-0.04em] text-[var(--primary)]">{listing.title}</h1>
            <div className="mt-2 flex items-center gap-2 text-xs text-[var(--muted)]"><MapPin className="h-4 w-4 text-[var(--primary)]" /> {listing.district}, {listing.city}</div>
            <div className="mt-4 text-3xl font-black text-[var(--text)]">{listing.price.toLocaleString('fr-FR')} FCFA</div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-[var(--muted)]">
              <div className="rounded-2xl bg-[var(--surface-soft)] p-3"><span className="block text-[10px] uppercase tracking-[0.12em]">Surface</span><span className="mt-2 inline-flex items-center gap-2"><Ruler className="h-4 w-4 text-[var(--primary)]" /> {listing.surface} m²</span></div>
              <div className="rounded-2xl bg-[var(--surface-soft)] p-3"><span className="block text-[10px] uppercase tracking-[0.12em]">Chambres</span><span className="mt-2 inline-flex items-center gap-2"><BedDouble className="h-4 w-4 text-[var(--primary)]" /> 4</span></div>
              <div className="rounded-2xl bg-[var(--surface-soft)] p-3"><span className="block text-[10px] uppercase tracking-[0.12em]">Salles de bain</span><span className="mt-2 inline-flex items-center gap-2"><Bath className="h-4 w-4 text-[var(--primary)]" /> 2</span></div>
              <div className="rounded-2xl bg-[var(--surface-soft)] p-3"><span className="block text-[10px] uppercase tracking-[0.12em]">Quartier</span><span className="mt-2 inline-flex items-center gap-2"><Sparkles className="h-4 w-4 text-[var(--primary)]" /> {listing.district}</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-[1fr_0.8fr]">
        <div className="card p-5">
          <h2 className="text-lg font-bold text-[var(--primary)]">Description</h2>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{listing.description}</p>
          <h3 className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-[var(--accent)]">Caractéristiques</h3>
          <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
            {listing.features.map((feature) => (
              <li key={feature} className="flex gap-2"><span className="text-[var(--success)]">•</span>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="card p-5">
          <h2 className="text-lg font-bold text-[var(--primary)]">Faire une demande</h2>
          <form className="mt-4 space-y-3">
            <input className="w-full rounded-2xl border border-[var(--primary)]/10 bg-[var(--surface-soft)] px-3 py-3 text-sm outline-none" placeholder="Nom complet" />
            <input className="w-full rounded-2xl border border-[var(--primary)]/10 bg-[var(--surface-soft)] px-3 py-3 text-sm outline-none" placeholder="Téléphone" />
            <textarea className="min-h-[100px] w-full rounded-2xl border border-[var(--primary)]/10 bg-[var(--surface-soft)] px-3 py-3 text-sm outline-none" placeholder="Votre demande" />
            <button type="submit" className="btn-primary w-full">Envoyer la demande</button>
          </form>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <Link href="/immobilier" className="btn-secondary">Retour à la liste</Link>
      </div>
    </main>
  );
}
