import React from "react";
import style from "./CarCover.module.css";

export const CarCover = ({ image = "" }) => {
  return (
    <div
      className={style.game_cover}
      style={{ backgroundImage: `url(${image})` }}
    />
  );
};
