
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const gameTypeSlice = createSlice({
  name: "gameType",
  initialState,
  reducers: {
    setGameType: (state, action) => {
      state.data = action.payload
    },
  },
});

export const { setGameType } = gameTypeSlice.actions

export default gameTypeSlice.reducer;