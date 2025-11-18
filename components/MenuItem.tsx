"use client";
import { MenuItem as MenuItemType } from '@/data/menu';
import Image from 'next/image';

interface MenuItemProps {
  item: MenuItemType;
}

export default function MenuItem({ item }: MenuItemProps) {
  const renderPrice = () => {
    if (item.price) {
      return (
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold text-base sm:text-lg shadow-md inline-block">
          Rs. {item.price}
        </div>
      );
    }

    if (item.prices) {
      return (
        <div className="bg-gray-50 rounded-lg p-2.5 sm:p-3 space-y-1.5 sm:space-y-2">
          {item.prices.small && (
            <div className="flex items-center justify-between gap-2">
              <span className="text-gray-700 font-medium text-xs sm:text-sm">Small</span>
              <span className="font-bold text-yellow-600 text-sm sm:text-base">Rs. {item.prices.small}</span>
            </div>
          )}
          {item.prices.medium && (
            <div className="flex items-center justify-between gap-2">
              <span className="text-gray-700 font-medium text-xs sm:text-sm">Medium</span>
              <span className="font-bold text-yellow-600 text-sm sm:text-base">Rs. {item.prices.medium}</span>
            </div>
          )}
          {item.prices.large && (
            <div className="flex items-center justify-between gap-2">
              <span className="text-gray-700 font-medium text-xs sm:text-sm">Large</span>
              <span className="font-bold text-yellow-600 text-sm sm:text-base">Rs. {item.prices.large}</span>
            </div>
          )}
          {item.prices.half && (
            <div className="flex items-center justify-between gap-2">
              <span className="text-gray-700 font-medium text-xs sm:text-sm">Half</span>
              <span className="font-bold text-yellow-600 text-sm sm:text-base">Rs. {item.prices.half}</span>
            </div>
          )}
          {item.prices.full && (
            <div className="flex items-center justify-between gap-2">
              <span className="text-gray-700 font-medium text-xs sm:text-sm">Full</span>
              <span className="font-bold text-yellow-600 text-sm sm:text-base">Rs. {item.prices.full}</span>
            </div>
          )}
        </div>
      );
    }
  };

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group h-full flex flex-col">
      <div className="relative h-44 sm:h-48 md:h-56 w-full overflow-hidden bg-gray-100 flex-shrink-0">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
          quality={85}
          priority={item.id <= 6} // First 6 images load with priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA3gAA//9k="
          onError={(e) => {
            e.currentTarget.src = '/images/placeholder-food.jpg';
          }}
        />
      </div>
      
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2">
          {item.name}
        </h4>
        
        {item.description && (
          <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 flex-grow">
            {item.description}
          </p>
        )}

        <div className="mt-auto pt-2">
          {renderPrice()}
        </div>
      </div>
    </div>
  );
}