import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import { ArrowRight, Truck, ShieldCheck, RefreshCw, Heart } from 'lucide-react';

const Home = () => {
  const [trendingProducts, setTrendingProducts] = React.useState([]);
  const [recentProducts, setRecentProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    try {
      setTrendingProducts(products.filter(p => p.isTrending === true || p.isTrending === 'true').slice(0, 4));
      setRecentProducts(products.slice(-8)); // Get last 8 products for recent
      setLoading(false);
    } catch (err) {
      console.error('Failed to load products', err);
      setError('Failed to load products.');
      setLoading(false);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[650px] flex items-center justify-center text-center text-white overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/40 to-gray-900/80"></div>
        
        <div className="relative z-10 max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center mt-12">
          <span className="text-primary-100 font-semibold tracking-[0.2em] uppercase text-sm mb-6 drop-shadow-md">
            The New Standard
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
            90's Clothing — Retro Soul, Modern Style
          </h1>
          <p className="text-base md:text-lg text-gray-200 mb-10 max-w-xl font-light leading-relaxed">
            Experience the attitude of the ’90s through vintage-inspired designs, relaxed silhouettes, and contemporary menswear made for everyday style.
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

      {/* Recent Products Scroller */}
      <section className="py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Latest Collection</h2>
            <p className="text-gray-500 mt-2 text-sm">Discover the latest additions to the 90's Clothing Collections.</p>
          </div>
          
          
          {loading ? (
            <div className="flex justify-center py-12"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>
          ) : error ? (
            <div className="text-center py-12 text-gray-500">{error}</div>
          ) : recentProducts.length > 0 ? (
            <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory hide-scrollbar">
              {recentProducts.map(product => (
                <div key={product.id} className="min-w-[280px] sm:min-w-[320px] snap-start">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">No recent products available.</div>
          )}

          <div className="mt-12 text-center">
            <Link to="/shop" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
              View All <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-transparent">
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
            {['T-Shirts', 'Jeans', 'Jackets & Coats', 'Tracksuits & Activewear'].map((category) => (
              <Link to={`/shop?category=${encodeURIComponent(category)}`} key={category} className="group relative h-80 rounded-2xl overflow-hidden flex items-center justify-center shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="absolute inset-0 bg-gray-100 group-hover:scale-105 transition-transform duration-700 ease-in-out">
                  {/* Mock background for categories */}
                  <img 
                    src={
                      category === 'Jackets & Coats' ? 'https://images.unsplash.com/photo-1559551409-dadc959f76b8?auto=format&fit=crop&q=80&w=600' :
                      category === 'T-Shirts' ? 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=600' :
                      category === 'Jeans' ? 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&q=80&w=600' :
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
      <section className="py-24 bg-transparent border-y border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-3">Trending Now</h2>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">The most sought-after pieces this season, curated just for you.</p>
          </div>
          
          
          {loading ? (
            <div className="flex justify-center py-12"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>
          ) : error ? (
            <div className="text-center py-12 text-gray-500">{error}</div>
          ) : trendingProducts.length > 0 ? (
            <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:pb-0">
              {trendingProducts.map(product => (
                <div key={product.id} className="min-w-[280px] sm:min-w-[320px] snap-start md:min-w-0">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">No trending products available.</div>
          )}
          
          <div className="mt-16 text-center">
            <Link to="/shop" className="inline-block border border-gray-300 bg-white text-gray-800 hover:border-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-sm">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-transparent border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-3">Why Choose Us</h2>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">We bring the best of the 90's streetwear aesthetic without compromising on modern quality.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                <Truck size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Fast Shipping</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Enjoy complimentary express shipping on all orders over ₹1500. Quick dispatch guaranteed.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Premium Quality</h3>
              <p className="text-gray-500 text-sm leading-relaxed">We source the highest quality fabrics to ensure our vintage-inspired fits feel great.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                <RefreshCw size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Easy Returns</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Not the perfect fit? We offer a hassle-free 30-day return policy on all unworn items.</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                <Heart size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Customer Care</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Our support team is available 24/7 to help you with any questions or style advice.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
