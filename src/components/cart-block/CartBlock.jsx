import React, { useState } from "react";
import { BiCartAlt } from "react-icons/bi";
import styles from "./CartBlock.module.css";
import { useSelector } from "react-redux";
import { CartMenu } from "../CartMenu";
import { calcTotalPrice } from "../../utils/totalPrice";
import { CountItemsInCart } from "./CountItemsInCart/CountItemsInCart";
import { useNavigate } from "react-router-dom";

export const CartBlock = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  const history = useNavigate();

  const handleOpen = () => {
    setIsCartOpen((prev) => !prev);
  };

  const handleOrder = () => {
    setIsCartOpen(false);
    history("/order");
  };

  return (
    <div className={styles.cart}>
      <CountItemsInCart count={items.length} />
      <BiCartAlt onClick={handleOpen} size={30} className={styles.icon} />
      {items.length > 0 ? <span>{totalPrice} USD</span> : null}
      {isCartOpen ? <CartMenu cars={items} onClick={handleOrder} /> : null}
    </div>
  );
};
