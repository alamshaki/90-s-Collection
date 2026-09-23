import React from 'react';

const Checkout = () => {
  return (
    <div className="py-12 md:py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-gray-900 mb-10 border-b-2 border-gray-200 pb-6">
          Checkout
        </h1>
        
        <div className="flex flex-col lg:flex-row gap-12">
          
          <div className="flex-1 space-y-12">
            <section className="bg-white p-8 shadow-sm">
              <h2 className="text-xl font-bold uppercase tracking-wider mb-6 pb-4 border-b-2 border-gray-900">
                Shipping Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider text-gray-700 mb-2">First Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-300 p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider text-gray-700 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-300 p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold uppercase tracking-wider text-gray-700 mb-2">Address</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-300 p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider text-gray-700 mb-2">City</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-300 p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider text-gray-700 mb-2">Zip Code</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-300 p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" />
                </div>
              </div>
            </section>

            <section className="bg-white p-8 shadow-sm">
              <h2 className="text-xl font-bold uppercase tracking-wider mb-6 pb-4 border-b-2 border-gray-900">
                Payment Details
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider text-gray-700 mb-2">Card Number</label>
                  <input type="text" placeholder="0000 0000 0000 0000" className="w-full bg-gray-50 border border-gray-300 p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors tracking-widest" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-wider text-gray-700 mb-2">Expiry Date</label>
                    <input type="text" placeholder="MM/YY" className="w-full bg-gray-50 border border-gray-300 p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-center" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold uppercase tracking-wider text-gray-700 mb-2">CVC</label>
                    <input type="text" placeholder="123" className="w-full bg-gray-50 border border-gray-300 p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-center" />
                  </div>
                </div>
              </div>
            </section>
            
            <button className="w-full bg-primary hover:bg-primary-hover text-white py-5 font-extrabold uppercase tracking-widest text-lg transition-colors shadow-lg">
              Place Order
            </button>
          </div>

          <div className="w-full lg:w-96 flex-shrink-0">
            <div className="bg-white p-8 shadow-sm border border-gray-100 sticky top-28">
               <h3 className="text-xl font-bold uppercase tracking-wider mb-6 pb-4 border-b-2 border-gray-900">
                 In Your Cart
               </h3>
               
               <div className="space-y-4 mb-6">
                 <div className="flex justify-between items-center text-sm font-medium">
                    <span className="text-gray-600 truncate mr-4">Men's Vintage Wash Denim Jacket</span>
                    <span className="text-gray-900 whitespace-nowrap">$89.99</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-medium">
                    <span className="text-gray-600 truncate mr-4">Classic High-Top Sneakers</span>
                    <span className="text-gray-900 whitespace-nowrap">$120.00</span>
                  </div>
               </div>
               
                <div className="border-t border-gray-200 py-6 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Subtotal</span>
                    <span className="font-medium">$209.99</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Shipping</span>
                    <span className="font-medium">$10.00</span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-6 border-t border-gray-900 mt-2">
                  <span className="text-lg font-bold uppercase tracking-wider text-gray-900">Total</span>
                  <span className="text-2xl font-extrabold text-primary">$219.99</span>
                </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Checkout;
