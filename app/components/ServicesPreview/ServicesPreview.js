"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import styles from "./ServicesPreview.module.css";

const services = [
  {
    number: "01",
    title: "Stratégie Digitale",
    description:
      "Une stratégie claire pour structurer votre présence digitale et aligner votre communication avec vos objectifs business.",
    image: "/strategie.jpg",
    alt: "Stratégie digitale et communication marketing",
  },
  {
    number: "02",
    title: "Social Media",
    description:
      "Calendrier éditorial, création, publication et animation pour construire une présence régulière et cohérente.",
    image: "/social-media.jpg",
    alt: "Gestion des réseaux sociaux et social media",
  },
  {
    number: "03",
    title: "Content & Design",
    description:
      "Des contenus visuels et éditoriaux pensés pour capter l’attention, renforcer votre image et engager votre audience.",
    image: "/content-design.jpg",
    alt: "Création de contenu et design pour les marques",
  },
  {
    number: "04",
    title: "Branding",
    description:
      "Une identité visuelle cohérente pour professionnaliser votre marque et créer une image reconnaissable.",
    image: "/branding.jpg",
    alt: "Branding et image de marque",
  },
  {
    number: "05",
    title: "Photo & Vidéo",
    description:
      "Des productions adaptées aux formats Reels, Stories, Posts et campagnes pour donner vie à votre communication.",
    image: "/photo-video.jpg",
    alt: "Production photo et vidéo pour la communication",
  },
  {
    number: "06",
    title: "Media Buying",
    description:
      "Des campagnes publicitaires pilotées par les données, avec tests, suivi des KPI et optimisation continue.",
    image: "/media-buying.jpg",
    alt: "Media buying et campagnes publicitaires digitales",
  },
];

export default function ServicesPreview() {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} container`}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.label}>
            <span></span>
            NOS EXPERTISES
          </div>

          <div className={styles.headingRow}>
            <h2>
              Des solutions pensées
              <span>pour votre croissance.</span>
            </h2>

            <p>
              De la stratégie à la performance, nous construisons les
              éléments qui donnent à votre communication une vraie cohérence.
            </p>
          </div>
        </motion.div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <motion.article
              key={service.number}
              className={styles.serviceCard}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
            >
              <Image
                src={service.image}
                alt={service.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={styles.cardImage}
              />

              <div className={styles.overlay}></div>

              <div className={styles.cardTop}>
                <span className={styles.number}>{service.number}</span>

                <FiArrowUpRight
                  className={styles.arrow}
                  aria-hidden="true"
                />
              </div>

              <div className={styles.cardContent}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className={styles.footer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link href="/services" className={styles.link}>
            Voir tous nos services
            <FiArrowUpRight aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}