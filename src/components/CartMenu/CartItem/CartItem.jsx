import React from "react";
import style from "./CartItem.module.css";

export const CartItem = ({ car }) => {
  return (
    <div className={style.item}>
      <div>{car.name}</div>
      <div className={style.delete}>X</div>
    </div>
  );
};
