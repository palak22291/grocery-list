import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';

import Home from './components/Home';
import FeaturedItems from './components/FeaturedItems';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/recipes" element={<FeaturedItems />} />
        <Route path="/about" element={<HowItWorks />} />
        <Route path="/contact" element={<Footer />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/searchbar" element={<SearchBar/>} />


      </Routes>
    </Router>
  );
}

export default App;


