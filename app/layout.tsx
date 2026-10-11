export const metadata = {
  title: 'DropAffy | Réseau commercial digital',
  description: 'Connectez-vous aux bonnes personnes, découvrez des opportunités et développez votre activité.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
