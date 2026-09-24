import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, LogIn } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      // Simulate successful login
      navigate('/account');
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
        
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative hidden md:block group">
          <img 
            src="https://images.unsplash.com/photo-1550614000-4b95d415d861?auto=format&fit=crop&q=80&w=1200" 
            alt="Vintage Fashion" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent flex flex-col justify-end p-12">
            <h2 className="text-4xl font-black text-white mb-4 tracking-tight drop-shadow-lg transform transition-transform duration-500 translate-y-0 group-hover:-translate-y-2">Welcome Back</h2>
            <p className="text-gray-200 text-base leading-relaxed drop-shadow transform transition-transform duration-500 translate-y-0 group-hover:-translate-y-2 delay-75">Discover the latest trends and get exclusive access to our newest drops.</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-14 lg:p-16 flex flex-col justify-center bg-white">
          <div className="mb-10 text-center md:text-left">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">Sign In</h1>
            <p className="text-gray-500 text-base font-medium">Enter your details to access your account.</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-black transition-colors">
                  <Mail size={20} />
                </div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="hello@example.com"
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20 focus:bg-white transition-all text-sm font-semibold text-gray-900 placeholder-gray-400 shadow-sm" 
                  required 
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-bold text-gray-700">Password</label>
                <Link to="#" className="text-sm font-bold text-gray-500 hover:text-black transition-colors">Forgot Password?</Link>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-black transition-colors">
                  <Lock size={20} />
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-black focus:ring-2 focus:ring-black/20 focus:bg-white transition-all text-sm font-semibold text-gray-900 placeholder-gray-400 shadow-sm" 
                  required 
                />
              </div>
            </div>
            
            <div className="flex items-center text-sm pt-2">
              <label className="flex items-center text-gray-600 cursor-pointer group">
                <input type="checkbox" className="mr-3 w-5 h-5 rounded-md border-gray-300 text-black focus:ring-black accent-black transition-all cursor-pointer" /> 
                <span className="select-none font-medium group-hover:text-black transition-colors">Remember me for 30 days</span>
              </label>
            </div>
            
            <button type="submit" className="w-full bg-black hover:bg-gray-800 text-white py-4 rounded-2xl font-bold tracking-wide transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 mt-8 flex items-center justify-center gap-2 group">
              <span>Sign In</span>
              <LogIn size={20} className="transform group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
          
          <div className="mt-10 text-center md:text-left">
            <p className="text-gray-600 text-sm font-medium">
              Don't have an account? 
              <Link to="/register" className="text-black font-extrabold hover:underline transition-all ml-2 decoration-2 underline-offset-4">Create one</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

