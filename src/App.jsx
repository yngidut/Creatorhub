import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContentShowcase from './components/ContentShowcase';
import About from './components/About';
import WorkWithMe from './components/WorkWithMe';
import Shop from './components/Shop';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ContentShowcase />
        <About />
        <WorkWithMe />
        <Shop />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}