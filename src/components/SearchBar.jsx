import React, { useState } from 'react';
import './SearchBar.css';
import searchIcon from '../assets/search-icon.svg';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div class = "search-bar">
      <input
        class = "search-bar-input"
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Recherche..."
      />
      <button className="search-bar-button" onClick={handleSearch}>
        <img src={searchIcon} alt="Search" />
      </button>
    </div>
  );
};

export default SearchBar;