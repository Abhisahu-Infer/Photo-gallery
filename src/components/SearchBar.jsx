import React from 'react'

const SearchBar = ({search, onSearchChange}) => {
  return (
    <input
      type="text"
      value={search}
      placeholder="Search by the author...."
      onChange={(e) => onSearchChange(e.target.value)}
      className="w-full max-w-md border border-gray-300 rounded-xl p-3 outline-none bg-black text-white"
    />
  );
};

export default SearchBar;
