import React from "react";
import Intro from "../components/home/Intro";
import Products from "../components/home/products";
import Categories from "../components/home/Categories";

const Home = () => {
  console.log("home");

  return (
    <main >
      <Intro />
      <Products />
      <Categories />
    </main>
  );
};

export default Home;
