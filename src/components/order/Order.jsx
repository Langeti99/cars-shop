import React from "react";
import style from "./Order.module.css";
import { useSelector } from "react-redux";
import { calcTotalPrice } from "../../utils/totalPrice";
import { OrderItem } from "./order-item/OrderItem";
import { Button } from "./../button";
import { useNavigate } from "react-router-dom";

export const Order = () => {
  const items = useSelector((state) => state.cart.itemsInCart);
  const navigate = useNavigate();

  if (items.length === 0) return <p>В вашій корзині немає товарів.</p>;

  const handlePay = () => {
    navigate("/payment");
  };

  return (
    <div className={style.page}>
      <div className={style.left}>
        {items.map((car, i) => (
          <OrderItem i={i} car={car} />
        ))}
      </div>
      <div className={style.right}>
        <span>
          {items.length} товарів на суму {calcTotalPrice(items)}
        </span>
      </div>
      <Button type="primary" onClick={handlePay} size="m" className={style.btn}>
        Перейти до оплати
      </Button>
    </div>
  );
};
