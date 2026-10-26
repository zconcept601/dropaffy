import Link from 'next/link';
import { BadgeDollarSign, BriefcaseBusiness, House, Link2, Wallet } from 'lucide-react';

const mobileLinks = [
  { href: '/', label: 'Accueil', icon: House },
  { href: '/centrale', label: 'La Centrale', icon: BadgeDollarSign },
  { href: '/immobilier', label: 'Immobilier', icon: BriefcaseBusiness },
  { href: '/liens', label: 'Mes liens', icon: Link2 },
  { href: '/portefeuille', label: 'Portefeuille', icon: Wallet }
];

export function MobileShell() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--primary)]/10 bg-[var(--surface)]/95 px-2 py-2 backdrop-blur md:hidden">
      <div className="grid grid-cols-5 gap-1">
        {mobileLinks.map(({ href, label, icon: Icon }) => {
          const isActive = href === '/' ? true : false;
          return (
            <Link
              key={label}
              href={href}
              className={`flex flex-col items-center justify-center gap-1 rounded-2xl px-1 py-2 text-[10px] font-semibold ${
                isActive ? 'bg-[var(--primary-soft)] text-[var(--primary)]' : 'text-[var(--muted)]'
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
