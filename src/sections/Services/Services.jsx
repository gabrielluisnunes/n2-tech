import { motion } from 'framer-motion';
import styles from './Services.module.css';

const services = [
  { title: 'Desenvolvimento Web', desc: 'Sistemas modernos e escaláveis.' },
  { title: 'Sistemas Personalizados', desc: 'Soluções focadas no seu negócio.' },
  { title: 'Automação & Integração', desc: 'Otimize seus processos internos.' },
  { title: 'Soluções SaaS', desc: 'Sua ideia transformada em produto.' },
];

export function Services() {
  return (
    <section id="servicos" className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Nossos Serviços</h2>
        
        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className={styles.card}
              whileHover={{ scale: 1.05, translateY: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={styles.iconPlaceholder}></div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <div className={styles.cardGlow}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}