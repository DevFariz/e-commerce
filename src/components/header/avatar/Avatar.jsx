import React from "react";
import { useState } from "react";

import AvatarPopUp from "./AvatarPopUp";

const Avatar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  }

  return (
    <div className="relative" onClick={togglePopup}>
      <div className=" cursor-pointer w-12 h-12 bg-slate-600 flex justify-center items-center	rounded-full overflow-hidden">
        <img
          className="object-cover h-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDuE2ejpy-CjPVNdAhuIVch-8DRr20pvVwxs2pBWtl&s"
          alt="avatar"
        />
      </div>
      {isPopupOpen ? <AvatarPopUp /> : null}
    </div>
  );
};

export default Avatar;
