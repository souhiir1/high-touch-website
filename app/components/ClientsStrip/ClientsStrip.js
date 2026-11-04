"use client";

import { motion } from "framer-motion";
import styles from "./ClientsStrip.module.css";

const clients = [
  { name: "Orange", logo: "/logos/orangelogo.png" },
  { name: "Zedni Center", logo: "/logos/zednilogo.png" },
  { name: "JCI Events", logo: "/logos/jcilogo.jpg" },
  { name: "Flora Park", logo: "/logos/floralogo.png" },
  { name: "Spa Mirage", logo: "/logos/jumanalogo.jpg" },
  { name: "Zanzibar Lounge & More", logo: "/logos/zanzibarlogo.jpg" },
  { name: "Ali Mode", logo: "/logos/alimodelogo.jpg" },
  { name: "MIT Institut de Tunisie", logo: "/logos/mitlogo.jpg" },
];

const duplicatedClients = [...clients, ...clients];

export default function ClientsStrip() {
  return (
    <section className={styles.section}>
      <div className={styles.backgroundGlow} />

      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.eyebrow}>
            <span className={styles.line} />
            <span>ILS NOUS FONT CONFIANCE</span>
            <span className={styles.line} />
          </div>

          <h2>
            Des collaborations
            <span> qui nous inspirent.</span>
          </h2>

          <p>
            Derrière chaque marque, une histoire. Derrière chaque collaboration,
            une ambition commune.
          </p>
        </motion.div>

        <div className={styles.slider}>
          <div className={styles.sliderTrack}>
            {duplicatedClients.map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                className={styles.logoCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: (index % clients.length) * 0.06,
                }}
              >
                <div className={styles.logoInner}>
                  <img
                    src={client.logo}
                    alt={`Logo ${client.name}`}
                    className={styles.logo}
                    loading="lazy"
                  />
                </div>
                <span className={styles.clientName}>{client.name}</span>
                <span className={styles.cardAccent} />
              </motion.div>
            ))}
          </div>
        </div>

        <div className={styles.footer}>
          <span className={styles.footerDot} />
          <span>ET SI NOUS ÉCRIVIONS LA SUITE ENSEMBLE ?</span>
          <span className={styles.footerDot} />
        </div>
      </div>
    </section>
  );
}