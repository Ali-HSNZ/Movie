import { configureStore } from "@reduxjs/toolkit";
import { AllGenresReducer } from "./All Movies by Genres/AllMoviesByGenres";
import { AllSeriesByGenresReducer } from "./All Series By Genre/AllSeriesByGenre";
import { BestMoviesByAnimationReducer } from "./Best Animation Movies/BestAnimationMoviesReducer";
import { BestMoviesByComedyReducer } from "./Best Comedy Movies/BestComedyMoviesReducer";
import {headSliderReducer} from "./Movies Order By Rating/MoviesOrderByRating";
import { PopularMoviesReducer } from "./Popular Movies/PopularMoviesReducer";
import { PopularSeriesTvsReducer } from "./Popular Series Tvs/PopularSeriesTvsReducer";
import { TopRatingMoviesReducer } from "./Top Rating Movies/TopRatingMoviesReducer";
import { TopRatingTvShowReducer } from "./Top Rating Tv Show/TopRatingTvShowReducer";


const store = configureStore({
    reducer : {
        headSlider : headSliderReducer,
        popularSeriesTvs : PopularSeriesTvsReducer,
        PopularMovies : PopularMoviesReducer,
        BestMoviesByComedy : BestMoviesByComedyReducer,
        BestMoviesByAnimation : BestMoviesByAnimationReducer,
        TopRatingMovies : TopRatingMoviesReducer,
        TopRatingTvShow : TopRatingTvShowReducer,
        AllGenres : AllGenresReducer,
        AllSeriesByGenres : AllSeriesByGenresReducer,
    }
})
export default store
