import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const NavBar = () => {
  const user = true;

  return (
    <div className=" h-12 text-red-400 items-center flex justify-between p-4 border-b-2 border-b-red-400 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* LEFT LINKS */}
      <div className=" hidden md:flex gap-4 flex-1">
        <Link href="/">HomePage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      <div className="text-xl md:font-bold flex-1 md:text-center">
        {/* {LOGO} */}
        <Link href="/">FOODIES</Link>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center md:justify-end flex-1 ">
        <div className="md:absolute top-3 right-2 lg:static flex gap-2 items-center px-1 rounded-md cursor-pointer bg-red-400 text-black">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>80 235 42</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link> 
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default NavBar;
