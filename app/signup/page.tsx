import Link from 'next/link';
import { ArrowRight, KeyRound, ShieldCheck, Smartphone, UserRoundCheck } from 'lucide-react';

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="hidden flex-1 lg:block">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500 text-lg font-bold text-white">D</div>
            <div className="text-lg font-bold text-primary-700">DropAffy</div>
          </Link>

          <div className="mt-16 max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-100 bg-primary-50 px-3 py-1.5 text-sm font-medium text-primary-600">
              <ShieldCheck className="h-4 w-4" />
              Un seul compte, plusieurs opportunités.
            </div>
            <h1 className="mt-6 text-4xl font-black tracking-[-0.06em] text-primary-700">Rejoignez le réseau DropAffy.</h1>
            <p className="mt-4 text-lg leading-8 text-neutral-700">Un compte pour découvrir des offres, publier vos besoins, trouver de bons partenaires et développer votre activité avec confiance.</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
                <UserRoundCheck className="h-6 w-6 text-primary-600" />
                <div className="mt-3 font-semibold text-neutral-900">Simple</div>
                <p className="mt-1 text-sm text-neutral-600">Inscription rapide et claire.</p>
              </div>
              <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
                <Smartphone className="h-6 w-6 text-primary-600" />
                <div className="mt-3 font-semibold text-neutral-900">Mobile-first</div>
                <p className="mt-1 text-sm text-neutral-600">Optimisé pour votre téléphone.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-lg rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-soft sm:p-8">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-500">Inscription</p>
              <h2 className="mt-2 text-3xl font-bold tracking-[-0.05em] text-primary-700">Créer mon compte</h2>
            </div>
            <div className="rounded-full bg-primary-50 p-2 text-primary-600">
              <KeyRound className="h-5 w-5" />
            </div>
          </div>

          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-neutral-700">Nom complet</label>
              <input id="name" type="text" placeholder="Votre nom complet" className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-primary-300 focus:bg-white" />
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium text-neutral-700">Numéro de téléphone</label>
              <input id="phone" type="tel" placeholder="+225 00 00 00 00" className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-primary-300 focus:bg-white" />
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-neutral-700">Mot de passe</label>
              <input id="password" type="password" placeholder="••••••••" className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-primary-300 focus:bg-white" />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium text-neutral-700">Confirmer le mot de passe</label>
              <input id="confirmPassword" type="password" placeholder="••••••••" className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-primary-300 focus:bg-white" />
            </div>

            <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-500 px-5 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-600">
              Créer mon compte
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-neutral-600">
            J’ai déjà un compte. <Link href="/login" className="font-semibold text-primary-600">Connexion</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
