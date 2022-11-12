import React from "react";
import { Link } from "react-router-dom";

import Avatar from "./avatar/Avatar";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="p-5 bg-slate-100">
      <div className="max-w-screen-2xl px-2 mx-auto flex justify-between items-center">
        <Link to="/" className="cursor-pointer text-xl">MyCommerce</Link>
        <Navbar />
        <Avatar />
      </div>
    </header>
  );
};

export default Header;
