import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { categories } from '../data/products';

const Home = () => {
  const [trendingProducts, setTrendingProducts] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setTrendingProducts(data.filter(p => p.isTrending).slice(0, 4));
      })
      .catch(err => console.error('Failed to fetch trending products', err));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[650px] flex items-center justify-center text-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=2000')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/40 to-gray-900/80"></div>
        
        <div className="relative z-10 max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center mt-12">
          <span className="text-primary-100 font-semibold tracking-[0.2em] uppercase text-sm mb-6 drop-shadow-md">
            The New Standard
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
            Elevated Menswear
          </h1>
          <p className="text-base md:text-lg text-gray-200 mb-10 max-w-xl font-light leading-relaxed">
            Curated pieces engineered for the modern man. Experience the perfect balance of comfort, durability, and timeless style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link to="/shop" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3.5 rounded-full font-medium transition-all duration-300 text-center shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Explore Collection
            </Link>
            <Link to="/about" className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300 text-center">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Wardrobe Essentials</h2>
              <p className="text-gray-500 mt-2 text-sm">Everything you need to build a versatile closet.</p>
            </div>
            <Link to="/shop" className="hidden sm:inline-flex items-center text-sm font-medium text-primary hover:text-primary-hover transition-colors">
              View All <span className="ml-1">→</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Outerwear', 'Tops', 'Bottoms', 'Activewear'].map((category) => (
              <Link to={`/shop?category=${category}`} key={category} className="group relative h-80 rounded-2xl overflow-hidden flex items-center justify-center shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="absolute inset-0 bg-gray-100 group-hover:scale-105 transition-transform duration-700 ease-in-out">
                  {/* Mock background for categories */}
                  <img 
                    src={
                      category === 'Outerwear' ? 'https://images.unsplash.com/photo-1559551409-dadc959f76b8?auto=format&fit=crop&q=80&w=600' :
                      category === 'Tops' ? 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=600' :
                      category === 'Bottoms' ? 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&q=80&w=600' :
                      'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&q=80&w=600'
                    } 
                    alt={category} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-left">
                  <h3 className="text-xl font-bold text-white tracking-wide">{category}</h3>
                  <span className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300 inline-block mt-1">Shop now</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-3">Trending Now</h2>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">The most sought-after pieces this season, curated just for you.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trendingProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/shop" className="inline-block border border-gray-300 bg-white text-gray-800 hover:border-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-sm">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-32 bg-[#0f172a] text-white text-center px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            The Spring Collection
          </h2>
          <p className="text-base md:text-lg text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Our latest collection focuses on premium fabrics, tailored fits, and the uncompromising attitude of modern menswear. Upgrade your rotation today.
          </p>
          <Link to="/shop" className="inline-block bg-primary hover:bg-primary-hover text-white px-10 py-3.5 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Explore Collection
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
