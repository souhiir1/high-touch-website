
import ServicesContent from "./ServicesContent";


export const metadata = {
  title: "Services | HighTouch – Marketing Digital & Communication en Tunisie",

  description:
    "HighTouch (High Touch), agence de communication et marketing digital en Tunisie, accompagne les entreprises en stratégie digitale, sponsoring, social media, branding, création de contenu, photographie professionnelle, vidéo et media buying.",

  alternates: {
    canonical: "https://hightouch.tn/services",
  },

  openGraph: {
    title: "Nos Services | HighTouch – Agence de Communication",
    description:
      "Découvrez les services de HighTouch (High Touch) : marketing digital, sponsoring, social media, branding, création de contenu,design,marketing, photographie, vidéo et media buying en Tunisie.",
    url: "https://hightouch.tn/services",
    siteName: "HighTouch",
    locale: "fr_TN",
    type: "website",
  },
};


export default function Services() {
  return <ServicesContent />;
}
