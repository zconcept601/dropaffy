import Link from 'next/link';
import { ArrowRight, LockKeyhole, ShieldCheck } from 'lucide-react';

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-neutral-50 px-4 py-8 text-neutral-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md">
        <div className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-soft sm:p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-500">Connexion</p>
              <h1 className="mt-2 text-3xl font-bold tracking-[-0.05em] text-primary-700">Bienvenue</h1>
            </div>
            <div className="rounded-full bg-primary-50 p-2 text-primary-600">
              <LockKeyhole className="h-5 w-5" />
            </div>
          </div>

          <form className="mt-8 space-y-5">
            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium text-neutral-700">Numéro de téléphone</label>
              <input id="phone" type="tel" placeholder="+225 00 00 00 00" className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none transition focus:border-primary-300 focus:bg-white" />
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-neutral-700">Mot de passe</label>
              <input id="password" type="password" placeholder="••••••••" className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none transition focus:border-primary-300 focus:bg-white" />
            </div>

            <div className="flex items-center justify-between text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-accent-500" />
                <span>Sécurisé</span>
              </div>
              <Link href="/" className="font-medium text-primary-600">Mot de passe oublié ?</Link>
            </div>

            <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-500 px-5 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-600">
              Se connecter
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-neutral-600">
            Vous n’avez pas de compte ? <Link href="/signup" className="font-semibold text-primary-600">Créer un compte</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
