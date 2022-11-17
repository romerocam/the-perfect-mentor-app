import Image from "next/image";
import React, { useEffect, useState } from "react";
import Vector from "../public/assets/Vector.png";
import doodle from "../public/assets/doodle.png";
import avatar from "../public/assets/avatar.png";
import Link from "next/link";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${isScrolled && 'bg-[#BFD732]'}`}>
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
          {/* <li className="headerLink"><Link href="/account">
          <Image
            src={avatar}
            alt=""
            className="cursor-pointer rounded-full"
          />
        </Link></li> */}
        </ul>
      </div>
    </header>
  );
};

export default Header;
