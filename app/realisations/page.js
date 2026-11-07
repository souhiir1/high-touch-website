import RealisationsContent from "./RealisationsContent";


export const metadata = {
  title: "Réalisations | High Touch – Projets & Productions en Tunisie",

  description:
    "Découvrez les réalisations de High Touch (HighTouch), agence de communication en Tunisie : événements, shootings photo, mode, création de contenu, Reels, vidéos publicitaires et campagnes de communication digitale.",

  keywords: [
    "réalisations High Touch",
    "HighTouch Tunisie",
    "projets HighTouch",
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
    title: "Réalisations | High Touch – Nos Projets en Tunisie",
    description:
      "Découvrez les projets de High Touch (HighTouch) : événements, shootings photo, mode, Reels, vidéos publicitaires et créations visuelles pour les marques en Tunisie.",
    url: "https://hightouch.tn/realisations",
    siteName: "High Touch",
    locale: "fr_TN",
    type: "website",
  },
};

export default function RealisationsPage() {
  return <RealisationsContent />;
}