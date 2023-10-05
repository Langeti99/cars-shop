import React, { useState } from "react";
import { BiCartAlt } from "react-icons/bi";
import styles from "./CartBlock.module.css";
import { useSelector } from "react-redux";
import { CartMenu } from "../CartMenu";
import { calcTotalPrice } from "../../utils/totalPrice";
import { CountItemsInCart } from "./CountItemsInCart/CountItemsInCart";

export const CartBlock = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);

  const handleOpen = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <div className={styles.cart}>
      <CountItemsInCart count={items.length} />
      <BiCartAlt onClick={handleOpen} size={30} className={styles.icon} />
      {items.length > 0 ? <span>{totalPrice} USD</span> : null}
      {isCartOpen ? <CartMenu cars={items} onClick={() => null} /> : null}
    </div>
  );
};
