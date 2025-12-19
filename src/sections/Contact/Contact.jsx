import { motion } from 'framer-motion';
import styles from './Contact.module.css';

export function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! (Simulação)');
  };

  return (
    <section id="contato" className={styles.contact}>
      <div className={styles.container}>
        <motion.div 
          className={styles.infoSide}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>Fale Conosco</h2>
          <p className={styles.description}>
            Tem um projeto em mente? Vamos transformar sua visão em realidade tecnológica.
          </p>
          <div className={styles.socialLinks}>
            {}
            <span>Instagram</span>
            <span>LinkedIn</span>
            <span>GitHub</span>
          </div>
        </motion.div>

        <motion.form 
          className={styles.form}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.inputGroup}>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" placeholder="Seu nome" required />
          </div>
          
          <div className={styles.inputGroup}>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="seu@email.com" required />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="message">Mensagem</label>
            <textarea id="message" rows="4" placeholder="Como podemos ajudar?"></textarea>
          </div>

          <button type="submit" className={styles.submitBtn}>Enviar Mensagem</button>
        </motion.form>
      </div>
    </section>
  );
}