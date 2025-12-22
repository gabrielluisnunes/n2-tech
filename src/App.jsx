import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './sections/Hero/Hero';
import { Services } from './sections/Services/Services';
import { About } from './sections/About/About';
import { Portfolio } from './sections/Portfolio/Portfolio';
import { Contact } from './sections/Contact/Contact';

import './styles/global.css';
import { WhatsAppButton } from './components/Navbar/WhatsAppButton/WhatsAppButton';


function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      
      <main>
        {}
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
        {}
      </main>
      <WhatsAppButton />
      {}
      <footer style={{ padding: '40px', textAlign: 'center', opacity: 0.5 }}>
        © 2025 N2 TECH - Sua Visão, Nossa Tecnologia.
      </footer>
    </div>
  );
}

export default App;