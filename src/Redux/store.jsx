import { configureStore } from "@reduxjs/toolkit";
import {headSliderReducer} from "./Movies Order By Rating/MoviesOrderByRating";
import { PopularMoviesReducer } from "./Popular Movies/PopularMoviesReducer";
import { PopularSeriesTvsReducer } from "./Popular Series Tvs/PopularSeriesTvsReducer";


const store = configureStore({
    reducer : {
        headSlider : headSliderReducer,
        popularSeriesTvs : PopularSeriesTvsReducer,
        PopularMovies : PopularMoviesReducer
    }
})
export default store
