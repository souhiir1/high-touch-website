import ContactContent from "./ContactContent";

export const metadata = {
  title: "Contact | High Touch – Communication & Marketing Digital",

  description:
    "Contactez High Touch en Tunisie pour vos projets de communication, marketing digital, image de marque, social media, sponsoring, création de contenu et media buying.",

  keywords: [
    "contact agence communication Tunisie",
    "agence marketing digital Tunisie",
    "High Touch contact",
    "social media Tunisie",
    "image de marque Tunisie",
    "sponsoring Tunisie",
    "media buying Tunisie",
    "communication digitale Tunisie",
  ],

  alternates: {
    canonical: "https://hightouch.tn/contact",
  },

  openGraph: {
    title: "Contactez High Touch",
    description:
      "Parlons de votre projet de communication, marketing digital, image de marque, social media ou sponsoring.",
    url: "https://hightouch.tn/contact",
    siteName: "High Touch",
    locale: "fr_TN",
    type: "website",
  },
};

export default function Contact() {
  return <ContactContent />;
}