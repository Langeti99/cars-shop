import React from "react";
import style from "./CountItemsInCart.module.css";

export const CountItemsInCart = ({ count }) => {
  return count > 0 ? (
    <div className={style.count}>
      <span>{count}</span>
    </div>
  ) : null;
};
