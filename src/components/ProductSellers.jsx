import React from "react";
import "./ProductSellers.css";
import SellerLogo from "../assets/LOGO-MYTEK-176PX-INVERSE.jpg";

const Item = ({seller}) => {
  return (
    <>
      <div className="seller">
        <div className="sellerInfo PublicSans">
          <img src={SellerLogo} alt="seller Logo" className="sellerLogo" />
          <div className="divider" />
          <h4 className="price">{seller.PRICE}</h4>
          <h4 className="stock">{seller.STOCK === "0"? "EN STOCK": seller.STOCK === "1"? "EN ARRIVAGE": "HORS STOCK"}</h4>
        </div>
          <a className="button PublicSans" href={seller.PRICE_URL} target="_blank">
            <button >Voir l'offre</button>
          </a>
      </div>
    </>
  );
};

const ProductSellers = ({results}) => {
  
  return (
    <>
      <div className="sellersFrame">
        <div className="sellersContainer">
          {results.sellers.length === 0? (
              <div>No Shops Found.</div>
          ):(
              <>
                  {results.sellers.map((seller, index) => (
                      <>
                          <Item key={index} seller={seller} />
                      </>
                  ))}
              </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductSellers;
