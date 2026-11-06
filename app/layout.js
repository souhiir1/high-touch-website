import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import Footer from "./components/Footer/Footer";
import BusinessPopup from "./components/BusinessPopup/BusinessPopup";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://hightouch.tn"),

  title: {
    default: "High Touch | Agence de Communication & Marketing Digital",
    template: "%s | High Touch",
  },

  description:
    "High Touch accompagne les entreprises dans leur stratégie digitale, leur communication, leur image de marque et leur croissance.",

  applicationName: "High Touch",
icons: {
  icon: "/hightouchlogo.png",
  shortcut: "/hightouchlogo.png",
  apple: "/hightouchlogo.png",
},
  keywords: [
    "High Touch",
    "agence communication Tunisie",
    "agence marketing digital Tunisie",
    "marketing digital",
    "communication digitale",
    "image de marque",
    "social media",
    "sponsoring",
    "branding",
    "création de contenu",
    "photo vidéo",
    "media buying",
  ],

  authors: [{ name: "High Touch" }],
  creator: "High Touch",
  publisher: "High Touch",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: "website",
    locale: "fr_TN",
    siteName: "High Touch",
    title: "High Touch | Agence de Communication & Marketing Digital",
    description:
      "Stratégie, création, production et performance au service de votre marque.",
    url: "https://hightouch.tn",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "High Touch",
  url: "https://hightouch.tn",
  email: "comhightouch@gmail.com",
  telephone: "+21626605686",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "High Touch",
  url: "https://hightouch.tn",
  inLanguage: "fr-TN",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <Navbar />
 <BusinessPopup />
        {children}

        <WhatsAppButton />

        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </body>
    </html>
  );
}