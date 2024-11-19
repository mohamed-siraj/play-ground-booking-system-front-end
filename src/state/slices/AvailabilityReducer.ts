
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const AvailabilitySlice = createSlice({
  name: "availability",
  initialState,
  reducers: {
    setAvailability: (state, action) => {
      state.data = action.payload
    },
  },
});

export const { setAvailability } = AvailabilitySlice.actions

export default AvailabilitySlice.reducer;