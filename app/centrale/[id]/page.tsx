import Link from 'next/link';
import { ArrowRight, Check, Copy, Facebook, MessageCircle, Share2, Sparkles } from 'lucide-react';

import { products } from '@/src/data/demo';

const product = products[0];

export default function ProductDetailPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 pb-28 pt-5 text-[var(--text)] md:pb-10">
      <div className="card overflow-hidden">
        <div className="grid gap-0 md:grid-cols-[1.3fr_0.7fr]">
          <div className="p-3">
            <div className="grid grid-cols-2 gap-2">
              {[product.image, product.image, product.image].map((image, index) => (
                <img key={index} src={image} alt={product.name} className="h-44 w-full rounded-2xl object-cover" loading="lazy" />
              ))}
            </div>
          </div>
          <div className="p-5">
            <div className="flex items-center justify-between gap-2">
              <span className="rounded-full bg-[var(--accent-soft)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--accent)]">
                {product.category}
              </span>
              <span className="text-[10px] text-[var(--muted)]">{product.activeAffiliates} affiliés actifs</span>
            </div>
            <h1 className="mt-3 text-2xl font-black tracking-[-0.04em] text-[var(--primary)]">{product.name}</h1>
            <div className="mt-2 text-3xl font-black text-[var(--text)]">{product.price.toLocaleString('fr-FR')} FCFA</div>
            <div className="mt-3 inline-flex rounded-full bg-[var(--accent-soft)] px-2.5 py-1 text-[11px] font-bold text-[var(--accent)]">
              Commission {product.commission.toLocaleString('fr-FR')} FCFA · {product.commissionRate}%
            </div>
            <div className="mt-4 text-[12px] text-[var(--muted)]">Clics ce mois : {product.clicksThisMonth}</div>
            <div className="mt-4 space-y-2 text-sm text-[var(--muted)]">
              <div className="flex items-center gap-2"><Check className="h-4 w-4 text-[var(--success)]" /> Produit disponible</div>
              <div className="flex items-center gap-2"><Check className="h-4 w-4 text-[var(--success)]" /> Ville : {product.city}</div>
              <div className="flex items-center gap-2"><Check className="h-4 w-4 text-[var(--success)]" /> Fournisseur : {product.supplier}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-[1fr_0.8fr]">
        <div className="card p-5">
          <h2 className="text-lg font-bold text-[var(--primary)]">Description</h2>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{product.description}</p>
          <h3 className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-[var(--accent)]">Conditions de promotion</h3>
          <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
            {product.conditions.map((condition) => (
              <li key={condition} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 text-[var(--success)]" />{condition}</li>
            ))}
          </ul>
        </div>

        <div className="card p-5">
          <h2 className="text-lg font-bold text-[var(--primary)]">Historique de ventes</h2>
          <div className="mt-4 flex h-28 items-end gap-2">
            {product.history.map((value, index) => (
              <div key={index} className="flex-1">
                <div className="rounded-t-xl bg-[var(--primary)]/80" style={{ height: `${value * 2}px` }} />
              </div>
            ))}
          </div>
          <div className="mt-3 text-[11px] text-[var(--muted)]">7 derniers jours</div>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--primary)]/10 bg-[var(--surface)] p-3 shadow-[var(--shadow)] md:left-auto md:right-5 md:top-1/2 md:w-[280px] md:-translate-y-1/2 md:rounded-[20px] md:border md:p-4">
        <div className="flex items-center gap-2">
          <button type="button" className="flex-1 rounded-full bg-[var(--primary)] px-4 py-3 text-sm font-bold text-white">
            <span className="inline-flex items-center gap-2"><MessageCircle className="h-4 w-4" /> WhatsApp</span>
          </button>
          <button type="button" className="rounded-full border border-[var(--primary)]/10 bg-[var(--surface-soft)] px-4 py-3 text-sm font-bold text-[var(--text)]">
            <Facebook className="h-4 w-4" />
          </button>
          <button type="button" className="rounded-full border border-[var(--primary)]/10 bg-[var(--surface-soft)] px-4 py-3 text-sm font-bold text-[var(--text)]">
            <Copy className="h-4 w-4" />
          </button>
        </div>
        <Link href="/centrale" className="btn-primary mt-3 w-full">
          <Sparkles className="mr-2 h-4 w-4" />
          Promouvoir ce produit
        </Link>
      </div>
    </main>
  );
}
