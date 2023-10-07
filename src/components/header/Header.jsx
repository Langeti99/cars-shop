import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { CartBlock } from "../cart-block";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <Link to="/" className={styles.title}>
          Car Store
        </Link>
      </div>
      <div className={`${styles.cartBtn} ${styles.wrapper}`}>
        <CartBlock />
      </div>
    </div>
  );
};
