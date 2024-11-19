
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const BookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setBooking: (state, action) => {
      state.data = action.payload
    },
  },
});

export const { setBooking } = BookingSlice.actions

export default BookingSlice.reducer;