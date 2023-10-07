import React from "react";
import style from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "./../../../redux/cart/cart";

export const CartItem = ({ car }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteItemFromCart(car.id));
  };

  return (
    <div className={style.item}>
      <div>{car.name}</div>
      <div className={style.delete} onClick={handleDelete}>
        X
      </div>
    </div>
  );
};
