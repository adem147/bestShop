import React, { useState } from 'react'
import "./Carousel.css"
import Arrow from '../assets/svg/arrow.svg';

export const Carousel = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
      <div className='carousel' >
        <button className='carousel-arrow carousel-arrow-left' onClick={() => setActiveIndex((activeIndex - 1) % data.length)}>
            <img src={Arrow} alt="Left Arrow" />
        </button>
        {data.map((item, index) => {
          return <img src={item.src} alt={item.alt} key={index} className={`slide ${index === activeIndex ? "" : "slide-hidden"}`} />;
        })}
        <button className='carousel-arrow carousel-arrow-right' onClick={() => setActiveIndex((activeIndex + 1) % data.length)}>
            <img src={Arrow} alt="Left Arrow" />
        </button>
        <span className='carousel-indicators'>
            {data.map((_,index)=>{
                return <button key={index} className={`carousel-indicator ${index === activeIndex ? 'active' : ''}`} onClick={() => setActiveIndex(index)}></button>
            })}
        </span>
      </div>
    );
};
