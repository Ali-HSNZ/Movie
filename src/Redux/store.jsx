import { configureStore } from "@reduxjs/toolkit";
import { BestMoviesByAnimationReducer } from "./Best Animation Movies/BestAnimationMoviesReducer";
import { BestMoviesByComedyReducer } from "./Best Comedy Movies/BestComedyMoviesReducer";
import {headSliderReducer} from "./Movies Order By Rating/MoviesOrderByRating";
import { PopularMoviesReducer } from "./Popular Movies/PopularMoviesReducer";
import { PopularSeriesTvsReducer } from "./Popular Series Tvs/PopularSeriesTvsReducer";
import { TopRatingMoviesReducer } from "./Top Rating Movies/TopRatingMoviesReducer";


const store = configureStore({
    reducer : {
        headSlider : headSliderReducer,
        popularSeriesTvs : PopularSeriesTvsReducer,
        PopularMovies : PopularMoviesReducer,
        BestMoviesByComedy : BestMoviesByComedyReducer,
        BestMoviesByAnimation : BestMoviesByAnimationReducer,
        TopRatingMovies : TopRatingMoviesReducer,
    }
})
export default store
