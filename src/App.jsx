import Header from './components/Header';
import Hero from './components/Hero';
import Reviews from './components/Reviews';
import About from './components/About';
import Soins from './components/Soins';
import Ambiance from './components/Ambiance';
import Visit from './components/Visit';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Reviews />
        <About />
        <Soins />
        <Ambiance />
        <Visit />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
