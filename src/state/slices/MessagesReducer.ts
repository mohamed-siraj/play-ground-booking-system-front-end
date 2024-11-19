
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const MessagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setMessages: (state, action) => {
      state.data = action.payload
    },
  },
});

export const { setMessages } = MessagesSlice.actions

export default MessagesSlice.reducer;