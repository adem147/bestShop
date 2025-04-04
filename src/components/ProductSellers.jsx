import React from "react";
import "./ProductSellers.css";
import SellerLogo from "../assets/LOGO-MYTEK-176PX-INVERSE.jpg";

const Item = () => {
  return (
    <>
      <div class="seller">
        <div className="sellerInfo PublicSans">
          <img src={SellerLogo} alt="seller Logo" class="sellerLogo" />
          <div className="divider" />
          <h4 className="price">150 DT</h4>
          <h4 className="stock">EN STOCK</h4>
        </div>
          <button className="button PublicSans">Voir l'offre</button>
      </div>
    </>
  );
};

const ProductSellers = () => {
  return (
    <>
    <div class="sellersFrame">
      <div class="sellersContainer">
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
