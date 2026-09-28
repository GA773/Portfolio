import { Navigation } from './components/Navigation/Navigation';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Education } from './components/Education/Education';
import { Certifications } from './components/Certifications/Certifications';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import './App.css';
import './Refinement.css';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
      <div className="site-ambient" aria-hidden="true">
        <div className="site-ambient__orb site-ambient__orb--one" />
        <div className="site-ambient__orb site-ambient__orb--two" />
        <div className="site-ambient__grid" />
        <div className="site-noise" />
      </div>
      <Navigation />

      <main id="main-content">
        <Hero />
        <div className="craft-ribbon" aria-label="Development focus"><span>FULL-STACK DEVELOPMENT</span><i>✳</i><span>INTELLIGENT APPLICATIONS</span><i>✳</i><span>THOUGHTFUL EXPERIENCES</span><i>✳</i><span>BUILT WITH PURPOSE</span></div>
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
import { motion, useScroll, useSpring } from 'framer-motion';
