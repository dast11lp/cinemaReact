import { createSlice } from "@reduxjs/toolkit";
import { LitingMoviesFetch } from "../../app/api";

const initialState = {
  listingMovies: [],
};

const ListingMoviesSlice = createSlice({
  name: "listingMovies",
  initialState,
  reducers: {
    getMovies: (state, action) => {
        state.listingMovies = action.payload
    },
  },
});



export const getMoviesMiddleware = () => async (dispatch) => {
    const data = await LitingMoviesFetch();
    dispatch(getMovies(data));
}

export const {getMovies} = ListingMoviesSlice.actions;

export default ListingMoviesSlice.reducer;


