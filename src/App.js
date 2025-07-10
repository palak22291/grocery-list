import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./components/Home";
import Grocery from "./components/Grocery";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <Router>
      <Navbar/>
      
      <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/grocery" element={<Grocery />} />
        <Route path="/about" element={<HowItWorks />} />

        <Route path="/contact" element={<Footer />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
