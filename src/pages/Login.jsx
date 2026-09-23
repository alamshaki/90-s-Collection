import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="py-20 md:py-32 bg-gray-50 min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 md:p-10 shadow-xl border-t-4 border-primary">
        <h1 className="text-3xl font-extrabold text-center mb-8 uppercase tracking-tight text-gray-900">Sign In</h1>
        
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              className="w-full bg-gray-50 border border-gray-300 p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" 
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-700 mb-2">Password</label>
            <input 
              type="password" 
              className="w-full bg-gray-50 border border-gray-300 p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" 
              required 
            />
          </div>
          
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center text-gray-600">
              <input type="checkbox" className="mr-2 accent-primary w-4 h-4" /> Remember me
            </label>
            <Link to="#" className="font-bold text-primary hover:underline">Forgot Password?</Link>
          </div>
          
          <button type="submit" className="w-full bg-primary hover:bg-primary-hover text-white py-4 font-bold uppercase tracking-widest transition-colors mt-4">
            Sign In
          </button>
        </form>
        
        <p className="text-center mt-8 text-gray-600">
          Don't have an account? <Link to="/register" className="text-gray-900 font-extrabold uppercase hover:text-primary transition-colors ml-2">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
