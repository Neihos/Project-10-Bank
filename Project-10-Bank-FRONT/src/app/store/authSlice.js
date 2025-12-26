import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  firstName: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    logout(state) {
      state.token = null;
    },
    setFirstName(state, action) {
      state.firstName = action.payload;
    },
  },
});

export const { setToken, logout, setFirstName } = authSlice.actions;
export default authSlice.reducer;
