"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "Always fresh & always crispy & always hot",
    img: "/slide1.png",
  },
  {
    id: 1,
    title: "Fast delivery of your order anywhere you are in LA",
    img: "/slide2.png",
  },
  {
    id: 1,
    title: "The best pizza to share with friends and family",
    img: "/slide3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      2000
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row">
      {/* TEXT CONTAINER */}
      <div className="flex-1 items-center justify-center flex flex-col gap-8 font-bold bg-zinc-950 text-red-400 lg:h-full">
        <h1 className="text-4xl text-center uppercase md:text-6xl md:p-10 xl:text-7xl p-4">
          {data[currentSlide].title}
        </h1>
        <button className=" bg-red-400 text-black py-4 px-8 rounded-md">
          Order Now
        </button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="w-full flex-1 relative lg:h-full">
        <Image
          src={data[currentSlide].img}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
