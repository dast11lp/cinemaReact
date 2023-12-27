import { createSlice, current } from "@reduxjs/toolkit";
import { functionFetch } from "../../app/api";

const initialState = {
  function_: {},
  desiredSeats: 0,
  availableSeats: 0,
};

const functionSlice = createSlice({
  name: "function_",
  initialState,
  reducers: {
    setFunction_: (state, action) => {
      state.function_ = action.payload;
    },
    addSeat: (state, action) => {
      if (state.availableSeats > state.desiredSeats) state.desiredSeats += 1;
    },
    subtractSeat: (state, action) => {
      if (state.desiredSeats > 0) state.desiredSeats -= 1;
    },
    getAvailableSeats: (state, action) => {
      state.availableSeats = state.function_.functionChairs.filter(
        (el) => el.available == true
      ).length;
      console.log(state.availableSeats);
    },
    clearDesiredSeats: (state, action) => {
      state.desiredSeats = 0;
    },
  },
});

export const functionFetchMiddleware = (id) => async (dispatch) => {
  try {
    const data = await functionFetch(id);
    dispatch(setFunction_(data));
    dispatch(getAvailableSeats());
  } catch (error) {
    throw error;
  }
};

export const {
  setFunction_,
  addSeat,
  subtractSeat,
  getAvailableSeats,
  clearDesiredSeats,
} = functionSlice.actions;

export default functionSlice.reducer;
