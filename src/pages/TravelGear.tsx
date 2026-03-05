import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Plane } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';

export const TravelGear: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('Suitcases');
  const tabs = ['Suitcases', 'Travel Bags', 'Apparel', 'Outdoor Essentials', 'Accessories'];

  const travelProducts = PRODUCTS.filter(p => p.category === 'Travel Gear');
  const filteredProducts = travelProducts.filter(p => p.subCategory === activeTab);

  return (
    <main className="flex flex-col flex-1 w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-60">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLGbxX_713njA-kSLI--MaLxTw_fgbgs_ZERunup4PMM-Xn9-O_TO6GChT2ZZLSzKbymAb0R2CxWiCUCSWBGSsuRyS80uYvZOLRtBih_mVr7Hu1Xmuh54AMuzQp2Gq2v3xoXEUwQZMfc7U5M6HE1l99WErgqYCRfQ_BbN4gHdcoamzc5jI4vjvQWgW7u-j3Zt9xaxXi8gLg9ObBVIlDeE7CBVpkNbNwLlfHzi9RMNh2EwI4gGhKAPDUkk5gpLexW8Oi3_FVFOHkK0"
            alt="Adventure"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-20 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl space-y-6"
          >
            <div className="flex items-center gap-2 text-primary">
              <Plane className="size-5" />
              <span className="text-sm font-bold uppercase tracking-widest">Global Exploration</span>
            </div>
            <h1 className="text-white text-5xl md:text-7xl font-bold leading-none tracking-tighter uppercase italic">Adventure <br /> Awaits</h1>
            <p className="text-slate-200 text-lg font-light leading-relaxed max-w-lg">
              High-performance travel gear engineered for the modern explorer. From Dhangadhi to the world, travel with confidence and style.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-20 py-16">
        <div className="mb-12">
          <div className="flex gap-8 overflow-x-auto no-scrollbar border-b border-slate-200">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center bg-slate-100 rounded-xl">
              <p className="text-slate-500 font-bold uppercase tracking-widest">No products found in this category.</p>
            </div>
          )}
        </div>

        <div className="bg-primary text-white rounded-2xl overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1 p-12 lg:p-20 space-y-8">
              <h2 className="text-4xl font-bold uppercase italic tracking-tighter">Visit Our Flagship Store</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Test our suitcases and travel bags in person. Our Dhangadhi store features a dedicated travel section with expert advice for your next journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-8">
                <div className="space-y-2">
                  <h4 className="font-bold uppercase text-xs tracking-widest text-white/60">Location</h4>
                  <p className="text-sm">Main Road, Dhangadhi, Nepal</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold uppercase text-xs tracking-widest text-white/60">Hours</h4>
                  <p className="text-sm">10:00 AM - 8:00 PM</p>
                </div>
              </div>
              <button
                onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Shiv+Shankar+General+Store+Main+Road+Dhangadhi', '_blank')}
                className="bg-white text-primary font-bold px-10 py-4 rounded-lg uppercase tracking-widest text-sm hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Get Directions
              </button>
            </div>
            <div className="flex-1 min-h-[400px] relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOMrunJCkBPtMXk4UEr6qzLnTcsYP5OH-gDFw52ww-3C5o--Wew7FUzPXbeLaXl5SB9HpFhCCvJL6YwrEdxR2OBd6L1hp7yacLrN2jb_XScY8Yefa8uoCYUXdsv4EJQ8RXIl15jmfDn6n5Opd6U_h7bGavk_P7tHZ1kr5lzz4jacQWazId9gXAC6g-LSTVrOwebMxwdBN9o-J3jCi5MZ-sMmNYdj0-BIog0eAAhjPu_M4KTaOfxF5Q72oz4OIemlYIl3x6SbgDj9Y"
                alt="Suitcase"
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
