import React, { useState, useEffect } from "react";
import axios from 'axios';
import RatingSection from "./RatingSection";
import PriceGraph from "./PriceGraph";
import RatingStar from "./RatingStar";
import "./ProductExtra.css";

  
const ProductExtra = ({results}) => {
    const [selector, setSelector] = useState(0);
    return (
        <>
            <div className="product-extras-container">
                <div className="product-extras-selectors">
                    <span className="product-extras-selector" onClick={() => (setSelector(0))}>Avis</span>
                    <span className="product-extras-selector" onClick={() => (setSelector(1))}>Prix</span>
                </div>
                {selector?<PriceGraph></PriceGraph> : <RatingSection results={results}/>}
            </div>
        </>
    );
};

export default ProductExtra;