import Link from 'next/link';
import { Activity, Bell, CreditCard, PackageOpen, Search, Sparkles, TrendingUp, UserCog } from 'lucide-react';
import { dashboardStats, opportunities, quickActions } from '@/lib/mock-data';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <header className="rounded-[2rem] border border-neutral-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-500">Mon espace</p>
              <h1 className="mt-2 text-3xl font-bold tracking-[-0.05em] text-primary-700">Bonjour, Marie</h1>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-500 text-sm font-bold text-white">M</div>
              <div>
                <div className="font-semibold text-neutral-900">Marie D.</div>
                <div className="text-sm text-neutral-500">Compte actif</div>
              </div>
            </div>
          </div>
        </header>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-neutral-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-500">Recherche</p>
                <h2 className="mt-2 text-2xl font-bold text-primary-700">Trouver une opportunité</h2>
              </div>
              <div className="rounded-full bg-primary-50 p-3 text-primary-600">
                <Search className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <input type="text" placeholder="Cherchez un fournisseur, un service ou une offre" className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-primary-300" />
              <button className="rounded-full bg-primary-500 px-5 py-3 text-sm font-semibold text-white">Rechercher</button>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {dashboardStats.map((item) => (
                <div key={item.label} className="rounded-2xl bg-neutral-50 p-4">
                  <div className="text-2xl font-bold text-primary-700">{item.value}</div>
                  <div className="mt-1 text-sm text-neutral-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-neutral-200 bg-primary-700 p-5 text-white shadow-soft">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm uppercase tracking-[0.2em] text-primary-100">Solde</div>
                <div className="mt-2 text-3xl font-bold">240 FCFA</div>
              </div>
              <div className="rounded-2xl bg-white/10 p-3">
                <CreditCard className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-6 rounded-[1.5rem] bg-white/10 p-4">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-primary-100" />
                <div className="text-sm text-primary-50">Notifications récentes</div>
              </div>
              <div className="mt-4 text-sm leading-6 text-primary-50/80">3 nouvelles demandes de contact. 1 publication mise en ligne aujourd’hui.</div>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-[-0.04em] text-primary-700">Actions rapides</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {quickActions.map((action) => (
              <Link key={action.title} href={action.href} className="rounded-[1.5rem] border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
                  {action.title.includes('Découvrir') ? <Sparkles className="h-5 w-5" /> : action.title.includes('Publier') ? <PackageOpen className="h-5 w-5" /> : action.title.includes('Partenaire') ? <TrendingUp className="h-5 w-5" /> : <UserCog className="h-5 w-5" />}
                </div>
                <div className="mt-4 font-semibold text-neutral-900">{action.title}</div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-neutral-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-[-0.04em] text-primary-700">Opportunités recommandées</h2>
              <Link href="/opportunities" className="text-sm font-semibold text-primary-600">Voir tout</Link>
            </div>

            <div className="mt-5 space-y-4">
              {opportunities.slice(0, 3).map((opportunity) => (
                <div key={opportunity.id} className="flex gap-4 rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-3">
                  <img src={opportunity.image} alt={opportunity.title} className="h-24 w-24 rounded-2xl object-cover" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <div className="font-semibold text-neutral-900">{opportunity.title}</div>
                      <span className="rounded-full bg-primary-50 px-2 py-1 text-[10px] font-medium text-primary-600">{opportunity.category}</span>
                    </div>
                    <div className="mt-2 text-sm text-neutral-600">{opportunity.location}</div>
                    <div className="mt-2 text-sm font-medium text-primary-600">{opportunity.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-neutral-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
                <Activity className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold tracking-[-0.04em] text-primary-700">Mon activité</h2>
            </div>

            <div className="mt-6 space-y-4">
              {[
                { label: 'Demandes envoyées', value: '03' },
                { label: 'Publications actives', value: '02' },
                { label: 'Mises en relation en cours', value: '01' }
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between rounded-2xl bg-neutral-50 p-4">
                  <span className="text-sm text-neutral-600">{item.label}</span>
                  <span className="text-lg font-bold text-primary-700">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
