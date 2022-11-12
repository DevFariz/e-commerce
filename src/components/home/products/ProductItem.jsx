import React from "react";

import CardImg from "../../../assets/svg/shopping-cart.svg";
import FavoritesImg from "../../../assets/svg/favorites.svg";

const ProductItem = () => {
  return (
    <div className="relative">
      <div className="flex flex-col items-end">
        <div className="absolute bg-slate-200 ">
          <button title="add to favorites" className="block p-3  border-b-2 border-slate-400	hover:bg-slate-300">
            <img className="w-7" src={FavoritesImg} alt="favorites" />
          </button>
          <button title="add to card" className="block p-3 hover:bg-slate-300">
            <img className="w-7" src={CardImg} alt="card" />
          </button>
        </div>
      </div>
      <img
        src="https://cdn.shopify.com/s/files/1/0515/6169/3382/products/ILUMA-BRIGHTENING-POWDER-PDP-R02a_600x.jpg?v=1637780346"
        alt="image"
      />
      <div className="flex justify-between py-3 px-1 text-xl">
        <h4>Product</h4>
        <p>2000$</p>
      </div>
      <p className="px-1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default ProductItem;
