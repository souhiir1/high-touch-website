import ContactContent from "./ContactContent";


export const metadata = {
  title: "Contact | HighTouch – Agence de Communication en Tunisie",

  description:
    "Contactez HighTouch (High Touch), agence de communication et marketing digital en Tunisie, pour vos projets de stratégie digitale, branding, social media, sponsoring, création de contenu et media buying.",

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
    "sponsoring",
    "sponsoring tunisie",
    "marketing digital",
    "design",
    "social media management",
    "gestion social media",
    "gestion page facebook",
    "création réels",
    "shooting professionnel",
    "photoshoot"
  ],

  alternates: {
    canonical: "https://hightouch.tn/contact",
  },

  openGraph: {
    title: "Contactez HighTouch | Agence de Communication en Tunisie",
    description:
      "Un projet de communication, marketing digital, branding ou social media ? Contactez HighTouch (High Touch) et parlons de vos ambitions.",
    url: "https://hightouch.tn/contact",
    siteName: "HighTouch",
    locale: "fr_TN",
    type: "website",
  },
};

export default function Contact() {
  return <ContactContent />;
}