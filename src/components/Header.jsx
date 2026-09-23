import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, User } from 'lucide-react';
import mainLogo from '../assets/main-logo.png';

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
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gray-900 focus:outline-none" 
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img src={mainLogo} alt="90's Men Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-900 hover:text-primary font-semibold text-sm uppercase tracking-wider transition-colors">Home</Link>
            <Link to="/shop" className="text-gray-900 hover:text-primary font-semibold text-sm uppercase tracking-wider transition-colors">Shop</Link>
            <Link to="/about" className="text-gray-900 hover:text-primary font-semibold text-sm uppercase tracking-wider transition-colors">Our Story</Link>
            <Link to="/contact" className="text-gray-900 hover:text-primary font-semibold text-sm uppercase tracking-wider transition-colors">Contact</Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4 lg:space-x-6 relative">
            <div className="relative">
              <button 
                className="text-gray-900 hover:text-primary transition-colors focus:outline-none" 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search size={24} />
              </button>
              
              {isSearchOpen && (
                <div className="absolute right-0 top-full mt-4 w-72 bg-white border border-gray-200 shadow-xl p-2 z-50">
                  <form className="flex" onSubmit={handleSearch}>
                    <input 
                      type="text" 
                      placeholder="Search menswear..." 
                      className="flex-grow bg-gray-50 border border-gray-200 p-2 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      autoFocus
                    />
                    <button type="submit" className="bg-primary text-white px-4 font-bold uppercase text-sm hover:bg-primary-hover transition-colors">Go</button>
                  </form>
                </div>
              )}
            </div>
            
            <Link to="/login" className="hidden sm:block text-gray-900 hover:text-primary transition-colors">
              <User size={24} />
            </Link>
            
            <Link to="/cart" className="relative text-gray-900 hover:text-primary transition-colors">
              <ShoppingBag size={24} />
              <span className="absolute -top-1.5 -right-1.5 bg-primary text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                3
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 absolute w-full left-0 z-40 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-4">
            <Link to="/" className="block text-center text-gray-900 hover:text-primary font-bold text-lg uppercase tracking-wider py-2" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="/shop" className="block text-center text-gray-900 hover:text-primary font-bold text-lg uppercase tracking-wider py-2" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
            <Link to="/about" className="block text-center text-gray-900 hover:text-primary font-bold text-lg uppercase tracking-wider py-2" onClick={() => setIsMobileMenuOpen(false)}>Our Story</Link>
            <Link to="/contact" className="block text-center text-gray-900 hover:text-primary font-bold text-lg uppercase tracking-wider py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            <Link to="/login" className="block text-center text-primary font-bold text-lg uppercase tracking-wider py-2 border-t border-gray-100 mt-4 pt-4" onClick={() => setIsMobileMenuOpen(false)}>Login / Register</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
