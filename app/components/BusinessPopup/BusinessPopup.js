"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiX } from "react-icons/fi";
import styles from "./BusinessPopup.module.css";

const clients = [
  {
    id: "flora",
    name: "Flora Beach Park",
    before: "/realisations/content-design/flora-beach-avant.jpeg",
    after: "/realisations/content-design/flora-beach-apres.jpeg",
  },
  {
    id: "ranch",
    name: "Ranch Yasmine",
    before: "/realisations/content-design/ranch-yasmine-avant.jpeg",
    after: "/realisations/content-design/ranch-yasmine-apres.jpeg",
  },
   {
    id: "zanzibar",
    name: "Zanzibar lounge and more",
    before: "/realisations/content-design/zanzibar-avant.jpeg",
    after: "/realisations/content-design/zanzibar-apres.jpeg",
  },
];

export default function BusinessPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeClient, setActiveClient] = useState(0);

  // Show after 5 seconds on every page load.
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Automatically switch clients.
  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      setActiveClient((current) => (current + 1) % clients.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isOpen]);

  // Close with Escape and lock background scrolling.
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    const handleEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const client = clients[activeClient];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          onClick={() => setIsOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className={styles.popup}
            role="dialog"
            aria-modal="true"
            aria-label="Découvrez quelques projets High Touch"
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
              aria-label="Fermer"
            >
              <FiX />
            </button>

            <div className={styles.header}>
              <span className={styles.eyebrow}>HIGH TOUCH</span>
              <h2>
                Ils nous ont fait confiance.
                <span> Découvrez ce que nous avons créé ensemble.</span>
              </h2>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={client.id}
                className={styles.project}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className={styles.phones}>
                  {/* BEFORE PHONE */}
                  <div className={styles.phoneColumn}>
                    <span className={styles.imageLabel}>AVANT</span>

                    <div className={styles.phone}>
                      <div className={styles.phoneSideButton} />
                      <div className={styles.phoneFrame}>
                        <div className={styles.phoneScreen}>
                          <div className={styles.phoneNotch}>
                            <span />
                          </div>

                          <Image
                            src={client.before}
                            alt={`${client.name} - Avant`}
                            fill
                            sizes="(max-width: 600px) 38vw, 230px"
                            className={styles.phoneImage}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.phoneDivider} />

                  {/* AFTER PHONE */}
                  <div className={styles.phoneColumn}>
                    <span className={styles.imageLabelAfter}>APRÈS</span>

                    <div className={styles.phone}>
                      <div className={styles.phoneSideButton} />
                      <div className={styles.phoneFrame}>
                        <div className={styles.phoneScreen}>
                          <div className={styles.phoneNotch}>
                            <span />
                          </div>

                          <Image
                            src={client.after}
                            alt={`${client.name} - Après`}
                            fill
                            sizes="(max-width: 600px) 38vw, 230px"
                            className={styles.phoneImage}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.projectFooter}>
                  <span className={styles.clientName}>{client.name}</span>

                  <div className={styles.indicators}>
                    {clients.map((item, index) => (
                      <span
                        key={item.id}
                        className={
                          index === activeClient
                            ? styles.activeIndicator
                            : styles.indicator
                        }
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className={styles.actions}>
              <Link
                href="/realisations"
                className={styles.workButton}
                onClick={() => setIsOpen(false)}
              >
                Voir notre travail <FiArrowUpRight />
              </Link>

              <Link
                href="/contact"
                className={styles.contactButton}
                onClick={() => setIsOpen(false)}
              >
                Nous contacter
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
