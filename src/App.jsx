import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        {/* Pricing and FAQ anchors referenced in the nav could be added later */}
      </main>
      <Footer />
    </div>
  );
}
