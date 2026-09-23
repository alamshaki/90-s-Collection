import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import './Home.css';

const Home = () => {
  const trendingProducts = products.filter(p => p.isTrending).slice(0, 4);

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Step Back<br/>Into The 90s</h1>
          <p className="hero-subtitle">Authentic retro fashion for the modern era.</p>
          <div className="hero-actions">
            <Link to="/shop" className="btn btn-primary">Shop Now</Link>
            <Link to="/about" className="btn btn-outline">Our Story</Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section bg-secondary">
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>
          <div className="category-grid">
            {categories.filter(c => c !== 'All').map((category) => (
              <Link to={`/shop?category=${category}`} key={category} className="category-card">
                <h3>{category}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Trending Now</h2>
          <div className="product-grid">
            {trendingProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="view-all-container">
            <Link to="/shop" className="btn btn-outline">View All Products</Link>
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="promo-section">
        <div className="promo-content">
          <h2>Summer '95 Collection</h2>
          <p>Get ready for the sun with our new drop of vintage-inspired summer wear.</p>
          <Link to="/shop" className="btn btn-primary">Explore Collection</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
