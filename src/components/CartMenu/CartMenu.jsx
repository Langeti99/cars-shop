import React from "react";
import style from "./CartMenu.module.css";
import { calcTotalPrice } from "../../utils/totalPrice";
import { Button } from "../button/Button";
import { CartItem } from "./CartItem/CartItem";

export const CartMenu = ({ cars, onClick }) => {
  return (
    <div className={style.cart}>
      <div className={style.items}>
        {cars.length > 0 ? (
          cars.map((car) => <CartItem key={car.name} car={car} />)
        ) : (
          <div>Корзина пуста</div>
        )}
      </div>
      <div className={style.arrange}>
        <div className={style.total}>
          <span>Сумма: </span>
          <span>{calcTotalPrice(cars)} USD</span>
        </div>
        <Button type="primary" size="m" onClick={onClick}>
          Оформити замовлення
        </Button>
      </div>
    </div>
  );
};
