// showing product with manually added api

import React, { useEffect, useState } from "react";
import { Card } from "../common/Card";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";
import ApiData from "../utils/apiData";
import { getProducts } from "../store/slices/productSlice";
import { STATUSES } from "../store/slices/productSlice";

// const getLocalStorageData = () => {
//   let list = localStorage.getItem("lists");
//   if (list) {
//     return JSON.parse(localStorage.getItem("lists"));
//   } else {
//     return [];
//   }
// };

export const Product = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.product);
  // const [product, setProduct] = useState(getLocalStorageData());

  useEffect(() => {
    // const Products = async () => {
    //   const res = await axios.get("https://fakestoreapi.com/products");
    //   console.log(res.data);
    //   setProduct(res.data);
    // };
    // Products();
    // localStorage.setItem("lists", JSON.stringify(data), [data]);
    // getLocalStorageData(data);
    dispatch(getProducts());
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  if (status === STATUSES.LOADING) {
    return <h1 className="text-3xl ">Loading...</h1>;
  }
  if (status === STATUSES.ERROR) {
    return <h1 className="text-3xl ">404! Products not found...</h1>;
  }

  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-col-1 gap-5 p-5 ">
        {data.map((data) => {
          return (
            <Card
              key={data.id}
              img={data.image}
              title={data.title}
              description={data.description}
              product={data}
              id={ApiData.id}
              price={data.price}
              rate={data.rating.rate}
              count={data.rating.count}
              handleAddToCart={handleAddToCart}
            />
          );
        })}
      </div>
    </>
  );
};
