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
            Na N2 TECH, não apenas construímos softwares; criamos pontes entre 
            grandes ideias e resultados extraordinários. Nossa equipe é focada 
            em entregar tecnologia de ponta com design centrado no usuário.
          </p>
          
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <h3>50+</h3>
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