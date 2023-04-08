import React from "react";

export const Card = (props) => {
  return (
    <>
      <div className="max-w-sm h-[500px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-70">
        <div>
          <img
            className="rounded-t-lg w-full h-[250px] bg-slate-500"
            src={props.img}
            alt="image"
          />
        </div>
        <div className="p-5 h-[200px] ">
          <h1 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white">
            {props.title ? props.title.slice(0, 60) : " "}...
          </h1>
          <h1 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
            Price ${props.price}
          </h1>
          <p className="mb-3 break-words overflow-hidden font-normal text-sm text-gray-700 dark:text-gray-400 ">
            {props.description ? props.description.slice(0, 150) : " "}...
          </p>
        </div>
        <div className="h-[50px] flex items-center justify-center pb-4">
          {props.flag ? (
            <button
              onClick={() => {
                props.handleRemoveFromCart(props.product);
              }}
              className="w-[150px] h-[30px] text-base font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Remove from Cart
            </button>
          ) : (
            <button
              onClick={() => {
                props.handleAddToCart(props.product);
              }}
              className="w-[100px] h-[30px] text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </>
  );
};
