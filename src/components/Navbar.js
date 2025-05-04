import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="/Images/logo.png" alt="GroceryBuddy Logo" className="logo-img" />
        </Link>
      </div>
      <ul className="navbar-links">

        <li className='home'>Home</li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/recipes">Recipes</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
