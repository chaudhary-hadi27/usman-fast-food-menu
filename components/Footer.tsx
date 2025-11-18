"use client";
import { MapPin, Clock, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white mt-16 sm:mt-20">
      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-10 md:py-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
          
          {/* Brand & Info Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-3 sm:mb-4">
              Usman Fast Food
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6">
              Thank you for choosing us! Please call our waiter to place your order.
            </p>
            
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start justify-center md:justify-start gap-2 sm:gap-3 text-gray-300 text-xs sm:text-sm">
                <MapPin size={18} className="text-yellow-400 flex-shrink-0 mt-0.5 sm:mt-1 w-4 h-4 sm:w-5 sm:h-5" />
                <p className="text-left">
                  Suter Mills Main Stop, Near Government Girls High School, Lahore
                </p>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 text-gray-300">
                <Clock size={18} className="text-yellow-400 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-medium text-xs sm:text-sm md:text-base">03:30 PM – 03:30 AM</span>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-left">
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-400 mb-4 sm:mb-6">
              Contact Information
            </h4>
            
            <div className="space-y-3 sm:space-y-4">
              <a 
                href="tel:03274660995" 
                className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 text-gray-300 hover:text-yellow-400 transition group"
              >
                <div className="bg-yellow-400 text-black p-2 sm:p-3 rounded-full group-hover:scale-110 transition">
                  <Phone size={16} className="sm:w-[18px] sm:h-[18px]" />
                </div>
                <span className="font-medium text-base sm:text-lg">0327-4660995</span>
              </a>
              
              <a 
                href="tel:03424000232" 
                className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 text-gray-300 hover:text-yellow-400 transition group"
              >
                <div className="bg-yellow-400 text-black p-2 sm:p-3 rounded-full group-hover:scale-110 transition">
                  <Phone size={16} className="sm:w-[18px] sm:h-[18px]" />
                </div>
                <span className="font-medium text-base sm:text-lg">0342-4000232</span>
              </a>
            </div>

            {/* Delivery Info */}
            <div className="mt-4 sm:mt-6 bg-yellow-400 text-black py-2.5 sm:py-3 px-4 sm:px-5 rounded-lg sm:rounded-xl inline-block">
              <p className="font-bold text-xs sm:text-sm md:text-base flex items-center gap-2">
                <span className="text-lg sm:text-xl">🚚</span>
                <span>Free Delivery (Min. Rs. 1000)</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            © {new Date().getFullYear()} Usman Fast Food Point. All rights reserved.
          </p>
          <p className="text-gray-500 text-[10px] sm:text-xs mt-1 sm:mt-2">
            Digital Menu System
          </p>
        </div>
      </div>
    </footer>
  );
}