import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="py-20 md:py-32 bg-gray-50 min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 md:p-10 shadow-xl border-t-4 border-gray-900">
        <h1 className="text-3xl font-extrabold text-center mb-8 uppercase tracking-tight text-gray-900">Create Account</h1>
        
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-700 mb-2">Full Name</label>
            <input 
              type="text" 
              className="w-full bg-gray-50 border border-gray-300 p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" 
              required 
            />
          </div>
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
          
          <button type="submit" className="w-full bg-gray-900 hover:bg-black text-white py-4 font-bold uppercase tracking-widest transition-colors mt-4">
            Register
          </button>
        </form>
        
        <p className="text-center mt-8 text-gray-600">
          Already have an account? <Link to="/login" className="text-primary font-extrabold uppercase hover:underline ml-2">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
