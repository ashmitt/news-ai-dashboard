import React from 'react';

function CategoryTabs({ onSelect, activeCategory }) {
  const categories = [
    { id: 'general', name: 'General', icon: '🌍' },
    { id: 'business', name: 'Business', icon: '💼' },
    { id: 'technology', name: 'Technology', icon: '💻' },
    { id: 'sports', name: 'Sports', icon: '⚽' },
    { id: 'entertainment', name: 'Entertainment', icon: '🎬' },
    { id: 'health', name: 'Health', icon: '🏥' },
    { id: 'science', name: 'Science', icon: '🔬' },
    { id: 'politics', name: 'Politics', icon: '🏛️' },
    { id: 'education', name: 'Education', icon: '📚' },
    { id: 'environment', name: 'Environment', icon: '🌱' }
  ];

  return (
    <div className="relative">
      {/* Scrollable Container */}
      <div className="category-tabs-scroll overflow-x-auto pb-2">
        <div className="flex space-x-3 min-w-max px-1">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onSelect(category.id)}
              className={`
                flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap
                ${activeCategory === category.id
                  ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg shadow-pink-500/30 transform scale-105'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-600/30'
                }
              `}
            >
              <span className="text-lg">{category.icon}</span>
              <span className="text-sm md:text-base">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Scroll Indicators */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
    </div>
  );
}

export default CategoryTabs;