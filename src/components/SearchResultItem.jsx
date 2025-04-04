import React from 'react';
import './SearchResultItem.css';

const SearchResultItem = () => {
  return (
    <div className = "search-item-container">
      <div className="search-item-image-container">
        <img src="https://via.placeholder.com/150" alt="prodImg" className="search-item-image" />
      </div>
      <div className="search-item-details">
        <p className="search-item-title">Product Title </p>
        <p className="search-item-price">Price</p>
        <button className="add-to-cart-button">Ajouter au panier</button>
      </div>
    </div>
  );
};

export default SearchResultItem;