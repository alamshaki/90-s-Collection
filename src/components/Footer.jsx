import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Globe, Share2, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3 className="footer-logo">
              90's<span className="accent">Collection</span>
            </h3>
            <p className="footer-desc">
              Bringing back the raddest styles from the best decade. Stay fresh, stay fly.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Social 1"><MessageCircle size={20} /></a>
              <a href="#" aria-label="Social 2"><Globe size={20} /></a>
              <a href="#" aria-label="Social 3"><Share2 size={20} /></a>
            </div>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Shop</h4>
            <ul className="footer-links">
              <li><Link to="/shop?category=Tops">Tops</Link></li>
              <li><Link to="/shop?category=Bottoms">Bottoms</Link></li>
              <li><Link to="/shop?category=Outerwear">Outerwear</Link></li>
              <li><Link to="/shop?category=Accessories">Accessories</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Help</h4>
            <ul className="footer-links">
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="#">FAQ</Link></li>
              <li><Link to="#">Shipping & Returns</Link></li>
              <li><Link to="#">Size Guide</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Newsletter</h4>
            <p className="newsletter-text">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit" aria-label="Subscribe"><Mail size={20} /></button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} 90's Collection. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
