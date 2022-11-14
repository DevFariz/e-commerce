import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import Skeleton from "../../reusableComponents/Skeleton";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    // const options = {
    //   method: "GET",
    //   headers: {
    //     "X-RapidAPI-Key": "48fec02c4fmshe34be3216d8a8d6p14b3dcjsn7b018be15528",
    //     "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
    //   },
    // };

    // fetch(
    //   "https:apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=16",
    //   options
    // )
    //   .then((response) => response.json())
    //   .then((response) => {
    //     setProducts(response.results);
    //   })
    //   .catch((err) => alert(err))
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
  }, []);

  return (
    <section className="max-w-screen-2xl mx-auto px-2 mb-20">
      <h2 className="text-center text-3xl mb-20 font-semibold">Products</h2>
      <div className="grid grid-cols-4 gap-10 mb-6">
        {isLoading
          ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
          : products.map((product) => (
              <ProductItem key={product.code} {...product} />
            ))}
      </div>
      <div className="flex justify-center">
        <Link to="/products" className="bg-slate-500 px-3 py-2 text-white">
          See all Products
        </Link>
      </div>
    </section>
  );
};

export default Products;
