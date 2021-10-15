import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoggedIn: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, actions) => {
      state.isLoggedIn = true;
      state.user = actions.payload;
    },
    userIsNotLoggedIn: (state) => {
      state.isLoggedIn = false;
    },
    userLoggedOut: (state) => {
      state.user = {};
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, userIsNotLoggedIn, userLoggedOut } = userSlice.actions;
export default userSlice.reducer;
