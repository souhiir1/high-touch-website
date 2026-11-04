"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import styles from "./RealisationsPreview.module.css";

const featuredProjects = [
  {
    id: "jci",
    number: "01",
    title: "JCI Events",
    category: "Événementiel",
    description: "Capturer l'énergie de chaque événement.",
    image: "/realisations/jci/jci-01.jpg",
    featured: true,
  },
  {
    id: "zedni",
    number: "02",
    title: "Zedni Center",
    category: "Événementiel · Brand Content",
    description: "Des moments transformés en contenus.",
    image: "/realisations/zedni-center/cover.png",
  },
  {
    id: "zanzibar",
    number: "03",
    title: "Zanzibar Lounge & More",
    category: "Social Media · Vidéo",
    description: "Un univers, une expérience, une identité.",
    image: "/realisations/zanzibar/photo-01.png",
  },
  {
    id: "beaute",
    number: "04",
    title: "Shooting Beauté",
    category: "Photographie",
    description: "L'art du détail et de l'expression.",
    image: "/realisations/beaute/photo-03.jpg",
  },
];

export default function RealisationsPreview() {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} container`}>
        {/* HEADER */}

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
              Du contenu qui
              <span>fait la différence.</span>
            </h2>

            <div className={styles.headerRight}>
              <p>
                Des idées créatives, des images fortes et des expériences
                pensées pour donner vie aux marques.
              </p>

              <span className={styles.projectCount}>
                <strong>04</strong>
                <span>PROJETS À DÉCOUVRIR</span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* PROJECT SHOWCASE */}

        <div className={styles.projectGrid}>
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`${styles.projectCard} ${
                project.featured ? styles.featured : ""
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

                  <div className={styles.projectInfo}>
                    <span className={styles.projectCategory}>
                      {project.category}
                    </span>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTA */}

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