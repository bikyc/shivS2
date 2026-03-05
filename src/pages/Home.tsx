import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Verified } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-70">
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN3BayqDyOU-KLz5eBVcyBgycAFcHR8eJYk5EJSeyZB3pGJhK8KTEOvdRvMARBC6J2boha4PpOnQMD6JdnLrHNQR8oS5LGggXp4C7QyV09SpwnJaz-298bxNEoye5lPVt5rz5IzuSinTd10nySVGm1LgVupgYTaiZb5T9rfnXKTAPSAFHzJ-8AJbP-77kxG1Ly2k5e43M0JodX94OeumVHbR_7rAwS7R-TnSLosGQEs2iN0fYAAw4lPYVY2IJHZR46NKUXDNGqLLQ"
            alt="Hero"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-20 flex flex-col justify-end pb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl space-y-6"
          >
            <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded">Summer '26 Collection</span>
            <h1 className="text-white text-5xl md:text-7xl font-bold leading-none tracking-tighter uppercase italic">Redefining <br /> Dhangadhi Urban</h1>
            <p className="text-slate-200 text-lg md:text-xl max-w-lg font-light leading-relaxed">Elevate your everyday rotation with curated high-fashion joggers and minimalist timepieces designed for the modern Dhangadhi lifestyle.</p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest rounded-lg transition-all transform hover:scale-105 cursor-pointer">View Collection</button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 text-sm font-bold uppercase tracking-widest rounded-lg transition-all cursor-pointer">
                View Lookbook
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-6 lg:px-20 py-24 w-full">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold uppercase tracking-tighter italic">Featured Categories</h2>
            <div className="h-1 w-12 bg-primary mt-2"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard 
            variant="overlay"
            product={{
              id: 'cat-1',
              name: 'Urban Essentials',
              category: '',
              subCategory: '',
              image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXU3_LgZtgsGz9fI3J7HNIw0ft-1oWyFBRsgnmnDY_8F5P7hS5L3ef8tAy2O9LDqqDb-7HPdT-M55IgKWXLqbMdKv1vg3gFRRylAruURp_CL0myIHpmb7t1u6c9_kntyltChmU-t3CK7-NRgJLMCNDfZv22LFYNrm38rs196twkLXDoWRpUvOWJvrj49cf9G-pGWNNPUkFXvn70rEPVv--H2csLHJrGcKdGg7RoK1mcGGHnwgVGOC6R6ytptzi-u64FSmNIVVxwfE'
            }}
          />
          <ProductCard 
            variant="overlay"
            product={{
              id: 'cat-2',
              name: 'Footwear',
              category: '',
              subCategory: '',
              image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnQQVFkURKjIOhfEBGqd3DSPVW_Gnuatoro7RXoZ_FCvJvCgcSndNs-zCo_t7ERdMLTFFBlVm8i5VUtvxO32lez__Kj0_WijzmJ3lN0rjzTw0eP1-EaSeICY8jTOD6K0o39Eo3FNcpO0El9V2XwsucjW3STqBYxissn0GAqi_4Z9c3lw3a4tGxrhQWKe2YKPLTDCE4Fsc30tXsB6guf4_2WwDrgZhUOcDfNvQZvJ4x3eTXtdqLSkL4AQSwfitP-1i_QsmvrUtx_pA'
            }}
          />
          <ProductCard 
            variant="overlay"
            product={{
              id: 'cat-3',
              name: 'Timepieces',
              category: '',
              subCategory: '',
              image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMugI8cg4cnsYKyAGXspQHPwiFYessQu1o_NLoFDI3mQeIxDK7zK-thx5UGHYS64YCtGCOoNBt1HUk80dHACUB4FA6IBikTU5WGiWKyK4jgpJjxjxzavYrNhpHY_6IJ3gYKum89B1uWyrXQETPR-6cbWR5S3szYViQixXtlhG8XSjG1c5gQ5btmy51g9G-UiS4HrHOBaPwageJ1AAuzwM0L2KjRlQXJAxzOl3mTq4Hx5oNwYw4rt4-tNoSzprdrv_-MvDRDZhT0N4'
            }}
          />
          <ProductCard 
            variant="overlay"
            product={{
              id: 'cat-4',
              name: 'Travel Gear',
              category: '',
              subCategory: '',
              image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLGbxX_713njA-kSLI--MaLxTw_fgbgs_ZERunup4PMM-Xn9-O_TO6GChT2ZZLSzKbymAb0R2CxWiCUCSWBGSsuRyS80uYvZOLRtBih_mVr7Hu1Xmuh54AMuzQp2Gq2v3xoXEUwQZMfc7U5M6HE1l99WErgqYCRfQ_BbN4gHdcoamzc5jI4vjvQWgW7u-j3Zt9xaxXi8gLg9ObBVIlDeE7CBVpkNbNwLlfHzi9RMNh2EwI4gGhKAPDUkk5gpLexW8Oi3_FVFOHkK0'
            }}
          />
        </div>
      </section>

      {/* Latest Arrivals */}
      <section className="bg-white py-24 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold uppercase tracking-tighter italic">Latest Arrivals</h2>
              <p className="text-slate-500 mt-2 text-sm uppercase tracking-widest">Fresh drops for the season</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
                <ChevronLeft className="size-5" />
              </button>
              <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
          <div className="flex overflow-x-auto gap-6 no-scrollbar pb-8">
            {PRODUCTS.slice(0, 4).map((product) => (
              <div key={product.id} className="min-w-[280px] lg:min-w-[320px]">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineered for the City */}
      <section className="max-w-7xl mx-auto px-6 lg:px-20 py-24 border-t border-slate-200 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square bg-slate-100 rounded-xl overflow-hidden shadow-2xl">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZSGFeLko4-SZvUVDtz8dEofD8wIB-u4SakK7fY77H5gzi8HB2qT0guRyDgx4S8sb_F-R56ZLzy2IbKNslwVrBoZHNhGfmTP_9XNIf7P0xat1X3VIKXYIUrDj_I_WO3lz9qMPoNvOCBsZbtSb30_97fevGpM3csZtZGoOUpznKHEijOB427udIKtyWkxHobfbh243Zeki01Gk1b7lQ58Su0qUm_EgOBBBQPKyTEiGetwck6PqugXzt8mwdnufmNVHYHNkgmYIliEI"
                alt="Engineered"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-primary p-12 rounded-xl hidden md:block">
              <span className="text-white text-6xl font-bold italic tracking-tighter">2026</span>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold uppercase italic tracking-tighter">Engineered for the City.</h2>
            <p className="text-slate-600 text-lg leading-relaxed">Every piece in our collection is stress-tested in the vibrant, bustling streets of Dhangadhi. We blend high-performance fabrics with timeless urban silhouettes to ensure you look as good as you feel.</p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Verified className="text-primary size-5" />
                <span className="font-bold uppercase text-sm tracking-widest">Premium Durable Materials</span>
              </li>
              <li className="flex items-center gap-3">
                <Verified className="text-primary size-5" />
                <span className="font-bold uppercase text-sm tracking-widest">Minimalist Urban Aesthetics</span>
              </li>
              <li className="flex items-center gap-3">
                <Verified className="text-primary size-5" />
                <span className="font-bold uppercase text-sm tracking-widest">Nationwide Dhangadhi Delivery</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
