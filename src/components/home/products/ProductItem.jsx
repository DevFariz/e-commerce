import React from "react";

import CardImg from "../../../assets/svg/shopping-cart.svg";
import FavoritesImg from "../../../assets/svg/favorites.svg";

const ProductItem = ({name, price, images}) => {
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
        className="w-full"
        src={images[0].url}
        alt={name}
      />
      <div className="flex justify-between py-3 px-1 text-xl">
        <h4>{name}</h4>
        <p className="w-24 text-right">{price.formattedValue}</p>
      </div>
      
    </div>
  );
};

export default ProductItem;
