import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ChevronDown } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';

export const Shoes: React.FC = () => {
  const [activeFilter, setActiveFilter] = React.useState('All Styles');
  const filters = ['All Styles', 'Sneakers', 'Formal', 'Boots'];

  const shoeProducts = PRODUCTS.filter(p => p.category === 'Footwear');
  const filteredProducts = activeFilter === 'All Styles' 
    ? shoeProducts 
    : shoeProducts.filter(p => p.subCategory === activeFilter);

  return (
    <main className="flex flex-col flex-1 max-w-7xl mx-auto w-full px-6 md:px-20 py-8">
      <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
        <span>Home</span>
        <span>/</span>
        <span className="text-slate-900 font-medium">Shoes</span>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <div>
          <h1 className="text-slate-900 text-5xl font-bold tracking-tight mb-4">Premium Footwear</h1>
          <div className="flex items-center gap-2 text-primary">
            <MapPin className="size-4" />
            <span className="text-xs font-bold uppercase tracking-widest">Available in Dhangadhi Store</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeFilter === filter 
                  ? 'bg-primary text-white' 
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-primary'
              }`}
            >
              {filter}
              {filter !== 'All Styles' && <ChevronDown className="size-4" />}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="bg-slate-900 rounded-xl overflow-hidden relative">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 p-12 lg:p-20 space-y-8 relative z-10">
            <h2 className="text-white text-4xl font-bold">Visit Us Today</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
              Experience the comfort and craftsmanship of our footwear in person. Our experts in Dhangadhi are ready to help you find the perfect fit.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-white">
                <MapPin className="text-primary size-5" />
                <span className="text-sm">Main Street, Dhangadhi, Nepal</span>
              </div>
              <div className="flex items-center gap-4 text-white">
                <span className="material-symbols-outlined text-primary">schedule</span>
                <span className="text-sm">Mon - Sat: 10:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>
          <div className="flex-1 min-h-[400px] relative">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzEKXrVTr4BRyuxSSKKs2ZcGu3kQVGeyNCyCvYLsP5LrrRCFq2ZsZgtNEauv-ZjWzbUH5AEkA_pSU6YseKMOO_RjMn87WUdDpWGYmGuRprkw1w7YDd0rhZ_rNg4Um8gBUzRgu_B-pV3kpywETnlReP73XAPTV5K7Ae1I0Zs6ZZOdwIxaItR4jTMHDmzdVq8UbQ71C_G6pIAHgNKG7fE8eZJ4xueNpRio_jKlo6fWxcW0fHzHeIKcQCqgMJIpLTydhYitZYYQw6lTQ" 
              alt="Store" 
              className="absolute inset-0 w-full h-full object-cover opacity-30"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </main>
  );
};
