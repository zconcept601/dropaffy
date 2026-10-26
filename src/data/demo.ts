export const DEMO_MODE = true;

export const demoProfiles = ['Visiteur', 'Membre', 'Fournisseur', 'Admin'] as const;
export type DemoProfile = (typeof demoProfiles)[number];

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  commission: number;
  commissionRate: number;
  activeAffiliates: number;
  city: string;
  supplier: string;
  image: string;
  description: string;
  conditions: string[];
  clicksThisMonth: number;
  history: number[];
};

export const products: Product[] = [
  {
    id: 'huile-argan',
    name: 'Huile d’Argan 100 ml',
    category: 'Beauté',
    price: 25000,
    commission: 1500,
    commissionRate: 6,
    activeAffiliates: 18,
    city: 'Abidjan',
    supplier: 'Sérénité Plus',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
    description:
      'Huile 100 % naturelle, idéale pour les soins capillaires et le soin du visage. Parfaite pour une offre premium avec fort potentiel de vente.',
    conditions: ['Livraison rapide', 'Garanties de fraîcheur', 'Produit certifié'],
    clicksThisMonth: 412,
    history: [16, 26, 24, 35, 29, 42, 38]
  },
  {
    id: 'sac-cuir',
    name: 'Sac à main premium',
    category: 'Mode',
    price: 42000,
    commission: 2200,
    commissionRate: 5,
    activeAffiliates: 11,
    city: 'Dakar',
    supplier: 'Maison Élan',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    description:
      'Sac élégant avec finition premium et grande demande dans les centres urbains.',
    conditions: ['Stock limité', 'Commande sous 48h', 'Paiement sécurisé'],
    clicksThisMonth: 309,
    history: [12, 20, 28, 25, 36, 33, 40]
  },
  {
    id: 'ecran-lcd',
    name: 'Écran LED 32 pouces',
    category: 'Électronique',
    price: 95000,
    commission: 4800,
    commissionRate: 5,
    activeAffiliates: 22,
    city: 'Lomé',
    supplier: 'TechHouse Ouest',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    description:
      'Écran orienté bureau et divertissement, très recherché pour les ménages et les écoles.',
    conditions: ['Assistance technique', '1 an de garantie', 'Livraison dans la ville'],
    clicksThisMonth: 540,
    history: [21, 18, 29, 40, 48, 46, 52]
  },
  {
    id: 'entrepreneuriat-kit',
    name: 'Kit de démarrage pour PME',
    category: 'Services',
    price: 135000,
    commission: 8100,
    commissionRate: 6,
    activeAffiliates: 15,
    city: 'Ouagadougou',
    supplier: 'Business Plus',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
    description:
      'Kit complet pour structurer les ventes, le marketing, l’organisation et la gestion du réseau.',
    conditions: ['Formation incluse', 'Modèle réutilisable', 'Support client'],
    clicksThisMonth: 682,
    history: [14, 28, 31, 39, 45, 52, 60]
  }
];

export type RealEstateListing = {
  id: string;
  title: string;
  type: 'Vente' | 'Location';
  city: string;
  district: string;
  price: number;
  surface: number;
  image: string;
  description: string;
  features: string[];
  gallery: string[];
};

export const realEstate: RealEstateListing[] = [
  {
    id: 'villa-plateau',
    title: 'Villa 4 chambres au Plateau',
    type: 'Vente',
    city: 'Abidjan',
    district: 'Plateau',
    price: 48000000,
    surface: 180,
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
    description:
      'Maison spacieuse avec jardin, sécurisé et proche du centre économique. Idéale pour un usage familial ou professionnel.',
    features: ['4 chambres', '2 salles de bain', 'Parking', 'Jardin'],
    gallery: [
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    id: 'appartement-yopougon',
    title: 'Appartement 3 pièces à Yopougon',
    type: 'Location',
    city: 'Abidjan',
    district: 'Yopougon',
    price: 400000,
    surface: 96,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80',
    description:
      'Appartement lumineux avec accès sécurisé, proche des commerces et du transport.',
    features: ['3 pièces', 'Cuisine équipée', 'Ascenseur', 'Sécurité'],
    gallery: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80'
    ]
  }
];

export const networkStats = {
  members: 12840,
  suppliers: 352,
  products: 1440,
  confirmedSales: 6248,
  volume: '18,4 M FCFA'
};

