import RealisationsContent from "./RealisationsContent";

export const metadata = {
  title: "Réalisations | Projets, Événements, Photo & Vidéo",
  description:
    "Découvrez les réalisations de High Touch en Tunisie : événements, shootings photo, mode, création de contenu, Reels, vidéos publicitaires et communication digitale.",

  keywords: [
    "réalisations High Touch",
    "agence communication Tunisie",
    "production photo Tunisie",
    "production vidéo Tunisie",
    "shooting photo Tunisie",
    "création Reels Tunisie",
    "contenu réseaux sociaux Tunisie",
    "communication événementielle Tunisie",
    "création contenu Tunisie",
    "marketing digital Tunisie",
  ],

  alternates: {
    canonical: "https://hightouch.tn/realisations",
  },

  openGraph: {
    title: "Réalisations | High Touch",
    description:
      "Événements, shootings, mode, Reels et productions visuelles : découvrez une sélection de réalisations High Touch.",
    url: "https://hightouch.tn/realisations",
    siteName: "High Touch",
    locale: "fr_TN",
    type: "website",
  },
};

export default function RealisationsPage() {
  return <RealisationsContent />;
}