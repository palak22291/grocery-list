
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';  
import { useNavigate } from 'react-router-dom';
import "./SignUp.css";

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => { src/components/SignUp.js
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Signup successful!');
      navigate('/home'); // Redirect to homepage
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email is already in use.');
      } else if (error.code === 'auth/weak-password') {
        alert('Password should be at least 6 characters.');
      } else {
        alert(error.message);
      }
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default Signup;
