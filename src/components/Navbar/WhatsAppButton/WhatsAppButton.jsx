import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import styles from './WhatsAppButton.module.css';

export function WhatsAppButton() {
  const phoneNumber = "5511999999999"; // Coloque seu número aqui (com DDD)
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços da N2 TECH.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title="Fale conosco no WhatsApp"
    >
      <motion.div
        className={styles.pulse}
        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <MessageCircle size={30} fill="currentColor" />
    </motion.a>
  );
}