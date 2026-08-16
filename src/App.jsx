import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RegistrationStatus from './components/RegistrationStatus';
import Programs from './components/Programs';
import Benefits from './components/Benefits';
import Audience from './components/Audience';
import LearningJourney from './components/LearningJourney';
import ProgramInformation from './components/ProgramInformation';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-ink)]">
      <Navbar />
      <main>
        <Hero />
        <RegistrationStatus />
        <Programs />
        <Benefits />
        <Audience />
        <LearningJourney />
        <ProgramInformation />
        <Pricing />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