export const helpItems = [
  {
    question: 'Comment retirer mes gains ?',
    answer:
      'Depuis Portefeuille, choisissez la méthode de retrait disponible, confirmez le montant et le support de paiement. Un admin valide ensuite le traitement.'
  },
  {
    question: 'Pourquoi ma commission est annulée ?',
    answer:
      'Une commission peut être annulée si la vente est refusée, incomplète ou non conforme à la déclaration soumis au réseau.'
  },
  {
    question: 'Comment devenir fournisseur ?',
    answer:
      'Rendez-vous dans le profil, puis dans le bloc “Devenir fournisseur”. Soumettez votre demande avec les informations clés.'
  },
  {
    question: 'Quel est le délai de paiement ?',
    answer:
      'Le traitement manuel est effectué après validation administrative. Les délais peuvent varier selon la validation de la vente.'
  }
];

export const memberLinks = [
  {
    id: 'huile-argan',
    product: 'Huile d’Argan 100 ml',
    link: 'https://dropaffy.app/l/huile-argan?ref=marie',
    clicks: 184,
    views: 326,
    sales: 12,
    commission: 18000,
    status: 'Actif'
  },
  {
    id: 'sac-cuir',
    product: 'Sac à main premium',
    link: 'https://dropaffy.app/l/sac-cuir?ref=marie',
    clicks: 96,
    views: 220,
    sales: 7,
    commission: 14600,
    status: 'Actif'
  }
];

export const declarations = [
  { id: 'd1', product: 'Huile d’Argan 100 ml', qty: 3, client: 'M. Koné', contact: '+225 07 88 11 22 33', status: 'En attente', note: 'Livraison à domicile' },
  { id: 'd2', product: 'Sac à main premium', qty: 1, client: 'Mme Fofana', contact: '+221 77 12 44 56 9', status: 'Confirmée', note: 'Retrait boutique' },
  { id: 'd3', product: 'Ecran LED 32 pouces', qty: 2, client: 'M. Diallo', contact: '+228 90 32 11 08', status: 'Refusée', note: 'Commande non conforme' }
];

export const wallet = {
  balance: 68000,
  pending: 24000,
  method: 'Orange Money',
  number: '+225 01 00 00 00 00',
  history: [
    { id: 'r1', amount: 30000, status: 'Complété', date: '18 août 2026' },
    { id: 'r2', amount: 18000, status: 'En cours', date: '22 août 2026' }
  ]
};

export const commissions = [
  { product: 'Huile d’Argan 100 ml', date: '12 août 2026', amount: 1500, status: 'Validée' },
  { product: 'Sac à main premium', date: '14 août 2026', amount: 2200, status: 'En attente' },
  { product: 'Ecran LED 32 pouces', date: '16 août 2026', amount: 4800, status: 'Annulée', reason: 'Vente non confirmée' }
];

export const notifications = [
  { id: 'n1', title: 'Vente confirmée', text: 'Votre vente sur Huile d’Argan a été confirmée.', read: false },
  { id: 'n2', title: 'Retrait traité', text: 'Votre demande de retrait est en cours de traitement.', read: false },
  { id: 'n3', title: 'Nouveau produit', text: 'Un fournisseur de beauté a ajouté un produit dans le réseau.', read: true }
];

export const profile = {
  name: 'Marie D.',
  phone: '+225 07 88 11 22 33',
  city: 'Abidjan',
  password: '••••••••',
  supplierRequest: 'Aucune',
  supplierStatus: 'Aucune demande'
};

export const supplierProducts = [
  { id: 'p1', name: 'Huile d’Argan 100 ml', price: 25000, commission: 1500, stock: 48, category: 'Beauté' },
  { id: 'p2', name: 'Sac à main premium', price: 42000, commission: 2200, stock: 19, category: 'Mode' }
];

export const chartData = [16, 18, 25, 22, 28, 35, 40];

export const recentActivity = [
  { id: 'a1', title: 'Vente confirmée', time: 'Il y a 2 heures' },
  { id: 'a2', title: 'Lien partagé sur WhatsApp', time: 'Hier' },
  { id: 'a3', title: 'Nouveau produit ajouté', time: 'Il y a 3 jours' }
];

export const supportEmail = 'support@dropaffy.app';
export const supportWhatsappNumber = '';

export const revenueOverview = {
  earned: 120000,
  confirmedSales: 18,
  clicks: 1468,
  period: '7 jours'
};

export const emptyStateText = 'Aucune donnée pour le moment.';
