import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';

export const Accessories: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('All Collections');
  const tabs = ['All Collections', 'Watches', 'Eyewear', 'Leather Goods'];

  const accessoryProducts = PRODUCTS.filter(p => p.category === 'Accessories');
  const filteredProducts = activeTab === 'All Collections'
    ? accessoryProducts
    : accessoryProducts.filter(p => p.subCategory === activeTab);

  return (
    <main className="flex flex-col flex-1 max-w-7xl mx-auto w-full px-6 md:px-20 py-8">
      <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
        <span>Home</span>
        <span>/</span>
        <span className="text-slate-900 font-medium">Accessories</span>
      </div>

      <div className="max-w-3xl mb-12">
        <h1 className="text-slate-900 text-5xl font-bold tracking-tight mb-4">Curated Essentials</h1>
        <p className="text-slate-600 text-lg leading-relaxed">
          A selection of minimalist watches and premium eyewear designed to elevate your everyday presence. Quality meets timeless aesthetics.
        </p>
      </div>

      <div className="mb-10 border-b border-slate-200">
        <div className="flex gap-10 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${activeTab === tab ? 'text-primary border-b-2 border-primary' : 'text-slate-500 hover:text-primary'
                }`}
            >
              {tab}
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
            <div className="flex items-center gap-2 text-primary">
              <MapPin className="size-4" />
              <span className="text-xs font-bold uppercase tracking-widest">Our Flagship Store</span>
            </div>
            <h2 className="text-white text-4xl font-bold">Experience the Collection in Person</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Visit our exclusive showroom to touch, feel, and try on our latest accessories. Our stylists are ready to help you find the perfect match.
            </p>
            <div className="flex items-center gap-6">
              <button className="bg-primary text-white font-bold px-8 py-4 rounded-lg uppercase tracking-widest text-sm flex items-center gap-2 hover:opacity-90 transition-opacity cursor-pointer">
                Find us in Dhangadhi <ArrowRight className="size-4" />
              </button>
              <div>
                <p className="text-white font-bold text-sm">Dhangadhi Main St.</p>
                <p className="text-slate-500 text-xs">Open Mon-Sat, 10am - 8pm</p>
              </div>
            </div>
          </div>
          <div className="flex-1 min-h-[400px] relative">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZSGFeLko4-SZvUVDtz8dEofD8wIB-u4SakK7fY77H5gzi8HB2qT0guRyDgx4S8sb_F-R56ZLzy2IbKNslwVrBoZHNhGfmTP_9XNIf7P0xat1X3VIKXYIUrDj_I_WO3lz9qMPoNvOCBsZbtSb30_97fevGpM3csZtZGoOUpznKHEijOB427udIKtyWkxHobfbh243Zeki01Gk1b7lQ58Su0qUm_EgOBBBQPKyTEiGetwck6PqugXzt8mwdnufmNVHYHNkgmYIliEI"
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
