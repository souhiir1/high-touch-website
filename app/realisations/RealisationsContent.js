"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowUpRight,
  FiCamera,
  FiPlay,
  FiX,
} from "react-icons/fi";
import styles from "./page.module.css";

const filters = [
  "Tous",
  "Événementiel",
  "Photo",
  "Mode",
  "Reels & Vidéo",
];

const projects = [
  {
    id: "jci",
    title: "JCI Events",
    category: "Événementiel",
    type: "gallery",
    featured: true,
    description:
      "Couverture visuelle d'événements et création de contenus destinés à valoriser les moments forts.",
    images: [
      "/realisations/jci/jci-01.jpg",
      "/realisations/jci/jci-02.jpg",
      "/realisations/jci/jci-03.jpg",
      "/realisations/jci/jci-04.jpg",
    ],
  },

  {
    id: "shooting-personnel",
    title: "Shooting personnel",
    category: "Photo",
    type: "gallery",
    description:
      "Shooting photographique avec une approche visuelle soignée et une attention portée à l'image.",
    images: [
      "/realisations/shooting-personnel/photo-01.jpg",
      "/realisations/shooting-personnel/photo-02.jpg",
      "/realisations/shooting-personnel/photo-03.jpg",
      "/realisations/shooting-personnel/photo-04.jpg",
      "/realisations/shooting-personnel/photo-05.jpg",
      "/realisations/shooting-personnel/photo-06.jpg",
      "/realisations/shooting-personnel/photo-07.jpg",
      "/realisations/shooting-personnel/photo-08.jpg",
      "/realisations/shooting-personnel/photo-09.jpg",
    ],
  },

  {
    id: "vetements",
    title: "Marque de vêtements",
    category: "Mode",
    type: "gallery",
    description:
      "Création de contenus photo pour présenter les pièces, l'univers et l'identité visuelle de la marque.",
    images: [
      "/realisations/vetements/photo-01.jpg",
      "/realisations/vetements/photo-02.jpg",
      "/realisations/vetements/photo-03.jpg",
      "/realisations/vetements/photo-04.jpg",
    ],
  },

  {
    id: "zedni-sit",
    title: "Zedni — SIT Connect",
    category: "Événementiel",
    type: "mixed",
    featured: true,
    description:
      "Production de contenus photo et vidéo autour de l'événement SIT Connect.",
    images: [
      "/realisations/zedni-sit-connect/photo-01.jpg",
    //   "/realisations/zedni-sit-connect/photo-02.jpg",
    ],
    video: "/realisations/zedni-sit-connect/video.mp4",
  },

  {
    id: "orange-event",
    title: "Orange Event",
    category: "Événementiel",
    type: "mixed",
    description:
      "Couverture photo et vidéo mettant en valeur l'ambiance et les moments de l'événement.",
    images: [
      "/realisations/orange-event/photo-01.jpeg",
      "/realisations/orange-event/photo-02.jpeg",
      "/realisations/orange-event/photo-03.jpeg",
        "/realisations/orange-event/photo-04.jpeg",
    ],
    video: "/realisations/orange-event/video.mp4",
  },

  {
    id: "ali-mode",
    title: "Ali Mode Fashion Dresses",
    category: "Mode",
    type: "gallery",
    description:
      "Shooting mode pensé pour mettre en avant les tenues et leur univers visuel.",
    images: [
      "/realisations/ali-mode/photo-01.jpg",
      "/realisations/ali-mode/photo-02.jpg",
      "/realisations/ali-mode/photo-03.jpg",
    ],
  },

  {
    id: "mit",
    title: "MIT — Institut of Tunisia",
    category: "Reels & Vidéo",
    type: "reels",
    description:
      "Création de formats publicitaires courts pensés pour les réseaux sociaux.",
    videos: [
      "/realisations/mit/reel-01.mp4",
      "/realisations/mit/reel-02.mp4",
    ],
    posters: [
      "/realisations/mit/reel-01-cover.png",
      "/realisations/mit/reel-02-cover.png",
    ],
  },

  {
    id: "zedni-center",
    title: "Zedni Center",
    category: "Reels & Vidéo",
    type: "reels",
    description:
      "Création d'un Reel destiné à une communication dynamique sur les réseaux sociaux.",
    videos: ["/realisations/zedni-center/reel-01.mp4"],
    posters: ["/realisations/zedni-center/reel-01-cover.png"],
  },
];

