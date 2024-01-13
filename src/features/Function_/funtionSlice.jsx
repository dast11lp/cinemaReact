import { createSlice, current } from "@reduxjs/toolkit";
import { functionFetch, reserveFetch } from "../../app/api";

const initialState = {
  function_: {},
  desiredTickets: 0,
  availableTickets: 0,
  numSelectedSeats: 0,
  selectedSeats: [],
  reservationDetails: {
    functionChairs: [],
    idFunMov: undefined,
  },
  purchaseSummary: {}
};

const functionSlice = createSlice({
  name: "function_",
  initialState,
  reducers: {
    setFunction_: (state, action) => {
      state.function_ = action.payload;
      state.reservationDetails.idFunMov =
        action.payload.listFunctionMovie[0].id;
    },
    addSeat: (state, action) => {
      if (state.availableTickets > state.desiredTickets)
        state.desiredTickets += 1;
    },
    subtractSeat: (state, action) => {
      if (state.desiredTickets > 0) state.desiredTickets -= 1;
    },
    getAvailableTickets: (state, action) => {
      state.availableTickets = state.function_.functionChairs.filter(
        (el) => el.available == true
      ).length;
    },
    cleardesiredTickets: (state, action) => {
      state.desiredTickets = 0;
    },

    clearSlice: (state) => {
      state.function_ = {},
      state.availableTickets = 0,
      state.selectedSeats = [],
      state.reservationDetails = {
        functionChairs: [],
        idFunMov: undefined,
      };
    },

    setDesiredSeats: (state, action) => {
      state.numSelectedSeats = action.payload;
    },
    setIdSeats: (state, action) => {
      if (state.numSelectedSeats > 0) {
        state.numSelectedSeats -= 1;
        state.reservationDetails.functionChairs.push(action.payload);
        state.selectedSeats.push(action.payload);
      } else {
        console.log("te jodiste hermano");
      }
    },
    removeIdSeats: (state, action) => {
      if (state.numSelectedSeats >= 0) {
        state.numSelectedSeats += 1;
        state.reservationDetails.functionChairs = state.reservationDetails.functionChairs.filter((el) => el != action.payload);
        console.log("el que se debe borrar: ", action.payload);
        state.selectedSeats = state.selectedSeats.filter((el) => el != action.payload);
      } else {
      }
    },
    setPurchaseSummary: (state, action) => {
      state.purchaseSummary = action.payload;
    }
  },
});

export const functionFetchMiddleware = (id) => async (dispatch) => {
  try {
    const data = await functionFetch(id);
    dispatch(setFunction_(data));
    dispatch(getAvailableTickets());
  } catch (error) {
    throw error;
  }
};

export const reserveFetchMiddleware = (body) => async (dispatch) => {
  try {
    const data = await reserveFetch(body);
    dispatch(setPurchaseSummary(data));
    // console.log(data);
  } catch (error) {
    throw error;
  }
};

export const {
  setFunction_,
  addSeat,
  subtractSeat,
  getAvailableTickets,
  cleardesiredTickets,
  clearSlice,
  setDesiredSeats,
  setIdSeats,
  removeIdSeats,
  setFunctionMov,
  setPurchaseSummary,
} = functionSlice.actions;

export default functionSlice.reducer;
