import { motion } from 'framer-motion';
import styles from './Portfolio.module.css';

const projects = [
  {
    id: 1,
    title: 'Projeto Alpha',
    category: 'Web Design',
    image: 'https://via.placeholder.com/400x250', 
  },
  {
    id: 2,
    title: 'Dashboard Tech',
    category: 'SaaS',
    image: 'https://via.placeholder.com/400x250',
  },
  {
    id: 3,
    title: 'App Mobile',
    category: 'Desenvolvimento',
    image: 'https://via.placeholder.com/400x250',
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.tagline}>Nossos Trabalhos</span>
          <h2 className={styles.title}>Portfólio</h2>
        </header>

        <div className={styles.grid}>
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              className={styles.projectCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className={styles.imageWrapper}>
                <img src={project.image} alt={project.title} />
                <div className={styles.overlay}>
                  <button className={styles.viewBtn}>Ver Projeto</button>
                </div>
              </div>
              <div className={styles.projectInfo}>
                <span className={styles.category}>{project.category}</span>
                <h3>{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}