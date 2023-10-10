import React, { useState } from "react";
import { motion } from "framer-motion";

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

  const valueVariant = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: 100,
    },
  };

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
      {items.length > 0 ? (
        <motion.span variants={valueVariant} initial="hidden" animate="visible">
          {totalPrice}
        </motion.span>
      ) : null}
      {isCartOpen ? <CartMenu cars={items} onClick={handleOrder} /> : null}
    </div>
  );
};
