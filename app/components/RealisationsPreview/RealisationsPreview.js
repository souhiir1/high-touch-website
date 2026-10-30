"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import styles from "./RealisationsPreview.module.css";

export default function RealisationsPreview() {
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
            NOS RÉALISATIONS
          </div>

          <div className={styles.headingRow}>
            <h2>
              Des idées qui prennent
              <span>forme.</span>
            </h2>

            <p>
              Découvrez prochainement une sélection de projets réalisés pour
              nos clients et les différentes expertises que nous mettons au
              service de leur communication.
            </p>
          </div>
        </motion.div>

        <motion.div
          className={styles.showcase}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.visual}>
            <div className={styles.visualGlow}></div>

            <span className={styles.visualNumber}>HT</span>

            <div className={styles.visualLine}></div>

            <span className={styles.visualText}>
              PORTFOLIO
              <br />
              EN PRÉPARATION
            </span>
          </div>

          <div className={styles.showcaseContent}>
            <span className={styles.comingSoon}>PROCHAINEMENT</span>

            <h3>
              Notre travail
              <br />
              parlera pour nous.
            </h3>

            <p>
              Nous préparons actuellement notre sélection de réalisations.
              Revenez prochainement pour découvrir nos projets, nos créations
              et les histoires derrière chaque collaboration.
            </p>

            <Link href="/realisations" className={styles.link}>
              Voir la page Réalisations
              <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}