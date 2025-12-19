import { motion } from 'framer-motion';
import styles from './Navbar.module.css';

export function Navbar() {
  return (
    <motion.nav 
      className={styles.navbar}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.n2}>N2</span> TECH
        </div>
        
        <ul className={styles.navLinks}>
          <li><a href="#home">Sobre</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#portfolio">Portfólio</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>

        {/* Botão de Mobile (Hambúrguer) */}
        <div className={styles.mobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.nav>
  );
}