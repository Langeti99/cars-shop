import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

import { CarCover } from "../car-cover";
import { CarBuy } from "../car-buy/CarBuy";
import { CarGenre } from "../CarGenre/CarGenre";

import { setCurrentGame } from "../../redux/games/games";

import styles from "./CarItem.module.css";

export const CarItem = ({ car, i }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const listVariants = {
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.5,
      },
    }),
    hidden: {
      opacity: 0,
      x: -100,
    },
  };

  const handleGame = () => {
    dispatch(setCurrentGame(car));
    navigate(`/app/${car.name}`);
  };

  return (
    <motion.div
      variants={listVariants}
      initial="hidden"
      animate="visible"
      custom={i}
      className={styles.item}
      onClick={handleGame}
    >
      <CarCover image={car.image} />
      <div className={styles.details}>
        <span className={styles.title}>{car.name}</span>
        <div className={styles.genre}>
          {car.genres.map((g) => (
            <CarGenre genre={g} />
          ))}
        </div>
        <div className={styles.buy}>
          <CarBuy car={car} />
        </div>
      </div>
    </motion.div>
  );
};
