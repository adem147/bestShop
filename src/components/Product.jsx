import React, { useState, useEffect } from "react";
import RatingStar from "./RatingStar";
import "./Product.css";

const FilledCircle = ({ size, color}) => {
  return (
    <div
      className={"circle"}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        borderRadius: "50%",
      }}
    ></div>
  );
};

const Product = ({results}) => {
  const [mainImage, setMainImage] = useState(results.details.PRIMARY_IMAGE_URL);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setMainImage(results.details.PRIMARY_IMAGE_URL);
  }, [results.details.PRIMARY_IMAGE_URL]);
  
  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSubImageClick = (imageUrl) => {
    setMainImage(imageUrl);
  };

  const generateStars = (rating) => {
    const fullStars = Math.floor(rating); // Full stars
    const hasHalfStar = rating % 1 !== 0; // Check if there is a half star
    const emptyStars = 5 - Math.ceil(rating); // Remaining empty stars

    let stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<RatingStar offset={1.0}/>);
    }

    if (hasHalfStar) {
      stars.push(<RatingStar offset={rating-fullStars}/>);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<RatingStar offset={0.0}/>);
    }

    return stars;
  };

  return (
    <div className="Product">
      <div className="product-imgs-container">
        <img className="product-main-img" src={mainImage || 'product_imgs/default-item.svg'} />
        <div className="product-sub-img-container">{
          results.images.map((image, index) => (
            <img 
              key={index} 
              className={`product-sub-img ${mainImage === image.IMG_URL ? 'active' : ''}`} 
              src={image.IMG_URL}
              onClick={() => handleSubImageClick(image.IMG_URL)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>
      </div>
      <div className="ProductDescription PublicSans">
        <h1>{results.details.PRD_NAME}</h1>
        <div className="product-general-info">
          <img src={results.details.PRD_BRAND?`product_imgs/${results.details.PRD_BRAND}.png`:'whitelabel.png'} className="product-brand-label"/>

          {/*<h2>{results.details.PRD_BRAND}</h2>*/}
          <div className="StarContainer">
            {generateStars(results.details.AVG_RATING)}
          </div>
          <h4 fon>({results.details.NB_RATING} avis)</h4>
        </div>

        <hr className="DashedLine"/>

        <div className="product-availability">
          <span className="price-range">{results.details.MIN_PRICE} DT</span>
          <span className="stock">{results.details.STOCK === "0"? "EN STOCK":results.details.STOCK === "1"? "EN ARRIVAGE": "HORS STOCK"}</span>
        </div>
        <div className="product-option">
          <h4>Couleur </h4>
          <span>
            <FilledCircle size={20} color="black"/>   
            <FilledCircle size={20} color="#848884"/>   
            <FilledCircle size={20} color="#AAAAAA"/>   
          </span>
        </div>
        
        <h3>Details produit </h3>

        <div className="product-detail">
          <h4>Couleur </h4>
          <h4>Noir</h4>
        </div>
        <div className="product-detail">
          <h4>Pays d'origine </h4>
          <h4>Chine</h4>
        </div>
        <hr className="DashedLine"/>
        
        <h3>À propos de cet article </h3>

        <p className={`${isExpanded ? '' : 'truncated'}`}>{results.details.PRD_DESCRIPTION}</p>
        <span className="toggle" onClick={toggleText}>
          {isExpanded ? 'Show less' : 'Show more'}
        </span>

      </div>
    </div>
  );
};

export default Product;
