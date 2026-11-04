"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiSend,
  FiCheck,
  FiAlertCircle,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./page.module.css";

const services = [
  "Stratégie Digitale",
  "Social Media",
  "Content & Design",
  "Branding",
  "Photo & Vidéo",
  "Media Buying",
  "Autre",
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <main>
      {/* =========================================
          HERO
      ========================================= */}

      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroGlowSecondary} />

        <div className={`${styles.heroInner} container`}>
          <motion.div
            className={styles.heroContent}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <motion.span className={styles.label} variants={fadeUp}>
              PARLONS DE VOTRE PROJET
            </motion.span>

            <motion.h1 variants={fadeUp}>
              Donnons une nouvelle
              <br />
              <span>dimension</span> à votre marque.
            </motion.h1>

            <motion.p variants={fadeUp}>
              Une idée, un projet ou simplement besoin d&apos;une nouvelle
              direction ? Échangeons autour de vos objectifs et construisons
              ensemble une communication qui fait la différence.
            </motion.p>

            <motion.div
              className={styles.heroActions}
              variants={fadeUp}
            >
              <a
                href="https://wa.me/21652643319"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryButton}
              >
                <FaWhatsapp aria-hidden="true" />
                Échanger sur WhatsApp
                <FiArrowUpRight aria-hidden="true" />
              </a>

              <a
                href="mailto:comhightouch@gmail.com"
                className={styles.secondaryButton}
              >
                Nous écrire
                <FiArrowUpRight aria-hidden="true" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.heroCircle}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className={styles.circleRingOne} />
            <div className={styles.circleRingTwo} />
            <div className={styles.circleRingThree} />

            <div className={styles.circleCore}>
              <span>LET&apos;S</span>
              <strong>CONNECT</strong>
              <small>HIGH TOUCH</small>
            </div>

            <span className={styles.circleDot} />
          </motion.div>
        </div>

        <div className={styles.heroBottom}>
          <span>STRATÉGIE</span>
          <span>CRÉATION</span>
          <span>PRODUCTION</span>
          <span>PERFORMANCE</span>
        </div>
      </section>

      {/* =========================================
          CONTACT + FORM
      ========================================= */}

      <section className={styles.contactSection}>
        <div className={`${styles.contactContainer} container`}>
          <motion.div
            className={styles.contactInfo}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <motion.div variants={fadeUp}>
              <span className={styles.sectionLabel}>
                CONTACT
              </span>

              <h2>
                Un premier échange.
                <br />
                <span>Une vraie direction.</span>
              </h2>

              <p className={styles.intro}>
                Nous privilégions les échanges simples, directs et
                constructifs. Expliquez-nous votre besoin et nous
                reviendrons vers vous pour en discuter.
              </p>
            </motion.div>

            <div className={styles.contactDetails}>
              <motion.a
                href="mailto:comhightouch@gmail.com"
                className={styles.contactItem}
                variants={fadeUp}
              >
                <span className={styles.contactIcon}>
                  <FiMail aria-hidden="true" />
                </span>

                <span>
                  <small>EMAIL</small>
                  <strong>comhightouch@gmail.com</strong>
                </span>

                <FiArrowUpRight
                  className={styles.contactArrow}
                  aria-hidden="true"
                />
              </motion.a>

              <motion.a
                href="tel:+21626605686"
                className={styles.contactItem}
                variants={fadeUp}
              >
                <span className={styles.contactIcon}>
                  <FiPhone aria-hidden="true" />
                </span>

                <span>
                  <small>TÉLÉPHONE</small>
                  <strong>26 605 686</strong>
                </span>

                <FiArrowUpRight
                  className={styles.contactArrow}
                  aria-hidden="true"
                />
              </motion.a>

              <motion.a
                href="https://wa.me/21652643319"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactItem}
                variants={fadeUp}
              >
                <span className={styles.contactIcon}>
                  <FaWhatsapp aria-hidden="true" />
                </span>

                <span>
                  <small>WHATSAPP</small>
                  <strong>52 643 319</strong>
                </span>

                <FiArrowUpRight
                  className={styles.contactArrow}
                  aria-hidden="true"
                />
              </motion.a>

              <motion.div
                className={styles.contactItem}
                variants={fadeUp}
              >
                <span className={styles.contactIcon}>
                  <FiMapPin aria-hidden="true" />
                </span>

                <span>
                  <small>ZONE D&apos;INTERVENTION</small>
                  <strong>Tunisie &amp; projets à distance</strong>
                </span>
              </motion.div>

              <motion.div
                className={styles.contactItem}
                variants={fadeUp}
              >
                <span className={styles.contactIcon}>
                  <FiClock aria-hidden="true" />
                </span>

                <span>
                  <small>DISPONIBILITÉ</small>
                  <strong>Lun. — Ven. · 09h — 18h</strong>
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* FORM */}

          <motion.div
            className={styles.formWrapper}
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className={styles.formHeader}>
              <span>VOTRE PROJET</span>

              <h3>
                Parlez-nous de votre besoin.
              </h3>
            </div>

            <form
              onSubmit={handleSubmit}
              className={styles.form}
            >
              <div className={styles.formGrid}>
                <div className={styles.field}>
                  <label htmlFor="name">
                    Nom complet *
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="phone">
                    Téléphone *
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Votre numéro"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.formGrid}>
                <div className={styles.field}>
                  <label htmlFor="email">
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="service">
                    Votre besoin *
                  </label>

                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">
                      Sélectionner un service
                    </option>

                    {services.map((service) => (
                      <option
                        key={service}
                        value={service}
                      >
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="message">
                  Votre message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Parlez-nous de votre projet, vos objectifs ou vos besoins..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    Envoi en cours...
                    <span className={styles.spinner} />
                  </>
                ) : (
                  <>
                    Envoyer ma demande
                    <FiSend aria-hidden="true" />
                  </>
                )}
              </button>

              {status === "success" && (
                <div className={styles.formSuccess}>
                  <FiCheck aria-hidden="true" />

                  <span>
                    Votre demande a bien été envoyée.
                    Nous vous contacterons prochainement.
                  </span>
                </div>
              )}

              {status === "error" && (
                <div className={styles.formError}>
                  <FiAlertCircle aria-hidden="true" />

                  <span>
                    Une erreur est survenue. Veuillez réessayer
                    ou nous contacter directement par WhatsApp.
                  </span>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          FINAL CTA
      ========================================= */}

      <section className={styles.finalCta}>
        <div className={styles.finalCtaGlow} />

        <div
          className={`${styles.finalCtaContainer} container`}
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <span className={styles.sectionLabel}>
              UNE QUESTION ?
            </span>

            <h2>
              Parlons-en
              <br />
              <span>directement.</span>
            </h2>

            <p>
              Pour une réponse rapide, contactez-nous directement
              sur WhatsApp.
            </p>

            <a
              href="https://wa.me/21652643319"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappCta}
            >
              <FaWhatsapp aria-hidden="true" />
              Discuter avec nous
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}