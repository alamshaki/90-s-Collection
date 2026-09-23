import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Search, User, Menu, X, ChevronDown, Shirt, Scissors, Briefcase, Tag, Target, Star, Smile, Circle, Wind, Activity, Home, Grid } from 'lucide-react';
import mainLogo from '../assets/new-logo.png';
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
        <div className="flex justify-center md:justify-between items-center h-16 md:h-20">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            {/* Removed brightness-0 to fix black logo issue as requested */}
            <img src={mainLogo} alt="90's Men Logo" className="h-8 md:h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-primary font-medium text-sm transition-colors">Home</Link>
            
            {/* Shop By Category Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsCategoryMenuOpen(true)}
              onMouseLeave={() => setIsCategoryMenuOpen(false)}
            >
              <button className="flex items-center text-gray-600 hover:text-primary font-medium text-sm transition-colors focus:outline-none py-2">
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

            <Link to="/about" className="text-gray-600 hover:text-primary font-medium text-sm transition-colors">Our Story</Link>
            <Link to="/contact" className="text-gray-600 hover:text-primary font-medium text-sm transition-colors">Contact</Link>
          </nav>

          {/* Icons & Search */}
          <div className="flex items-center space-x-5 relative">
            
            {/* Persistent Search Bar */}
            <form className="hidden lg:flex items-center bg-gray-50 rounded-full border border-gray-200 px-3 py-1.5 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all" onSubmit={handleSearch}>
              <Search size={16} className="text-gray-400" />
              <input 
                type="text" 
                placeholder="Search collection..." 
                className="bg-transparent border-none px-2 py-1 text-sm focus:outline-none w-40 xl:w-48 text-gray-700"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
            
            <Link to="/login" className="hidden sm:block text-gray-600 hover:text-primary transition-colors flex items-center justify-center">
              <User size={20} />
            </Link>
            
            <Link to="/cart" className="relative hidden md:flex text-gray-600 hover:text-primary transition-colors items-center justify-center">
              <ShoppingBag size={20} />
              <span className="absolute -top-1.5 -right-1.5 bg-primary text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                3
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Navigation for Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-100 z-50 px-6 py-3 flex justify-between items-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <Link to="/" className="flex flex-col items-center gap-1 text-gray-500 hover:text-primary transition-colors">
          <Home size={20} />
          <span className="text-[10px] font-medium">Home</span>
        </Link>
        <button onClick={() => navigate('/shop')} className="flex flex-col items-center gap-1 text-gray-500 hover:text-primary transition-colors">
          <Grid size={20} />
          <span className="text-[10px] font-medium">Categories</span>
        </button>
        <Link to="/cart" className="flex flex-col items-center gap-1 text-gray-500 hover:text-primary transition-colors relative">
          <div className="relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-1.5 -right-1.5 bg-primary text-white text-[10px] font-bold h-3.5 w-3.5 rounded-full flex items-center justify-center">3</span>
          </div>
          <span className="text-[10px] font-medium">Cart</span>
        </Link>
        <Link to="/login" className="flex flex-col items-center gap-1 text-gray-500 hover:text-primary transition-colors">
          <User size={20} />
          <span className="text-[10px] font-medium">Profile</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
