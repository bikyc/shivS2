/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Page } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { NewArrivals } from './pages/NewArrivals';
import { Shoes } from './pages/Shoes';
import { Accessories } from './pages/Accessories';
import { TravelGear } from './pages/TravelGear';
import { Store } from './pages/Store';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = React.useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'new-arrivals':
        return <NewArrivals />;
      case 'shoes':
        return <Shoes />;
      case 'accessories':
        return <Accessories />;
      case 'travel':
        return <TravelGear />;
      case 'store':
        return <Store />;
      default:
        return <Home />;
    }
  };

  // Scroll to top on page change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f6f8]">
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
