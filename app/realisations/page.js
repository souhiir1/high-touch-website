import RealisationsContent from "./RealisationsContent";


export const metadata = {
  title: "Réalisations | HighTouch – Projets & Productions en Tunisie",

  description:
    "Découvrez les réalisations de HighTouch (High Touch), agence de communication en Tunisie : événements, shootings photo, mode, création de contenu, Reels, vidéos publicitaires et campagnes de communication digitale.",

  keywords: [
    "réalisations HighTouch",
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
    title: "Réalisations | HighTouch – Nos Projets en Tunisie",
    description:
      "Découvrez les projets de HighTouch (High Touch) : événements, shootings photo, mode, Reels, vidéos publicitaires et créations visuelles pour les marques en Tunisie.",
    url: "https://hightouch.tn/realisations",
    siteName: "HighTouch",
    locale: "fr_TN",
    type: "website",
  },
};

export default function RealisationsPage() {
  return <RealisationsContent />;
}