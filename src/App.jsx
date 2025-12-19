import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './sections/Hero/Hero';
import { Services } from './sections/Services/Services';
import { About } from './sections/About/About';

import './styles/global.css';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      
      <main>
        {}
        <Hero />
        <About />
        <Services />
        
        {/* As próximas seções entrarão aqui */}
      </main>

      {}
      <footer style={{ padding: '40px', textAlign: 'center', opacity: 0.5 }}>
        © 2025 N2 TECH - Sua Visão, Nossa Tecnologia.
      </footer>
    </div>
  );
}

export default App;