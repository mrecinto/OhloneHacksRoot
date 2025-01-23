import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/sections/About';
import { Schedule } from './components/sections/Schedule';
import { Tracks } from './components/sections/Tracks';
import { Prizes } from './components/sections/Prizes';
import { Sponsors } from './components/sections/Sponsors';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <Hero />
      {/* <About />
      <Schedule />
      <Tracks />
      <Prizes /> */}
      <Sponsors />
      {/* <FAQ />
      <Contact />
      <Footer />  */}
    </div>
  );
}

export default App;