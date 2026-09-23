import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Globe, Share2, Mail } from 'lucide-react';
import mainLogo from '../assets/site-logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white pt-20 pb-8 mt-auto border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img src={mainLogo} alt="90's Men Logo" className="h-14 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" />
            </Link>
            <p className="text-gray-400 mb-2 max-w-sm text-sm leading-relaxed">
              <strong>90's Clothing</strong><br/>
              Shop No 14 Nasheman, Nepali Wala., Ibrahimpura Road, Chowk Bazaar, Bhopal-462001, Madhya Pradesh
            </p>
            <a href="https://www.google.com/maps/dir//90's+Clothing,+Nasheman+building,+Nadeem+Rd,+Near+Jahangiriya+School,+Ibrahimpura,+Peer+Gate+Area,+Bhopal,+Madhya+Pradesh+462001/@22.7423724,75.7825536,411226m/data=!3m2!1e3!4b1!4m8!4m7!1m0!1m5!1m1!1s0x397c6950593ebcb1:0x70c0c12db1830191!2m2!1d77.4008166!2d23.256298?entry=ttu&g_ep=EgoyMDI2MDkyMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm font-medium mb-6 inline-block">
              View on Google Maps
            </a>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 flex items-center justify-center bg-white/5 rounded-full hover:bg-primary hover:text-white transition-all duration-300" aria-label="Social 1"><MessageCircle size={18} /></a>
              <a href="#" className="h-10 w-10 flex items-center justify-center bg-white/5 rounded-full hover:bg-primary hover:text-white transition-all duration-300" aria-label="Social 2"><Globe size={18} /></a>
              <a href="#" className="h-10 w-10 flex items-center justify-center bg-white/5 rounded-full hover:bg-primary hover:text-white transition-all duration-300" aria-label="Social 3"><Share2 size={18} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-base mb-6 text-gray-200">Shop Collection</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/shop?category=Outerwear" className="text-gray-400 hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">Outerwear</Link></li>
              <li><Link to="/shop?category=Tops" className="text-gray-400 hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">Tops</Link></li>
              <li><Link to="/shop?category=Bottoms" className="text-gray-400 hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">Bottoms</Link></li>
              <li><Link to="/shop?category=Activewear" className="text-gray-400 hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">Activewear</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-base mb-6 text-gray-200">Support</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">Contact Us</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">FAQ</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">Shipping & Returns</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200">Size Guide</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-base mb-6 text-gray-200">Newsletter</h4>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">Join the club for exclusive drops and 15% off your first order.</p>
            <form className="flex rounded-lg overflow-hidden border border-white/10 focus-within:border-primary transition-colors bg-white/5" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow bg-transparent text-white px-4 py-3 outline-none w-full text-sm placeholder-gray-500"
                required 
              />
              <button type="submit" className="bg-primary hover:bg-primary-hover text-white px-5 transition-colors flex items-center justify-center" aria-label="Subscribe">
                <Mail size={18} />
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} 90's Clothing. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
