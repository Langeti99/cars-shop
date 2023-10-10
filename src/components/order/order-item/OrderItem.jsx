import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

import { CarCover } from "../../car-cover";
import { deleteItemFromCart } from "../../../redux/cart/cart";
import { changeToCurrency } from "../../../utils/changeToCurrency";

import style from "./OrderItem.module.css";

export const OrderItem = ({ car, i }) => {
  const dispatch = useDispatch();

  const orderItemVariant = {
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
      },
    }),
    hidden: {
      opacity: 0,
      x: -100,
    },
  };

  const handleDelete = () => {
    dispatch(deleteItemFromCart(car.id));
  };

  return (
    <motion.div
      variants={orderItemVariant}
      initial="hidden"
      animate="visible"
      custom={i}
      className={style.item}
    >
      <div className={style.cover}>
        <CarCover image={car.image} />
      </div>
      <div className={style.title}>{car.name}</div>
      <div className={style.price}>
        <span>{changeToCurrency(car.price, "PLN")}</span>
        <div className={style.delete}>
          <AiOutlineCloseCircle className={style.icon} onClick={handleDelete} />
        </div>
      </div>
    </motion.div>
  );
};
