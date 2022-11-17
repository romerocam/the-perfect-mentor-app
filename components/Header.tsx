import Image from "next/image";
import React from "react";
import Vector from "../public/assets/Vector.png";
import doodle from "../public/assets/doodle.png";
const Header = () => {
  return (
    <header>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image src={Vector} alt="" />
        <Image src={doodle} alt="" />
      </div>
      <div className="flex items-center space-x-4 text-sm font-bold">
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Users</li>
          <li className="headerLink">Stadistics</li>
          <li className="headerLink">Reports</li>
          <li className="headerLink">Profile</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
