import React from "react";
import { ProductTypes } from "../types";
import { EyeIcon, HeartIcon } from "../assets/images";
import { useDispatch } from "react-redux";
import { makeOrdered, unmakeOrdered } from "../store/makeOrderedSlice";

const ProductCart: React.FC<{ item: ProductTypes }> = ({ item }) => {
  console.log(item);
  const dispatch = useDispatch();
  return (
    <div className="col-span-3 flex flex-col gap-4 min-h-[350px]">
      <div className="bg-[#f5f5f5] group overflow-hidden rounded relative">
        <div className="absolute top-3 left-3 text-white">
          <p className="bg-red-500 text-xs font-light py-1 rounded px-3">
            -{item.discount.toFixed()}%
          </p>
        </div>
        <img
          src={item.images}
          className="object-contain mx-auto h-[300px]"
          alt={item.title}
        />

        {!item.isLiked ? (
          <button
            onClick={() => dispatch(makeOrdered(item))}
            className="absolute group-hover:bottom-0 hover:bg-red-500 hover:text-white duration-300 -bottom-1/2 w-full right-0 capitalize py-2 text-white bg-black "
          >
            add to cart
          </button>
        ) : (
          <button onClick={() => dispatch(unmakeOrdered(item))} className="absolute group-hover:bottom-0 hover:bg-red-500 hover:text-white duration-300 -bottom-1/2 w-full right-0 capitalize py-2 text-white bg-black ">
            remove from ordered
          </button>
        )}

        <div className="absolute top-3 -right-1/2 group-hover:right-3 duration-300 flex flex-col gap-2">
          <p className="p-2 size-8 cursor-pointer rounded-full bg-white flex items-center justify-center">
            <HeartIcon />
          </p>
          <p className="p-2 size-8 cursor-pointer rounded-full bg-white flex items-center justify-center">
            <EyeIcon />
          </p>
        </div>
      </div>
      <div className="font-inter ">
        <h1 className="font-medium text-sm">{item.title}</h1>
        <div className="mt-2 flex items-center gap-4">
          <span className="text-[#DB4444] text-base font-medium">
            ${item.price}
          </span>
          <span className="text-[#808080] text-base font-medium">
            ${item.oldPrice.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
