import React from "react";
import { Card } from "../common/Card";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/slices/cartSlice";
export const Cart = () => {
  let quantity;
  const dispatch = useDispatch();
  const product = useSelector((state) => state.cart);
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product.id));
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
              flag={true}
              rate={data.rating.rate}
              count={data.rating.count}
              // quantity={data.quantity}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          );
        })}
      </div>
    </>
  );
};
