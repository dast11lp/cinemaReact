import { configureStore } from "@reduxjs/toolkit";
import auth from '../features/Login/authSlice';
import listMovies from '../features/ListingMovies/ListingMoviesSlice'
import listFunc from '../features/FunctionsPerMovie/FuntionsPerMovieSlice'

export const store = configureStore({
    reducer: {
        auth,
        listMovies,
        listFunc,
    }
})