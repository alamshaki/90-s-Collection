import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative hidden md:block">
          <img 
            src="https://images.unsplash.com/photo-1550614000-4b95d415d861?auto=format&fit=crop&q=80&w=1200" 
            alt="Vintage Fashion" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent flex flex-col justify-end p-10">
            <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Welcome Back</h2>
            <p className="text-gray-300 text-sm">Discover the latest trends and get exclusive access to our newest drops.</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="mb-10">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">Sign In</h1>
            <p className="text-gray-500 text-sm">Enter your details to access your account.</p>
          </div>
          
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
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
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-semibold text-gray-700">Password</label>
                <Link to="#" className="text-xs font-semibold text-primary hover:text-primary-hover transition-colors">Forgot Password?</Link>
              </div>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm" 
                required 
              />
            </div>
            
            <div className="flex items-center text-sm pt-2">
              <label className="flex items-center text-gray-600 cursor-pointer">
                <input type="checkbox" className="mr-3 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary accent-primary" /> 
                <span className="select-none">Remember me for 30 days</span>
              </label>
            </div>
            
            <button type="submit" className="w-full bg-primary hover:bg-primary-hover text-white py-4 rounded-xl font-bold tracking-wide transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 mt-6">
              Sign In
            </button>
          </form>
          
          <div className="mt-10 text-center">
            <p className="text-gray-600 text-sm">
              Don't have an account? 
              <Link to="/register" className="text-primary font-bold hover:text-primary-hover transition-colors ml-2">Create one</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
