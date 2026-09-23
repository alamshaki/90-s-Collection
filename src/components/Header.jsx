import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, User } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <header className="header">
      <div className="container header-container">
        {/* Mobile Menu Toggle */}
        <button className="mobile-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link to="/" className="logo">
          90's<span className="accent">Collection</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
            <li><Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link></li>
            <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link></li>
            <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>

        {/* Icons */}
        <div className="header-icons">
          <div className="search-container">
            <button className="icon-btn" onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <Search size={20} />
            </button>
            {isSearchOpen && (
              <form className="search-form" onSubmit={handleSearch}>
                <input 
                  type="text" 
                  placeholder="Search retro gear..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <button type="submit">Go</button>
              </form>
            )}
          </div>
          
          <Link to="/login" className="icon-btn hide-mobile">
            <User size={20} />
          </Link>
          
          <Link to="/cart" className="icon-btn cart-btn">
            <ShoppingBag size={20} />
            <span className="cart-count">3</span> {/* Mock count */}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
