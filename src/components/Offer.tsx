
import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="flex-1 h-screen flex-col flex md:flex-row">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className=" text-red-400 text-5xl font-bold xl:text-6xl">
          Delicious yummy burger & Freshly Fry
        </h1>
        <p className=" text-red-400 xl:text-xl">
          Yumie and process encentry methods and paraale. Quickly ractifio
          plural
        </p>
        <CountDown />
        <button className="bg-red-400 text-black font-bold rounded-md py-3 px-6">
          Order Now
        </button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="relative w-full flex-1">
        <Image
          src="/offerProduct.png"
          alt="offer"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Offer;
