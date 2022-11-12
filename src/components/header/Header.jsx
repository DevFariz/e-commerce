import React from "react";

import Avatar from "./avatar/Avatar";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="p-5 bg-slate-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="cursor-pointer">MyCommerce</div>
        <Navbar />
        <Avatar />
      </div>
    </header>
  );
};

export default Header;
