import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { products } from '../data/products';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // In a real app, this might come from a context or Redux store
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    // Fallback for demo purposes if cart is empty, add some mock items
    if (savedCart.length === 0) {
      const mockItems = [
        { ...products[0], quantity: 1, size: 'M', id: products[0].id + '-M' },
        { ...products[3], quantity: 2, size: 'L', id: products[3].id + '-L' }
      ];
      setCartItems(mockItems);
      localStorage.setItem('cart', JSON.stringify(mockItems));
    } else {
      setCartItems(savedCart);
    }
  }, []);

  const updateQuantity = (id, delta) => {
    const newCart = cartItems.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    });
    setCartItems(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const removeItem = (id) => {
    const newCart = cartItems.filter(item => item.id !== id);
    setCartItems(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal > 1500 ? 0 : 50;
  const total = subtotal + shipping;

  return (
    <div className="py-12 md:py-20 bg-transparent min-h-[calc(100vh-80px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <ShoppingBag size={24} className="text-primary" />
          <h1 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-gray-900">
            Shopping Cart
          </h1>
        </div>
        
        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Cart Items */}
            <div className="flex-1">
              <div className="bg-gradient-to-br from-[#0606d4]/10 to-[#0606d4]/5 backdrop-blur-md rounded-2xl shadow-sm border border-[#0606d4]/20 overflow-hidden">
                {cartItems.map((item, index) => (
                  <div key={item.id || index} className={`flex flex-col sm:flex-row gap-6 p-6 md:p-8 transition-colors hover:bg-[#0606d4]/5 ${index !== cartItems.length - 1 ? 'border-b border-[#0606d4]/10' : ''}`}>
                    <div className="w-full sm:w-32 h-40 bg-gray-100 rounded-2xl flex-shrink-0 overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <h3 className="font-bold text-xl text-gray-900 mb-1 leading-tight">{item.name}</h3>
                          <p className="text-gray-500 font-medium text-sm mb-4">Size: <span className="text-black font-bold">{item.size}</span></p>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="font-black text-xl text-gray-900">₹{(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center bg-gray-100 rounded-xl p-1 border border-gray-200">
                          <button onClick={() => updateQuantity(item.id, -1)} className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-black hover:bg-white rounded-lg transition-all shadow-sm">-</button>
                          <span className="w-10 text-center font-bold text-sm">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-black hover:bg-white rounded-lg transition-all shadow-sm">+</button>
                        </div>
                        <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500 flex items-center gap-1.5 text-sm font-bold transition-colors group bg-red-50/0 hover:bg-red-50 px-3 py-2 rounded-xl">
                          <Trash2 size={16} className="group-hover:scale-110 transition-transform" /> Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-[350px] flex-shrink-0">
              <div className="bg-gradient-to-br from-[#0606d4]/10 to-[#0606d4]/5 text-gray-900 rounded-2xl p-6 md:p-8 shadow-sm border border-[#0606d4]/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
                
                <h3 className="text-lg font-bold mb-6 relative z-10 text-primary">
                  Order Summary
                </h3>
                
                <div className="space-y-3 mb-6 relative z-10 text-sm">
                  <div className="flex justify-between items-center text-gray-700">
                    <span className="font-medium">Subtotal</span>
                    <span className="font-bold text-gray-900">₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-700">
                    <span className="font-medium">Shipping</span>
                    <span className="font-bold text-gray-900">{shipping === 0 ? 'Free' : `₹${shipping.toFixed(2)}`}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-end py-4 border-t border-[#0606d4]/20 mb-6 relative z-10">
                  <span className="text-sm font-medium text-gray-800">Total</span>
                  <div className="text-right">
                    <span className="text-xl font-black text-primary">₹{total.toFixed(2)}</span>
                  </div>
                </div>

                <Link to="/checkout" className="group relative block w-full bg-primary text-white rounded-xl text-center py-3 text-sm font-bold tracking-wide transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 z-10 overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Checkout <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                
                <div className="text-center mt-4 relative z-10">
                  <Link to="/shop" className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-primary transition-colors">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
        ) : (
          <div className="text-center py-32 bg-white rounded-3xl shadow-sm border border-gray-200 flex flex-col items-center">
            <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
              <ShoppingBag size={48} className="text-gray-300" />
            </div>
            <h2 className="text-3xl font-black mb-3">Your cart is empty</h2>
            <p className="text-gray-500 mb-10 text-lg max-w-md mx-auto">Looks like you haven't added anything to your cart yet. Discover our latest arrivals!</p>
            <Link to="/shop" className="inline-flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
