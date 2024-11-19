
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const LocationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.data = action.payload
    },
  },
});

export const { setLocation } = LocationSlice.actions

export default LocationSlice.reducer;