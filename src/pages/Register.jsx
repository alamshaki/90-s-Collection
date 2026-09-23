import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row-reverse">
        
        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative hidden md:block">
          <img 
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1200" 
            alt="Vintage Fashion Style" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent flex flex-col justify-end p-10 text-right">
            <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Join the Club</h2>
            <p className="text-gray-300 text-sm ml-auto max-w-xs">Create an account to track your orders, save your wishlist, and check out faster.</p>
          </div>
        </div>

        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="mb-10">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">Create Account</h1>
            <p className="text-gray-500 text-sm">Join us today for an exclusive shopping experience.</p>
          </div>
          
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm" 
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <input 
                type="email" 
                placeholder="hello@example.com"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm" 
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
              <input 
                type="password" 
                placeholder="Create a strong password"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm" 
                required 
              />
            </div>
            
            <div className="flex items-center text-sm pt-2">
              <label className="flex items-start text-gray-600 cursor-pointer">
                <input type="checkbox" required className="mt-1 mr-3 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary accent-primary shrink-0" /> 
                <span className="leading-tight text-xs text-gray-500">I agree to the <Link to="#" className="text-primary hover:underline">Terms of Service</Link> and <Link to="#" className="text-primary hover:underline">Privacy Policy</Link>.</span>
              </label>
            </div>
            
            <button type="submit" className="w-full bg-gray-900 hover:bg-black text-white py-4 rounded-xl font-bold tracking-wide transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 mt-6">
              Create Account
            </button>
          </form>
          
          <div className="mt-10 text-center">
            <p className="text-gray-600 text-sm">
              Already have an account? 
              <Link to="/login" className="text-primary font-bold hover:text-primary-hover transition-colors ml-2">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
