import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex">
        <li className="mx-3 text-xl cursor-pointer">About</li>
        <li className="mx-3 text-xl cursor-pointer">Products</li>
        <li className="mx-3 text-xl cursor-pointer">Contacts</li>
      </ul>
    </nav>
  );
};

export default Navbar;
