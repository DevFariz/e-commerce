import React from "react";
import { Link } from "react-router-dom";

import IntroBg from "../../assets//intro-bg.jpg";

const Intro = () => {
  return (
    <section style={{backgroundImage: "url(" + IntroBg + ")"}} className="py-24 mb-10 h-2/5 text-white">
      <div className="max-w-screen-2xl mx-auto px-2">
        <h1 className="text-7xl leading-tight	 font-medium mb-8">
          Welcome to <br /> MyCommerce
        </h1>
        <p className="text-3xl max-w-3xl mb-11">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          cum repellendus adipisci. Consectetur, doloribus tenetur?
        </p>
        <Link
          to="/products"
          className="text-2xl text-white font-medium py-3 px-8  border rounded"
        >
          See all Products
        </Link>
      </div>
    </section>
  );
};

export default Intro;
