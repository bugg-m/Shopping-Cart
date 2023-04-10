import React from "react";
import { Link } from "react-router-dom";
import { CgShoppingCart } from "react-icons/cg";
import { useSelector } from "react-redux";
export const Navbar = () => {
  const cartLength = useSelector((state) => state.cart);
  return (
    <>
      <div className="flex justify-evenly dark:bg-gray-800 max-w-full items-center">
        <div className="flex justify-evenly text-white max-w-full w-3/4 my-4 items-center">
          <Link to={"/"}>Home</Link>
          <div className="flex">
            <Link to={"/Cart"}>GoTo Cart</Link>
            <CgShoppingCart className="text-lg m-1" />
          </div>
          <h1>Cart Items: {" " + cartLength.length}</h1>
        </div>
      </div>
    </>
  );
};
