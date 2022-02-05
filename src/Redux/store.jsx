import { configureStore } from "@reduxjs/toolkit";
import { AllMoviesByGenreReducer } from "./All Movies by Genres/AllMoviesByGenres";
import { AllSeriesByGenresReducer } from "./All Series By Genre/AllSeriesByGenre";
import { BestMoviesByAnimationReducer } from "./Best Animation Movies/BestAnimationMoviesReducer";
import { BestMoviesByComedyReducer } from "./Best Comedy Movies/BestComedyMoviesReducer";
import { BestMoviesByFamilyReducer } from "./Best Family Movies/BestFamilyMovies";
import { BestMoviesByHistoryReducer } from "./Best History Movies/BestHistoryMovies";
import { BestMoviesByWarReducer } from "./Best War Movies/BestWarMoviesReducer";
import { comingSoonMoviesReducer } from "./Coming Soon Movies/ComingSoonMovies";
import { MovieDataWithImdbIdReducer } from "./Get Movie Data With imdb Id/GetMovieDataWithImdbId";
import { MovieNewsWithImdbIdReducer } from "./Get Movie News By Imdb Id/GetMovieNewsByImdbId";
import { MovieSynopsesWithImdbIdReducer } from "./Get Movie Synopses With Imdb Id/GetMovieSynopsesWithImdbId";
import { PopularMoviesReducer } from "./Popular Movies/PopularMoviesReducer";
import { PopularSeriesTvsReducer } from "./Popular Series Tvs/PopularSeriesTvsReducer";
import { TopRatingMoviesReducer } from "./Top Rating Movies/TopRatingMoviesReducer";
import { TopRatingTvShowReducer } from "./Top Rating Tv Show/TopRatingTvShowReducer";


const store = configureStore({
    reducer : {
        comingSoonMovies : comingSoonMoviesReducer,
        popularSeriesTvs : PopularSeriesTvsReducer,
        PopularMovies : PopularMoviesReducer,
        BestMoviesByComedy : BestMoviesByComedyReducer,
        BestMoviesByAnimation : BestMoviesByAnimationReducer,
        TopRatingMovies : TopRatingMoviesReducer,
        TopRatingTvShow : TopRatingTvShowReducer,
        AllMoviesByGenre : AllMoviesByGenreReducer,
        AllSeriesByGenres : AllSeriesByGenresReducer,
        BestMoviesByWar : BestMoviesByWarReducer,
        BestMoviesByFamily : BestMoviesByFamilyReducer,
        BestMoviesByHistory : BestMoviesByHistoryReducer,
        MovieDataWithImdbId : MovieDataWithImdbIdReducer,
        MovieSynopsesWithImdbId : MovieSynopsesWithImdbIdReducer,
        MovieNewsWithImdbId : MovieNewsWithImdbIdReducer
    }
})
export default store
