import React from "react";
import ProductImg from "../assets/product_image.png";
import StarIcon  from '../assets/Star.svg';
import ProductGroupImg  from '../assets/product_group_image.png';
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

const Product = () => {
  return (
    <div class="Product">
      <div class="ProductImg">
      <img class="ProductSelfImg" src={ProductImg} />
      <img class="ProductGroupImg" src={ProductGroupImg} />
      </div>
      <div class="ProductDescription">
        <h1>Montre Homme Fossil Nate</h1>
        <div class="ProductRating">

         <h2>FOSSIL</h2>

          <div class="StarContainer">
            <img src={StarIcon}/>
            <img src={StarIcon}/>
            <img src={StarIcon}/>
            <img src={StarIcon}/>
            <img src={StarIcon}/>
          </div>
          <h4>140 avis</h4>
          
          
        
        </div>

        <hr class="DachedLine"/>

        <h2>
          90 - 115 DT
          <span
            style={{
              color: "#22C55E",
              fontSize: "80%",
              padding: "15px",
            }}
          >
            EN STOCK
          </span>
        </h2>
        <div class="ProductColor">
        <h4>Couleur </h4>
        <span>
        <FilledCircle size={20} color="black"/>   
        <FilledCircle size={20} color="#848884"/>   
        <FilledCircle size={20} color="#AAAAAA"/>   
        </span>
        </div>
        
        <h4>Details produit </h4>

        <hr class="DachedLine"/>
        
        <h4>À propos de cet article </h4>
        <p>
          Du cadran mat encre à l'acier brossé, Nate donne une nouvelle
          profondeur à la tendance du tout noir. Utilisez-le pour habiller votre
          jean préféré et un t-shirt blanc impeccable. Cette montre Nate est
          également dotée d'un mouvement chronographe sur un bracelet en acier
          inoxydable.
        </p>
      </div>
    </div>
  );
};

export default Product;
