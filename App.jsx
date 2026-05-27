import Navbar          from './components/Navbar.jsx'
import Hero            from './components/Hero.jsx'
import CredibilityStrip from './components/CredibilityStrip.jsx'
import Specialities    from './components/Specialities.jsx'
import WhyTrust        from './components/WhyTrust.jsx'
import Doctors         from './components/Doctors.jsx'
import Testimonials    from './components/Testimonials.jsx'
import FAQ             from './components/FAQ.jsx'
import FinalCTA        from './components/FinalCTA.jsx'
import Footer          from './components/Footer.jsx'
import StickyButton    from './components/StickyButton.jsx'

export default function App() {
  return (
    <>
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
    </>
  )
}
