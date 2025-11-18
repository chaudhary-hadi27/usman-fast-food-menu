'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MenuCategory from '@/components/MenuCategory';
import { menuData } from '@/data/menu';
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <main className="flex-grow container mx-auto px-3 sm:px-4 py-6 sm:py-8 md:py-12">
        {/* Welcome Section */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-bold mb-3 sm:mb-4 text-xs sm:text-sm md:text-base shadow-lg">
            📱 Digital Menu
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Explore Our <span className="text-yellow-500">Menu</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-xl max-w-2xl mx-auto px-4">
            Browse our delicious offerings and call our waiter to place your order
          </p>
        </div>

        {/* Menu Categories */}
        <div className="space-y-12 sm:space-y-14 md:space-y-16 lg:space-y-20">
          {menuData.map((category) => (
            <MenuCategory key={category.id} category={category} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center bg-gradient-to-r from-gray-900 to-black rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-2 sm:mb-3">
            Ready to Order?
          </h3>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
            Please call our waiter to place your order
          </p>
          <p className="text-yellow-400 text-xs sm:text-sm md:text-base font-medium">
            Enjoy your meal! 🍽️
          </p>
        </div>
      </main>

      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-yellow-400 text-black p-3 sm:p-4 rounded-full shadow-xl hover:bg-yellow-500 transition-all duration-300 hover:scale-110 z-40"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} className="sm:w-6 sm:h-6" />
        </button>
      )}
    </div>
  );
}