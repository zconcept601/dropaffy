import Link from 'next/link';
import { ArrowLeft, BriefcaseBusiness, Building2, Home, LogIn, UserCircle2 } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-50 px-4 text-neutral-900 sm:px-6">
      <div className="w-full max-w-lg rounded-[2rem] border border-neutral-200 bg-white p-8 text-center shadow-soft">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 text-primary-600">
          <Building2 className="h-8 w-8" />
        </div>
        <h1 className="mt-6 text-4xl font-black tracking-[-0.06em] text-primary-700">404</h1>
        <p className="mt-3 text-lg text-neutral-600">Cette page n’existe pas encore.</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <Link href="/" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 px-5 py-3 text-sm font-semibold text-white">
            <ArrowLeft className="h-4 w-4" />
            Accueil
          </Link>
          <Link href="/dashboard" className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 px-5 py-3 text-sm font-semibold text-neutral-700">
            Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
