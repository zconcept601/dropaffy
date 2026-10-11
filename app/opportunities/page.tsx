import Link from 'next/link';
import { ArrowRight, Check, CircleDollarSign, Filter, MapPin, Search, SlidersHorizontal, Star } from 'lucide-react';
import { opportunities } from '@/lib/mock-data';

export default function OpportunitiesPage() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-neutral-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-500">Opportunités</p>
              <h1 className="mt-2 text-3xl font-bold tracking-[-0.05em] text-primary-700">Découvrir les offres</h1>
            </div>
            <Link href="/publish" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-600">
              Publier une offre
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-6 flex flex-col gap-3 lg:flex-row">
            <div className="flex flex-1 items-center gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3">
              <Search className="h-5 w-5 text-neutral-500" />
              <input type="text" placeholder="Recherche par mot-clé" className="w-full bg-transparent text-sm text-neutral-900 outline-none placeholder:text-neutral-400" />
            </div>
            <button className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm font-medium text-neutral-700">
              <SlidersHorizontal className="h-4 w-4" />
              Filtres
            </button>
          </div>
        </div>

        <section className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-[2rem] border border-neutral-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <Filter className="h-5 w-5 text-primary-600" />
              <h2 className="text-lg font-semibold text-primary-700">Filtres</h2>
            </div>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">Catégorie</label>
                <select className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none">
                  <option>Toutes</option>
                  <option>Produits</option>
                  <option>Services</option>
                  <option>Immobilier</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">Localisation</label>
                <select className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none">
                  <option>Toutes régions</option>
                  <option>Abidjan</option>
                  <option>Douala</option>
                  <option>Dakar</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">Budget</label>
                <input type="text" placeholder="Ex. 50 000 FCFA" className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none" />
              </div>
            </div>
          </aside>

          <div className="space-y-6">
            {opportunities.map((opportunity) => (
              <article key={opportunity.id} className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-sm">
                <div className="grid gap-0 md:grid-cols-[240px_1fr]">
                  <img src={opportunity.image} alt={opportunity.title} className="h-full w-full object-cover md:max-h-none" />
                  <div className="p-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-primary-50 px-2.5 py-1 text-xs font-medium text-primary-600">{opportunity.category}</span>
                        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">{opportunity.status}</span>
                      </div>
                      <div className="flex items-center gap-1 text-amber-400">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-xs font-medium text-neutral-600">4.8</span>
                      </div>
                    </div>

                    <h3 className="mt-4 text-2xl font-bold text-primary-700">{opportunity.title}</h3>
                    <p className="mt-3 text-base leading-7 text-neutral-600">{opportunity.description}</p>

                    <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-neutral-600">
                      <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-primary-600" /> {opportunity.location}</span>
                      <span className="inline-flex items-center gap-2"><CircleDollarSign className="h-4 w-4 text-primary-600" /> {opportunity.price}</span>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <div className="text-sm text-neutral-500">Publiée il y a 2 jours</div>
                      <Link href={`/opportunity/${opportunity.id}`} className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-600">
                        Voir l’offre
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
