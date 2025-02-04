import React from "react";
import Link from "next/link";
const getProducts = async () => {
  let res = await fetch("https://dummyjson.com/products", {
    method: "GET",
  });
  res = await res.json();
  return res;
};

const Page = async () => {
  const products = await getProducts();

  return (
    <div>
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {products?.products?.map((item,idx)=>(
          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" key={idx}>
          <Link href={`/products/${item.id}`}>
            <img
              src={item?.thumbnail}
              alt="Product"
              className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">{item?.brand}</span>
              <p className="text-lg font-bold text-black truncate block capitalize">
                {item?.title}
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">
                  ${Math.round(item?.price)}
                </p>
                <del>
                  <p className="text-sm text-gray-600 cursor-auto ml-2">${Math.round(item?.price + 10 )}</p>
                </del>
              </div>
            </div>
          </Link>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
