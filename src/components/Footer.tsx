import React from 'react';
import { Diamond, Globe, Share2, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-20 pb-10 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Diamond className="text-primary size-8 font-bold" />
            <h2 className="text-xl font-bold tracking-tighter uppercase italic">Shiv Shankar</h2>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed">
            The ultimate destination for modern Dhangadhi street fashion and lifestyle essentials. Born in Dhangadhi, inspired by the globe.
          </p>
          <div className="space-y-2">
            <h4 className="font-bold uppercase text-xs tracking-widest text-primary">Visit Our Store</h4>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Shiv+Shankar+General+Store+Main+Road+Dhangadhi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-600 hover:text-primary transition-colors"
            >
              Moti Chowk, Ward No. 7<br />Dhangadhi, Kailali, Nepal
            </a>
          </div>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
              <Globe className="size-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
              <Share2 className="size-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
              <Mail className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold uppercase text-sm tracking-widest mb-6">Shopping</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><a href="#" className="hover:text-primary transition-colors">New Arrivals</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Best Sellers</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Men's Apparel</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Footwear</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase text-sm tracking-widest mb-6">Support</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><a href="#" className="hover:text-primary transition-colors">Store Locator</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs text-slate-400 uppercase tracking-widest">© 2026 Shiv Shankar Clothings Dhangadhi. All Rights Reserved.</p>
        <div className="flex gap-6 opacity-50">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSDUsLRi1NCm4I4jAbhpPTF3Oj9sVmyVyV0Ggnxf5PMGbYvOE4FCYPcds0A-I4My0muuX9HODkn0Z0qej7cacrtDWe_r9hF0KsxTTceLMw_uwKcKO8qSjFfaOvoDhG0PR8-NguJ-PNxsmF-cCXa1_IDtCE5r2Zxc-PXQCjo3I_DBNeeakymQ8hRcVDF1M8qEbkqM5ITehNdZhBognlSn77olC6BnGpK_I69nwk1r6mWV8u4CCbhcjoxJoXjVpSWzBFwgbw4RET9fg" alt="Payment" className="h-6" referrerPolicy="no-referrer" />
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCubGw7tSImzVL0uOoPT7I7t9ujbjAT2FLQAlTztu7AChnQUiBno5rTnA1gO4ry4ZkITJIL55SU5XkVlDWh6QYX4rgtUjgoJ65sROP2la562Ld41ENbFBt_U15tB8nDra-NdO1KHu8ur_VlFCESyKSxNcriyvq5NGpT5UbVwcDrAjfFjR8JW4wAY6mh3gRK6eUBJ9EOfR3mVzwT5RmcDIjSXFUVTUUELBPaiqxEf6t0R3jDA-LsQXyqBGqWNJ-ESSC7m_utwzXXQM0" alt="Payment" className="h-6" referrerPolicy="no-referrer" />
        </div>
      </div>
    </footer>
  );
};
