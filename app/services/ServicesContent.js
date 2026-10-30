"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import styles from "./page.module.css";

const services = [
  {
    number: "01",
    title: "Stratégie Digitale",
    description:
      "Une stratégie claire pour structurer votre présence digitale et aligner votre communication avec vos objectifs business.",
    details: [
      "Audit de votre présence digitale",
      "Définition des objectifs",
      "Positionnement et stratégie de communication",
      "Plan d'action et recommandations",
    ],
    image: "/strategie.jpg",
    alt: "Stratégie digitale et communication marketing",
  },
  {
    number: "02",
    title: "Social Media",
    description:
      "Nous construisons une présence régulière, cohérente et engageante sur les réseaux sociaux.",
    details: [
      "Calendrier éditorial",
      "Création et planification des publications",
      "Animation des réseaux sociaux",
      "Reels, carrousels, posts et stories",
    ],
    image: "/social-media.jpg",
    alt: "Gestion des réseaux sociaux et social media",
  },
  {
    number: "03",
    title: "Content & Design",
    description:
      "Des contenus visuels et éditoriaux pensés pour attirer l'attention, renforcer votre image et engager votre audience.",
    details: [
      "Création de contenus",
      "Design de publications",
      "Copywriting",
      "Formats adaptés aux réseaux sociaux et campagnes",
    ],
    image: "/content-design.jpg",
    alt: "Création de contenu et design pour les marques",
  },
  {
    number: "04",
    title: "Branding",
    description:
      "Nous créons une identité cohérente et reconnaissable pour professionnaliser votre image de marque.",
    details: [
      "Identité visuelle",
      "Direction artistique",
      "Templates de communication",
      "Cohérence de l'image de marque",
    ],
    image: "/branding.jpg",
    alt: "Branding et image de marque",
  },
  {
    number: "05",
    title: "Photo & Vidéo",
    description:
      "Des productions visuelles conçues pour donner vie à votre communication et mettre votre marque en valeur.",
    details: [
      "Shooting photo",
      "Production vidéo",
      "Formats courts",
      "Reels, Stories, Posts et campagnes",
    ],
    image: "/photo-video.jpg",
    alt: "Production photo et vidéo pour la communication",
  },
  {
    number: "06",
    title: "Media Buying",
    description:
      "Des campagnes publicitaires pilotées par les données afin d'améliorer progressivement les performances.",
    details: [
      "Mise en place de campagnes",
      "Meta Ads",
      "Suivi des KPI",
      "Tests et optimisation",
    ],
    image: "/media-buying.jpg",
    alt: "Media buying et campagnes publicitaires digitales",
  },
];

export default function Services() {
  return (
    <main>
     <section className={styles.hero}>
  <div className={styles.heroGlow}></div>
  <div className={styles.heroGlowSecondary}></div>

  <motion.div
    className={styles.heroOrb}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 8, 0],
    }}
    transition={{
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  <motion.div
    className={styles.heroLine}
    initial={{ scaleX: 0, opacity: 0 }}
    animate={{ scaleX: 1, opacity: 1 }}
    transition={{ duration: 1.2, delay: 0.3 }}
  />

  <div className={`${styles.heroInner} container`}>
    <motion.div
      className={styles.heroContent}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <motion.div
        className={styles.label}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <span></span>
        NOS EXPERTISES
        <span></span>
      </motion.div>

      <h1>
        <motion.span
          className={styles.heroTitleLine}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          Des solutions
        </motion.span>

        <motion.span
          className={styles.heroTitleLine}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          pensées
        </motion.span>

        <motion.span
          className={`${styles.heroTitleLine} ${styles.heroGold}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
        >
          pour votre croissance.
        </motion.span>
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.85 }}
      >
        De la stratégie à la performance, High Touch accompagne votre marque
        dans chaque étape de sa communication digitale.
      </motion.p>
    </motion.div>
  </div>

  <motion.div
    className={styles.heroScroll}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.4, duration: 0.6 }}
  >
    <span>SCROLL</span>
    <div></div>
  </motion.div>
</section>

      <section className={styles.servicesSection}>
        <div className={`${styles.servicesContainer} container`}>
          <div className={styles.intro}>
            <motion.div
              className={styles.introLabel}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <span></span>
              CE QUE NOUS FAISONS
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              Une communication
              <span>qui travaille pour vous.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Notre approche combine stratégie, création, production,
              diffusion et optimisation pour construire une communication
              cohérente, visible et orientée business.
            </motion.p>
          </div>

          <div className={styles.servicesList}>
            {services.map((service, index) => (
              <motion.article
                key={service.number}
                className={styles.service}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.05,
                }}
              >
                <div className={styles.serviceImage}>
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                </div>

                <div className={styles.serviceContent}>
                  <div className={styles.serviceTop}>
                    <span className={styles.number}>
                      {service.number}
                    </span>

                    <span className={styles.serviceLine}></span>
                  </div>

                  <h3>{service.title}</h3>

                  <p className={styles.description}>
                    {service.description}
                  </p>

                  <ul>
                    {service.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.serviceArrow}>
                  <FiArrowUpRight aria-hidden="true" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.methodSection}>
        <div className={`${styles.methodContainer} container`}>
          <div className={styles.methodHeader}>
            <div className={styles.label}>
              <span></span>
              NOTRE MÉTHODE
            </div>

            <h2>
              De l'idée
              <span>à l'impact.</span>
            </h2>
          </div>

          <div className={styles.methodSteps}>
            <div>
              <span>01</span>
              <strong>Audit</strong>
              <p>Comprendre votre situation et vos enjeux.</p>
            </div>

            <div>
              <span>02</span>
              <strong>Stratégie</strong>
              <p>Définir une direction claire et cohérente.</p>
            </div>

            <div>
              <span>03</span>
              <strong>Création</strong>
              <p>Donner forme à votre communication.</p>
            </div>

            <div>
              <span>04</span>
              <strong>Diffusion</strong>
              <p>Faire rayonner vos contenus auprès de votre audience.</p>
            </div>

            <div>
              <span>05</span>
              <strong>Optimisation</strong>
              <p>Analyser, tester et améliorer les performances.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={`${styles.ctaContainer} container`}>
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.label}>
              <span></span>
              PARLONS DE VOTRE PROJET
            </div>

            <h2>
              Prêt à transformer votre communication
              <span>en levier commercial ?</span>
            </h2>

            <p>
              Échangeons sur vos objectifs et construisons ensemble une
              communication adaptée à votre marque.
            </p>

            <Link href="/contact" className={styles.ctaButton}>
              Démarrer un projet
              <FiArrowUpRight aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}