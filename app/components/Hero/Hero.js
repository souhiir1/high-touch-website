"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

// Variant pour le texte qui glisse de derrière un masque
const textRevealVariants = {
  hidden: { y: "110%", rotate: 2 },
  visible: {
    y: 0,
    rotate: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [impactText, setImpactText] = useState("");
  const targetText = "Votre impact.";

  // Effet Machine à écrire pour la dernière ligne
  useEffect(() => {
    if (prefersReducedMotion) {
      setImpactText(targetText);
      return;
    }
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= targetText.length) {
        setImpactText(targetText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 80); // Vitesse de frappe (80ms par lettre)

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <section className={styles.hero} aria-label="Présentation de HighTouch">
      {/* BACKGROUND (Statique, sans parallaxe) */}
      <div className={styles.background}>
        <Image
          src="/hero.jpg"
          alt="Équipe HighTouch en réunion autour d'une stratégie de communication"
          fill
          priority
          quality={85}
          sizes="(max-width: 768px) 100vw, 100vw"
          className={styles.backgroundImage}
        />
        <div className={styles.backgroundOverlay} aria-hidden="true" />
      </div>

      {/* LIGNE DE SCAN PREMIUM (Effet technologique au chargement) */}
      <motion.div 
        className={styles.scannerLine}
        initial={{ top: "-10%", opacity: 0 }}
        animate={{ top: "110%", opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
        aria-hidden="true"
      />

      {/* HALO DORÉ ORGANIQUE (Qui respire et flotte) */}
      <motion.div
        className={styles.glow}
        aria-hidden="true"
        animate={
          prefersReducedMotion
            ? undefined
            : { 
                scale: [1, 1.1, 1], 
                opacity: [0.15, 0.25, 0.15],
                x: [0, 20, 0],
                y: [0, -20, 0]
              }
        }
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className={`${styles.heroInner} container`}>
        <div className={styles.content}>
          {/* EYEBROW */}
          <motion.p
            className={styles.eyebrow}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            STRATÉGIE • CRÉATION • PRODUCTION • PERFORMANCE
          </motion.p>

          {/* HEADLINE */}
          <motion.h1
            className={styles.headline}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15, delayChildren: 0.7 } },
            }}
          >
            <span className={styles.lineWrapper}>
              <motion.span variants={textRevealVariants} className={styles.heroLine}>
                Votre empreinte.
              </motion.span>
            </span>
            <span className={styles.lineWrapper}>
              <motion.span variants={textRevealVariants} className={styles.heroLine}>
                Notre expertise.
              </motion.span>
            </span>
            {/* Ligne avec effet Machine à écrire et curseur */}
            <span className={`${styles.lineWrapper} ${styles.typewriterWrapper}`}>
              <span className={`${styles.heroLine} ${styles.heroLineAccent}`}>
                {impactText}
                <motion.span 
                  className={styles.cursor}
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                />
              </span>
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            Nous transformons votre présence digitale en une communication
            cohérente, visible et orientée business.
          </motion.p>

          {/* ACTIONS */}
          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <Link 
              href="/services" 
              className={styles.primaryButton}
              aria-label="Découvrir nos services de communication"
            >
              <span className={styles.btnText}>Découvrir nos services</span>
              <FiArrowUpRight aria-hidden="true" className={styles.btnIcon} />
              <div className={styles.btnFill} /> {/* Effet de remplissage au survol */}
            </Link>

            <Link 
              href="/contact" 
              className={styles.secondaryButton}
              aria-label="Démarrer un projet avec HighTouch"
            >
              Démarrer un projet
            </Link>
          </motion.div>
        </div>
      </div>

      {/* INDICATEUR DE SCROLL ANIMÉ */}
      <motion.div
        className={styles.scrollIndicator}
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span>SCROLL</span>
        <div className={styles.scrollLine}>
          <motion.div 
            className={styles.scrollDot}
            animate={{ y: [0, 20, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* LIGNE DÉCORATIVE ANIMÉE EN CASCADE */}
      <motion.div
        className={styles.decorativeLine}
        aria-hidden="true"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 1.2, ease: "circOut" }}
      />
    </section>
  );
}