import { ArrowRight } from 'lucide-react';

export default function CertificationPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-8 text-[var(--text)]">
      <div className="card p-5 sm:p-6">
        <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--accent)]">Certification fournisseur</div>
        <h1 className="mt-2 text-3xl font-black tracking-[-0.05em] text-[var(--primary)]">Demande de certification</h1>

        <form className="mt-6 space-y-4">
          <select className="w-full rounded-2xl border border-[var(--primary)]/10 bg-[var(--surface-soft)] px-4 py-3 text-sm outline-none">
            <option>Statut</option>
            <option>Particulier</option>
            <option>Commerçant</option>
            <option>Grossiste</option>
            <option>Fabricant ou producteur</option>
            <option>Prestataire de services</option>
          </select>
          <div className="grid gap-4 sm:grid-cols-2">
            <input type="number" placeholder="Prix minimum FCFA" className="w-full rounded-2xl border border-[var(--primary)]/10 bg-[var(--surface-soft)] px-4 py-3 text-sm outline-none" />
            <input type="number" placeholder="Prix maximum FCFA" className="w-full rounded-2xl border border-[var(--primary)]/10 bg-[var(--surface-soft)] px-4 py-3 text-sm outline-none" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <input type="text" placeholder="Pays" className="w-full rounded-2xl border border-[var(--primary)]/10 bg-[var(--surface-soft)] px-4 py-3 text-sm outline-none" />
            <input type="text" placeholder="Ville" className="w-full rounded-2xl border border-[var(--primary)]/10 bg-[var(--surface-soft)] px-4 py-3 text-sm outline-none" />
          </div>
          <input type="tel" placeholder="WhatsApp international" className="w-full rounded-2xl border border-[var(--primary)]/10 bg-[var(--surface-soft)] px-4 py-3 text-sm outline-none" />
          <div className="grid gap-4 sm:grid-cols-2">
            <input type="text" placeholder="Jours de contact" className="w-full rounded-2xl border border-[var(--primary)]/10 bg-[var(--surface-soft)] px-4 py-3 text-sm outline-none" />
            <input type="text" placeholder="Horaires" className="w-full rounded-2xl border border-[var(--primary)]/10 bg-[var(--surface-soft)] px-4 py-3 text-sm outline-none" />
          </div>
          <button type="submit" className="btn-primary w-full">
            Envoyer la demande <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </form>
      </div>
    </main>
  );
}
