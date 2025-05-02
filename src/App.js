import './App.css';
import Navbar from './components/Navbar';
import HeroSection  from "./components/HeroSection";
import FeaturedItems from './components/FeaturedItems';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';



function App() {
  return (
    
       <>
       <Navbar/>
       <HeroSection/>
       <FeaturedItems/>
       <HowItWorks/>
        <Footer/>
       </>
  );
}

export default App;
