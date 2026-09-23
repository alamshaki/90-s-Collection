import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MyAccount = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="py-12 md:py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12">
          
          <aside className="w-full md:w-64 flex-shrink-0">
            <h1 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900 mb-8 pb-4 border-b-2 border-gray-900">
              My Account
            </h1>
            <nav className="flex flex-col space-y-2">
              <Link to="#" className="px-4 py-3 bg-primary text-white font-bold uppercase tracking-wider text-sm transition-colors">Dashboard</Link>
              <Link to="#" className="px-4 py-3 text-gray-600 hover:text-primary hover:bg-white font-bold uppercase tracking-wider text-sm transition-colors">Orders</Link>
              <Link to="#" className="px-4 py-3 text-gray-600 hover:text-primary hover:bg-white font-bold uppercase tracking-wider text-sm transition-colors">Addresses</Link>
              <Link to="#" className="px-4 py-3 text-gray-600 hover:text-primary hover:bg-white font-bold uppercase tracking-wider text-sm transition-colors">Account Details</Link>
              <button onClick={handleLogout} className="px-4 py-3 text-left text-red-500 hover:bg-white font-bold uppercase tracking-wider text-sm transition-colors">Logout</button>
            </nav>
          </aside>
          
          <main className="flex-1 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold uppercase tracking-wider mb-6">Hello, User</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-gray-200 p-6 flex flex-col items-start hover:border-primary transition-colors">
                <h3 className="text-lg font-bold uppercase tracking-wider mb-2">Recent Orders</h3>
                <p className="text-gray-500 text-sm mb-4">You have no recent orders.</p>
                <Link to="/shop" className="mt-auto bg-gray-900 hover:bg-black text-white px-6 py-2 text-sm font-bold uppercase tracking-wider transition-colors">Shop Now</Link>
              </div>
              
              <div className="border border-gray-200 p-6 flex flex-col items-start hover:border-primary transition-colors">
                <h3 className="text-lg font-bold uppercase tracking-wider mb-2">Default Address</h3>
                <p className="text-gray-500 text-sm mb-4">You have not set up this type of address yet.</p>
                <button className="mt-auto border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-6 py-2 text-sm font-bold uppercase tracking-wider transition-colors">Add Address</button>
              </div>
            </div>
          </main>
          
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
