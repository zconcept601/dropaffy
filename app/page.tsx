import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, CheckCircle2, ChevronRight, Compass, Menu, Search, ShieldCheck, Sparkles, TrendingUp, Users } from 'lucide-react';
import { features, howItWorks, opportunities, searchIdeas } from '@/lib/mock-data';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 }
};

export default function HomePage() {
  return (
    <main className="bg-neutral-50 text-neutral-900">
      <header className="sticky top-0 z-40 border-b border-neutral-200/80 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500 text-lg font-bold text-white shadow-soft">D</div>
            <div>
              <div className="text-lg font-bold text-primary-700">DropAffy</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-700 md:flex">
            <Link href="#decouvrir" className="transition hover:text-primary-500">Découvrir</Link>
            <Link href="#comment-ca-marche" className="transition hover:text-primary-500">Comment ça marche</Link>
            <Link href="/opportunities" className="transition hover:text-primary-500">Opportunités</Link>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link href="/login" className="rounded-full px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100">Connexion</Link>
            <Link href="/signup" className="rounded-full bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-600">Rejoindre DropAffy</Link>
          </div>

          <button className="rounded-full border border-neutral-200 p-2 md:hidden" aria-label="Menu mobile">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(circle_at_top,_rgba(18,61,140,0.12),_transparent_55%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-28 lg:pt-20">
          <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.5 }} className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-primary-100 bg-primary-50 px-3 py-1.5 text-sm font-medium text-primary-600">
              <Sparkles className="h-4 w-4" />
              Réseau commercial digital
            </div>

            <h1 className="max-w-xl text-4xl font-black tracking-[-0.06em] text-primary-700 sm:text-5xl lg:text-7xl">
              Les bonnes connexions créent les meilleures opportunités.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-700">
              Découvrez des offres, trouvez des partenaires et développez votre activité au sein d’un réseau commercial pensé pour vous.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/opportunities" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 px-6 py-3.5 text-base font-semibold text-white shadow-soft transition hover:bg-primary-600">
                Découvrir les offres
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/signup" className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white px-6 py-3.5 text-base font-semibold text-neutral-800 transition hover:border-primary-200 hover:text-primary-600">
                Rejoindre le réseau
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-neutral-600">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent-500" /> Accès simple</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent-500" /> Réseau inclusif</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="relative">
            <div className="rounded-[2rem] border border-primary-100 bg-white p-4 shadow-soft sm:p-6">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 p-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-primary-100">Réseau actif</p>
                    <h2 className="mt-2 text-3xl font-bold">+1.2K</h2>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-3">
                    <TrendingUp className="h-7 w-7" />
                  </div>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                    <div className="flex items-center justify-between text-sm text-primary-100">
                      <span>Offres actives</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                    <div className="mt-3 text-2xl font-semibold">243</div>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                    <div className="flex items-center justify-between text-sm text-primary-100">
                      <span>Partenaires</span>
                      <Users className="h-4 w-4" />
                    </div>
                    <div className="mt-3 text-2xl font-semibold">132</div>
                  </div>
                </div>
              </div>

              <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-neutral-500">Opportunités populaires</p>
                    <h3 className="mt-1 text-lg font-semibold text-neutral-900">Récentes</h3>
                  </div>
                  <div className="flex gap-2">
                    <span className="rounded-full bg-primary-50 px-2.5 py-1 text-xs font-medium text-primary-600">Services</span>
                    <span className="rounded-full bg-accent-50 px-2.5 py-1 text-xs font-medium text-accent-500">Produits</span>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    { title: 'Formation commerciale pour PME', tag: 'Services', price: '25k FCFA', icon: '✔' },
                    { title: 'Vente de produits premium', tag: 'Produits', price: 'Prix négociable', icon: '↗' },
                    { title: 'Partenaire logistique local', tag: 'Logistique', price: 'Sur devis', icon: '◎' }
                  ].map((item) => (
                    <div key={item.title} className="flex items-center justify-between rounded-2xl bg-white p-3 shadow-sm">
                      <div className="flex gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600">{item.icon}</div>
                        <div>
                          <div className="font-medium text-neutral-800">{item.title}</div>
                          <div className="text-xs text-neutral-500">{item.tag}</div>
                        </div>
                      </div>
                      <div className="text-sm font-semibold text-primary-600">{item.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="decouvrir" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-500">Pourquoi DropAffy</p>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.05em] text-primary-700 sm:text-4xl">Un réseau pensé pour transformer chaque besoin en opportunité.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon === 'Compass' ? Compass : feature.icon === 'Search' ? Search : Users;
            return (
              <motion.article key={feature.title} whileHover={{ y: -6 }} className="rounded-[1.75rem] border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-neutral-900">{feature.title}</h3>
                <p className="mt-3 text-base leading-7 text-neutral-600">{feature.description}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section id="comment-ca-marche" className="bg-primary-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-100">Comment ça marche</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.05em] sm:text-4xl">Trois étapes simples pour passer de l’idée à l’opportunité.</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {howItWorks.map((item) => (
              <div key={item.step} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-100">{item.step}</div>
                <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-primary-50/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-500">Opportunités</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] text-primary-700 sm:text-4xl">Des opportunités récentes à explorer</h2>
          </div>
          <Link href="/opportunities" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600">
            Voir toutes les offres <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {opportunities.map((item) => (
            <article key={item.id} className="overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <div className="h-52 overflow-hidden">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-primary-50 px-2.5 py-1 text-xs font-medium text-primary-600">{item.category}</span>
                  <span className="text-xs text-neutral-500">{item.status}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-neutral-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">{item.description}</p>
                <div className="mt-4 text-sm text-neutral-500">{item.location}</div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary-600">{item.price}</span>
                  <Link href={`/opportunity/${item.id}`} className="rounded-full bg-neutral-900 px-3 py-2 text-xs font-medium text-white">Voir l’offre</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-neutral-100 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-white p-8 shadow-soft sm:p-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-500">Recherchez mieux</p>
                <h2 className="mt-4 text-3xl font-bold tracking-[-0.05em] text-primary-700">Trouver le bon partenaire, c’est la première étape vers la croissance.</h2>
                <p className="mt-4 text-base leading-7 text-neutral-600">Soumettez votre besoin et laissez DropAffy vous mettre en relation avec les acteurs adaptés à votre objectif.</p>
              </div>

              <div className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-5">
                <div className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-3 py-3">
                  <Search className="h-5 w-5 text-neutral-500" />
                  <input type="text" placeholder="Ex : fournisseur de beauté" className="w-full border-none bg-transparent text-sm outline-none placeholder:text-neutral-400" />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {searchIdeas.map((idea) => (
                    <button key={idea} className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 transition hover:border-primary-200 hover:text-primary-600">{idea}</button>
                  ))}
                </div>
                <Link href="/search" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-500 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-600">
                  Lancer ma recherche
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-[1.75rem] border border-neutral-200 bg-white p-6 shadow-sm lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-50 text-accent-500">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-500">Confiance</p>
                <h3 className="text-xl font-semibold text-neutral-900">Un réseau pensé pour les vrais besoins professionnels.</h3>
              </div>
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {[
                { label: 'Opportunités simples', value: '100%' },
                { label: 'Accès sans barrière', value: '24/7' },
                { label: 'Gestion centralisée', value: 'Clair' }
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-neutral-50 p-4">
                  <div className="text-2xl font-bold text-primary-700">{stat.value}</div>
                  <div className="mt-1 text-sm text-neutral-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-neutral-200 bg-primary-700 p-6 text-white shadow-soft">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-100">Prêt à démarrer</div>
            <h3 className="mt-4 text-3xl font-bold tracking-[-0.05em]">Rejoignez la communauté DropAffy.</h3>
            <p className="mt-4 text-base leading-7 text-primary-50/80">Créez votre compte et commencez à découvrir les bonnes opportunités pour votre business.</p>
            <Link href="/signup" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary-700 transition hover:bg-neutral-100">
              Créer mon compte
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 text-sm text-neutral-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-500 text-sm font-bold text-white">D</div>
            <span className="font-semibold text-primary-700">DropAffy</span>
          </div>
          <div className="flex flex-wrap gap-5">
            <Link href="/opportunities" className="transition hover:text-primary-600">Opportunités</Link>
            <Link href="/search" className="transition hover:text-primary-600">Recherche</Link>
            <Link href="/publish" className="transition hover:text-primary-600">Publier</Link>
            <Link href="/login" className="transition hover:text-primary-600">Connexion</Link>
          </div>
          <p>© 2025 DropAffy. Tous droits réservés.</p>
        </div>
      </footer>
    </main>
  );
}
