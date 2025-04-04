import React, { useState } from 'react';
import Categories from '../assets/json/Categories.json';
import './NavBar.css';

const NavBar = () => {
    const [activeCategory, setActiveCategory] = useState(null);

    const mouseOver = (e) => {
        console.log(e.target.dataset.index);
        
        const index = parseInt(e.target.dataset.index);
        setActiveCategory(index);
        console.log(activeCategory);
        
    }

    const mouseOut = () => {
        setActiveCategory(null);
    }

    return (
        <nav className="navbar">
            <ul className="navbar-categories-list">
                {Categories.Categories.map((category, index) => (
                    <li
                        className="navbar-item" 
                        key={index}
                        data-index={index}
                        onMouseOver={mouseOver}
                        onMouseOut={mouseOut}
                    >
                        {category.name}
                    </li>
                ))}
            </ul>
            <div className={`sub-categories-container ${activeCategory !== null ? 'visible' : ''}`}>
                {activeCategory !== null && Categories.Categories[activeCategory].columns.map((column, columnIndex) => (
                    /*console.log(rowIndex)*/
                    <div key={columnIndex} className="column">
                        {column.map((subCategory, subIndex) => (
                            <div key={subIndex} className="sub-category-container">
                                <p className='subCategoryName'>{subCategory.name}</p>
                                {subCategory.subCategories.map((subSubCategory, subSubIndex) => (
                                    <p key={subSubIndex} className='subSubCategoryName'>{subSubCategory}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </nav>
    );
};
export default NavBar;