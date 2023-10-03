import React from "react";
import styles from "./CarItem.module.css";
import { CarCover } from "../car-cover";
import { CarBuy } from "../car-buy/CarBuy";

export const CarItem = ({ car }) => {
  return (
    <div className={styles.item}>
      <CarCover image={car.image} />
      <div className={styles.details}>
        <span className={styles.title}>{car.name}</span>
        <div className={styles.genre}>{car.genres.map((g) => g)}</div>
        <div className={styles.buy}>
          <CarBuy />
        </div>
      </div>
    </div>
  );
};
