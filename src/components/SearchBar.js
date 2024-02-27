import React from 'react';

function SearchBar({ onSearchChange }) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSearchChange(event.target.value);
    }
  };

  return (
    <input
      type="text"
      placeholder="Search movies..."
      onChange={(e) => onSearchChange(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
}

export default SearchBar;