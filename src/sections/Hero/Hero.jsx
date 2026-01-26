import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero}>
      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className={styles.title}>
          Transformamos ideias em, <br />
          <span>Soluções digitais que geram resultado.</span>
        </h1>
        <p className={styles.subtitle}>
          Marketing digital, desenvolvimento e automação para empresas.
        </p>
       </motion.div>
      
      <div className={styles.glow} />
    </section>
  );
}