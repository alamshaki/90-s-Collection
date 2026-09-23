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
        {/* Removed Quick Add Overlay from here */}
      </Link>
      
      <div className="flex flex-col p-5 h-full">
        <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5">{product.category}</span>
        <div className="h-[48px] overflow-hidden mb-2">
          <Link to={`/product/${product.id}`} className="font-medium text-base text-gray-900 hover:text-primary transition-colors line-clamp-2 leading-tight">
            {product.name}
          </Link>
        </div>
        <div className="flex flex-row items-center justify-between mt-auto gap-3">
          <span className="font-bold text-lg text-gray-900">₹{parseFloat(product.price).toFixed(2)}</span>
          <button 
            className="flex-1 bg-primary text-white hover:bg-primary-hover font-medium text-sm py-2 rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-sm max-w-[120px]"
            onClick={(e) => {
              e.preventDefault();
              alert(`Added ${product.name} to cart!`);
            }}
          >
            <ShoppingCart size={14} /> Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
