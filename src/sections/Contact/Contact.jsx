import { motion } from 'framer-motion';
import { Instagram, Send } from 'lucide-react'; 
import styles from './Contact.module.css';

export function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Captura dos dados do formulário
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    
    // Configuração do WhatsApp
    const phoneNumber = "5545991339633";
    const text = `Olá, meu nome é ${name} (${email}). ${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    // Abre o WhatsApp em uma nova aba
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" className={styles.contact}>
      <div className={styles.container}>
        <motion.div 
          className={styles.infoSide}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Fale Conosco</h2>
          <p className={styles.description}>
            Tem um projeto em mente? Vamos transformar sua visão em realidade tecnológica.
          </p>
          
          <div className={styles.socialLinks}>
            <a 
              href="https://www.instagram.com/n2techsolutions/" 
              className={styles.socialItem}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Instagram size={24} /> <span>Instagram</span>
            </a>
          </div>
        </motion.div>

        <motion.form 
          className={styles.form}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className={styles.inputGroup}>
            <label htmlFor="name">Nome</label>
            {/* Adicionado name="name" para capturar no handleSubmit */}
            <input type="text" id="name" name="name" placeholder="Seu nome" required />
          </div>
          
          <div className={styles.inputGroup}>
            <label htmlFor="email">E-mail</label>
            {/* Adicionado name="email" */}
            <input type="email" id="email" name="email" placeholder="seu@email.com" required />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="message">Mensagem</label>
            {/* Adicionado name="message" */}
            <textarea id="message" name="message" rows="4" placeholder="Como podemos ajudar?" required></textarea>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Enviar via WhatsApp <Send size={18} style={{ marginLeft: '10px' }} />
          </button>
        </motion.form>
      </div>
    </section>
  );
}