
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
    default: "High Touch (HighTouch) | Agence de Communication & Marketing Digital",
    template: "%s | High Touch",
  },

  description:
    "High Touch (HighTouch) est une agence de communication et de marketing digital en Tunisie. Nous accompagnons les marques en stratégie digitale, branding, social media, sponsoring et création de contenu.",

  applicationName: "High Touch",

  icons: {
    icon: "/hightouchlogo.png",
    shortcut: "/hightouchlogo.png",
    apple: "/hightouchlogo.png",
  },

  keywords: [
    "High Touch",
    "HighTouch",
    "HighTouch Tunisie",
    "High Touch Tunisie",
    "hightouch.tn",
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
    "design graphique",
    "design",
    "photoshoot",
    "shooting",
    "marketing",
  ],

  authors: [{ name: "High Touch" }],
  creator: "High Touch",
  publisher: "High Touch",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  alternates: {
    canonical: "https://hightouch.tn",
  },

  openGraph: {
    type: "website",
    locale: "fr_TN",
    siteName: "High Touch",
    title: "High Touch (HighTouch) | Agence de Communication & Marketing Digital",
    description:
      "High Touch, agence de communication et de marketing digital en Tunisie. Stratégie, création, production et performance au service de votre marque.",
    url: "https://hightouch.tn",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "High Touch",
  alternateName: ["HighTouch", "HighTouch Tunisie"],
  url: "https://hightouch.tn",
  email: "comhightouch@gmail.com",
  telephone: "+21626605686",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "High Touch",
  alternateName: "HighTouch",
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
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-P6W4GRNG');
            `,
          }}
        />

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
