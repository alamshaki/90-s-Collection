import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
        {product.isTrending && <span className="badge">Trending</span>}
        <div className="overlay">
          <button 
            className="quick-add-btn"
            onClick={(e) => {
              e.preventDefault();
              alert(`Added ${product.name} to cart!`);
            }}
          >
            <ShoppingCart size={18} /> Quick Add
          </button>
        </div>
      </Link>
      
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <Link to={`/product/${product.id}`} className="product-name">
          {product.name}
        </Link>
        <span className="product-price">${product.price.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default ProductCard;
