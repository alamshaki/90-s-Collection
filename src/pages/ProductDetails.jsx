import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { ArrowLeft, ShoppingCart, Heart } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center min-h-screen">
        <h2 className="text-3xl font-bold mb-6">Product not found</h2>
        <Link to="/shop" className="inline-block bg-primary text-white px-6 py-3 font-bold uppercase tracking-wider">Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    alert(`Added ${quantity} x ${product.name} (Size: ${selectedSize}) to cart!`);
  };

  return (
    <div className="py-12 md:py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/shop" className="inline-flex items-center gap-2 text-gray-600 hover:text-primary font-bold uppercase tracking-wider text-sm mb-10 transition-colors">
          <ArrowLeft size={16} /> Back to Shop
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <div className="flex flex-col gap-4">
            <div className="aspect-[3/4] bg-gray-100 overflow-hidden relative">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            {/* Mock thumbnails */}
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map(num => (
                <div key={num} className="aspect-[3/4] bg-gray-100 cursor-pointer overflow-hidden opacity-70 hover:opacity-100 transition-opacity">
                  <img src={product.image} alt={`${product.name} view ${num}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <span className="text-gray-500 uppercase tracking-widest text-sm font-bold mb-2">{product.category}</span>
            <h1 className="text-4xl md:text-5xl font-extrabold uppercase leading-none tracking-tight text-gray-900 mb-4">{product.name}</h1>
            <p className="text-3xl font-semibold text-gray-900 mb-8">${product.price.toFixed(2)}</p>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-10">{product.description}</p>
            
            <div className="mb-8 border-t border-gray-200 pt-8">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold uppercase tracking-wider text-gray-900">Select Size</span>
                <button className="text-gray-500 underline text-sm hover:text-primary transition-colors">Size Guide</button>
              </div>
              <div className="flex flex-wrap gap-3">
                {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                  <button 
                    key={size}
                    className={`w-14 h-14 flex items-center justify-center font-bold border transition-colors ${
                      selectedSize === size 
                        ? 'border-gray-900 bg-gray-900 text-white' 
                        : 'border-gray-300 text-gray-700 hover:border-gray-900'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-10">
              <span className="block font-bold uppercase tracking-wider text-gray-900 mb-4">Quantity</span>
              <div className="flex border border-gray-300 w-32 h-14">
                <button className="w-10 flex items-center justify-center text-xl text-gray-600 hover:text-primary transition-colors" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <input type="number" className="flex-1 text-center font-bold text-lg outline-none appearance-none" value={quantity} readOnly />
                <button className="w-10 flex items-center justify-center text-xl text-gray-600 hover:text-primary transition-colors" onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>
            
            <div className="flex gap-4 mb-12">
              <button 
                className="flex-1 bg-primary hover:bg-primary-hover text-white h-14 flex items-center justify-center gap-3 font-bold uppercase tracking-widest transition-colors shadow-md" 
                onClick={handleAddToCart}
              >
                <ShoppingCart size={20} /> Add to Cart
              </button>
              <button className="w-14 h-14 border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:border-primary hover:text-primary transition-colors">
                <Heart size={24} />
              </button>
            </div>
            
            <div className="border-t border-gray-200 pt-8 flex flex-col gap-3 text-sm text-gray-600">
              <p><strong className="text-gray-900 font-bold uppercase mr-2">SKU:</strong> 90SMEN-{product.id}X</p>
              <p><strong className="text-gray-900 font-bold uppercase mr-2">Shipping:</strong> Free shipping on orders over $100</p>
              <p><strong className="text-gray-900 font-bold uppercase mr-2">Returns:</strong> 30 days hassle-free return policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
