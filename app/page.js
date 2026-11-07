import Hero from "./components/Hero/Hero";
import AboutPreview from "./components/AboutPreview/AboutPreview";
import ServicesPreview from "./components/ServicesPreview/ServicesPreview";
import RealisationsPreview from "./components/RealisationsPreview/RealisationsPreview";
import ContactPreview from "./components/ContactPreview/ContactPreview";
import ClientsStrip from "./components/ClientsStrip/ClientsStrip";

export const metadata = {
  title: "High Touch | Agence de Communication & Marketing Digital en Tunisie",

  description:
    "High Touch (HighTouch) accompagne les entreprises en Tunisie avec des solutions de communication, marketing digital, social media, branding, création de contenu, photo, vidéo et media buying.",

  alternates: {
    canonical: "https://hightouch.tn/",
  },

  openGraph: {
    title: "High Touch | Agence de Communication & Marketing Digital",
    description:
      "Découvrez High Touch, votre agence de communication et marketing digital en Tunisie : stratégie, création, production et performance.",
    url: "https://hightouch.tn/",
    siteName: "High Touch",
    locale: "fr_TN",
    type: "website",
  },
};


const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "High Touch",
  alternateName: ["HighTouch", "HighTouch Tunisie"],
  description:
    "Agence de communication et marketing digital en Tunisie spécialisée en stratégie digitale, social media, branding, création de contenu, photo, vidéo et media buying.",
  url: "https://hightouch.tn",
  telephone: "+21626605686",
  email: "comhightouch@gmail.com",
  areaServed: {
    "@type": "Country",
    name: "Tunisie",
  },
  serviceType: [
    "Stratégie Digitale",
    "Social Media",
    "Content & Design",
    "Branding",
    "Photo & Vidéo",
    "Media Buying",
    "Marketing digital",
    "Sponsoring",
    "Marketing",
    "Design",
    "Photoshoot",
    "Shooting"
  ],
};


export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <Hero />
      <ClientsStrip/>
      <AboutPreview />
      <ServicesPreview />
      <RealisationsPreview />
      <ContactPreview />
    </main>
  );
}