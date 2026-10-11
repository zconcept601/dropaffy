import Link from 'next/link';
import { ArrowRight, Check, ImageIcon, MessageSquareText, PhoneCall, Send } from 'lucide-react';
import { opportunities } from '@/lib/mock-data';

export default function OpportunityDetailPage({ params }: { params: { id: string } }) {
  const item = opportunities.find((opportunity) => opportunity.id === params.id) ?? opportunities[0];

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <Link href="/opportunities" className="text-sm font-semibold text-primary-600">← Retour aux offres</Link>
          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">{item.status}</span>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-sm">
            <div className="h-[420px] overflow-hidden">
              <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
            </div>

            <div className="p-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-primary-50 px-2.5 py-1 text-xs font-medium text-primary-600">{item.category}</span>
                <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-700">{item.location}</span>
              </div>

              <h1 className="mt-4 text-3xl font-bold tracking-[-0.05em] text-primary-700">{item.title}</h1>
              <div className="mt-4 text-lg font-semibold text-primary-600">{item.price}</div>

              <div className="mt-6 rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-5">
                <h2 className="text-lg font-semibold text-neutral-900">Description</h2>
                <p className="mt-3 text-base leading-7 text-neutral-600">{item.description}</p>
              </div>
            </div>
          </section>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-neutral-200 bg-white p-5 shadow-sm">
              <h2 className="text-xl font-semibold text-primary-700">Faire une demande</h2>
              <form className="mt-5 space-y-4">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-neutral-700">Nom complet</label>
                  <input id="name" type="text" placeholder="Votre nom" className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none" />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-neutral-700">Numéro de téléphone</label>
                  <input id="phone" type="tel" placeholder="+225 ..." className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none" />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-neutral-700">Message</label>
                  <textarea id="message" rows={5} placeholder="Décrivez votre besoin" className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none" />
                </div>

                <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-500 px-5 py-3.5 text-sm font-semibold text-white shadow-soft hover:bg-primary-600">
                  Envoyer ma demande
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>

            <div className="rounded-[2rem] border border-neutral-200 bg-slate-900 p-5 text-white shadow-soft">
              <h3 className="text-lg font-semibold">Informations</h3>
              <div className="mt-5 space-y-4 text-sm text-slate-300">
                <div className="flex items-center gap-3"><PhoneCall className="h-4 w-4 text-primary-100" /> Contact optimisé pour validation</div>
                <div className="flex items-center gap-3"><MessageSquareText className="h-4 w-4 text-primary-100" /> Demande transmise à DropAffy</div>
                <div className="flex items-center gap-3"><ImageIcon className="h-4 w-4 text-primary-100" /> Détails visibles avant validation</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
