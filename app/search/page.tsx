import Link from 'next/link';
import { ArrowRight, CircleDollarSign, MapPin, Search } from 'lucide-react';
import { partnerResults } from '@/lib/mock-data';

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-neutral-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-500">Recherche</p>
          <h1 className="mt-2 text-3xl font-bold tracking-[-0.05em] text-primary-700">Qui recherchez-vous aujourd’hui ?</h1>

          <div className="mt-6 grid gap-4 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3">
              <label className="mb-2 block text-sm font-medium text-neutral-700">Besoin</label>
              <input type="text" placeholder="Ex : fournisseur de produits alimentaires" className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-400" />
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3">
              <label className="mb-2 block text-sm font-medium text-neutral-700">Catégorie</label>
              <select className="w-full bg-transparent text-sm outline-none">
                <option>Produits</option>
                <option>Services</option>
                <option>Immobilier</option>
              </select>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3">
              <label className="mb-2 block text-sm font-medium text-neutral-700">Localisation</label>
              <input type="text" placeholder="Abidjan" className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-400" />
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1.5 text-sm font-medium text-primary-600">
              <CircleDollarSign className="h-4 w-4" />
              Recherche payante à partir de 200 FCFA / 3 jours
            </div>
            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 px-5 py-3 text-sm font-semibold text-white shadow-soft hover:bg-primary-600">
              Lancer ma recherche
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>

        <section className="mt-8">
          <h2 className="text-2xl font-bold tracking-[-0.04em] text-primary-700">Résultats correspondants</h2>
          <div className="mt-5 grid gap-5 lg:grid-cols-3">
            {partnerResults.map((partner) => (
              <article key={partner.name} className="rounded-[1.75rem] border border-neutral-200 bg-white p-5 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-lg font-bold text-primary-600">{partner.name.charAt(0)}</div>
                <h3 className="mt-4 text-xl font-semibold text-neutral-900">{partner.name}</h3>
                <div className="mt-2 flex items-center justify-between text-sm text-neutral-600">
                  <span>{partner.category}</span>
                  <span>{partner.match}</span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm text-neutral-500"><MapPin className="h-4 w-4 text-primary-600" /> {partner.location}</div>
                <Link href="/profile" className="mt-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-800 transition hover:border-primary-200 hover:text-primary-600">
                  Voir le profil
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
