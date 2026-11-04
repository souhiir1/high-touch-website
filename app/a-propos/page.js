
import AboutContent from "./AboutContent";

export const metadata = {
  title: "À propos de High Touch | Agence de Communication en Tunisie",

  description:
    "Découvrez High Touch, agence de communication en Tunisie. Nous accompagnons les entreprises en marketing digital, sponsoring, branding, social media, photographie et production vidéo.",

  alternates: {
    canonical: "https://hightouch.tn/a-propos",
  },

  openGraph: {
    title: "À propos de High Touch | Agence de Communication en Tunisie",
    description:
      "Découvrez notre approche de la communication, du marketing digital, du sponsoring et de la création de contenu en Tunisie.",
    url: "https://hightouch.tn/a-propos",
    siteName: "High Touch",
    locale: "fr_TN",
    type: "website",
  },
};

export default function About() {
  return <AboutContent />;
}
