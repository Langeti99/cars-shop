import React from "react";
import styles from "./header.module.css";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { CartBlock } from "../cart-block";

export const Header = () => {
  const location = useLocation();

  const headerVariant = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: -100,
    },
  };

  return (
    location.pathname !== "/payment" && (
      <motion.div
        variants={headerVariant}
        initial="hidden"
        animate="visible"
        transition={{
          delay: 1,
        }}
        className={styles.header}
      >
        <div className={styles.wrapper}>
          <Link to="/" className={styles.title}>
            Car Store
          </Link>
        </div>
        <div className={`${styles.cartBtn} ${styles.wrapper}`}>
          <CartBlock />
        </div>
      </motion.div>
    )
  );
};
