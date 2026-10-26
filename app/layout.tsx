import './globals.css';

import { DemoModeSwitcher } from '@/components/demo-mode-switcher';
import { DEMO_MODE } from '@/src/data/demo';

export const metadata = {
  title: 'DropAffy | Réseau commercial digital',
  description: 'Réseau commercial et opportunités pour l’Afrique de l’Ouest.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-[var(--bg)] text-[var(--text)] antialiased">
        {DEMO_MODE && (
          <div className="border-b border-[var(--primary)]/10 bg-[var(--surface)] px-3 py-2 text-center text-[11px] font-medium text-[var(--muted)]">
            Mode démo : données fictives
          </div>
        )}
        {children}
        {DEMO_MODE && <DemoModeSwitcher />}
      </body>
    </html>
  );
}
