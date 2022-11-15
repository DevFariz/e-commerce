import React from "react";
import {Routes, Route} from "react-router-dom";

import Header from "./components/header";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contacts from "./pages/Contacts"
import Footer from "./components/Footer";
import Card from "./pages/Card";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen	">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/card" element={<Card />} />
      </Routes> 
      <Footer />
    </div>
  );
}

export default App;
