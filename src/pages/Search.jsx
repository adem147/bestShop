import React from 'react';
import { ReactComponent as SearchIcon } from '../assets/svg/search-icon.svg';
import SearchResultItem from '../components/SearchResultItem';
import './Search.css';

const Search = () => {
    return (
        <>
            <div className='search-container'>
                <div className='filter-container'>
                    <h2>Filtrer</h2>
                    <div className='filter-divider'></div>
                    <div className='filter-group'>
                        <label className='filter-label'>
                            <input type="checkbox" />
                            <h3>Catégorie</h3>
                        </label>
                    </div>
                </div>
                <div className='search-result-container'>
                    <div className='search-top-bar'>
                        <h2>Resultat de recherche</h2>
                        <div className='result-search-bar'>
                            <input type="text" placeholder='Recherche...'/>
                            <SearchIcon className='search-icon' fill='#999999'/>
                        </div>
                    </div>
                    <div className='search-result'>
                        <SearchResultItem />
                        <SearchResultItem />
                        <SearchResultItem />
                        <SearchResultItem />
                        <SearchResultItem />
                    </div>
                </div>

            </div>
        </>
    );
};

export default Search;