import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import IdentitySection from './components/IdentitySection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import LocationSection from './components/LocationSection';
import ContactSection from './components/ContactSection';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './index.css';

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function App() {
  useReveal();

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <IdentitySection />
        <AboutSection />
        <ServicesSection />
        <LocationSection />
        <ContactSection />
        <MapSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
