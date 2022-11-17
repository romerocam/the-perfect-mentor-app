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
        <ul className="hidden space-x-4 md:flex">
            <li>Users</li>
            <li>Stadistics</li>
            <li>Reports</li>
            <li>Profile</li>
        </ul>
      </div>
      <div></div>
    </header>
  );
};

export default Header;
