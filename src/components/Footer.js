// components/Footer.js
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: contact@grocerybuddy.com</p>
          <p>Phone: +91 9876543210</p>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      <p className="footer-bottom">© 2025 GroceryBuddy. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
