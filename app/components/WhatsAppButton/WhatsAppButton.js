"use client";

import { FaWhatsapp } from "react-icons/fa";
import styles from "./WhatsAppButton.module.css";

export default function WhatsAppButton() {
  const phoneNumber = "21652643319";

  const message =
    "Bonjour High Touch, je vous contacte depuis votre site web et j’aimerais avoir plus d’informations sur vos services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappButton}
      aria-label="Contacter High Touch sur WhatsApp"
    >
      <FaWhatsapp aria-hidden="true" />

      <span className={styles.tooltip}>
        Discuter avec nous
      </span>
    </a>
  );
}