import { motion } from 'framer-motion';
import styles from './Portfolio.module.css';
import logoAtiv from '../../assets/ativ.png';
import logoMG from '../../assets/MG.png';
import logoPn from '../../assets/pnlogo.png';
import logoAmerico from '../../assets/Americo Team.png';
import logoSOS from '../../assets/SOS.png';

const clients = [
  { id: 1, name: 'Ativ Academia', logo: logoAtiv },
  { id: 2, name: 'MG Electric', logo: logoMG },
  { id: 3, name: 'Pn Performance Mídia', logo: logoPn },
  { id: 4, name: 'Americo Team BJJ', logo: logoAmerico },
  { id: 5, name: 'SOS Diaristas', logo: logoSOS},

];

export function Portfolio() {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.tagline}>Confiança & Credibilidade</span>
          <h2 className={styles.title}>Clientes que Confiam na N2 TECH</h2>
        </header>

        <div className={styles.logoGrid}>
          {clients.map((client, index) => (
            <motion.div 
              key={client.id}
              className={styles.logoCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={client.logo} alt={client.name} className={styles.clientLogo} />
              <div className={styles.logoGlow}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}