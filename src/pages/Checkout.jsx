import React, { useState, useEffect } from 'react';
import { CreditCard, Wallet, Truck, DollarSign, CheckCircle2, ShieldCheck } from 'lucide-react';

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(savedCart);
  }, []);

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal > 1500 ? 0 : 50;
  const total = subtotal + shipping;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setIsOrderPlaced(true);
    localStorage.removeItem('cart');
    // Scroll to top
    window.scrollTo(0, 0);
  };

  if (isOrderPlaced) {
    return (
      <div className="py-20 md:py-32 bg-gray-50 min-h-[calc(100vh-80px)] flex items-center justify-center">
        <div className="max-w-md w-full mx-auto px-4 text-center">
          <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
            <CheckCircle2 size={48} />
          </div>
          <h1 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Order Confirmed!</h1>
          <p className="text-gray-500 text-lg mb-8">Thank you for your purchase. We'll email you an order confirmation with details and tracking info.</p>
          <a href="/#/shop" className="inline-block w-full bg-black hover:bg-gray-800 text-white py-4 rounded-2xl font-bold transition-all shadow-lg hover:-translate-y-1">
            Continue Shopping
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 md:py-20 bg-transparent min-h-[calc(100vh-80px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <ShieldCheck size={24} className="text-primary" />
          <h1 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-gray-900">
            Secure Checkout
          </h1>
        </div>
        
        <form onSubmit={handlePlaceOrder} className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          <div className="flex-1 space-y-6">
            <section className="bg-gradient-to-br from-[#0606d4]/10 to-[#0606d4]/5 backdrop-blur-md p-6 md:p-8 rounded-[20px] shadow-sm border border-[#0606d4]/20">
              <h2 className="text-base md:text-lg font-bold uppercase tracking-wider mb-6 flex items-center gap-2 text-primary">
                <Truck size={20} />
                Shipping Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">First Name</label>
                  <input type="text" required className="w-full bg-white/50 border border-gray-300/50 rounded-lg p-2.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-medium text-gray-900" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">Last Name</label>
                  <input type="text" required className="w-full bg-white/50 border border-gray-300/50 rounded-lg p-2.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-medium text-gray-900" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">Email Address</label>
                  <input type="email" required className="w-full bg-white/50 border border-gray-300/50 rounded-lg p-2.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-medium text-gray-900" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">Address</label>
                  <input type="text" required className="w-full bg-white/50 border border-gray-300/50 rounded-lg p-2.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-medium text-gray-900" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">City</label>
                  <input type="text" required className="w-full bg-white/50 border border-gray-300/50 rounded-lg p-2.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-medium text-gray-900" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">Zip Code</label>
                  <input type="text" required className="w-full bg-white/50 border border-gray-300/50 rounded-lg p-2.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-medium text-gray-900" />
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-br from-[#0606d4]/10 to-[#0606d4]/5 backdrop-blur-md p-6 md:p-8 rounded-[20px] shadow-sm border border-[#0606d4]/20">
              <h2 className="text-base md:text-lg font-bold uppercase tracking-wider mb-6 flex items-center gap-2 text-primary">
                <Wallet size={20} />
                Payment Method
              </h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <button 
                  type="button" 
                  onClick={() => setPaymentMethod('card')}
                  className={`p-4 rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${paymentMethod === 'card' ? 'border-black bg-gray-50 text-black' : 'border-gray-100 text-gray-400 hover:border-gray-200'}`}
                >
                  <CreditCard size={28} />
                  <span className="text-xs font-bold uppercase tracking-wider">Card</span>
                </button>
                <button 
                  type="button" 
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-4 rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${paymentMethod === 'upi' ? 'border-black bg-gray-50 text-black' : 'border-gray-100 text-gray-400 hover:border-gray-200'}`}
                >
                  <span className="font-black text-xl italic tracking-tighter">UPI</span>
                  <span className="text-xs font-bold uppercase tracking-wider">UPI App</span>
                </button>
                <button 
                  type="button" 
                  onClick={() => setPaymentMethod('paypal')}
                  className={`p-4 rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${paymentMethod === 'paypal' ? 'border-black bg-gray-50 text-black' : 'border-gray-100 text-gray-400 hover:border-gray-200'}`}
                >
                  <span className="font-black text-xl italic tracking-tighter text-[#003087]">P<span className="text-[#0079C1]">P</span></span>
                  <span className="text-xs font-bold uppercase tracking-wider">PayPal</span>
                </button>
                <button 
                  type="button" 
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-4 rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${paymentMethod === 'cod' ? 'border-black bg-gray-50 text-black' : 'border-gray-100 text-gray-400 hover:border-gray-200'}`}
                >
                  <DollarSign size={28} />
                  <span className="text-xs font-bold uppercase tracking-wider">COD</span>
                </button>
              </div>

              {paymentMethod === 'card' && (
                <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">Card Number</label>
                    <div className="relative">
                      <CreditCard size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-white/50 border border-gray-300/50 rounded-lg p-2.5 pl-10 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors tracking-widest font-medium text-gray-900" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">Expiry Date</label>
                      <input type="text" placeholder="MM/YY" className="w-full bg-white/50 border border-gray-300/50 rounded-lg p-2.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-center font-medium text-gray-900" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">CVC</label>
                      <input type="text" placeholder="123" className="w-full bg-white/50 border border-gray-300/50 rounded-lg p-2.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-center font-medium text-gray-900" />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === 'upi' && (
                <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">UPI ID</label>
                    <input type="text" placeholder="username@upi" className="w-full bg-white/50 border border-gray-300/50 rounded-lg p-2.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-medium text-gray-900" />
                  </div>
                  <p className="text-sm text-gray-600">You will receive a payment request on your UPI app.</p>
                </div>
              )}

              {paymentMethod === 'paypal' && (
                <div className="py-6 text-center animate-in fade-in slide-in-from-top-4 duration-300 border-2 border-dashed border-gray-200 rounded-xl">
                  <p className="text-gray-600 font-medium">You will be redirected to PayPal to complete your purchase securely.</p>
                </div>
              )}

              {paymentMethod === 'cod' && (
                <div className="py-6 text-center animate-in fade-in slide-in-from-top-4 duration-300 border-2 border-dashed border-gray-200 rounded-xl">
                  <p className="text-gray-600 font-medium">Pay with cash upon delivery of your order.</p>
                </div>
              )}
            </section>
          </div>

          <div className="w-full lg:w-[420px] flex-shrink-0">
            <div className="bg-gradient-to-br from-[#0606d4]/10 to-[#0606d4]/5 text-gray-900 rounded-[24px] p-8 md:p-10 shadow-sm border border-[#0606d4]/20 sticky top-28 overflow-hidden backdrop-blur-md">
               <div className="absolute top-0 left-0 w-64 h-64 bg-white/40 rounded-full blur-3xl -ml-20 -mt-20 pointer-events-none"></div>
               
               <h3 className="text-lg font-bold uppercase tracking-wider mb-8 pb-6 border-b border-[#0606d4]/20 relative z-10 text-primary">
                 In Your Cart
               </h3>
               
               <div className="space-y-6 mb-8 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar relative z-10">
                 {cartItems.length === 0 ? (
                   <p className="text-gray-500 text-sm">Your cart is empty.</p>
                 ) : (
                   cartItems.map((item, idx) => (
                     <div key={item.id || idx} className="flex items-center gap-4 group">
                       <div className="w-16 h-20 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                         <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
                       </div>
                       <div className="flex-1">
                         <h4 className="font-bold text-sm leading-snug mb-1 text-gray-800 line-clamp-2">{item.name}</h4>
                         <p className="text-xs text-gray-500 font-medium mb-1">Size: {item.size} • Qty: {item.quantity}</p>
                         <p className="font-black text-gray-900">₹{(item.price * item.quantity).toFixed(2)}</p>
                       </div>
                     </div>
                   ))
                 )}
               </div>
               
                <div className="border-t border-[#0606d4]/20 pt-6 space-y-4 relative z-10 text-gray-700">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Subtotal</span>
                    <span className="font-bold text-gray-900">₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Shipping</span>
                    <span className="font-bold text-gray-900">{shipping === 0 ? 'Free' : `₹${shipping.toFixed(2)}`}</span>
                  </div>
                </div>

                <div className="flex justify-between items-end pt-6 mt-6 border-t border-[#0606d4]/20 relative z-10">
                  <span className="text-sm font-medium text-gray-800 uppercase tracking-widest">Total</span>
                  <span className="text-xl md:text-2xl font-black text-primary">₹{total.toFixed(2)}</span>
                </div>
                
                <button type="submit" disabled={cartItems.length === 0} className="w-full mt-10 bg-primary text-white hover:bg-primary-hover py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-1 relative z-10 disabled:opacity-50 disabled:cursor-not-allowed">
                  Place Order Now
                </button>
            </div>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Checkout;
