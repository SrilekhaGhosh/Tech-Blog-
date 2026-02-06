import React from 'react';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <section className="mb-8" aria-label="Filter by category">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Categories</h2>
      <nav className="flex flex-wrap gap-2" aria-label="Category filters">
        <button
          onClick={() => onCategoryChange(null)}
          aria-current={activeCategory === null ? "page" : undefined}
          className={`px-4 py-2 rounded-full font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-400 ${
            activeCategory === null
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          All Articles
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            aria-current={activeCategory === category ? "page" : undefined}
            className={`px-4 py-2 rounded-full font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              activeCategory === category
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </nav>
    </section>
  );
};

export default CategoryFilter;
