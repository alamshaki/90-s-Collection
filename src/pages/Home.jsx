import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

const Home = () => {
  const trendingProducts = products.filter(p => p.isTrending).slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=2000')" }}
        ></div>
        <div className="absolute inset-0 bg-gray-900/60"></div>
        
        <div className="relative z-10 max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-extrabold uppercase leading-tight mb-6 tracking-tighter shadow-primary text-shadow-sm">
            Redefining <br/> <span className="text-primary">Men's</span> Retro
          </h1>
          <p className="text-lg md:text-xl font-medium mb-10 max-w-2xl text-gray-200">
            Authentic 90s inspired streetwear and classic cuts engineered for the modern man. 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link to="/shop" className="bg-primary hover:bg-primary-hover text-white px-8 py-4 font-bold uppercase tracking-widest transition-colors duration-300 text-center">
              Shop The Collection
            </Link>
            <Link to="/about" className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 font-bold uppercase tracking-widest transition-colors duration-300 text-center">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-extrabold uppercase tracking-tight text-gray-900">Essentials</h2>
              <div className="h-1 w-20 bg-primary mt-4"></div>
            </div>
            <Link to="/shop" className="hidden sm:block text-primary font-bold hover:underline">View All</Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.filter(c => c !== 'All' && c !== 'Accessories').map((category) => (
              <Link to={`/shop?category=${category}`} key={category} className="group relative h-64 bg-gray-200 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                <h3 className="relative z-10 text-2xl font-bold uppercase tracking-wider text-gray-900 group-hover:text-white transition-colors duration-300">
                  {category}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-gray-900 mb-4">Trending Now</h2>
            <p className="text-gray-500">The most sought-after pieces this season.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trendingProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/shop" className="inline-block border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 font-bold uppercase tracking-widest transition-colors duration-300">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-32 bg-primary text-white text-center px-4 relative overflow-hidden">
        {/* Subtle background pattern could go here */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tighter mb-6">
            The Drop: Vol. 1
          </h2>
          <p className="text-lg md:text-xl text-primary-100 mb-10 max-w-2xl mx-auto opacity-90">
            Our latest collection focuses on heavyweight fabrics, relaxed fits, and the uncompromising attitude of 90s menswear.
          </p>
          <Link to="/shop" className="inline-block bg-white text-primary hover:bg-gray-100 px-10 py-4 font-bold uppercase tracking-widest transition-colors duration-300 shadow-lg">
            Explore Collection
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
