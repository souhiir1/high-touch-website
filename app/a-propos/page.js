
import AboutContent from "./AboutContent";



export const metadata = {
  title: "À propos | HighTouch – Agence de Communication en Tunisie",

  description:
    "Découvrez HighTouch, également connue sous le nom High Touch, agence de communication et marketing digital en Tunisie. Nous accompagnons les marques en stratégie digitale, sponsoring, branding, social media, photographie et production vidéo.",

  alternates: {
    canonical: "https://hightouch.tn/a-propos",
  },

  openGraph: {
    title: "À propos de HighTouch | Notre agence en Tunisie",
    description:
      "Découvrez HighTouch (High Touch), votre partenaire en communication, marketing digital, stratégie de marque et création de contenu en Tunisie.",
    url: "https://hightouch.tn/a-propos",
    siteName: "HighTouch",
    locale: "fr_TN",
    type: "website",
  },
};


export default function About() {
  return <AboutContent />;
}
