import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Globe, Share2, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white pt-20 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="font-extrabold text-2xl tracking-tighter uppercase mb-4">
              90's<span className="text-primary">Men</span>
            </h3>
            <p className="text-gray-400 mb-6 max-w-sm">
              The premier destination for modern men's fashion inspired by the raddest decade. Stay fresh, stay fly.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 flex items-center justify-center border border-gray-700 rounded-full hover:bg-primary hover:border-primary transition-all duration-300" aria-label="Social 1"><MessageCircle size={18} /></a>
              <a href="#" className="h-10 w-10 flex items-center justify-center border border-gray-700 rounded-full hover:bg-primary hover:border-primary transition-all duration-300" aria-label="Social 2"><Globe size={18} /></a>
              <a href="#" className="h-10 w-10 flex items-center justify-center border border-gray-700 rounded-full hover:bg-primary hover:border-primary transition-all duration-300" aria-label="Social 3"><Share2 size={18} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg uppercase tracking-wider mb-6">Shop Menswear</h4>
            <ul className="space-y-4">
              <li><Link to="/shop?category=Tops" className="text-gray-400 hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">Tops & Tees</Link></li>
              <li><Link to="/shop?category=Bottoms" className="text-gray-400 hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">Denim & Bottoms</Link></li>
              <li><Link to="/shop?category=Outerwear" className="text-gray-400 hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">Outerwear</Link></li>
              <li><Link to="/shop?category=Accessories" className="text-gray-400 hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">Accessories</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg uppercase tracking-wider mb-6">Support</h4>
            <ul className="space-y-4">
              <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">Contact Us</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">FAQ</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">Shipping & Returns</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">Size Guide</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg uppercase tracking-wider mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4 text-sm">Join the club for exclusive drops and 15% off your first order.</p>
            <form className="flex border border-gray-700 focus-within:border-primary transition-colors" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow bg-transparent text-white px-4 py-3 outline-none w-full"
                required 
              />
              <button type="submit" className="bg-primary hover:bg-primary-hover text-white px-4 transition-colors flex items-center justify-center" aria-label="Subscribe">
                <Mail size={20} />
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} 90's Men Collection. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
