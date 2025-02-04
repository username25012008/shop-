import React from "react";
const getProduct = async (id) => {
  let res = await fetch(`https://dummyjson.com/products/${id}`, {
    method: "GET",
  });
  res = await res.json();
  return res;
};

const page = async ({params}) => {
  let id = params?.id;
  const product = await getProduct(id);
  console.log(product);

  return (
    <div className="bg-gray-100 light:bg-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 light:bg-gray-700 mb-4">
              <img
                className="w-full h-full object-cover"
                src={product.thumbnail}
                alt="Product Image"
              />
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="w-1/2 px-2">
                <button className="w-full bg-gray-900 light:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 light:hover:bg-gray-700">
                  Add to Cart
                </button>
              </div>
              <div className="w-1/2 px-2">
                <button className="w-full bg-gray-200 light:bg-gray-700 text-gray-800 light:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 light:hover:bg-gray-600">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 light:text-white mb-2">
              {product.title}
            </h2>
            <div className="mb-4">
              <span className="font-bold text-gray-700 light:text-gray-300">
                Description:
              </span>
              <p className="text-gray-600 light:text-gray-300 text-sm mt-2">
                {product.description}
              </p>
            </div>
            <div className="flex gap-4 mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700 light:text-gray-300">
                  Price:
                </span>
                <span className="text-gray-600 light:text-gray-300">
                  {" "}
                  ${Math.round(product.price)}
                </span>
              </div>
              <div>
                <span className="font-bold text-gray-700 light:text-gray-300">
                  Category:{" "}
                </span>
                <span className="text-gray-600 light:text-gray-300 uppercase">
                  {product.category}
                </span>
              </div>
              <div>
                <span className="font-bold text-gray-700 light:text-gray-300">
                Brand:{" "}
                </span>
                <span className="text-gray-600 light:text-gray-300">
                  {product.brand}
                </span>
              </div>
              <div>
                <span className="font-bold text-gray-700 light:text-gray-300">
                  Rating:{" "}
                </span>
                <span className="text-gray-600 light:text-gray-300 uppercase">
                  {product.rating}
                </span>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700 light:text-gray-300">
                Select Color:
              </span>
              <div className="flex items-center mt-2">
                <button className="w-6 h-6 rounded-full bg-gray-800 light:bg-gray-200 mr-2"></button>
                <button className="w-6 h-6 rounded-full bg-red-500 light:bg-red-700 mr-2"></button>
                <button className="w-6 h-6 rounded-full bg-blue-500 light:bg-blue-700 mr-2"></button>
                <button className="w-6 h-6 rounded-full bg-yellow-500 light:bg-yellow-700 mr-2"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
