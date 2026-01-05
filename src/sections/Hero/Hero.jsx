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
          Sua Visão, <br />
          <span>Nossa Tecnologia.</span>
        </h1>
        <p className={styles.subtitle}>
          Soluções sob medida que transformam ideias em crescimento.
        </p>
       </motion.div>
      
      <div className={styles.glow} />
    </section>
  );
}