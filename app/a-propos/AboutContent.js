"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiTarget,
  FiLayers,
  FiTrendingUp,
} from "react-icons/fi";
import styles from "./page.module.css";
const expertise = [
  {
    number: "01",
    title: "Stratégie Digitale",
    description:
      "Audit, positionnement, objectifs, calendrier éditorial et parcours de conversion.",
  },
  {
    number: "02",
    title: "Social Media",
    description:
      "Gestion des réseaux, contenu, programmation, animation et community management.",
  },
  {
    number: "03",
    title: "Content & Design",
    description:
      "Posts, carrousels, Reels, scripts, campagnes visuelles et direction artistique.",
  },
  {
    number: "04",
    title: "Branding",
    description:
      "Identité visuelle, cohérence graphique et déclinaisons pour tous vos supports.",
  },
  {
    number: "05",
    title: "Photo & Vidéo",
    description:
      "Shooting, contenu lifestyle, corporate, produit et formats courts pour les réseaux.",
  },
  {
    number: "06",
    title: "Media Buying",
    description:
      "Conception et pilotage de campagnes Meta Ads avec suivi des KPI et optimisation.",
  },
];

const method = [
  {
    number: "01",
    title: "Audit",
    description: "Comprendre votre situation, votre présence et vos enjeux.",
  },
  {
    number: "02",
    title: "Stratégie",
    description: "Définir une direction claire et cohérente pour votre marque.",
  },
  {
    number: "03",
    title: "Création",
    description: "Donner forme à votre identité et à vos contenus.",
  },
  {
    number: "04",
    title: "Diffusion",
    description: "Faire rayonner votre communication auprès de votre audience.",
  },
  {
    number: "05",
    title: "Optimisation",
    description: "Mesurer, tester et améliorer progressivement les performances.",
  },
];

export default function About() {
  return (
    <main> 
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroGlow}></div>
        <div className={styles.heroGlowSecondary}></div>

        <motion.div
          className={styles.heroCircle}
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
              className={styles.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span></span>
              À PROPOS DE HIGH TOUCH
            </motion.div>

            <h1>
              Nous donnons
              <span>du sens à votre</span>
              <strong>communication.</strong>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
            >
              Une agence qui transforme votre présence digitale en système de
              communication cohérent, visible et orienté business.
            </motion.p>
          </motion.div>
        </div>

        <div className={styles.heroBottom}>
          <span>STRATÉGIE</span>
          <span>CRÉATION</span>
          <span>PRODUCTION</span>
          <span>PERFORMANCE</span>
        </div>
      </section>

      {/* POSITIONNEMENT */}
      <section className={styles.positioningSection}>
        <div className={`${styles.positioningContainer} container`}>
          <motion.div
            className={styles.sectionLabel}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span></span>
            NOTRE POSITIONNEMENT
          </motion.div>

          <div className={styles.positioningGrid}>
            <motion.div
              className={styles.positioningTitle}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <h2>
                Une présence digitale
                <span>qui devient un véritable système.</span>
              </h2>
            </motion.div>

            <motion.div
              className={styles.positioningText}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <p>
                High Touch accompagne les marques qui souhaitent
                professionnaliser leur communication et construire une présence
                digitale cohérente.
              </p>

              <p>
                Notre travail ne consiste pas simplement à produire de beaux
                visuels. Nous construisons une communication compréhensible,
                cohérente et exploitable commercialement.
              </p>

              <Link href="/services" className={styles.textLink}>
                Découvrir nos expertises
                <FiArrowUpRight aria-hidden="true" />
              </Link>
            </motion.div>
          </div>

          <div className={styles.values}>
            <motion.article
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <FiTarget aria-hidden="true" />
              <h3>Une direction claire</h3>
              <p>
                Chaque action doit répondre à un objectif et s'inscrire dans
                une vision globale.
              </p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <FiLayers aria-hidden="true" />
              <h3>Une image cohérente</h3>
              <p>
                Même langage visuel et même logique de marque sur tous les
                points de contact.
              </p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FiTrendingUp aria-hidden="true" />
              <h3>Une logique business</h3>
              <p>
                La communication doit être pensée pour servir vos objectifs et
                soutenir votre développement.
              </p>
            </motion.article>
          </div>
        </div>
      </section>

      {/* NOTRE RÔLE */}
      <section className={styles.roleSection}>
        <div className={`${styles.roleContainer} container`}>
          <div className={styles.roleHeader}>
            <motion.div
              className={styles.sectionLabel}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span></span>
              NOTRE RÔLE
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              Structurer.
              <span>Créer. Faire grandir.</span>
            </motion.h2>
          </div>

          <div className={styles.roleGrid}>
            <motion.div
              className={styles.roleCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span>01</span>
              <h3>Structurer</h3>
              <p>
                Positionnement, identité, contenu et stratégie pour donner une
                direction claire à votre présence digitale.
              </p>
            </motion.div>

            <motion.div
              className={styles.roleCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span>02</span>
              <h3>Créer</h3>
              <p>
                Des contenus et supports visuels pensés pour être cohérents,
                reconnaissables et adaptés à chaque canal.
              </p>
            </motion.div>

            <motion.div
              className={styles.roleCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span>03</span>
              <h3>Développer</h3>
              <p>
                Diffusion, campagnes et optimisation pour faire évoluer votre
                communication avec vos objectifs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MÉTHODE */}
      <section className={styles.methodSection}>
        <div className={`${styles.methodContainer} container`}>
          <motion.div
            className={styles.methodHeader}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.sectionLabel}>
              <span></span>
              NOTRE APPROCHE
            </div>

            <h2>
              Une méthode simple.
              <span>Un système cohérent.</span>
            </h2>

            <p>
              Chaque collaboration suit une logique progressive, de
              l'observation à l'optimisation.
            </p>
          </motion.div>

          <div className={styles.methodSteps}>
            {method.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
              >
                <span>{step.number}</span>

                <div className={styles.methodLine}></div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISES */}
      <section className={styles.expertiseSection}>
        <div className={`${styles.expertiseContainer} container`}>
          <motion.div
            className={styles.expertiseHeader}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.sectionLabel}>
              <span></span>
              NOS EXPERTISES
            </div>

            <h2>
              Une offre intégrée
              <span>pensée pour le business.</span>
            </h2>
          </motion.div>

          <div className={styles.expertiseGrid}>
            {expertise.map((item, index) => (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.06,
                }}
              >
                <span className={styles.expertiseNumber}>
                  {item.number}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <Link href="/services" aria-label={`Découvrir ${item.title}`}>
                  <FiArrowUpRight aria-hidden="true" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* TARGET */}
      <section className={styles.targetSection}>
        <div className={`${styles.targetContainer} container`}>
          <motion.div
            className={styles.targetContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.sectionLabel}>
              <span></span>
              POUR QUI ?
            </div>

            <h2>
              Pour les marques qui veulent
              <span>professionnaliser leur communication.</span>
            </h2>

            <p>
              High Touch s'adresse aux entreprises, commerces, établissements
              touristiques, restaurants, services et marques qui souhaitent
              structurer leur présence digitale et renforcer leur image.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
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
              PARLONS DE VOTRE PROJET
              <span></span>
            </div>

            <h2>
              Prêt à transformer votre communication
              <span>en levier commercial ?</span>
            </h2>

            <p>
              Échangeons sur vos objectifs et construisons une communication
              adaptée à votre marque.
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