export default function RealisationsContent() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [activeVideo, setActiveVideo] = useState(null);

  const filteredProjects =
    activeFilter === "Tous"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <main>
      {/* ================= HERO ================= */}

      <section className={styles.hero}>
        <div className={styles.heroGlow}></div>
        <div className={styles.heroGlowSecondary}></div>

        <motion.div
          className={styles.heroOrb}
          animate={{
            y: [0, -18, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className={`${styles.heroInner} container`}>
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className={styles.heroLabel}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span></span>
              NOS RÉALISATIONS
            </motion.div>

            <h1>
              Des idées qui
              <span>prennent</span>
              <strong>vie.</strong>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
            >
              Découvrez une sélection de projets, shootings,
              événements et contenus créés pour donner de la
              visibilité aux marques et à leurs univers.
            </motion.p>
          </motion.div>
        </div>

        <div className={styles.heroBottom}>
          <span>PHOTO</span>
          <span>VIDÉO</span>
          <span>ÉVÉNEMENTIEL</span>
          <span>CONTENT</span>
        </div>
      </section>

      {/* ================= INTRO + FILTERS ================= */}

      <section className={styles.portfolioSection}>
        <div className={`${styles.portfolioContainer} container`}>
          <div className={styles.portfolioHeader}>
            <motion.div
              className={styles.sectionLabel}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span></span>
              NOTRE TRAVAIL
            </motion.div>

            <div className={styles.headerGrid}>
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                Création. Production.
                <span>Expérience.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                Chaque projet est une occasion de construire une
                image forte, de raconter une histoire et de créer
                du contenu adapté à son audience.
              </motion.p>
            </div>
          </div>

          <div className={styles.filters}>
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={
                  activeFilter === filter
                    ? styles.activeFilter
                    : ""
                }
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* ================= PROJECTS ================= */}

          <motion.div layout className={styles.projects}>
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <Project
                  key={project.id}
                  project={project}
                  index={index}
                  onVideoOpen={setActiveVideo}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className={styles.ctaSection}>
        <div className={`${styles.ctaContainer} container`}>
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.sectionLabel}>
              <span></span>
              VOTRE PROJET
              <span></span>
            </div>

            <h2>
              Et si le prochain projet
              <span>était le vôtre ?</span>
            </h2>

            <p>
              Parlons de votre marque, de vos objectifs et du contenu
              que nous pouvons créer ensemble.
            </p>

            <Link href="/contact" className={styles.ctaButton}>
              Démarrer un projet
              <FiArrowUpRight aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= VIDEO MODAL ================= */}

      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className={styles.videoOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              className={styles.videoModal}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.3 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className={styles.closeVideo}
                onClick={() => setActiveVideo(null)}
                aria-label="Fermer la vidéo"
              >
                <FiX />
              </button>

              <video
                src={activeVideo}
                controls
                autoPlay
                playsInline
                preload="metadata"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

function Project({ project, index, onVideoOpen }) {
  return (
    <motion.article
      layout
      className={`${styles.project} ${
        project.featured ? styles.featuredProject : ""
      }`}
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{
        duration: 0.55,
        delay: Math.min(index * 0.05, 0.25),
      }}
    >
      <div className={styles.projectHeading}>
        <div>
          <span className={styles.projectNumber}>
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className={styles.projectCategory}>
            {project.category}
          </span>
        </div>

        <FiArrowUpRight aria-hidden="true" />
      </div>

      <h3>{project.title}</h3>

      <p className={styles.projectDescription}>
        {project.description}
      </p>

      {project.type === "gallery" && (
        <Gallery project={project} />
      )}

      {project.type === "mixed" && (
        <MixedProject
          project={project}
          onVideoOpen={onVideoOpen}
        />
      )}

      {project.type === "reels" && (
        <Reels project={project} onVideoOpen={onVideoOpen} />
      )}
    </motion.article>
  );
}

function Gallery({ project }) {
  return (
    <div
      className={`${styles.gallery} ${
        project.images.length > 3 ? styles.largeGallery : ""
      }`}
    >
      {project.images.map((image, index) => (
        <div
          className={styles.galleryImage}
          key={`${project.id}-${index}`}
        >
          <Image
            src={image}
            alt={`${project.title} - réalisation High Touch ${index + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          <div className={styles.imageOverlay}>
            <FiCamera aria-hidden="true" />
          </div>
        </div>
      ))}
    </div>
  );
}

function MixedProject({ project, onVideoOpen }) {
  return (
    <div className={styles.mixedGrid}>
      {project.images.map((image, index) => (
        <div
          className={styles.mixedImage}
          key={`${project.id}-image-${index}`}
        >
          <Image
            src={image}
            alt={`${project.title} - photo ${index + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      ))}

      <button
        type="button"
        className={styles.videoCard}
        onClick={() => onVideoOpen(project.video)}
        aria-label={`Voir la vidéo ${project.title}`}
      >
        <div className={styles.videoBackground}>
          <span>VIDEO</span>
        </div>

        <span className={styles.playButton}>
          <FiPlay aria-hidden="true" />
        </span>

        <span className={styles.watchText}>
          Voir la vidéo
        </span>
      </button>
    </div>
  );
}

function Reels({ project, onVideoOpen }) {
  return (
    <div className={styles.reelsGrid}>
      {project.videos.map((video, index) => (
        <button
          key={`${project.id}-video-${index}`}
          type="button"
          className={styles.reel}
          onClick={() => onVideoOpen(video)}
          aria-label={`Voir ${project.title} - Reel ${index + 1}`}
        >
          {project.posters?.[index] && (
            <Image
              src={project.posters[index]}
              alt={`${project.title} - Reel ${index + 1}`}
              fill
              sizes="(max-width: 768px) 70vw, 25vw"
            />
          )}

          <div className={styles.reelOverlay}></div>

          <span className={styles.reelNumber}>
            REEL {String(index + 1).padStart(2, "0")}
          </span>

          <span className={styles.reelPlay}>
            <FiPlay aria-hidden="true" />
          </span>
        </button>
      ))}
    </div>
  );
}