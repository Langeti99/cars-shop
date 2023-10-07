import React from "react";
import style from "./Game.module.css";
import { useSelector } from "react-redux";

import { CarCover } from "../../car-cover";
import { CarGenre } from "../../CarGenre/CarGenre";
import { CarBuy } from "../../car-buy/CarBuy";

export const Game = () => {
  const car = useSelector((state) => state.game.itemsInCart);
  console.log(car);
  if (!car) return null;

  return (
    <div className={style.game}>
      <h1 className={style.title}>{car.name}</h1>
      <div className={style.wrapper}>
        <div className={style.left}>
          <iframe
            width="90%"
            height="400px"
            src={car.video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className={style.right}>
          <CarCover image={car.image} />
          <p className={style.description}>{car.description}</p>
          <p className={style.secondary}>Популярні теги для цього авто:</p>
          <div className={style.genres}>
            {car.genres.map((g) => (
              <CarGenre genre={g} key={g} />
            ))}
          </div>
          <div className={style.buy}>
            <CarBuy car={car} />
          </div>
        </div>
      </div>
    </div>
  );
};
