
import React from "react";
import "./HeroSection.css";

import heroimage from '../assests/heroimage.png';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Plan Your <br />Grocery Like a Pro!</h1>
          <p>Organize. Shop. Cook. Enjoy</p>
          <button>Get Started</button>
        </div>
        <div className="hero-image">
        <img src={heroimage} alt="Woman shopping groceries" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

