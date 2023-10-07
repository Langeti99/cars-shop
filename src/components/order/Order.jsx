import React from "react";
import style from "./Order.module.css";
import { useSelector } from "react-redux";
import { calcTotalPrice } from "../../utils/totalPrice";
import { OrderItem } from "./order-item/OrderItem";

export const Order = () => {
  const items = useSelector((state) => state.cart.itemsInCart);

  if (items.length === 0) return <p>В вашій корзині немає товарів.</p>;

  return (
    <div className={style.page}>
      <div className={style.left}>
        {items.map((car) => (
          <OrderItem car={car} />
        ))}
      </div>
      <div className={style.right}>
        <span>
          {items.length} товарів на суму {calcTotalPrice(items)}
        </span>
      </div>
    </div>
  );
};
