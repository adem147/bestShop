import React from "react";
import "./ProductSellers.css";
import SellerLogo from "../assets/LOGO-MYTEK-176PX-INVERSE.jpg";

const Item = () => {
  return (
    <>
      <div class="Sellers">
      <div className="SellerInfo">
        <img src={SellerLogo} alt="Seller Logo" class="SellerLogo" />
        <hr className="Divider" />
        <h4 className="Price">150 DT</h4>
      </div>
    
      <div class="Button">
       <h4>Voir l'offre</h4>
      </div>
      </div>
    </>
  );
};

const ProductSellers = () => {
  return (
    <>
    <div class="SellersFrame">
      <div class="SellersContainer">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </>
  );
};

export default ProductSellers;
