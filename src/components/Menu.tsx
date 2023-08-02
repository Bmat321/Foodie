"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";

const links = [
  {
    id: 1,
    title: "Homepage",
    url: "/",
  },
  {
    id: 2,
    title: "Menu",
    url: "/menu",
  },
  {
    id: 3,
    title: "Working Hours",
    url: "/",
  },
  {
    id: 4,
    title: "Contact",
    url: "/",
  },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  const  user =  false
  return (
    <div className="">
      {!open ? (
        <Image
          src="/open.png"
          width={20}
          height={20}
          alt="open"
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          width={20}
          height={20}
          alt="open"
          onClick={() => setOpen(false)}
        />
      )}
       { open && <div className="absolute bg-zinc-950 top-24 w-full flex flex-col left-0 h-[calc(100vh-6rem)] justify-center items-center z-10 text-lg gap-8">
        {links.map((link) => (
          <Link href={link.url} key={link.id} onClick={()=>setOpen(false)}>
            {link.title}
          </Link>
        ))}
        {!user ? (

          <Link href="/login" onClick={()=>setOpen(false)}>Login</Link>
        ) : (

          <Link href="/orders" onClick={()=>setOpen(false)}>Orders</Link>
          )}
          <Link href="/cart" onClick={()=>setOpen(false)}>
            <CartIcon />
          </Link>
      </div>}
    </div>
  );
};

export default Menu;
