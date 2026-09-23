import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import { Filter } from 'lucide-react';
import './Shop.css';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const initialSearch = searchParams.get('search') || '';
  
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState(150);

  useEffect(() => {
    setActiveCategory(searchParams.get('category') || 'All');
    setSearchQuery(searchParams.get('search') || '');
  }, [searchParams]);

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = product.price <= priceRange;
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="page-wrapper shop-page">
      <div className="container">
        <div className="shop-header">
          <h1 className="shop-title">Shop {activeCategory !== 'All' ? activeCategory : 'Everything'}</h1>
          {searchQuery && <p className="search-results-text">Showing results for "{searchQuery}"</p>}
          
          <button className="mobile-filter-btn" onClick={() => setIsFilterOpen(!isFilterOpen)}>
            <Filter size={20} /> Filters
          </button>
        </div>

        <div className="shop-layout">
          {/* Sidebar Filters */}
          <aside className={`shop-sidebar ${isFilterOpen ? 'open' : ''}`}>
            <div className="filter-group">
              <h3 className="filter-title">Categories</h3>
              <ul className="filter-list">
                {categories.map(category => (
                  <li key={category}>
                    <button 
                      className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                      onClick={() => handleCategoryChange(category)}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="filter-group">
              <h3 className="filter-title">Max Price: ${priceRange}</h3>
              <input 
                type="range" 
                min="0" 
                max="200" 
                value={priceRange} 
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="price-slider"
              />
            </div>
          </aside>

          {/* Product Grid */}
          <main className="shop-content">
            <div className="shop-controls">
              <span>{filteredProducts.length} Products</span>
              <select className="sort-select">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="product-grid">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="no-results">
                <h3>No products found</h3>
                <p>Try adjusting your filters or search term.</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => {
                    handleCategoryChange('All');
                    setPriceRange(200);
                    searchParams.delete('search');
                    setSearchParams(searchParams);
                  }}
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Shop;
