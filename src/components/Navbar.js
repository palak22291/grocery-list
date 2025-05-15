import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/home">
          <img src="/Images/logo.png" alt="GroceryBuddy Logo" className="logo-img" />
        </Link>
      </div>

      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="hamburger">&#9776;</label>

      <ul className="navbar-links">
        <li><Link to="/home" className="home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/recipes">Recipes</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login" className="login-btn">Login</Link></li>
        <li><Link to="/signup" className="signup-btn">Sign Up</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
