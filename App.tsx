
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import ContentsSection from './components/ContentsSection';
import Testimonials from './components/Testimonials';
import WhoIsThisFor from './components/WhoIsThisFor';
import Author from './components/Author';
import Bonus from './components/Bonus';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <div className="relative z-10 bg-brand-dark">
          <ProblemSection />
          <SolutionSection />
          <ContentsSection />
          <Testimonials />
          <WhoIsThisFor />
          <Author />
          <Bonus />
          <Pricing />
          <FAQ />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
