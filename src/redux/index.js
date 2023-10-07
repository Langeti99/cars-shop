import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cart";
import gameReducer from "./games/games";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    game: gameReducer,
  },
});
