import Link from 'next/link';
import { ArrowRight, EyeOff, UserRound } from 'lucide-react';

export default function SignupPage() {
  return (
    <main className="mx-auto max-w-md px-4 py-10 text-[var(--text)]">
      <div className="card p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--accent)]">Inscription</div>
            <h1 className="mt-2 text-3xl font-black tracking-[-0.05em] text-[var(--primary)]">Créer un compte</h1>
          </div>
          <div className="rounded-full bg-[var(--primary-soft)] p-3 text-[var(--primary)]"><UserRound className="h-5 w-5" /></div>
        </div>

        <form className="mt-6 space-y-4">
          <div>
            <label className="mb-2 block text-sm font-semibold text-[var(--text)]">Nom complet</label>
            <input type="text" placeholder="Marie Diallo" className="w-full rounded-2xl border border-[var(--primary)]/10 bg-[var(--surface-soft)] px-4 py-3 text-sm outline-none" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-[var(--text)]">Email</label>
            <input type="email" placeholder="votre@email.com" className="w-full rounded-2xl border border-[var(--primary)]/10 bg-[var(--surface-soft)] px-4 py-3 text-sm outline-none" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-[var(--text)]">Mot de passe</label>
            <div className="flex items-center gap-2 rounded-2xl border border-[var(--primary)]/10 bg-[var(--surface-soft)] px-4 py-3">
              <input type="password" placeholder="••••••••" className="w-full bg-transparent text-sm outline-none" />
              <EyeOff className="h-4 w-4 text-[var(--muted)]" />
            </div>
          </div>
          <button type="submit" className="btn-primary w-full">
            S’inscrire <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </form>

        <div className="mt-5 text-center text-sm text-[var(--muted)]">
          Déjà membre ? <Link href="/login" className="font-semibold text-[var(--primary)]">Se connecter</Link>
        </div>
      </div>
    </main>
  );
}
