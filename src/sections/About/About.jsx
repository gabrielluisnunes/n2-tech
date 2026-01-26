import { motion } from 'framer-motion';
import styles from './About.module.css';
import logoImg from '../../assets/N2 Tech - 2.png'; 

export function About() {
  return (
    <section id="sobre" className={styles.about}>
      <div className={styles.container}>
        <motion.div 
          className={styles.imageSide}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {}
          <motion.div 
            className={styles.logoWrapper}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src={logoImg} alt="N2 TECH Logo" className={styles.logoImage} />
            <div className={styles.imageGlow}></div>
          </motion.div>
        </motion.div>

        <motion.div 
          className={styles.contentSide}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className={styles.tagline}>Sobre Nós</span>
          <h2 className={styles.title}>Liderando a Inovação Digital</h2>
          <p className={styles.text}>
           A N2 Tech é uma empresa de marketing digital e desenvolvimento focada em transformar estratégia em execução.

Atuamos ajudando empresas e agências a estruturarem, otimizarem e escalarem suas operações digitais por meio de soluções práticas, eficientes e orientadas a resultado. Nosso trabalho une marketing, tecnologia e automação para resolver problemas reais do negócio e gerar crescimento consistente.
          </p>
          
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <h3>30+</h3>
              <p>Projetos</p>
            </div>
            <div className={styles.statItem}>
              <h3>10+</h3>
              <p>Especialistas</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}