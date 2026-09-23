import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
      <Link to={`/product/${product.id}`} className="relative aspect-[4/5] overflow-hidden bg-gray-100 block">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          loading="lazy" 
        />
        {product.isTrending && (
          <span className="absolute top-4 left-4 bg-primary text-white px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full shadow-sm z-10">
            Trending
          </span>
        )}
        
        {/* Quick Add Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10 flex justify-center">
          <button 
            className="w-full bg-white text-gray-900 hover:bg-primary hover:text-white font-medium text-sm py-3 rounded-xl flex items-center justify-center gap-2 transition-colors duration-300 shadow-md"
            onClick={(e) => {
              e.preventDefault();
              alert(`Added ${product.name} to cart!`);
            }}
          >
            <ShoppingCart size={16} /> Quick Add
          </button>
        </div>
      </Link>
      
      <div className="flex flex-col p-5">
        <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">{product.category}</span>
        <Link to={`/product/${product.id}`} className="font-medium text-base text-gray-900 hover:text-primary transition-colors mb-2 truncate">
          {product.name}
        </Link>
        <div className="flex items-center justify-between mt-auto">
          <span className="font-semibold text-lg text-gray-900">${product.price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
