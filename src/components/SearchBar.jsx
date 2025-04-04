import React, { useState } from 'react';
import './SearchBar.css';
import {ReactComponent as SearchIcon} from '../assets/svg/search-icon.svg';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className = "search-bar">
      <SearchIcon fill='#FFFFFF' className="search-bar-button" onClick={handleSearch}/>
      <input
        className = "search-bar-input"
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Recherche..."
      />
    </div>
  );
};

export default SearchBar;