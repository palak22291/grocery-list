// import './App.css';
// import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// import FeaturedItems from './components/FeaturedItems';
// import HowItWorks from './components/HowItWorks';
// import Footer from './components/Footer';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import SearchBar from './components/SearchBar';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <SearchBar/>
//       <Home/>
//       <Routes>
//         <Route path="/" element={<HeroSection />} />
//         <Route path="/about" element={<HowItWorks />} />
//         <Route path="/recipes" element={<FeaturedItems />} />
//         <Route path="/contact" element={<Footer />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import FeaturedItems from './components/FeaturedItems';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/recipes" element={<FeaturedItems />} />
        <Route path="/about" element={<HowItWorks />} />
        <Route path="/contact" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;


