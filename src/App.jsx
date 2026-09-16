import Navbar from './component/Navbar';
import Hero from './component/Hero';
import About from './component/About';

import Experience from './component/Experience';
import Contact from "./component/Contact"
import Projects from './component/Project';
import Footer from './component/Footer'

export default function App() {
  return (
    <div className="bg-stone-50 min-h-screen text-stone-900 font-sans antialiased selection:bg-stone-900 selection:text-stone-50 overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto border-x border-stone-200 min-h-screen relative flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <Experience />
          <Projects />
          
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}