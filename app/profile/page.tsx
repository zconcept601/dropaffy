import Link from 'next/link';
import { Bell, MapPin, PencilLine, ShieldCheck, UserRound } from 'lucide-react';

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-neutral-200 bg-white p-5 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-500 text-xl font-bold text-white">M</div>
              <div>
                <h1 className="text-3xl font-bold tracking-[-0.05em] text-primary-700">Marie D.</h1>
                <div className="mt-1 flex items-center gap-2 text-sm text-neutral-500"><MapPin className="h-4 w-4 text-primary-600" /> Abidjan, Côte d’Ivoire</div>
              </div>
            </div>

            <button className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2.5 text-sm font-medium text-neutral-800 transition hover:border-primary-200 hover:text-primary-600">
              <PencilLine className="h-4 w-4" />
              Modifier le profil
            </button>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="space-y-6">
              <div className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-5">
                <div className="flex items-center gap-3">
                  <UserRound className="h-5 w-5 text-primary-600" />
                  <h2 className="text-lg font-semibold text-neutral-900">Présentation</h2>
                </div>
                <p className="mt-3 text-base leading-7 text-neutral-600">Je suis entrepreneur dans le commerce en ligne et j’accompagne les petites structures à développer leurs ventes et leurs partenariats locaux.</p>
              </div>

              <div className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-5">
                <div className="flex items-center gap-3">
                  <Bell className="h-5 w-5 text-primary-600" />
                  <h2 className="text-lg font-semibold text-neutral-900">Mes demandes</h2>
                </div>
                <div className="mt-4 space-y-3">
                  {['Formation commerciale', 'Partenaire logistique', 'Vente de produits premium'].map((item) => (
                    <div key={item} className="flex items-center justify-between rounded-2xl bg-white p-3 shadow-sm">
                      <span className="text-sm font-medium text-neutral-700">{item}</span>
                      <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-medium text-emerald-600">Actif</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[1.5rem] border border-neutral-200 bg-primary-700 p-5 text-white shadow-soft">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-primary-100" />
                  <h2 className="text-lg font-semibold">Crédits</h2>
                </div>
                <div className="mt-4 text-3xl font-bold">240 FCFA</div>
                <div className="mt-2 text-sm text-primary-50/80">Disponibles pour lancer de nouvelles recherches ou publier des offres.</div>
              </div>

              <div className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-5">
                <h2 className="text-lg font-semibold text-neutral-900">Offres publiées</h2>
                <div className="mt-4 space-y-3">
                  {['Pack marketing digital', 'Accès à un réseau partenaires'].map((item) => (
                    <div key={item} className="rounded-2xl bg-white p-3 text-sm text-neutral-700 shadow-sm">{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
