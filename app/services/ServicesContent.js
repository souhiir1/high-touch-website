
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
    slug: "/services/strategie-digitale",
    description:
      "High Touch accompagne les entreprises partout en Tunisie dans la définition de leur stratégie digitale. Nous analysons votre présence en ligne, identifions vos opportunités et construisons un plan de communication adapté à votre marché, votre audience et vos objectifs commerciaux.",
    details: [
      "Audit de votre présence digitale",
      "Définition des objectifs et du positionnement",
      "Stratégie de communication digitale",
      "Plan d'action et recommandations",
    ],
    image: "/strategie.jpg",
    alt: "Stratégie digitale et conseil en communication pour les entreprises en Tunisie",
  },
  {
    number: "02",
    title: "Social Media",
    slug: "/services/social-media",
    description:
      "Développez votre présence sur les réseaux sociaux avec une stratégie social media adaptée à votre marque. High Touch accompagne les entreprises tunisiennes dans la gestion de leurs réseaux sociaux, la création de publications et le développement d'une communauté engagée.",
    details: [
      "Gestion des réseaux sociaux",
      "Calendrier éditorial et planification",
      "Création de posts, Reels, stories et carrousels",
      "Animation et suivi des communautés",
    ],
    image: "/social-media.jpg",
    alt: "Gestion des réseaux sociaux et stratégie social media en Tunisie",
  },
  {
    number: "03",
    title: "Content & Design",
    slug: "/services/creation-contenu",
    description:
      "Attirez l'attention grâce à la création de contenu visuel et éditorial adapté à votre identité. Nous concevons des visuels, publications et contenus créatifs pour renforcer votre image de marque et valoriser votre communication digitale.",
    details: [
      "Création de contenu pour les marques",
      "Design graphique et publications",
      "Copywriting et rédaction de contenu",
      "Création de formats pour les campagnes digitales",
    ],
    image: "/content-design.jpg",
    alt: "Création de contenu digital et design graphique pour les marques",
  },
  {
    number: "04",
    title: "Branding",
    slug: "/services/branding",
    description:
      "Construisez une identité de marque forte et reconnaissable. High Touch accompagne les entreprises en Tunisie dans leur stratégie de branding, la création d'identité visuelle et la définition d'une direction artistique cohérente avec leur positionnement.",
    details: [
      "Création d'identité visuelle",
      "Logo et univers graphique",
      "Direction artistique",
      "Templates et supports de communication",
    ],
    image: "/branding.jpg",
    alt: "Branding et création d'identité visuelle pour les entreprises en Tunisie",
  },
  {
    number: "05",
    title: "Photo & Vidéo",
    slug: "/services/photo-video",
    description:
      "Valorisez votre marque avec des shootings photo professionnels et des productions vidéo en Tunisie. Nous réalisons des contenus visuels pour les entreprises, les marques, les événements et les professionnels : photographie publicitaire, portraits, vidéos promotionnelles et formats courts pour les réseaux sociaux.",
    details: [
      "Shooting photo professionnel",
      "Photographie de produits et de marques",
      "Production vidéo et vidéos promotionnelles",
      "Reels, stories et contenus audiovisuels",
    ],
    image: "/photo-video.jpg",
    alt: "Shooting photo professionnel et production vidéo pour les marques en Tunisie",
  },
  {
    number: "06",
    title: "Media Buying & Sponsoring",
    slug: "/services/sponsoring",
    description:
      "Développez votre visibilité grâce à des campagnes publicitaires digitales ciblées. High Touch accompagne les marques dans la mise en place, le suivi et l'optimisation de campagnes sponsorisées sur les plateformes adaptées à leurs objectifs.",
    details: [
      "Stratégie de publicité digitale",
      "Campagnes Meta Ads et sponsoring",
      "Suivi des budgets et des indicateurs KPI",
      "Analyse et optimisation des campagnes",
    ],
    image: "/media-buying.jpg",
    alt: "Sponsoring et campagnes publicitaires digitales Meta Ads en Tunisie",
  },
];

export default function Services() {
  return (
    <main>
      {/* HERO */}
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
                Agence de communication
              </motion.span>

              <motion.span
                className={styles.heroTitleLine}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                & marketing digital
              </motion.span>

              <motion.span
                className={`${styles.heroTitleLine} ${styles.heroGold}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.65 }}
              >
                en Tunisie.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85 }}
            >
              High Touch accompagne les entreprises et les marques partout
              en Tunisie à travers des solutions de marketing digital,
              sponsoring, gestion des réseaux sociaux, branding,
              photographie professionnelle et production vidéo.
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

      {/* SERVICES */}
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
              De la stratégie à la création, en passant par le sponsoring
              et la production audiovisuelle, nous réunissons les expertises
              nécessaires pour développer votre visibilité et renforcer
              votre image de marque. Nos services sont accessibles aux
              entreprises et aux professionnels partout en Tunisie.
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

                  {/* <Link
                    href={service.slug}
                    className={styles.serviceLink}
                    aria-label={`Découvrir nos services : ${service.title}`}
                  >
                    Découvrir ce service
                    <FiArrowUpRight aria-hidden="true" />
                  </Link> */}
                </div>

                <div className={styles.serviceArrow}>
                  <FiArrowUpRight aria-hidden="true" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* METHOD */}
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

      {/* CTA */}
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
              communication adaptée à votre marque, partout en Tunisie.
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
