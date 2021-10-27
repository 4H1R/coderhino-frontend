import { IUserBase } from "app/interfaces";
import { createSlice } from "@reduxjs/toolkit";

export interface IUserAuth extends IUserBase {}

type initialStateType = {
  user: IUserAuth;
  isLoggedIn: boolean | null;
};

const initialState: initialStateType = {
  user: {
    id: 0,
    email: "",
    username: "",
  },
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
      state.user = initialState.user;
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, userIsNotLoggedIn, userLoggedOut } = userSlice.actions;
export default userSlice.reducer;
