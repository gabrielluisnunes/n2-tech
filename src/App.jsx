// src/App.jsx
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './sections/Hero/Hero';
import './styles/global.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {}
      </main>
    </>
  );
}

export default App;