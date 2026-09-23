import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import { Filter, X } from 'lucide-react';

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
    setIsFilterOpen(false); // Close mobile filter on selection
  };

  return (
    <div className="py-12 md:py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-gray-900 mb-4">
            {activeCategory !== 'All' ? activeCategory : 'The Collection'}
          </h1>
          {searchQuery && <p className="text-gray-500 text-lg">Showing results for "{searchQuery}"</p>}
          
          <button 
            className="md:hidden mt-6 flex items-center gap-2 border-2 border-gray-900 px-6 py-2 font-bold uppercase tracking-wider text-sm"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter size={18} /> Filters
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          
          {/* Sidebar Filters */}
          <aside className={`
            fixed inset-0 z-50 bg-white p-6 transform transition-transform duration-300 overflow-y-auto
            md:relative md:inset-auto md:z-auto md:bg-transparent md:p-0 md:transform-none md:w-64 md:flex-shrink-0
            ${isFilterOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          `}>
            
            <div className="flex justify-between items-center mb-8 md:hidden">
              <h2 className="text-xl font-bold uppercase">Filters</h2>
              <button onClick={() => setIsFilterOpen(false)}><X size={24} /></button>
            </div>

            <div className="mb-10">
              <h3 className="text-lg font-bold uppercase tracking-wider mb-4 border-b-2 border-gray-900 pb-2">Categories</h3>
              <ul className="space-y-3">
                {categories.map(category => (
                  <li key={category}>
                    <button 
                      className={`text-left w-full hover:text-primary transition-colors ${activeCategory === category ? 'text-gray-900 font-bold' : 'text-gray-500'}`}
                      onClick={() => handleCategoryChange(category)}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-10">
              <h3 className="text-lg font-bold uppercase tracking-wider mb-4 border-b-2 border-gray-900 pb-2">
                Max Price: ${priceRange}
              </h3>
              <input 
                type="range" 
                min="0" 
                max="200" 
                value={priceRange} 
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
              <span className="text-gray-600 font-medium">{filteredProducts.length} Products</span>
              <select className="border border-gray-300 bg-white text-gray-700 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-medium">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <h3 className="text-2xl font-bold mb-4">No products found</h3>
                <p className="text-gray-500 mb-8">Try adjusting your filters or search term.</p>
                <button 
                  className="bg-primary hover:bg-primary-hover text-white px-6 py-3 font-bold uppercase tracking-wider transition-colors"
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
