import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Shirt, Scissors, Briefcase, Tag, Target, Star, Circle, Wind, Activity, Heart } from 'lucide-react';

const getCategoryIcon = (category) => {
  const iconProps = { size: 12, className: "mr-1" };
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

const ProductCard = ({ product }) => {
  return (
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
      <Link to={`/product/${product.id}`} className="relative aspect-[4/5] overflow-hidden bg-gray-100 block shrink-0">
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
        <button 
          className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full text-yellow-400 hover:text-yellow-500 transition-colors z-20 shadow-sm hover:scale-110"
          onClick={(e) => {
            e.preventDefault();
            alert(`Added ${product.name} to wishlist!`);
          }}
        >
          <Heart size={18} />
        </button>
      </Link>
      
      <div className="flex flex-col p-5 flex-1">
        <div className="mb-2">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-primary text-white text-[10px] font-semibold tracking-wider uppercase shadow-sm">
            {getCategoryIcon(product.category)}
            {product.category}
          </span>
        </div>
        <div className="mb-3">
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
