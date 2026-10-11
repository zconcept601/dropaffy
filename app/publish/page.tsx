import Link from 'next/link';
import { ArrowRight, Check, ImagePlus, MapPin, PlusCircle, Sparkles } from 'lucide-react';

export default function PublishPage() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-neutral-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-500">Publication</p>
          <h1 className="mt-2 text-3xl font-bold tracking-[-0.05em] text-primary-700">Publier une opportunité</h1>

          <form className="mt-8 grid gap-5 lg:grid-cols-2">
            <div className="lg:col-span-2">
              <label htmlFor="title" className="mb-2 block text-sm font-medium text-neutral-700">Titre de l’offre</label>
              <input id="title" type="text" placeholder="Ex : Formation commerciale pour micro-entrepreneurs" className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none" />
            </div>

            <div>
              <label htmlFor="type" className="mb-2 block text-sm font-medium text-neutral-700">Type de publication</label>
              <select id="type" className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none">
                <option>Produit</option>
                <option>Service</option>
                <option>Immobilier</option>
                <option>Recherche de partenaire</option>
              </select>
            </div>

            <div>
              <label htmlFor="location" className="mb-2 block text-sm font-medium text-neutral-700">Localisation</label>
              <input id="location" type="text" placeholder="Abidjan" className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none" />
            </div>

            <div className="lg:col-span-2">
              <label htmlFor="description" className="mb-2 block text-sm font-medium text-neutral-700">Description</label>
              <textarea id="description" rows={5} placeholder="Décrivez votre offre ou votre besoin" className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none" />
            </div>

            <div>
              <label htmlFor="price" className="mb-2 block text-sm font-medium text-neutral-700">Prix ou budget</label>
              <input id="price" type="text" placeholder="Ex : 250 000 FCFA" className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none" />
            </div>

            <div>
              <label htmlFor="duration" className="mb-2 block text-sm font-medium text-neutral-700">Durée de publication</label>
              <select id="duration" className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none">
                <option>3 jours</option>
                <option>7 jours</option>
                <option>14 jours</option>
              </select>
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-[1.5rem] border border-dashed border-neutral-300 bg-neutral-50 p-5 text-center">
                <ImagePlus className="mx-auto h-8 w-8 text-primary-600" />
                <p className="mt-3 text-sm text-neutral-600">Ajouter des images de votre offre</p>
              </div>
            </div>

            <div className="lg:col-span-2 flex items-center justify-between rounded-[1.5rem] bg-neutral-50 p-4">
              <div>
                <div className="text-sm font-medium text-neutral-700">Coût estimé</div>
                <div className="text-lg font-bold text-primary-700">200 FCFA</div>
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-5 py-3 text-sm font-semibold text-white shadow-soft hover:bg-primary-600">
                Prévisualiser
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
