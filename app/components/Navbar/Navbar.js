"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import styles from "./Navbar.module.css";

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/a-propos" },
  { name: "Services", href: "/services" },
  { name: "Réalisations", href: "/realisations" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.navbar} container`}>
        {/* LOGO */}
        <Link
          href="/"
          className={styles.logo}
          onClick={closeMenu}
          aria-label="High Touch - Accueil"
        >
          <Image
            src="/hightouchlogo.png"
            alt="High Touch"
            width={200}
            height={100}
            priority
            className={styles.logoImage}
          />
          <span className={styles.logoText}>
            <strong>HIGH TOUCH</strong>
            <small>PROD & COMMUNICATION</small>
          </span>
        </Link>

        {/* NAVIGATION */}
        <nav
          id="main-navigation"
          className={`${styles.navLinks} ${
            menuOpen ? styles.menuOpen : ""
          }`}
          aria-label="Navigation principale"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${
                  isActive ? styles.active : ""
                }`}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            );
          })}

          {/* MOBILE CTA */}
          <Link
            href="/contact"
            className={styles.mobileCta}
            onClick={closeMenu}
          >
            <span>Démarrer un projet</span>
            <FiArrowUpRight aria-hidden="true" />
          </Link>
        </nav>

        {/* DESKTOP CTA */}
        <Link href="/contact" className={styles.desktopCta}>
          <span>Démarrer un projet</span>

          <span className={styles.ctaIcon}>
            <FiArrowUpRight aria-hidden="true" />
          </span>
        </Link>

        {/* MOBILE MENU */}
        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          {menuOpen ? (
            <FiX aria-hidden="true" />
          ) : (
            <FiMenu aria-hidden="true" />
          )}
        </button>
      </div>
    </header>
  );
}