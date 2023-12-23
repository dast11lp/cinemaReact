import { createSlice } from "@reduxjs/toolkit";
import { listFuncMovieFetch } from "../../app/api";

const initialState = {
  movieFunction: {},
  functionPerDate: {},
};

const listFunctionsPerMovie = createSlice({
  name: "listFunctionsPerMovie",
  initialState,
  reducers: {
    getListFuncPerMovie: (state, action) => {
      state.movieFunction = action.payload;
      const map = new Map();

      state.movieFunction.functionMovie.forEach((el, i) => {
        if (!map.has(el.function.date)) {
          map.set(el.function.date, []);
          // map.set("id",i)
        }
        map.get(el.function.date).push(el);
      });

      state.functionPerDate = Object.fromEntries(map);
    },
  },
});

export const getFuncMovieMiddleware = (id) => async (dispatch) => {
  try {
    const data = await listFuncMovieFetch(id);
    dispatch(getListFuncPerMovie(data));
  } catch (error) {
    throw error
  }
};

export const { getListFuncPerMovie } = listFunctionsPerMovie.actions;

export default listFunctionsPerMovie.reducer;
