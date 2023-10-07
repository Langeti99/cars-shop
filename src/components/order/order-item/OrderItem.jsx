import React from "react";
import style from "./OrderItem.module.css";
import { CarCover } from "../../car-cover";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "../../../redux/cart/cart";

export const OrderItem = ({ car }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteItemFromCart(car.id));
  };

  return (
    <div className={style.item}>
      <div className={style.cover}>
        <CarCover image={car.image} />
      </div>
      <div className={style.title}>{car.name}</div>
      <div className={style.price}>
        <span>{car.price} USD</span>
        <div className={style.delete}>
          <AiOutlineCloseCircle className={style.icon} onClick={handleDelete} />
        </div>
      </div>
    </div>
  );
};
