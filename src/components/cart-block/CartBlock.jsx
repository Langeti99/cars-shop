import React from "react";
import { BiCartAlt } from "react-icons/bi";
import styles from "./CartBlock.module.css";

export const CartBlock = () => {
  return (
    <div className={styles.cart}>
      <BiCartAlt size={30} className={styles.icon} />
      <span>2000 uah.</span>
    </div>
  );
};
