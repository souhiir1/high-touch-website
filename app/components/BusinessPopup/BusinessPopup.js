"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiArrowUpRight, FiX } from "react-icons/fi";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import styles from "./BusinessPopup.module.css";

export default function BusinessPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={() => setIsOpen(false)}>
      <div
        className={styles.popup}
        onClick={(event) => event.stopPropagation()}
      >
        {/* Decorative glow */}
        <div className={styles.glowOne} />
        <div className={styles.glowTwo} />

        {/* Close */}
        <button
          type="button"
          className={styles.closeButton}
          onClick={() => setIsOpen(false)}
          aria-label="Fermer"
        >
          <FiX aria-hidden="true" />
        </button>

        {/* Top label */}
        <div className={styles.topLine}>
          <span className={styles.line} />
          <span>HIGH TOUCH</span>
          <span className={styles.line} />
        </div>

        {/* Main content */}
        <div className={styles.content}>
          <span className={styles.eyebrow}>
            VOTRE BUSINESS MÉRITE PLUS
          </span>

          <h2>
            Business
            <br />
            <span>متاعك</span> يستاهل أكثر.
          </h2>

          <p className={styles.mainText}>
            ما تخليش الناس تعدّي قدامك وما تعرفكش.
          </p>

          <p className={styles.description}>
          متاعك على السوشيل ميديا présenceخلّي ال
           <br/>
           business تخدم عليك وتخلّي الناس تشوف، تعرف وتثق في الـ 
            متاعك.
          </p>

          {/* Services */}
          <div className={styles.services}>
            <span>
              <FaInstagram aria-hidden="true" />
              Social Media
            </span>

            <span>Branding</span>

            <span>Content</span>

            <span>🎯 Sponsoring</span>
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className={styles.cta}
            onClick={() => setIsOpen(false)}
          >
            <span>خلّينا نبدأو</span>

            <span className={styles.ctaIcon}>
              <FiArrowUpRight aria-hidden="true" />
            </span>
          </Link>

          <p className={styles.bottomText}>
           نحكيو على أول خطوة؟
          </p>
        </div>

        {/* Decorative corner */}
        <div className={styles.cornerShape} />
      </div>
    </div>
  );
}