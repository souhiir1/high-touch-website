import ContactContent from "./ContactContent";


export const metadata = {
  title: "Contact | High Touch – Agence de Communication en Tunisie",

  description:
    "Contactez High Touch (HighTouch), agence de communication et marketing digital en Tunisie, pour vos projets de stratégie digitale, branding, social media, sponsoring, création de contenu et media buying.",

  keywords: [
    "contact agence communication Tunisie",
    "contact agence marketing digital Tunisie",
    "High Touch contact",
    "HighTouch contact",
    "HighTouch Tunisie",
    "social media Tunisie",
    "image de marque Tunisie",
    "sponsoring Tunisie",
    "media buying Tunisie",
    "communication digitale Tunisie",
    "création contenu Tunisie",
  ],

  alternates: {
    canonical: "https://hightouch.tn/contact",
  },

  openGraph: {
    title: "Contactez High Touch | Agence de Communication en Tunisie",
    description:
      "Un projet de communication, marketing digital, branding ou social media ? Contactez High Touch (HighTouch) et parlons de vos ambitions.",
    url: "https://hightouch.tn/contact",
    siteName: "High Touch",
    locale: "fr_TN",
    type: "website",
  },
};

export default function Contact() {
  return <ContactContent />;
}