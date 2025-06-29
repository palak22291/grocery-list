import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import SignUp from './components/SignUp';

import Home from './components/Home';
import Grocery from './components/Grocery';
// import GroceryList from './components/GroceryList';
// import FeaturedItems from './components/FeaturedItems';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function MainApp() {
  const location = useLocation();

  return (
    <>
      <Navbar />
     
      
     
      {location.pathname === '/grocery' && <SearchBar />}

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/grocery" element={<Grocery />} />
        {/* <Route path="/grocery" element={<FeaturedItems />} /> */}
        <Route path="/about" element={<HowItWorks />} />
        <Route path="/contact" element={<Footer />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/searchbar" element={<SearchBar />} />
      
      </Routes>
    </>
  );
}

export default App;


