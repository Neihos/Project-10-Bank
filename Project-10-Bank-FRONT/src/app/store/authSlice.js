import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  firstName: localStorage.getItem("firstName"),
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
      state.firstName = null;
      localStorage.removeItem("token");
      localStorage.removeItem("firstName");
    },
    setFirstName(state, action) {
      state.firstName = action.payload;
    },
  },
});

export const { setToken, logout, setFirstName } = authSlice.actions;
export default authSlice.reducer;
