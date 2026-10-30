import ServicesContent from "./ServicesContent";

export const metadata = {
  title: "Services | Communication, Marketing Digital & Social Media",

  description:
    "Découvrez les services de High Touch en Tunisie : stratégie digitale, marketing digital, social media, image de marque, création de contenu, photo & vidéo, sponsoring et media buying.",

  keywords: [
    "agence communication Tunisie",
    "marketing digital Tunisie",
    "social media Tunisie",
    "image de marque Tunisie",
    "sponsoring Tunisie",
    "media buying Tunisie",
    "création contenu Tunisie",
    "photo vidéo Tunisie",
    "stratégie digitale Tunisie",
  ],

  alternates: {
    canonical: "https://hightouch.tn/services",
  },

  openGraph: {
    title: "Nos Services | High Touch",
    description:
      "Stratégie digitale, marketing digital, branding, social media, image de marque, sponsoring, création de contenu et media buying.",
    url: "https://hightouch.tn/services",
    siteName: "High Touch",
    locale: "fr_TN",
    type: "website",
  },
};

export default function Services() {
  return <ServicesContent />;
}