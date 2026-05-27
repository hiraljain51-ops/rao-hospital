import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CredibilityStrip from "./components/CredibilityStrip";
import Specialities from "./components/Specialities";
import WhyTrust from "./components/WhyTrust";
import Doctors from "./components/Doctors";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import StickyButton from "./components/StickyButton";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <CredibilityStrip />
        <Specialities />
        <WhyTrust />
        <Doctors />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
      <StickyButton />
    </div>
  );
}
