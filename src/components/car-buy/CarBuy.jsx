import React from "react";
import style from "./car-buy.module.css";
import { Button } from "../button/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, deleteItemFromCart } from "../../redux/cart/cart";
import { changeToCurrency } from "../../utils/changeToCurrency";

export const CarBuy = ({ car }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === car.id);

  const handleClick = (e) => {
    if (isItemInCart) {
      e.stopPropagation();
      dispatch(deleteItemFromCart(car.id));
    } else {
      e.stopPropagation();
      dispatch(addItemToCart(car));
    }
  };

  return (
    <div className={style.buy}>
      <Button
        type={isItemInCart ? "secondary" : "primary"}
        onClick={handleClick}
      >
        {isItemInCart ? "Видалити з корзини" : "В корзину"}
      </Button>
      <div className={style.price}>{changeToCurrency(car.price, "PLN")}</div>
    </div>
  );
};
