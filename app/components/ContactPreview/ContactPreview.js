"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import styles from "./ContactPreview.module.css";

export default function ContactPreview() {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} container`}>
        <motion.div
          className={styles.topLine}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        />

        <div className={styles.content}>
          <motion.div
            className={styles.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span></span>
            PARLONS DE VOTRE PROJET
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Prêt à donner
            <span>plus d'impact à votre marque ?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Échangeons sur vos objectifs, vos besoins et les opportunités
            pour construire une communication cohérente, visible et orientée
            business.
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/contact" className={styles.primaryButton}>
              Démarrer un projet
              <FiArrowUpRight aria-hidden="true" />
            </Link>

            <a
              href="https://wa.me/21652643319"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryButton}
            >
              Nous écrire sur WhatsApp
            </a>
          </motion.div>
        </div>

        <motion.div
          className={styles.bottomLine}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
        />
      </div>
    </section>
  );
}