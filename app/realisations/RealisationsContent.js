"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowUpRight,
  FiCamera,
  FiChevronLeft,
  FiChevronRight,
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
    type: "galleryCarousel",
    featured: true,
    description:
      "Couverture visuelle d'événements et création de contenus destinés à valoriser les moments forts.",
    images: [
      "/realisations/jci/jci-01.webp",
      "/realisations/jci/jci-02.webp",
      "/realisations/jci/jci-03.webp",
      "/realisations/jci/jci-04.webp",
      // "/realisations/jci/jci-05.jpg",
      // "/realisations/jci/jci-06.jpg",
      // "/realisations/jci/jci-07.jpg",
      // "/realisations/jci/jci-08.jpg",
    ],
  },
  {
    id: "shooting-beaute",
    title: "Shooting professionnel — Beauté",
    category: "Photo",
    type: "galleryCarousel",
    description:
      "Photographie beauté et mise en valeur des détails, des textures et de l'expression.",
    images: [
      "/realisations/beaute/photo-03.webp",
      "/realisations/beaute/photo-04.webp",
      "/realisations/beaute/photo-01.webp",
      "/realisations/beaute/photo-02.webp",
      
      // "/realisations/shooting/beaute/photo-05.jpg",
      // "/realisations/shooting/beaute/photo-06.jpg",
    ],
  },
  {
    id: "shooting-personnel",
    title: "Shooting professionnel — Personnel",
    category: "Photo",
    type: "galleryCarousel",
    description:
      "Portraits et séances personnelles avec une approche photographique soignée.",
    images: [
      "/realisations/shooting-personnel/photo-01.webp",
      "/realisations/shooting-personnel/photo-02.webp",
      "/realisations/shooting-personnel/photo-03.webp",
      "/realisations/shooting-personnel/photo-04.webp",
      "/realisations/shooting-personnel/photo-05.webp",
      "/realisations/shooting-personnel/photo-06.webp",
      "/realisations/shooting-personnel/photo-07.webp",
      "/realisations/shooting-personnel/photo-08.webp",
      "/realisations/shooting-personnel/photo-09.webp",
       "/realisations/shooting-personnel/photo-010.webp",
    ],
  },
  {
    id: "shooting-mariage",
    title: "Shooting professionnel — Mariage",
    category: "Photo",
    type: "galleryCarousel",
    description:
      "Des images qui capturent les instants, les émotions et les détails d'une journée unique.",
    images: [
      "/realisations/mariage/photo-01.jpg",
      "/realisations/mariage/photo-02.jpg",
      "/realisations/mariage/photo-03.jpg",
      "/realisations/mariage/photo-04.jpg",
      "/realisations/mariage/photo-05.jpg",
      "/realisations/mariage/photo-06.jpg",
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
      "/realisations/vetements/photo-01.webp",
      "/realisations/vetements/photo-02.webp",
      "/realisations/vetements/photo-03.webp",
      "/realisations/vetements/photo-04.webp",
    ],
  },
  {
    id: "ali-mode",
    title: "Ali Mode Fashion Dresses",
    category: "Mode",
    type: "gallery",
    description:
      "Shooting mode pensé pour mettre en avant les tenues et leur univers visuel.",
    images: [
      "/realisations/ali-mode/photo-01.webp",
      "/realisations/ali-mode/photo-02.webp",
      "/realisations/ali-mode/photo-03.webp",
    ],
  },
  {
    id: "zedni-center",
    title: "Zedni Center",
    category: "Événementiel",
    type: "mixed",
    featured: true,
    description:
      "Couverture de l'événement SIT Connect et création de contenus promotionnels pour Zedni Center.",
    images: [
      "/realisations/zedni-center/photo-01.jpg",
       "/realisations/zedni-center/cover.png",
    ],
    videos: [
      "/realisations/zedni-center/video.mp4",
      "/realisations/zedni-center/reel-01.mp4",
    ],
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
    videos: [
      "/realisations/orange-event/video.mp4",
    ],
  },
  {
    id: "zanzibar",
    title: "Zanzibar Lounge & More",
    category: "Reels & Vidéo",
    type: "mixed",
    description:
      "Création de contenus photo et vidéo pour présenter l'univers et l'expérience du lieu.",
    images: [
      "/realisations/zanzibar/photo-01.png",
    ],
    videos: [
      "/realisations/zanzibar/video-01.mp4",
      "/realisations/zanzibar/video-02.mp4",
      "/realisations/zanzibar/video-03.mp4",
    ],
  },
  {
    id: "spa-mirage",
    title: "Jumana spa",
    category: "Reels & Vidéo",
    type: "reels",
    description:
      "Contenu vidéo dédié à la mise en valeur de l'expérience et de l'univers du spa.",
    videos: [
      "/realisations/spa-mirage/reel-01.mp4",
    ],
     posters: [
      "/realisations/spa-mirage/reel-01-cover.png",
    
    ],
  },
  {
    id: "flora-park",
    title: "Flora Park",
    category: "Événementiel",
    type: "mixed",
    description:
      "Contenus photo et vidéo pour valoriser le lieu et ses moments forts.",
    images: [
      "/realisations/flora-park/photo-01.jpg",
      "/realisations/flora-park/photo-02.jpg",
      "/realisations/flora-park/photo-03.jpg",
      "/realisations/flora-park/photo-04.jpg",
    ],
    videos: [
      "/realisations/flora-park/video.mp4",
       "/realisations/flora-park/video2.mp4",
    ],
   
  },
  {
    id: "mit",
    title: "MIT — Institut de Tunisie",
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
];

