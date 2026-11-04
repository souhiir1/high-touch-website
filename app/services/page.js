
import ServicesContent from "./ServicesContent";

export const metadata = {
  title: "Nos Services | Agence Marketing Digital & Communication Tunisie",

  description:
    "High Touch accompagne les entreprises en Tunisie : marketing digital, sponsoring, social media, branding, photographie professionnelle, vidéo et création de contenu.",

  alternates: {
    canonical: "https://hightouch.tn/services",
  },

  openGraph: {
    title: "Services Marketing Digital & Communication | High Touch",
    description:
      "Découvrez nos solutions en marketing digital, sponsoring, social media, branding, photographie, vidéo et création de contenu en Tunisie.",
    url: "https://hightouch.tn/services",
    siteName: "High Touch",
    locale: "fr_TN",
    type: "website",
  },
};

export default function Services() {
  return <ServicesContent />;
}
