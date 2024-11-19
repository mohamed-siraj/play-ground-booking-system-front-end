
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const AdminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setAdmin: (state, action) => {
      state.data = action.payload
    },
  },
});

export const { setAdmin } = AdminSlice.actions

export default AdminSlice.reducer;