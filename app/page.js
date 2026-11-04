import Hero from "./components/Hero/Hero";
import AboutPreview from "./components/AboutPreview/AboutPreview";
import ServicesPreview from "./components/ServicesPreview/ServicesPreview";
import RealisationsPreview from "./components/RealisationsPreview/RealisationsPreview";
import ContactPreview from "./components/ContactPreview/ContactPreview";
import ClientsStrip from "./components/ClientsStrip/ClientsStrip";
export const metadata = {
  title: "Agence de Communication & Marketing Digital en Tunisie",

  description:
    "High Touch est une agence de communication et marketing digital en Tunisie spécialisée en stratégie digitale, social media, branding, création de contenu, photo, vidéo et media buying.",

  alternates: {
    canonical: "https://hightouch.tn/",
  },

  openGraph: {
    title: "High Touch | Agence de Communication & Marketing Digital",
    description:
      "Stratégie, création, production et performance au service de votre marque.",
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
  description:
    "Agence de communication et marketing digital spécialisée en stratégie digitale, social media, branding, création de contenu, photo, vidéo et media buying.",
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
    "Marketing digital"
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