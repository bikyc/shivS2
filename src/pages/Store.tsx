import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Filter } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';

export const Store: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('All Products');
  const tabs = ['All Products', 'Shirts', 'Pants', 'Outerwear'];

  const apparelProducts = PRODUCTS.filter(p => p.category === 'Apparel');
  const filteredProducts = activeTab === 'All Products'
    ? apparelProducts
    : apparelProducts.filter(p => p.subCategory === activeTab);

  return (
    <main className="flex flex-col flex-1 w-full">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-50">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN3BayqDyOU-KLz5eBVcyBgycAFcHR8eJYk5EJSeyZB3pGJhK8KTEOvdRvMARBC6J2boha4PpOnQMD6JdnLrHNQR8oS5LGggXp4C7QyV09SpwnJaz-298bxNEoye5lPVt5rz5IzuSinTd10nySVGm1LgVupgYTaiZb5T9rfnXKTAPSAFHzJ-8AJbP-77kxG1Ly2k5e43M0JodX94OeumVHbR_7rAwS7R-TnSLosGQEs2iN0fYAAw4lPYVY2IJHZR46NKUXDNGqLLQ"
            alt="Collection"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-20 flex flex-col justify-center items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-4"
          >
            <h1 className="text-white text-4xl md:text-6xl font-bold uppercase italic tracking-tighter">Latest Apparel Collection</h1>
            <p className="text-white/80 text-lg uppercase tracking-[0.3em] font-light">Shiv Shankar Clothings</p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-20 py-12">
        {/* Banner */}
        <div className="bg-primary p-4 rounded-lg mb-12 flex items-center justify-center gap-4">
          <span className="text-white font-bold uppercase tracking-widest text-xs">Exclusive In-Store Collection</span>
          <div className="h-4 w-px bg-white/30"></div>
          <span className="text-white/80 text-xs uppercase tracking-widest">Visit Dhangadhi Flagship</span>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12 border-b border-slate-200 pb-8">
          <div className="flex gap-8 overflow-x-auto no-scrollbar w-full md:w-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${activeTab === tab ? 'text-primary border-b-2 border-primary' : 'text-slate-500 hover:text-primary'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <button className="flex items-center gap-2 text-slate-900 font-bold uppercase text-xs tracking-widest border border-slate-200 px-4 py-2 rounded hover:bg-slate-50 transition-colors cursor-pointer">
            <Filter className="size-4" /> Filter & Sort
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Store Location */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-8 lg:p-16 rounded-3xl shadow-xl border border-slate-100">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold uppercase italic tracking-tighter">Visit Our Store in Dhangadhi</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our flagship store in Dhangadhi offers the full range of our collections. Experience personalized styling and exclusive in-store only drops.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary mt-1 size-5" />
                <div>
                  <h4 className="font-bold text-slate-900 uppercase tracking-widest text-sm">Address</h4>
                  <p className="text-slate-600 text-sm">Main Road, Ward No. 2, Dhangadhi, Kailali, Nepal</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-primary mt-1">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 uppercase tracking-widest text-sm">Store Hours</h4>
                  <p className="text-slate-600 text-sm">Sunday - Friday: 10:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Shiv+Shankar+General+Store+Main+Road+Dhangadhi', '_blank')}
              className="bg-slate-900 text-white font-bold px-10 py-4 rounded-lg uppercase tracking-widest text-sm hover:bg-slate-800 transition-colors cursor-pointer"
            >
              View on Google Maps
            </button>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-video lg:aspect-square shadow-2xl">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzEKXrVTr4BRyuxSSKKs2ZcGu3kQVGeyNCyCvYLsP5LrrRCFq2ZsZgtNEauv-ZjWzbUH5AEkA_pSU6YseKMOO_RjMn87WUdDpWGYmGuRprkw1w7YDd0rhZ_rNg4Um8gBUzRgu_B-pV3kpywETnlReP73XAPTV5K7Ae1I0Zs6ZZOdwIxaItR4jTMHDmzdVq8UbQ71C_G6pIAHgNKG7fE8eZJ4xueNpRio_jKlo6fWxcW0fHzHeIKcQCqgMJIpLTydhYitZYYQw6lTQ"
              alt="Store Location"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </main>
  );
};
