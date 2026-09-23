import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, User } from 'lucide-react';
import mainLogo from '../assets/new-logo.png';

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
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gray-700 hover:text-primary transition-colors focus:outline-none" 
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            {/* Using invert to make white logo visible on light background or vice versa if it's black */}
            <img src={mainLogo} alt="90's Men Logo" className="h-10 w-auto brightness-0" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-primary font-medium text-sm transition-colors">Home</Link>
            <Link to="/shop" className="text-gray-600 hover:text-primary font-medium text-sm transition-colors">Shop</Link>
            <Link to="/about" className="text-gray-600 hover:text-primary font-medium text-sm transition-colors">Our Story</Link>
            <Link to="/contact" className="text-gray-600 hover:text-primary font-medium text-sm transition-colors">Contact</Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-5 relative">
            <div className="relative">
              <button 
                className="text-gray-600 hover:text-primary transition-colors focus:outline-none flex items-center justify-center" 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search size={20} />
              </button>
              
              {isSearchOpen && (
                <div className="absolute right-0 top-full mt-4 w-72 bg-white rounded-xl shadow-xl p-3 z-50 border border-gray-100">
                  <form className="flex" onSubmit={handleSearch}>
                    <input 
                      type="text" 
                      placeholder="Search collection..." 
                      className="flex-grow bg-gray-50 rounded-l-lg border-y border-l border-gray-200 p-2 text-sm focus:outline-none focus:bg-white transition-all"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      autoFocus
                    />
                    <button type="submit" className="bg-primary text-white px-4 rounded-r-lg font-medium text-sm hover:bg-primary-hover transition-colors">Search</button>
                  </form>
                </div>
              )}
            </div>
            
            <Link to="/login" className="hidden sm:block text-gray-600 hover:text-primary transition-colors flex items-center justify-center">
              <User size={20} />
            </Link>
            
            <Link to="/cart" className="relative text-gray-600 hover:text-primary transition-colors flex items-center justify-center">
              <ShoppingBag size={20} />
              <span className="absolute -top-1.5 -right-1.5 bg-primary text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                3
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full left-0 z-40 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link to="/" className="block text-gray-700 hover:text-primary font-medium text-base py-3" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="/shop" className="block text-gray-700 hover:text-primary font-medium text-base py-3" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
            <Link to="/about" className="block text-gray-700 hover:text-primary font-medium text-base py-3" onClick={() => setIsMobileMenuOpen(false)}>Our Story</Link>
            <Link to="/contact" className="block text-gray-700 hover:text-primary font-medium text-base py-3" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            <Link to="/login" className="block text-primary font-medium text-base py-3 border-t border-gray-100 mt-2 pt-4" onClick={() => setIsMobileMenuOpen(false)}>Login / Register</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
