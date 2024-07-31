import React from 'react'
import { Navbar } from './components/Navbar'
import { InitialSection } from './components/InitialSection';
import { MissionAndVision } from './components/MissionAndVision';
import { Workflow } from './components/Workflow';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { AboutUs } from './components/AboutUs';
import { HistorySection } from './components/HistorySection';

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <section id="inicio" className="scroll-mt-48">
          <InitialSection />
        </section>
        <section id="historia" className="scroll-mt-24">
          <HistorySection />
        </section>
        <section id="mision" className="scroll-mt-24">
          <MissionAndVision />
        </section>
        <section id="nosotros" className="scroll-mt-24">
          <AboutUs />
        </section>
        <section id="contacto" className="scroll-mt-24">
          <Footer />
        </section>
      </div>
    </>
  );
};

export default App