import React from 'react'
import { Navbar } from './components/Navbar'
import { InitialSection } from './components/InitialSection';
import { MissionAndVision } from './components/MissionAndVision';
import { Workflow } from './components/Workflow';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { AboutUs } from './components/AboutUs';

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <InitialSection />
        <MissionAndVision />
        < AboutUs />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default App