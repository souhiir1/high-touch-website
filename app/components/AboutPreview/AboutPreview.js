"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import styles from "./AboutPreview.module.css";

export default function AboutPreview() {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} container`}>
        <motion.div
          className={styles.label}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span></span>
          À PROPOS DE HIGH TOUCH
        </motion.div>

        <div className={styles.content}>
          <motion.div
            className={styles.headingWrapper}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2>
              Une communication pensée
              <span>pour avoir un impact.</span>
            </h2>
          </motion.div>

          <motion.div
            className={styles.textWrapper}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p>
              High Touch accompagne les entreprises, commerces, établissements
              touristiques, restaurants, services et marques qui souhaitent
              professionnaliser leur communication.
            </p>

            <p>
              Nous construisons une communication cohérente, visible et
              orientée business, de la stratégie à la création, jusqu'à la
              diffusion et l'optimisation.
            </p>

            <Link href="/a-propos" className={styles.link}>
              Découvrir High Touch
              <FiArrowUpRight aria-hidden="true" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          className={styles.method}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span>01 — AUDIT</span>
          <span>02 — STRATÉGIE</span>
          <span>03 — CRÉATION</span>
          <span>04 — DIFFUSION</span>
          <span>05 — OPTIMISATION</span>
        </motion.div>
      </div>
    </section>
  );
}