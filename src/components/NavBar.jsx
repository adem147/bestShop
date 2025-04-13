import React, { useState, useRef, useEffect } from 'react';
import Categories from '../assets/json/Categories.json';
import './NavBar.css';

const NavBar = () => {
    const [activeCategory, setActiveCategory] = useState(null);
    const containerRef = useRef(null);
    const fullList = [
        ...Categories.Categories,  // original
        ...Categories.Categories,  // clone after
        ...Categories.Categories   // clone before
    ];
    const mouseOver = (e) => {
        console.log(e.target.dataset.index);
        
        const index = parseInt(e.target.dataset.index);
        setActiveCategory(index);
        console.log(activeCategory);
        
    }

    const mouseOut = () => {
        setActiveCategory(null);
    }
    
    const handleMouseDown = (e) => {
        const container = containerRef.current;
        container.isDown = true;
        container.startX = e.pageX - container.offsetLeft;
        container.classList.add('no-snap');
        //container.scrollLeft = container.scrollLeft;
        //container.style.cursor = 'grabbing';
    };

    const handleMouseLeave = () => {
        const container = containerRef.current;
        container.isDown = false;
        container.classList.remove('no-snap');
    };

    const handleMouseUp = () => {
        const container = containerRef.current;
        container.isDown = false;
        container.style.cursor = 'default';
        container.classList.remove('no-snap');
    };

    const handleMouseMove = (e) => {
        const container = containerRef.current;
        if (!container.isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - container.startX);
        container.startX= x;
        container.scrollLeft = container.scrollLeft - walk;
        
    };

    useEffect(() => {
        const container = containerRef.current;
        //const mid = container.scrollWidth / 3 ;
        console.log(container.scrollWidth);
        
        container.scrollLeft = 1500;
    }, []);

    const handleScroll = () => {
        const container = containerRef.current;
        const totalScrollWidth = container.scrollWidth;
        const scrollLeft = container.scrollLeft;
        const sectionWidth = totalScrollWidth / 3;
    
        if (scrollLeft < sectionWidth * 0.5) {
            // Too far left — jump forward
            container.scrollLeft += sectionWidth;
        } else if (scrollLeft > sectionWidth * 1.5) {
            // Too far right — jump back
            container.scrollLeft -= sectionWidth;
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-scroll-wrapper">
                <ul className="navbar-categories-list"
                    ref={containerRef}
                    onScroll={handleScroll}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}>
                    {fullList.map((category, index) => (
                        <li
                            className="navbar-item" 
                            key={index}
                            data-index={index % (Categories.Categories.length)}
                            onMouseOver={mouseOver}
                            onMouseOut={mouseOut}
                        >
                            {category.name}
                        </li>
                    ))}
                </ul>
            </div>
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