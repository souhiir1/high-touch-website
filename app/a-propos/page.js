import AboutContent from "./AboutContent";

export const metadata = {
  title: "À propos | Agence de Communication & Marketing Digital en Tunisie",

  description:
    "Découvrez High Touch, agence de communication et marketing digital en Tunisie spécialisée en image de marque, social media, sponsoring, stratégie digitale, création de contenu et performance.",

  keywords: [
    "High Touch",
    "agence communication Tunisie",
    "marketing digital Tunisie",
    "image de marque Tunisie",
    "social media Tunisie",
    "sponsoring Tunisie",
    "stratégie digitale",
    "communication digitale",
  ],

  alternates: {
    canonical: "https://hightouch.tn/a-propos",
  },

  openGraph: {
    title: "À propos de High Touch | Communication & Marketing Digital",
    description:
      "High Touch accompagne les marques en marketing digital, image de marque, social media, sponsoring, stratégie, création et performance.",
    url: "https://hightouch.tn/a-propos",
    siteName: "High Touch",
    locale: "fr_TN",
    type: "website",
  },
};

export default function About() {
  return <AboutContent />;
}