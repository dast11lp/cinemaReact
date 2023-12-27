import { configureStore } from "@reduxjs/toolkit";
import auth from '../features/Login/authSlice';
import listMovies from '../features/ListingMovies/ListingMoviesSlice'
import listFunc from '../features/FunctionsPerMovie/FuntionsPerMovieSlice'
import modal from '../features/Modal/modalSlice'
import function_ from '../features/Function_/funtionSlice'

export const store = configureStore({
    reducer: {
        auth,
        listMovies,
        listFunc,
        modal,
        function_,
    }
})