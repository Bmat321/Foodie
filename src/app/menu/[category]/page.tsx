import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Category = () => {
  return (
    <div className="flex flex-wrap text-red-400">
      {pizzas.map((pizza) => (
        <Link
          href={`/product/${pizza.id}`}
          className="w-full h-[60vh] border-r-2 border-b-2 border-red-400 p-4 sm:w-1/2 lg:w-1/3 flex flex-col justify-between group even:bg-zinc-900"
          key={pizza.id}
        >
          {/* IMAGE CONTAINER */}
          {pizza.img && (
            <div className="h-[80%] relative">
              <Image
                src={pizza.img}
                alt="pizza"
                fill
                className="object-contain"
              />
            </div>
          )}
          {/* TEXT CONTAINER */}
          <div className="flex item-center justify-between font-bold">
            <h1 className="text-2xl p-2 font-bold uppercase">{pizza.title}</h1>
            <h2 className="group-hover:hidden text-xl">{pizza.price}</h2>
            <button className="hidden group-hover:block uppercase bg-red-400 text-black p-2 rounded-md gro">
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Category;
