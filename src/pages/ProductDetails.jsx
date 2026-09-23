import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { ArrowLeft, ShoppingCart, Heart, Tag, Shirt, Scissors, Briefcase, Circle, Target, Wind, Star, Activity } from 'lucide-react';

const getCategoryIcon = (category) => {
  const iconProps = { size: 14, className: "mr-1.5" };
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

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [activeTab, setActiveTab] = useState('description');

  React.useEffect(() => {
    fetch(`/api/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Not found');
        return res.json();
      })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch product', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center min-h-screen">
        <h2 className="text-2xl font-bold mb-6">Loading product...</h2>
      </div>
    );
  }

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
    <div className="py-12 md:py-20 bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/shop" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary font-medium text-sm mb-10 transition-colors">
          <ArrowLeft size={16} /> Back to Collection
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <div className="flex flex-col gap-4">
            <div className="aspect-[4/5] bg-gray-50 rounded-3xl overflow-hidden relative shadow-sm border border-gray-100">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            {/* Mock thumbnails */}
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map(num => (
                <div key={num} className="aspect-[4/5] bg-gray-50 rounded-2xl cursor-pointer overflow-hidden opacity-60 hover:opacity-100 transition-opacity border border-gray-100">
                  <img src={product.image} alt={`${product.name} view ${num}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col lg:py-8">
            <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold tracking-wider uppercase shadow-sm">
                {getCategoryIcon(product.category)}
                {product.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">{product.name}</h1>
            <p className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">₹{parseFloat(product.price).toFixed(2)}</p>
            
            <div className="mb-8 border-t border-gray-100 pt-8">
              <div className="flex justify-between items-center mb-5">
                <span className="font-semibold text-gray-900">Select Size</span>
                <button 
                  onClick={() => setShowSizeGuide(true)}
                  className="text-gray-500 underline text-sm hover:text-primary transition-colors"
                >
                  Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                  <button 
                    key={size}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-medium border transition-all text-sm ${
                      selectedSize === size 
                        ? 'border-gray-900 bg-gray-900 text-white shadow-md' 
                        : 'border-gray-200 text-gray-700 hover:border-gray-900 bg-white/50 backdrop-blur-sm'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-10">
              <span className="block font-semibold text-gray-900 mb-4">Quantity</span>
              <div className="flex items-center border-2 border-gray-100 rounded-xl w-32 h-12 bg-white shadow-sm overflow-hidden">
                <button className="w-10 h-full flex items-center justify-center text-xl text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <div className="flex-1 h-full flex items-center justify-center font-bold text-base border-x border-gray-100">{quantity}</div>
                <button className="w-10 h-full flex items-center justify-center text-xl text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors" onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>
            
            <div className="flex flex-row gap-3 mb-12">
              <button 
                className="flex-1 bg-primary hover:bg-primary-hover text-white rounded-xl h-10 flex items-center justify-center gap-2 font-medium text-xs sm:text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 px-4" 
                onClick={handleAddToCart}
              >
                <ShoppingCart size={16} /> Add To Cart
              </button>
              <button className="w-12 sm:w-14 h-10 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:border-primary hover:text-primary hover:bg-gray-50 transition-all hover:shadow-sm group">
                <Heart size={18} className="group-hover:fill-primary transition-colors" />
              </button>
            </div>
            
            {/* Tabs Section */}
            <div className="border border-gray-200 rounded-2xl bg-white/50 backdrop-blur-sm overflow-hidden mt-2">
              <div className="flex border-b border-gray-200">
                {['description', 'specifications', 'shipping'].map(tab => (
                  <button 
                    key={tab}
                    className={`flex-1 py-4 text-sm font-semibold capitalize transition-colors ${activeTab === tab ? 'text-primary border-b-2 border-primary bg-white' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="p-6">
                {activeTab === 'description' && (
                  <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                )}
                {activeTab === 'specifications' && (
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-center"><span className="font-semibold text-gray-900 w-24">SKU:</span> 90SMEN-{product.id}X</li>
                    <li className="flex items-center"><span className="font-semibold text-gray-900 w-24">Material:</span> Premium Vintage Blend</li>
                    <li className="flex items-center"><span className="font-semibold text-gray-900 w-24">Fit:</span> Relaxed 90s Silhouette</li>
                    <li className="flex items-center"><span className="font-semibold text-gray-900 w-24">Care:</span> Machine wash cold</li>
                  </ul>
                )}
                {activeTab === 'shipping' && (
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start"><span className="font-semibold text-gray-900 w-24 flex-shrink-0">Shipping:</span> <span>Free express shipping on all orders over ₹1500.</span></li>
                    <li className="flex items-start"><span className="font-semibold text-gray-900 w-24 flex-shrink-0">Returns:</span> <span>30 days hassle-free return policy. Must be in original condition.</span></li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Size Guide Modal */}
      {showSizeGuide && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setShowSizeGuide(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-full p-2 transition-colors"
            >
              <ArrowLeft size={16} className="rotate-180" />
            </button>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Size Guide</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-gray-50 text-gray-600 font-medium">
                    <tr>
                      <th className="px-4 py-3 rounded-l-lg">Size</th>
                      <th className="px-4 py-3">Chest (in)</th>
                      <th className="px-4 py-3 rounded-r-lg">Length (in)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { size: 'S', chest: '36-38', length: '27' },
                      { size: 'M', chest: '38-40', length: '28' },
                      { size: 'L', chest: '40-42', length: '29' },
                      { size: 'XL', chest: '42-44', length: '30' },
                      { size: 'XXL', chest: '44-46', length: '31' },
                    ].map((row) => (
                      <tr key={row.size} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-4 py-3 font-semibold text-gray-900">{row.size}</td>
                        <td className="px-4 py-3 text-gray-600">{row.chest}</td>
                        <td className="px-4 py-3 text-gray-600">{row.length}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button 
                onClick={() => setShowSizeGuide(false)}
                className="w-full mt-8 bg-gray-900 hover:bg-black text-white font-medium py-3 rounded-xl transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
