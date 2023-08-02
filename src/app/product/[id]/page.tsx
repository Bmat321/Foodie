import Price from "@/components/Price";
import { singleProduct } from "@/data";
import Image from "next/image";
import React from "react";

const SingleProuctPage = () => {
  return (
    <div className="flex flex-col h-screen text-red-400 md:flex-row p-4 xl:px-40 lg:px-20 justify-around md:gap-8 md:items-center">
      {/* IMAGE CONTAINER */}
      <div className=" w-full relative h-1/2 md:h-[70%]">
        <Image
          src={`${singleProduct.img}`}
          alt=""
          fill
          className="object-contain"
        />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="uppercase font-bold text-3xl xl:text-5xl">{singleProduct.title}</h1>
        <p className="">{singleProduct.desc}</p>
        <Price
          price={singleProduct.price}
          id={singleProduct.id}
          options={singleProduct.options}
        />
      </div>
    </div>
  );
};

export default SingleProuctPage;
