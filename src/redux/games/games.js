import { createSlice } from "@reduxjs/toolkit";

const gamesSlice = createSlice({
  name: "games",
  initialState: {
    itemsInCart: null,
  },
  reducers: {
    setCurrentGame: (state, action) => {
      state.itemsInCart = action.payload;
    },
  },
});

export const { setCurrentGame } = gamesSlice.actions;
export default gamesSlice.reducer;
