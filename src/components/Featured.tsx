import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="feature">
      {/* WRAPPER */}
      <div className="w-max flex">
        {/* SINGLE ITEM */}
        {featuredProducts.map((featured) => (
          <div
            key={featured.id}
            className="w-screen h-[60vh] flex flex-col justify-around items-center p-4 hover:bg-zinc-900 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
          >
            {featured.img && (
              <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500 ">
                {/* IMAGE CONTAINER */}
                <Image
                  src={featured.img}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            )}
            {/* TEXT CONTAINER */}
            <div className="flex-1 flex-col flex gap-4 items-center justify-center text-center">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                {featured.title}
              </h1>
              <p className="p-4 2xl:p-8">{featured.desc}</p>
              <span className="text-xl font-bold">${featured.price}</span>
              <button className="bg-red-400 font-bold p-2 text-black rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