export default function RealisationsContent() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [activeVideo, setActiveVideo] = useState(null);
  const [activePhoto, setActivePhoto] = useState(null);

  const filteredProjects =
    activeFilter === "Tous"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  const openPhoto = (src, alt) => {
    setActivePhoto({ src, alt });
  };

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
                  onPhotoOpen={openPhoto}
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

      {/* ================= PHOTO PREVIEW ================= */}

      <AnimatePresence>
        {activePhoto && (
          <motion.div
            className={styles.photoOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhoto(null)}
          >
            <motion.div
              className={styles.photoModal}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.3 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className={styles.closePhoto}
                onClick={() => setActivePhoto(null)}
                aria-label="Fermer la photo"
              >
                <FiX />
              </button>

              <img
                src={activePhoto.src}
                alt={activePhoto.alt}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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

/* ================= PROJECT CARD ================= */

function Project({
  project,
  index,
  onVideoOpen,
  onPhotoOpen,
}) {
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
        <Gallery
          project={project}
          onPhotoOpen={onPhotoOpen}
        />
      )}

      {project.type === "galleryCarousel" && (
        <GalleryCarousel
          project={project}
          onPhotoOpen={onPhotoOpen}
        />
      )}

      {project.type === "mixed" && (
        <MixedProject
          project={project}
          onVideoOpen={onVideoOpen}
          onPhotoOpen={onPhotoOpen}
        />
      )}

      {project.type === "reels" && (
        <Reels
          project={project}
          onVideoOpen={onVideoOpen}
          onPhotoOpen={onPhotoOpen}
        />
      )}
    </motion.article>
  );
}

/* ================= NORMAL PHOTO GALLERY ================= */

function Gallery({ project, onPhotoOpen }) {
  return (
    <div
      className={`${styles.gallery} ${
        project.images.length > 3 ? styles.largeGallery : ""
      }`}
    >
      {project.images.map((image, index) => {
        const alt = `${project.title} - réalisation High Touch ${index + 1}`;

        return (
          <button
            type="button"
            className={styles.galleryImage}
            key={`${project.id}-${index}`}
            onClick={() => onPhotoOpen(image, alt)}
            aria-label={`Agrandir la photo ${index + 1} de ${project.title}`}
          >
            <img src={image} alt={alt} />

            <span className={styles.imageOverlay}>
              <FiCamera aria-hidden="true" />
            </span>
          </button>
        );
      })}
    </div>
  );
}

