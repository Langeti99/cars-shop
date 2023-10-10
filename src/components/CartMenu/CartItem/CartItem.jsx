import React from "react";
import style from "./CartItem.module.css";
import { motion } from "framer-motion";

import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "./../../../redux/cart/cart";

export const CartItem = ({ car }) => {
  const dispatch = useDispatch();

  const cartItemVariant = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: -100,
    },
  };

  const handleDelete = () => {
    dispatch(deleteItemFromCart(car.id));
  };

  return (
    <motion.div
      variants={cartItemVariant}
      initial="hidden"
      animate="visible"
      className={style.item}
    >
      <div>{car.name}</div>
      <div className={style.delete} onClick={handleDelete}>
        X
      </div>
    </motion.div>
  );
};
