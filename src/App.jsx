import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Features from './components/sections/Features';
import Products from './components/sections/Products';
import Story from './components/sections/Story';
import Branches from './components/sections/Branches';
import Gallery from './components/sections/Gallery';
import ScrollToTop from './components/ScrollToTop';
import { ToastProvider } from './components/ui/sonner';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <ToastProvider>
      <div className="min-h-screen bg-[#fffaef] text-[#1c0d16] flex flex-col font-sans selection:bg-[#e6007e] selection:text-white">
        <Navbar
          activeSection={activeSection}
          onNavigate={scrollToSection}
        />

        <main className="flex-1">
          <div id="home">
            <Hero
              onExploreBranches={() => scrollToSection('branches')}
              onExploreMenu={() => scrollToSection('products')}
            />
          </div>

          <About />
          <Features />
          <Products />
          <Story />
          <Branches />
          <Gallery />
        </main>

        <Footer onNavigate={scrollToSection} />
        <ScrollToTop />
      </div>
    </ToastProvider>
  );
}