/* ================= SHOOTING CAROUSEL ================= */

function GalleryCarousel({ project, onPhotoOpen }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const currentImage = project.images[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? project.images.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === project.images.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div className={styles.shootingGallery}>
      <div className={styles.shootingImage}>
        <button
          type="button"
          className={styles.shootingPhotoButton}
          onClick={() =>
            onPhotoOpen(
              currentImage,
              `${project.title} - photo ${activeIndex + 1}`
            )
          }
          aria-label={`Agrandir la photo ${activeIndex + 1}`}
        >
          <img
            key={currentImage}
            src={currentImage}
            alt={`${project.title} - photo ${activeIndex + 1}`}
          />
        </button>

        <button
          type="button"
          className={`${styles.galleryArrow} ${styles.galleryArrowLeft}`}
          onClick={showPrevious}
          aria-label="Photo précédente"
        >
          <FiChevronLeft />
        </button>

        <button
          type="button"
          className={`${styles.galleryArrow} ${styles.galleryArrowRight}`}
          onClick={showNext}
          aria-label="Photo suivante"
        >
          <FiChevronRight />
        </button>
      </div>

      <div className={styles.galleryCounter}>
        {String(activeIndex + 1).padStart(2, "0")} /{" "}
        {String(project.images.length).padStart(2, "0")}
      </div>
    </div>
  );
}

/* ================= PHOTO + VIDEO PROJECT ================= */

function MixedProject({
  project,
  onVideoOpen,
  onPhotoOpen,
}) {
  const videos =
    project.videos || (project.video ? [project.video] : []);

  return (
    <div className={styles.mixedGrid}>
      {project.images.map((image, index) => (
        <button
          type="button"
          className={styles.mixedImage}
          key={`${project.id}-image-${index}`}
          onClick={() =>
            onPhotoOpen(
              image,
              `${project.title} - photo ${index + 1}`
            )
          }
          aria-label={`Agrandir la photo ${index + 1} de ${project.title}`}
        >
          <img
            src={image}
            alt={`${project.title} - photo ${index + 1}`}
          />
        </button>
      ))}

      {videos.map((video, index) => (
        <button
          type="button"
          className={styles.videoCard}
          key={`${project.id}-video-${index}`}
          onClick={() => onVideoOpen(video)}
          aria-label={`Voir la vidéo ${index + 1} de ${project.title}`}
        >
          <div className={styles.videoBackground}>
            <span>VIDEO</span>
          </div>

          <span className={styles.playButton}>
            <FiPlay aria-hidden="true" />
          </span>

          <span className={styles.watchText}>
            {videos.length > 1
              ? `Voir la vidéo ${index + 1}`
              : "Voir la vidéo"}
          </span>
        </button>
      ))}
    </div>
  );
}

/* ================= REELS ================= */

function Reels({
  project,
  onVideoOpen,
  onPhotoOpen,
}) {
  return (
    <div className={styles.reelsGrid}>
      {project.videos.map((video, index) => {
        const poster = project.posters?.[index];

        return (
          <button
            key={`${project.id}-video-${index}`}
            type="button"
            className={styles.reel}
            onClick={() => onVideoOpen(video)}
            aria-label={`Voir ${project.title} - Reel ${index + 1}`}
          >
            {poster && (
              <img
                src={poster}
                alt={`${project.title} - Reel ${index + 1}`}
                onClick={(event) => {
                  event.stopPropagation();
                  onPhotoOpen(
                    poster,
                    `${project.title} - couverture du Reel ${index + 1}`
                  );
                }}
              />
            )}

            <span className={styles.reelOverlay}></span>

            <span className={styles.reelNumber}>
              REEL {String(index + 1).padStart(2, "0")}
            </span>

            <span className={styles.reelPlay}>
              <FiPlay aria-hidden="true" />
            </span>
          </button>
        );
      })}
    </div>
  );
}