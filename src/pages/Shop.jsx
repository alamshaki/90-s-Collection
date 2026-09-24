import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { categories, products as allProducts } from '../data/products';
import { Filter, X } from 'lucide-react';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const getDecodedCategory = () => {
    const cat = searchParams.get('category');
    return cat ? decodeURIComponent(cat) : 'All';
  };
  
  const initialCategory = getDecodedCategory();
  const initialSearch = searchParams.get('search') || '';
  
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const priceRangeMap = {
    'under-500': { min: 0, max: 499 },
    '500-1000': { min: 500, max: 1000 },
    '1000-2000': { min: 1001, max: 2000 },
    '2000-5000': { min: 2001, max: 5000 },
    'over-5000': { min: 5001, max: Infinity }
  };

  useEffect(() => {
    setLoading(true);
    // Simulate slight network delay
    setTimeout(() => {
      setProducts(allProducts);
      setLoading(false);
    }, 300);
  }, []);

  useEffect(() => {
    setActiveCategory(getDecodedCategory());
    setSearchQuery(searchParams.get('search') || '');
  }, [searchParams]);

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    let matchesPrice = true;
    if (selectedPriceRanges.length > 0) {
      matchesPrice = selectedPriceRanges.some(rangeId => {
        const range = priceRangeMap[rangeId];
        return product.price >= range.min && product.price <= range.max;
      });
    }
    
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
    <div className="py-12 md:py-20 bg-transparent min-h-[calc(100vh-80px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-primary-100 font-semibold tracking-[0.1em] uppercase text-xs mb-3 text-primary">Discover</span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            {activeCategory !== 'All' ? activeCategory : 'The Collection'}
          </h1>
          {searchQuery && <p className="text-gray-500 text-base">Showing results for "{searchQuery}"</p>}
          
          <button 
            className="md:hidden mt-6 flex items-center gap-2 border border-gray-200 bg-white px-6 py-2.5 rounded-full font-medium text-sm shadow-sm"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter size={16} /> Filters
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          
          {/* Sidebar Filters */}
          <aside className={`
            fixed inset-0 z-50 bg-white p-6 transform transition-transform duration-300 overflow-y-auto
            md:relative md:inset-auto md:z-auto md:bg-transparent md:p-0 md:transform-none md:w-64 md:flex-shrink-0
            ${isFilterOpen ? 'translate-x-0 bg-white/95 backdrop-blur-md' : '-translate-x-full md:translate-x-0'}
          `}>
            
            <div className="flex justify-between items-center mb-8 md:hidden">
              <h2 className="text-lg font-bold">Filters</h2>
              <button onClick={() => setIsFilterOpen(false)} className="text-gray-500"><X size={24} /></button>
            </div>

            <div className="mb-10 bg-white md:bg-transparent md:border-0 border border-gray-100 rounded-2xl md:rounded-none p-5 md:p-0 shadow-sm md:shadow-none">
              <h3 className="text-sm font-bold uppercase tracking-wider mb-5 text-gray-900">Categories</h3>
              <ul className="space-y-3">
                {categories.map(category => (
                  <li key={category}>
                    <label className="flex items-center space-x-3 cursor-pointer group">
                      <div className="relative flex items-center">
                        <input 
                          type="checkbox"
                          className="peer appearance-none w-5 h-5 border-2 border-gray-200 rounded text-primary focus:ring-primary focus:ring-offset-0 checked:bg-primary checked:border-primary transition-colors cursor-pointer"
                          checked={activeCategory === category || (activeCategory === 'All' && category === 'All')}
                          onChange={() => handleCategoryChange(category)}
                        />
                        <svg className="absolute w-3.5 h-3.5 text-white pointer-events-none opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className={`text-sm font-medium transition-colors ${activeCategory === category ? 'text-primary' : 'text-gray-600 group-hover:text-gray-900'}`}>
                        {category}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-10 bg-white md:bg-transparent md:border-0 border border-gray-100 rounded-2xl md:rounded-none p-5 md:p-0 shadow-sm md:shadow-none">
              <h3 className="text-sm font-bold uppercase tracking-wider mb-5 text-gray-900">Price Range</h3>
              <ul className="space-y-3">
                {[
                  { id: 'under-500', label: 'Under ₹500', min: 0, max: 499 },
                  { id: '500-1000', label: '₹500 - ₹1000', min: 500, max: 1000 },
                  { id: '1000-2000', label: '₹1000 - ₹2000', min: 1001, max: 2000 },
                  { id: '2000-5000', label: '₹2000 - ₹5000', min: 2001, max: 5000 },
                  { id: 'over-5000', label: 'Over ₹5000', min: 5001, max: Infinity }
                ].map(range => (
                  <li key={range.id}>
                    <label className="flex items-center space-x-3 cursor-pointer group">
                      <div className="relative flex items-center">
                        <input 
                          type="checkbox"
                          className="peer appearance-none w-5 h-5 border-2 border-gray-200 rounded text-primary focus:ring-primary focus:ring-offset-0 checked:bg-primary checked:border-primary transition-colors cursor-pointer"
                          checked={selectedPriceRanges.includes(range.id)}
                          onChange={() => {
                            if (selectedPriceRanges.includes(range.id)) {
                              setSelectedPriceRanges(selectedPriceRanges.filter(id => id !== range.id));
                            } else {
                              setSelectedPriceRanges([...selectedPriceRanges, range.id]);
                            }
                          }}
                        />
                        <svg className="absolute w-3.5 h-3.5 text-white pointer-events-none opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className={`text-sm font-medium transition-colors ${selectedPriceRanges.includes(range.id) ? 'text-primary' : 'text-gray-600 group-hover:text-gray-900'}`}>
                        {range.label}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
              <span className="text-gray-500 text-sm font-medium">{filteredProducts.length} items found</span>
              <div className="relative">
                <select className="appearance-none bg-white border border-gray-200 rounded-full text-gray-700 py-2 pl-4 pr-10 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary text-sm font-medium cursor-pointer shadow-sm">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest Arrivals</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            {loading ? (
              <div className="text-center py-32">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                <p className="mt-4 text-gray-500 text-sm">Loading collection...</p>
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-32 bg-white/50 backdrop-blur-sm rounded-3xl border border-white shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-gray-900">No products found</h3>
                <p className="text-gray-500 mb-8 text-sm">Try adjusting your filters or search term to find what you're looking for.</p>
                <button 
                  className="bg-gray-900 hover:bg-black text-white px-8 py-3 rounded-full font-medium transition-colors text-sm"
                  onClick={() => {
                    handleCategoryChange('All');
                    setSelectedPriceRanges([]);
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
