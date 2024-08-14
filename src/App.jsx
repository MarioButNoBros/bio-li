import React from 'react'
import { Navbar } from './components/Navbar'
import { InitialSection } from './components/InitialSection';
import { MissionAndVision } from './components/MissionAndVision';
import { Footer } from './components/Footer';
import { AboutUs } from './components/AboutUs';
import { HistorySection } from './components/HistorySection';
import { Testimonials } from './components/Testimonials';

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <InitialSection />
        <HistorySection />
        <MissionAndVision />
        <Testimonials />
        <AboutUs />
        <Footer />
      </div>
    </>
  );
};

export default App