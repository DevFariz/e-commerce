import React from "react";
import ProductItem from "./ProductItem";

const Products = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-2">
      <h2 className="text-center text-3xl mb-5 font-semibold">Products</h2>
      <div className='grid grid-cols-4 gap-10'>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </section>
  );
};

export default Products;
