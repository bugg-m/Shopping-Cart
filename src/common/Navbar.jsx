import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="flex justify-evenly dark:bg-gray-800 max-w-full items-center">
        <div className="flex justify-evenly text-white max-w-full w-3/4 my-4 items-center">
          <Link to={"/"}>Home</Link>
          <Link to={"/Cart"}>Cart</Link>
        </div>
      </div>
    </>
  );
};
