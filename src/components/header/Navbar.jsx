import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex">
        <li className="mx-3 text-xl cursor-pointer">
          <Link to="about">About</Link>
        </li>
        <li className="mx-3 text-xl cursor-pointer">
          <Link to="products">Products</Link>
        </li>
        <li className="mx-3 text-xl cursor-pointer">
          <Link to="contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
