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
      localStorage.setItem("user", JSON.stringify(state.userLogin));
      localStorage.setItem("token", action.payload.Authorization);
      state.login = true;
    },
    setLogOut: (state, action) => {
      state.userLogin = {}
      localStorage.removeItem("user"),
      localStorage.removeItem("token")
      state.login = false;
    },
    getLogin: (state, action) => {
      state.userLogin  = localStorage.getItem("token");
      if(state.userLogin)
        state.login = true; 
    }
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

export const { setLogin, setLogOut, getLogin } = authSlice.actions;

export default authSlice.reducer;
