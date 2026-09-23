import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { ArrowLeft, ShoppingCart, Heart } from 'lucide-react';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');

  if (!product) {
    return (
      <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
        <h2>Product not found</h2>
        <Link to="/shop" className="btn btn-primary" style={{ marginTop: '20px' }}>Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    alert(`Added ${quantity} x ${product.name} (Size: ${selectedSize}) to cart!`);
  };

  return (
    <div className="page-wrapper product-details-page">
      <div className="container">
        <Link to="/shop" className="back-link">
          <ArrowLeft size={16} /> Back to Shop
        </Link>
        
        <div className="product-details-grid">
          {/* Image Gallery */}
          <div className="product-gallery">
            <div className="main-image-container">
              <img src={product.image} alt={product.name} className="main-image" />
            </div>
            {/* Mock thumbnails */}
            <div className="thumbnail-list">
              {[1, 2, 3].map(num => (
                <div key={num} className="thumbnail">
                  <img src={product.image} alt={`${product.name} view ${num}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info-details">
            <span className="product-category-label">{product.category}</span>
            <h1 className="product-title">{product.name}</h1>
            <p className="product-price-large">${product.price.toFixed(2)}</p>
            
            <p className="product-description">{product.description}</p>
            
            <div className="selection-group">
              <div className="selection-header">
                <span className="selection-label">Size</span>
                <button className="size-guide-btn">Size Guide</button>
              </div>
              <div className="size-selector">
                {['S', 'M', 'L', 'XL'].map(size => (
                  <button 
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="selection-group">
              <span className="selection-label">Quantity</span>
              <div className="quantity-selector">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <input type="number" value={quantity} readOnly />
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>
            
            <div className="action-buttons">
              <button className="btn btn-primary add-to-cart-btn" onClick={handleAddToCart}>
                <ShoppingCart size={20} /> Add to Cart
              </button>
              <button className="btn btn-outline wishlist-btn">
                <Heart size={20} />
              </button>
            </div>
            
            <div className="product-meta">
              <p><strong>SKU:</strong> 90S-{product.id}X</p>
              <p><strong>Shipping:</strong> Free shipping on orders over $100</p>
              <p><strong>Returns:</strong> 30 days return policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
