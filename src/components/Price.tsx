"use client";

import { useEffect, useState } from "react";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, id, options }: Props) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(()=>{
    setTotal(quantity * (options ? price + options[selected].additionalPrice : price))
  },[options, price, quantity, selected])

  return (
    <div className=" flex flex-col gap-4">
      <h2 className=" text-2xl font-bold">${total.toFixed(2)}</h2>
      {/* OPTION CONTAINER */}
      <div className="flex gap-4">
        {options?.map((option, index) => (
          <button
            className="p-2 ring-2 ring-red-400 rounded-md"
            key={option.title}
            style={{
              background: selected === index ? "rgba(248 113 113)" : "black",
              color: selected === index ? "black" : "rgb(248 113 113)",
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>

      {/* QUANTITY AND ADD BUTTON CONTAINER */}
      <div className=" flex justify-center items-center">
        {/* QUANTITY */}
        <div className="flex justify-between w-full ring-2 ring-red-400 p-3">
          <span>Quantity</span>
          <div className="flex gap-4 items-center">
            <button
              className=""
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              className=""
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {">"}
            </button>
          </div>
        </div>
        {/* CART BUTTON  */}

        <button className="p-3 bg-red-400 text-black w-56 ring-2 ring-red-400 uppercase">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
