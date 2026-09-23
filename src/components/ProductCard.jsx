import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="group flex flex-col bg-white">
      <Link to={`/product/${product.id}`} className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4 block">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          loading="lazy" 
        />
        {product.isTrending && (
          <span className="absolute top-3 left-3 bg-primary text-white px-3 py-1 text-xs font-bold uppercase tracking-wider z-10">
            Trending
          </span>
        )}
        
        {/* Quick Add Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10 flex justify-center">
          <button 
            className="w-full bg-white text-gray-900 hover:bg-primary hover:text-white font-bold uppercase py-3 flex items-center justify-center gap-2 transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              alert(`Added ${product.name} to cart!`);
            }}
          >
            <ShoppingCart size={18} /> Quick Add
          </button>
        </div>
      </Link>
      
      <div className="flex flex-col px-1">
        <span className="text-xs text-gray-500 uppercase tracking-widest mb-1">{product.category}</span>
        <Link to={`/product/${product.id}`} className="font-bold text-lg text-gray-900 hover:text-primary transition-colors mb-1 truncate">
          {product.name}
        </Link>
        <span className="font-semibold text-lg text-gray-900">${product.price.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default ProductCard;
