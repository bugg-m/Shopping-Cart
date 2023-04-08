import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../common/Card";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";

export const Product = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const Products = async () => {
      const res = await axios.get("https://fakestoreapi.com/products");
      //   console.log(res.data);
      setProduct(res.data);
    };
    Products();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-col-1 gap-5 p-5 ">
        {product.map((data) => {
          return (
            <Card
              key={data.id}
              img={data.image}
              title={data.title}
              description={data.description}
              product={data}
              id={product.id}
              price={data.price}
              handleAddToCart={handleAddToCart}
            />
          );
        })}
      </div>
    </>
  );
};
