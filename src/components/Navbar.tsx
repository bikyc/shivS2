import React from 'react';
import { Diamond, Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { Page } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems: { label: string; value: Page }[] = [
    { label: 'New Arrivals', value: 'new-arrivals' },
    { label: 'Clothing', value: 'store' },
    { label: 'Shoes', value: 'shoes' },
    { label: 'Accessories', value: 'accessories' },
    { label: 'Travel', value: 'travel' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md px-6 lg:px-20 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
        <div className="flex items-center gap-10">
          <button 
            onClick={() => onPageChange('home')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <Diamond className="text-primary size-8 font-bold" />
            <h2 className="text-xl font-bold tracking-tighter uppercase italic">Shiv Shankar</h2>
          </button>
          
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => onPageChange(item.value)}
                className={`text-sm font-semibold transition-colors uppercase tracking-wider cursor-pointer ${
                  currentPage === item.value ? 'text-primary border-b-2 border-primary' : 'hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4 flex-1 justify-end">
          <div className="hidden sm:flex relative max-w-xs w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-4" />
            <input 
              className="w-full bg-slate-100 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 outline-none" 
              placeholder="Search Dhangadhi Style..." 
              type="text"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer">
              <ShoppingBag className="size-5" />
            </button>
            <button className="p-2 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer">
              <User className="size-5" />
            </button>
            <button 
              className="md:hidden p-2 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => {
                    onPageChange(item.value);
                    setIsMenuOpen(false);
                  }}
                  className={`text-sm font-semibold uppercase tracking-wider text-left ${
                    currentPage === item.value ? 'text-primary' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
