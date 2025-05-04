import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedItems from './components/FeaturedItems';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<HowItWorks />} />
        <Route path="/recipes" element={<FeaturedItems />} />
        <Route path="/contact" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
