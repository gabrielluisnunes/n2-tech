import { motion } from 'framer-motion';
import styles from './Portfolio.module.css';



const clients = [
  { id: 1, name: 'Empresa Alpha', logo: 'https://via.placeholder.com/200x80?text=LOGO+1' },
  { id: 2, name: 'Tech Solutions', logo: 'https://via.placeholder.com/200x80?text=LOGO+2' },
  { id: 3, name: 'Global Systems', logo: 'https://via.placeholder.com/200x80?text=LOGO+3' },
  { id: 4, name: 'Inova Corp', logo: 'https://via.placeholder.com/200x80?text=LOGO+4' },
  { id: 5, name: 'Future Mind', logo: 'https://via.placeholder.com/200x80?text=LOGO+5' },
  { id: 6, name: 'Digital Edge', logo: 'https://via.placeholder.com/200x80?text=LOGO+6' },
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