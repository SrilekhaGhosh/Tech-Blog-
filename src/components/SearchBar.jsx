import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  const handleClear = () => {
    setSearchQuery('');
    onSearch('');
  };

  return (
    <section className="w-full mb-6" aria-label="Search articles">
      <div className="relative max-w-2xl mx-auto">
        <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center">
          <label htmlFor="search-input" className="sr-only">
            Search articles
          </label>
          <AiOutlineSearch className="absolute left-4 text-gray-400 text-xl pointer-events-none" aria-hidden="true" />
          <input
            id="search-input"
            type="search"
            placeholder="Search articles by title, description, or content..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            aria-label="Search articles"
          />
          {searchQuery && (
            <button
              onClick={handleClear}
              className="absolute right-4 text-gray-400 hover:text-gray-600 text-xl focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </form>
      </div>
    </section>
  );
};

export default SearchBar;
