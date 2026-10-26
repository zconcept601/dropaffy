import Link from 'next/link';
import { Bell, MapPin, PencilLine, ShieldCheck, UserRound } from 'lucide-react';

import { profile } from '@/src/data/demo';

export default function ProfilPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 pb-24 pt-6 text-[var(--text)] md:pb-10">
      <div className="card p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--primary)] text-xl font-black text-white">M</div>
            <div>
              <h1 className="text-3xl font-black tracking-[-0.05em] text-[var(--primary)]">{profile.name}</h1>
              <div className="mt-1 flex items-center gap-2 text-sm text-[var(--muted)]"><MapPin className="h-4 w-4 text-[var(--primary)]" /> {profile.city}</div>
            </div>
          </div>
          <button type="button" className="btn-secondary">
            <PencilLine className="mr-2 h-4 w-4" /> Modifier le profil
          </button>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-[1fr_0.8fr]">
          <div className="space-y-4">
            <div className="rounded-[22px] border border-[var(--primary)]/10 bg-[var(--surface-soft)] p-4">
              <div className="flex items-center gap-2 text-[var(--primary)]"><UserRound className="h-4 w-4" /> <span className="font-bold">Informations</span></div>
              <div className="mt-3 text-sm text-[var(--muted)]">Téléphone : {profile.phone}</div>
              <div className="mt-1 text-sm text-[var(--muted)]">Ville : {profile.city}</div>
            </div>

            <div className="rounded-[22px] border border-[var(--primary)]/10 bg-[var(--surface-soft)] p-4">
              <div className="flex items-center gap-2 text-[var(--primary)]"><Bell className="h-4 w-4" /> <span className="font-bold">Devenir fournisseur</span></div>
              <div className="mt-3 text-sm text-[var(--muted)]">État : {profile.supplierStatus}</div>
              <Link href="/profil/certification" className="btn-primary mt-4 w-full">Faire une demande</Link>
            </div>
          </div>

          <div className="rounded-[22px] bg-[var(--primary)] p-5 text-white">
            <div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5" /> <span className="font-bold">Statut</span></div>
            <div className="mt-4 text-3xl font-black">Membre</div>
            <div className="mt-2 text-sm text-primary-100">Inscription validée · réseau actif</div>
          </div>
        </div>
      </div>
    </main>
  );
}
