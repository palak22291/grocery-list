import React from "react";

import "./HeroSection.css"
import groceryImg from '../assests/grocery-bag.png';



function HeroSection() {
    return (
      <section className="hero">
        <div className="hero-text">
          <h1>
            Plan Your 
            Grocery 
            Like a Pro!</h1>
          <p>Organize. Shop. Cook. Enjoy</p>
          <button>Get Started</button>
        </div>
  
        <img src={groceryImg} alt="Grocery Bag" className="hero-image" />
      </section>
    );
  }
  

export default HeroSection;