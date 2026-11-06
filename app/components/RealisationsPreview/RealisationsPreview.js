
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiTrendingUp,
  FiEye,
  FiTarget,
  FiBarChart2,
} from "react-icons/fi";
import styles from "./RealisationsPreview.module.css";

const featuredProjects = [
  {
    id: "flora",
    number: "01",
    title: "Flora Beach Park",
    category: "Content Design · Social Media",
    description: "Une identité visuelle cohérente pour valoriser la présence digitale de la marque.",
    image: "/realisations/content-design/flora-beach-apres.jpeg",
    type: "image",
  },
  {
    id: "sponsoring",
    number: "02",
    title: "Sponsoring & Media Buying",
    category: "Performance · Publicité digitale",
    description: "Des campagnes publicitaires pensées pour développer la visibilité et toucher les bonnes audiences.",
    image: "/realisations/sponsoring/statistiques-01.png",
    type: "campaign",
  },
  {
    id: "jci",
    number: "03",
    title: "JCI Events",
    category: "Événementiel",
    description: "Capturer l'énergie de chaque événement.",
    image: "/realisations/jci/jci-01.jpg",
    type: "image",
  },
  {
    id: "zanzibar",
    number: "04",
    title: "Zanzibar Lounge & More",
    category: "Social Media · Photo & Vidéo",
    description: "Un univers, une expérience, une identité.",
    image: "/realisations/zanzibar/photo-01.png",
    type: "image",
  },
];

const campaignHighlights = [
  {
    icon: FiEye,
    label: "Visibilité",
    value: "Campagnes ciblées",
  },
  {
    icon: FiTarget,
    label: "Audience",
    value: "Ciblage stratégique",
  },
  {
    icon: FiTrendingUp,
    label: "Performance",
    value: "Suivi des résultats",
  },
];

export default function RealisationsPreview() {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} container`}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.label}>
            <span />
            NOS RÉALISATIONS
          </div>

          <div className={styles.headingRow}>
            <h2>
              Des idées créatives.
              <span>Des résultats concrets.</span>
            </h2>

            <div className={styles.headerRight}>
              <p>
                De la création de contenu à la publicité digitale,
                nous accompagnons les marques pour renforcer leur
                image et développer leur présence.
              </p>

              <div className={styles.projectCount}>
                <strong>04</strong>
                <span>PROJETS À DÉCOUVRIR</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className={styles.projectGrid}>
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`${styles.projectCard} ${
                project.type === "campaign" ? styles.campaignCard : ""
              }`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
            >
              <Link
                href="/realisations"
                className={styles.projectLink}
                aria-label={`Découvrir le projet ${project.title}`}
              >
                <div className={styles.imageWrapper}>
                  <img
                    src={project.image}
                    alt={`${project.title} - réalisation High Touch`}
                    className={styles.projectImage}
                    loading="lazy"
                  />

                  <div className={styles.imageShade} />

                  <span className={styles.projectNumber}>
                    {project.number}
                  </span>

                  <span className={styles.viewProject}>
                    <FiArrowUpRight />
                  </span>

                  {project.type === "campaign" && (
                    <div className={styles.campaignBadge}>
                      <FiBarChart2 />
                      CAMPAGNES PUBLICITAIRES
                    </div>
                  )}

                  <div className={styles.projectInfo}>
                    <span className={styles.projectCategory}>
                      {project.category}
                    </span>

                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    {project.type === "campaign" && (
                      <div className={styles.campaignHighlights}>
                        {campaignHighlights.map((item) => {
                          const Icon = item.icon;

                          return (
                            <div
                              className={styles.campaignHighlight}
                              key={item.label}
                            >
                              <Icon />
                              <span>
                                <strong>{item.label}</strong>
                                <small>{item.value}</small>
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.bottom}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>
            Chaque projet raconte une histoire.
            <span> Découvrez les nôtres.</span>
          </p>

          <Link href="/realisations" className={styles.allProjectsLink}>
            Explorer toutes nos réalisations
            <span className={styles.linkIcon}>
              <FiArrowUpRight />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
