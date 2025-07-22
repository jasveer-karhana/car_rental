import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import CarListingsSection from './components/CarListingsSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';

function App() {
  const [activeTab, setActiveTab] = useState('hero');

  return (
    <div className="App">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'hero' && <HeroSection />}
      {activeTab === 'about' && <AboutSection />}
      {activeTab === 'services' && <ServicesSection />}
      {activeTab === 'car-listings' && <CarListingsSection />}
      {activeTab === 'gallery' && <GallerySection />}
      {activeTab === 'testimonials' && <TestimonialsSection />}
      {activeTab === 'contact' && <ContactSection />}
    </div>
  );
}

export default App;
