import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './SearchBar.css';
import {ReactComponent as SearchIcon} from '../assets/svg/search-icon.svg';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const search = async () => {
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
    setResults([]);
  }
  const handleSearch = async (newQuery) => {
    //console.log(query);
    if(newQuery){
      setLoading(true);
      try {
        const response = await axios.get('http://localhost/search.php', { params: { query: newQuery }});
  
        console.log(response);
        
        if (response.data.error) {
          console.log(response.data.error);
          setResults([]);
        } else if (response.data.message) {
          console.log(response.data.message);
          setResults(response.data.results);
          //navigate("/search", { state: { results: response.data.results, query } });
        } else {
          console.log("Unexpected response:", response.data);
          setResults([]);
        }
      } catch (error) {
        console.error("Search failed:", error);
      }finally {
        setLoading(false);
      }
    }
    
  };
  const handleChange = async (e) => {
    const newValue = e.target.value;
    setQuery(newValue);
    if(newValue.length === 0) {
      setResults([]);
    }else{
      handleSearch(newValue);
    }
  }
  const handleItemClick = async (item) => {
    navigate(`/product?ref=${item.PRD_ID}`);
    setResults([]);
  }
  return (
    <div className = "search-bar">
      <SearchIcon fill='#FFFFFF' className="search-bar-button" onClick={search}/>
      <input
        className = "search-bar-input"
        type="text"
        placeholder="Recherche..."
        value={query}
        onFocus={() => {if (query.length > 0) handleSearch(query)}}
        onChange={(e) => {handleChange(e)}}
        onKeyDown={(e) => {if (e.key === 'Enter') search();}}
      />
      <div className="search-results-background" style={{ display: results.length > 0 ? 'flex' : 'none' }} onClick={()=>setResults([])}></div>
      <div className="search-results-dropdown" style={{ display: results.length > 0 ? 'flex' : 'none' }}>
        {results.map((item, index) => (
          <>
            <div className='search-dropdown-item' onClick={() => handleItemClick(item) }>
              <img src={item.PRIMARY_IMAGE_URL || 'product_imgs/default-item.svg'} alt="prodImg"/>
              <p className="search-dropdown-item-title">{item.PRD_NAME}</p>
            </div>
            <div className='search-dropdown-divider'/>
          </>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;