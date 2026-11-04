import Link from "next/link";
import {
  FiArrowUpRight,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./Footer.module.css";
import Image from "next/image";
const navigation = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/a-propos" },
  { name: "Services", href: "/services" },
  { name: "Réalisations", href: "/realisations" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Stratégie Digitale",
  "Social Media",
  "Content & Design",
  "Branding",
  "Photo & Vidéo",
  "Media Buying",
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.main}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
           <Image
            src="/hightouchlogo.png"
            alt="High Touch"
            width={50}
            height={60}
            priority
            className={styles.logoImage}
          />

              <span className={styles.logoText}>
                <strong>HIGH TOUCH</strong>
                <small>PROD &amp; COMMUNICATION</small>
              </span>
            </Link>

            <p>
              Une agence qui transforme votre présence digitale en système de
              communication cohérent, visible et orienté business.
            </p>

            <Link href="/contact" className={styles.projectLink}>
              Démarrer un projet
              <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.column}>
            <h2>Navigation</h2>

            <nav aria-label="Navigation secondaire">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className={styles.column}>
            <h2>Expertises</h2>

            <div className={styles.serviceList}>
              {services.map((service) => (
                <Link key={service} href="/services">
                  {service}
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.column}>
            <h2>Contact</h2>

            <div className={styles.contactList}>
              <a href="tel:+21626605686">
                <FiPhone aria-hidden="true" />
                <span>26 605 686</span>
              </a>

              <a
                href="https://wa.me/21652643319"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp aria-hidden="true" />
                <span>52 643 319</span>
              </a>

              <a href="mailto:comhightouch@gmail.com">
                <FiMail aria-hidden="true" />
                <span>comhightouch@gmail.com</span>
              </a>

              <div className={styles.address}>
                <FiMapPin aria-hidden="true" />
                <span>Tunisie</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © 2026 High Touch. Tous droits réservés.
          </p>

          <span>STRATÉGIE • CRÉATION • PRODUCTION • PERFORMANCE</span>
        </div>
      </div>
    </footer>
  );
}