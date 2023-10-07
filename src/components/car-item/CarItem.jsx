import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { CarCover } from "../car-cover";
import { CarBuy } from "../car-buy/CarBuy";
import { CarGenre } from "../CarGenre/CarGenre";

import { setCurrentGame } from "../../redux/games/games";

import styles from "./CarItem.module.css";

export const CarItem = ({ car }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGame = () => {
    dispatch(setCurrentGame(car));
    navigate(`/app/${car.name}`);
  };

  return (
    <div className={styles.item} onClick={handleGame}>
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
    </div>
  );
};
