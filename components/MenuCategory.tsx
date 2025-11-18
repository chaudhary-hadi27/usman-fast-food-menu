"use client";
import { MenuCategory as MenuCategoryType } from '@/data/menu';
import MenuItem from './MenuItem';

interface MenuCategoryProps {
  category: MenuCategoryType;
}

export default function MenuCategory({ category }: MenuCategoryProps) {
  // Convert category name to ID format (same as navigation)
  const sectionId = category.name.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <section className="mb-16 md:mb-20" id={sectionId}>
      {/* Category Header with decorative design */}
      <div className="relative mb-8 md:mb-10">
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3">
          <div className="h-0.5 sm:h-1 flex-1 bg-gradient-to-r from-transparent via-yellow-400 to-yellow-400 rounded-full max-w-[100px] sm:max-w-none" />
          <div className="bg-yellow-400 text-black p-3 sm:p-4 rounded-full shadow-lg flex-shrink-0">
            <span className="text-3xl sm:text-4xl md:text-5xl leading-none block">{category.icon}</span>
          </div>
          <div className="h-0.5 sm:h-1 flex-1 bg-gradient-to-l from-transparent via-yellow-400 to-yellow-400 rounded-full max-w-[100px] sm:max-w-none" />
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-2 px-4">
          {category.name}
        </h2>
        
        <p className="text-center text-gray-600 text-xs sm:text-sm md:text-base px-4">
          {category.items.length} delicious options to choose from
        </p>
      </div>
      
      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {category.items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}