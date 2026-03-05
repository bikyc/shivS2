import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';

export const NewArrivals: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('View All');
  const tabs = ['View All', 'Shirts', 'Outerwear', 'Watches'];

  const filteredProducts = activeTab === 'View All'
    ? PRODUCTS.slice(0, 6)
    : PRODUCTS.filter(p => p.subCategory === activeTab);

  return (
    <main className="flex flex-col flex-1 max-w-7xl mx-auto w-full px-6 md:px-20 py-8">
      {/* Hero Header */}
      <div className="flex flex-wrap justify-between items-end gap-6 mb-8 border-l-4 border-primary pl-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-slate-900 text-5xl font-black leading-tight tracking-tighter uppercase">New Arrivals</h1>
          <p className="text-slate-600 text-lg font-normal max-w-xl">
            Explore the curated collection of fresh drops for the season, exclusively at our Dhangadhi flagship location.
          </p>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="mb-10 overflow-x-auto">
        <div className="flex border-b border-slate-200 gap-10 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center border-b-[3px] pb-4 px-2 transition-all cursor-pointer ${activeTab === tab ? 'border-primary text-slate-900' : 'border-transparent text-slate-500 hover:text-primary'
                }`}
            >
              <span className="text-sm font-bold tracking-wider uppercase">{tab}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Store Visit Section */}
      <div className="bg-primary/5 rounded-xl overflow-hidden border border-primary/10">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
            <h2 className="text-slate-900 text-3xl font-bold mb-4 uppercase tracking-tight">Visit Our Store</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary mt-1 size-5" />
                <div>
                  <h4 className="font-bold text-slate-900">Dhangadhi Flagship</h4>
                  <p className="text-slate-600">Main Road, Ward No. 2, Dhangadhi, Nepal</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-primary mt-1 size-5" />
                <div>
                  <h4 className="font-bold text-slate-900">Opening Hours</h4>
                  <p className="text-slate-600">Sun - Fri: 10:00 AM - 8:00 PM</p>
                  <p className="text-slate-600">Sat: Closed</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-primary mt-1 size-5" />
                <div>
                  <h4 className="font-bold text-slate-900">Contact</h4>
                  <p className="text-slate-600">+977-9848427522</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <button
                onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Shiv+Shankar+General+Store+Main+Road+Dhangadhi', '_blank')}
                className="bg-primary text-white font-bold px-8 py-3 rounded uppercase tracking-widest text-sm hover:opacity-90 transition-opacity cursor-pointer"
              >
                Get Directions
              </button>
            </div>
          </div>
          <div className="flex-1 min-h-[300px] lg:min-h-full">
            <div className="h-full w-full bg-slate-300 relative overflow-hidden">
              <img
                alt="Store Interior"
                className="absolute inset-0 w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzEKXrVTr4BRyuxSSKKs2ZcGu3kQVGeyNCyCvYLsP5LrrRCFq2ZsZgtNEauv-ZjWzbUH5AEkA_pSU6YseKMOO_RjMn87WUdDpWGYmGuRprkw1w7YDd0rhZ_rNg4Um8gBUzRgu_B-pV3kpywETnlReP73XAPTV5K7Ae1I0Zs6ZZOdwIxaItR4jTMHDmzdVq8UbQ71C_G6pIAHgNKG7fE8eZJ4xueNpRio_jKlo6fWxcW0fHzHeIKcQCqgMJIpLTydhYitZYYQw6lTQ"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
