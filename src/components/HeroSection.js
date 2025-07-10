import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import React from "react";
import "./HeroSection.css";

import heroimage from '../assests/heroimage.png';

function HeroSection() {
  const navigate=useNavigate()

  const handleGetStarted=()=>{
    const auth = getAuth()
    const user=auth.currentUser
    if (user) {
      navigate('/grocery');
    } else {
      navigate('/signup');
    }
  }


  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Plan Your <br />Grocery Like a Pro!</h1>
          <p>Organize. Shop. Cook. Enjoy</p>
          <button onClick={handleGetStarted}>Get Started</button>
        </div>
        <div className="hero-image">
        <img src={heroimage} alt="Woman shopping groceries" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

