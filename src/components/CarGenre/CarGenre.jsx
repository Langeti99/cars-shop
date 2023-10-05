import React from "react";
import style from "./CarGenre.module.css";

export const CarGenre = ({ genre }) => {
  return <span className={style.genre}>{genre}</span>;
};
