import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Trash2, ShoppingCart, ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setWishlist(savedWishlist);
  }, []);

  const removeFromWishlist = (productId) => {
    const newWishlist = wishlist.filter(item => item.id !== productId);
    setWishlist(newWishlist);
    localStorage.setItem('wishlist', JSON.stringify(newWishlist));
  };

  return (
    <div className="py-12 md:py-20 bg-gray-50 min-h-[calc(100vh-80px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <Heart size={32} className="text-black" />
          <h1 className="text-3xl font-black tracking-tight text-gray-900">Your Wishlist</h1>
        </div>

        {wishlist.length === 0 ? (
          <div className="bg-white p-12 rounded-3xl shadow-sm text-center border border-gray-100 flex flex-col items-center justify-center min-h-[400px]">
            <Heart size={64} className="text-gray-200 mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Your wishlist is empty</h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Save your favorite items here while you shop. They'll be waiting for you when you're ready to buy!
            </p>
            <Link to="/shop" className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-bold tracking-wide transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2 group">
              <span>Start Shopping</span>
              <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlist.map((product) => (
              <div key={product.id} className="relative group">
                <ProductCard product={product} />
                <button 
                  onClick={() => removeFromWishlist(product.id)}
                  className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-2.5 rounded-full text-red-500 hover:text-red-600 hover:bg-red-50 transition-all z-20 shadow-md hover:scale-110 opacity-0 group-hover:opacity-100"
                  title="Remove from wishlist"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
