import React, { useState, useEffect } from "react";
import RatingStar from "./RatingStar";
import "./ProductExtra.css";

  
const ProductExtra = ({results}) => {
    const generateStars = (nb) => {

        let stars = [];
        for (let i = 0; i < nb; i++) {
          stars.push(<RatingStar offset={1.0}/>);
        }

        return stars;
    };

    const generateStars1 = (rating) => {
        const fullStars = Math.floor(rating); 
        const emptyStars = 5 - Math.ceil(rating);
    
        let stars = [];
        for (let i = 0; i < fullStars; i++) {
          stars.push(<RatingStar offset={1.0}/>);
        }
    
        for (let i = 0; i < emptyStars; i++) {
          stars.push(<RatingStar offset={0.0}/>);
        }
    
        return stars;
    };

    return (
        <>
            <div className="product-extras-container">
                <div className="rating-container">
                    <div className="rating-general-info-container">
                        <span className="rating-general-info-title">Avis&Evaluations</span>
                        <div className="rating-general-info">
                            <div className="global-rating">
                                <span className="global-rating-value">{parseFloat(results.details.AVG_RATING).toFixed(1)}</span>
                                <span className="global-rating-nb">23 avis</span>
                            </div>
                            <div className="rating-distribution">
                                {[...Array(5)].map((_, i) => (
                                    <span className="rating-distribution-item">
                                        <span className="rating-distribution-item-stars">
                                            {generateStars(5-i)}
                                        </span>
                                        <div className="rating-distribution-item-bar">
                                            <div  style={{width: '100%'}}></div>
                                        </div>
                                        <span className="rating-distribution-item-count">100</span>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="reviews-container">
                        <div className="review-title">8 Evaluations</div>
                        <div className="reviews-scroll">
                            <div className="review">
                                <span className="review-writer">Helene Moore</span>
                                <div className="review-info">
                                    <span className="review-stars">
                                        {generateStars1(4)}
                                    </span>
                                    <span className="review-date">june ,5 ,2025</span>
                                </div>
                                <p className="review-body">This watch combines elegance with functionality perfectly. The minimalist design looks great on the wrist, and the strap is super comfortable for all-day wear. Timekeeping is accurate, and the battery has lasted months without issues. It's also water-resistant, which is a nice bonus. Overall, a stylish and reliable accessory for everyday use.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductExtra;