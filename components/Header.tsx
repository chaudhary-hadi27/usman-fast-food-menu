'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    { id: 'pizzas', name: 'Pizzas', icon: '🍕' },
    { id: 'burgers', name: 'Burgers', icon: '🍔' },
    { id: 'wraps', name: 'Wraps', icon: '🌯' },
    { id: 'sandwiches', name: 'Sandwiches', icon: '🥪' },
    { id: 'pasta', name: 'Pasta', icon: '🍝' },
    { id: 'hot-corner', name: 'Hot Corner', icon: '🔥' },
    { id: 'bbq', name: 'BBQ', icon: '🍢' },
    { id: 'deals', name: 'Deals', icon: '📦' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Get header height dynamically
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0;
      
      // Add extra spacing for better positioning (20px buffer)
      const offset = headerHeight + 20;
      
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Main Header */}
      <header className="bg-black text-white sticky top-0 z-50 shadow-xl">
        <div className="container mx-auto px-3 sm:px-4 py-4">
          <div className="flex items-center justify-between gap-2">
            {/* Logo */}
            <div className="text-center flex-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 leading-tight">
                Usman Fast Food
              </h1>
              <p className="text-gray-300 text-[10px] sm:text-xs md:text-sm mt-0.5">
                Digital Menu
              </p>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-yellow-400 p-2 flex-shrink-0"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center flex-wrap gap-2 mt-4 pb-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToSection(cat.id)}
                className="flex items-center gap-2 px-3 py-2 bg-gray-900 hover:bg-yellow-400 hover:text-black rounded-lg transition whitespace-nowrap text-sm font-medium"
              >
                <span className="text-base">{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <nav className="container mx-auto px-3 sm:px-4 py-3 grid grid-cols-2 gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => scrollToSection(cat.id)}
                  className="flex items-center justify-center gap-2 px-3 py-2.5 bg-gray-800 hover:bg-yellow-400 hover:text-black rounded-lg transition text-sm font-medium"
                >
                  <span className="text-lg">{cat.icon}</span>
                  <span className="text-xs sm:text-sm">{cat.name}</span>
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}