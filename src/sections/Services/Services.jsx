import { motion } from 'framer-motion';
import styles from './Services.module.css';
import { Monitor, Cpu, Workflow, Layers, MousePointerClick, Palette, Users, MapPin } from 'lucide-react';

const services = [
  { 
    title: 'Desenvolvimento Web', 
    desc: 'Sites modernos e escaláveis.', 
    icon: <Monitor size={32} /> 
  },
  { 
    title: 'Criação de Criativos', 
    desc: 'Designs criativos para marketing digital.', 
    icon: <Palette size={32} /> 
  },
  { 
    title: 'Automação & Integração', 
    desc: 'Otimize seus processos internos.', 
    icon: <Workflow size={32} /> 
  },
  { 
    title: 'Social Media Management', 
    desc: 'Gestão de redes sociais para sua marca.', 
    icon: <Users size={32} /> 
  },

  { 
    title: 'Google meu Negócio', 
    desc: 'Otimização e gestão do perfil para aumentar visibilidade local, credibilidade e geração de contatos.', 
    icon: <MapPin size={32} /> 
  },
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
              {}
              <div className={styles.iconContainer}>
                {service.icon}
              </div>
              
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