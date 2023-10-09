import { createSlice } from "@reduxjs/toolkit";
import { loginFetch } from "../../app/api";

const initialState = {
  userLogin: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.userLogin = action.payload;
      localStorage.setItem("token", state.userLogin.Authorization)
    },
  },
});

export const login =(user, navigate) => async (dispatch) => {
    const data = await loginFetch(user);
    dispatch(setLogin(data));
    // mover a otra parte
    const token = localStorage.getItem("token")
    if(token) {
      navigate("/")
    }
};

export const { setLogin } = authSlice.actions;

export default authSlice.reducer;
