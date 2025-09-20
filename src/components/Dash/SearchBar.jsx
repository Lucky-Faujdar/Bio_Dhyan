import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  return (
    <div className="relative w-full max-w-2xl">
      <input
        type="text"
        placeholder="Search for research, topics, or cosmic events..."
        className="w-full py-4 pl-12 pr-4 font-[font2] tracking-wider bg-zinc-700  text-white border-2 border-gray-700 rounded-full focus:outline-none focus:border-cyan-500 transition-colors"
      />
      <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
    </div>
  );
};

export default SearchBar;