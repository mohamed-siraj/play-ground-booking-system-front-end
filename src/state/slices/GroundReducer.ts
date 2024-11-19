
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const GroundSlice = createSlice({
  name: "ground",
  initialState,
  reducers: {
    setGround: (state, action) => {
      state.data = action.payload
    },
  },
});

export const { setGround } = GroundSlice.actions

export default GroundSlice.reducer;