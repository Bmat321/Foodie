import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" h-12 md:h-24 flex p-4 items-center justify-between lg:px-20 xl:px-40 text-red-400 ">
      <Link href="/" className=" text-lg font-bold">
        FOODIES
      </Link>
      <p>@ ALL RIGHTS RESERVED.</p>
    </div>
  );
};

export default Footer;
