import './styles/variables.css';
import './styles/animations.css';
import './styles/globals.css';

import Navbar  from './components/Navbar/Navbar';
import Hero    from './sections/Hero/Hero';
import About   from './sections/About/About';
import Skills  from './sections/Skills/Skills';
import Journey from './sections/Journey/Journey';
import Projects from './sections/Projects/Projects';
import Education from './sections/Education/Education';
import Contact  from './sections/Contact/Contact';
import Footer   from './sections/Contact/Footer';

const App = () => {
  return (
    <>
      <Navbar />

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Skills />
        <Journey />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default App;
