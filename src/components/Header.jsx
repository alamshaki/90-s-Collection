import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Search, User, Menu, X, ChevronDown, Shirt, Scissors, Briefcase, Tag, Target, Star, Smile, Circle, Wind, Activity, Home, Grid, Heart } from 'lucide-react';
import mainLogo from '../assets/site-logo.png';
import { categories } from '../data/products';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const getCategoryIcon = (category) => {
    const iconProps = { size: 16, className: "mr-3 text-primary opacity-70 group-hover/link:opacity-100 transition-opacity" };
    switch (category) {
      case 'T-Shirts': return <Shirt {...iconProps} />;
      case 'Shirts': return <Tag {...iconProps} />;
      case 'Jeans': return <Scissors {...iconProps} />;
      case 'Trousers & Pants': return <Briefcase {...iconProps} />;
      case 'Shorts': return <Circle {...iconProps} />;
      case 'Hoodies & Sweatshirts': return <Target {...iconProps} />;
      case 'Jackets & Coats': return <Wind {...iconProps} />;
      case 'Kurtas & Ethnic Wear': return <Star {...iconProps} />;
      case 'Tracksuits & Activewear': return <Activity {...iconProps} />;
      case 'Suits & Blazers': return <Briefcase {...iconProps} />;
      default: return <Shirt {...iconProps} />;
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center min-h-[64px] py-2 md:py-0 md:h-20 flex-wrap gap-y-2">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img src={mainLogo} alt="90's Men Logo" className="h-10 md:h-16 w-auto" />
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-4 md:space-x-8 overflow-x-auto hide-scrollbar whitespace-nowrap text-xs md:text-sm order-3 w-full md:w-auto md:order-none justify-center md:justify-start pb-2 md:pb-0">
            <Link to="/" className="text-gray-600 hover:text-primary font-medium transition-colors">Home</Link>
            
            <div 
              className="relative group"
              onMouseEnter={() => setIsCategoryMenuOpen(true)}
              onMouseLeave={() => setIsCategoryMenuOpen(false)}
            >
              <button className="flex items-center text-gray-600 hover:text-primary font-medium transition-colors focus:outline-none py-2">
                Shop By Category <ChevronDown size={14} className="ml-1" />
              </button>
              
              {isCategoryMenuOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-3 z-50 overflow-hidden">
                  <div className="max-h-[70vh] overflow-y-auto">
                    {categories.filter(c => c !== 'All').map(category => (
                      <Link 
                        key={category} 
                        to={`/shop?category=${encodeURIComponent(category)}`} 
                        className="group/link flex items-center px-5 py-2.5 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors font-medium"
                      >
                        {getCategoryIcon(category)}
                        {category}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className="text-gray-600 hover:text-primary font-medium transition-colors">Our Story</Link>
            <Link to="/contact" className="text-gray-600 hover:text-primary font-medium transition-colors">Contact</Link>
          </nav>

          {/* Icons & Search */}
          <div className="flex items-center space-x-3 md:space-x-5 relative order-2 md:order-none">
            
            {/* Search Bar */}
            <form className="flex items-center bg-gray-50 rounded-full border border-gray-200 px-3 py-1.5 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all" onSubmit={handleSearch}>
              <Search size={16} className="text-gray-400" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-transparent border-none px-2 py-1 text-sm focus:outline-none w-24 sm:w-32 xl:w-48 text-gray-700"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
            
            <Link to="/login" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-center">
              <User size={20} />
            </Link>
            
            <Link to="/cart" className="relative flex text-gray-600 hover:text-primary transition-colors items-center justify-center">
              <ShoppingBag size={20} />
              <span className="absolute -top-1.5 -right-1.5 bg-primary text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                3
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
