import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';
import { products } from '../data/products';

const Cart = () => {
  const cartItems = [
    { ...products[0], quantity: 1, size: 'M' },
    { ...products[3], quantity: 1, size: '10' }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 10;
  const total = subtotal + shipping;

  return (
    <div className="py-12 md:py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-gray-900 mb-10 border-b-2 border-gray-200 pb-6">
          Your Cart
        </h1>
        
        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Cart Items */}
            <div className="flex-1">
              {cartItems.map((item, index) => (
                <div key={index} className="flex flex-col sm:flex-row gap-6 border-b border-gray-200 py-6 mb-6 bg-white p-6 shadow-sm">
                  <div className="w-full sm:w-32 h-40 bg-gray-100 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 mb-1">{item.name}</h3>
                      <p className="text-gray-500 uppercase text-sm font-semibold tracking-wider mb-4">Size: {item.size}</p>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="flex border border-gray-300 w-24 h-10">
                        <button className="flex-1 flex items-center justify-center text-gray-600 hover:text-primary transition-colors">-</button>
                        <input type="number" value={item.quantity} className="w-10 text-center font-bold outline-none appearance-none bg-transparent" readOnly />
                        <button className="flex-1 flex items-center justify-center text-gray-600 hover:text-primary transition-colors">+</button>
                      </div>
                      <button className="text-gray-400 hover:text-red-500 flex items-center gap-1 text-sm font-bold uppercase tracking-wider transition-colors">
                        <Trash2 size={16} /> Remove
                      </button>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <span className="font-bold text-xl text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-96 flex-shrink-0">
              <div className="bg-white p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold uppercase tracking-wider mb-6 pb-4 border-b-2 border-gray-900">
                  Order Summary
                </h3>
                
                <div className="space-y-4 mb-6 text-gray-600">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="font-medium text-gray-900">${shipping.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-6 border-t border-gray-200 mb-6">
                  <span className="text-lg font-bold uppercase tracking-wider text-gray-900">Total</span>
                  <span className="text-2xl font-extrabold text-primary">${total.toFixed(2)}</span>
                </div>

                <Link to="/checkout" className="block w-full bg-gray-900 hover:bg-black text-white text-center py-4 font-bold uppercase tracking-widest transition-colors shadow-md">
                  Proceed to Checkout
                </Link>
                
                <Link to="/shop" className="block w-full text-center mt-4 text-sm font-semibold uppercase tracking-wider text-primary hover:underline">
                  Continue Shopping
                </Link>
              </div>
            </div>
            
          </div>
        ) : (
          <div className="text-center py-32 bg-white shadow-sm">
            <h2 className="text-3xl font-extrabold mb-4 uppercase tracking-tight">Your cart is empty</h2>
            <p className="text-gray-500 mb-10 text-lg">Looks like you haven't added anything to your cart yet.</p>
            <Link to="/shop" className="inline-block bg-primary hover:bg-primary-hover text-white px-8 py-4 font-bold uppercase tracking-widest transition-colors">
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
