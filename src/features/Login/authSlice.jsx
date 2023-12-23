import { createSlice } from "@reduxjs/toolkit";
import { loginFetch } from "../../app/api";

const initialState = {
  userLogin: {},
  login: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.userLogin = action.payload;
      localStorage.setItem("token", state.userLogin.Authorization);
      state.login = true;
    },
  },
});

export const login = (user, navigate) => async (dispatch) => {
  try {
    const data = await loginFetch(user);
    dispatch(setLogin(data));
  } catch (error) {
    throw error;
  }

  // mover a otra parte
  const token = localStorage.getItem("token");
  if (token) {
    navigate("/");
  }
};

export const { setLogin } = authSlice.actions;

export default authSlice.reducer;
