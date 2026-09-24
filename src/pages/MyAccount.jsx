import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LayoutDashboard, ShoppingBag, MapPin, User, LogOut } from 'lucide-react';

const MyAccount = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 min-h-[calc(100vh-80px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          
          {/* Sidebar */}
          <aside className="w-full md:w-72 flex-shrink-0">
            <h1 className="text-xl font-bold uppercase tracking-widest text-gray-800 mb-6 px-2">
              My Account
            </h1>
            <nav className="flex flex-col space-y-2 bg-white p-3 rounded-[14px] shadow-sm border border-gray-200/60">
              <Link to="#" className="flex items-center gap-3 px-4 py-2.5 bg-black text-white rounded-[14px] font-bold uppercase tracking-wide text-xs transition-all shadow-md">
                <LayoutDashboard size={18} />
                Dashboard
              </Link>
              <Link to="#" className="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:text-black hover:bg-gray-50 rounded-[14px] font-semibold uppercase tracking-wide text-xs transition-all">
                <ShoppingBag size={18} />
                Orders
              </Link>
              <Link to="#" className="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:text-black hover:bg-gray-50 rounded-[14px] font-semibold uppercase tracking-wide text-xs transition-all">
                <MapPin size={18} />
                Addresses
              </Link>
              <Link to="#" className="flex items-center gap-3 px-4 py-2.5 text-gray-600 hover:text-black hover:bg-gray-50 rounded-[14px] font-semibold uppercase tracking-wide text-xs transition-all">
                <User size={18} />
                Account Details
              </Link>
              <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-2.5 text-left text-red-500 hover:bg-red-50 hover:text-red-600 rounded-[14px] font-semibold uppercase tracking-wide text-xs transition-all mt-2">
                <LogOut size={18} />
                Logout
              </button>
            </nav>
          </aside>
          
          {/* Main Content */}
          <main className="flex-1">
            <div className="bg-white p-8 md:p-10 rounded-[14px] shadow-sm border border-gray-200/60 h-full">
              <div className="mb-10">
                <h2 className="text-3xl font-black tracking-tight text-gray-900 mb-2">Hello, User!</h2>
                <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-2xl">
                  From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Recent Orders Card */}
                <div className="border border-gray-200 rounded-[14px] p-8 flex flex-col items-start hover:border-black hover:shadow-md transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-800 mb-6 group-hover:bg-black group-hover:text-white transition-colors">
                    <ShoppingBag size={24} />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight mb-2">Recent Orders</h3>
                  <p className="text-gray-500 text-sm mb-8 font-medium">You have no recent orders.</p>
                  <Link to="/shop" className="mt-auto w-full text-center bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-xl text-sm font-bold tracking-wide transition-all shadow-md hover:shadow-lg">Shop Now</Link>
                </div>
                
                {/* Address Card */}
                <div className="border border-gray-200 rounded-[14px] p-8 flex flex-col items-start hover:border-black hover:shadow-md transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-800 mb-6 group-hover:bg-black group-hover:text-white transition-colors">
                    <MapPin size={24} />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight mb-2">Default Address</h3>
                  <p className="text-gray-500 text-sm mb-8 font-medium">You have not set up this type of address yet.</p>
                  <button className="mt-auto w-full text-center border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-6 py-3 rounded-xl text-sm font-bold tracking-wide transition-all">Add Address</button>
                </div>
              </div>
            </div>
          </main>
          
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
