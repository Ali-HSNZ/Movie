import { configureStore } from "@reduxjs/toolkit";
import { AllMoviesByGenreReducer } from "./All Movies by Genres/AllMoviesByGenres";
import { AllSeriesByGenresReducer } from "./All Series By Genre/AllSeriesByGenre";
import { BestMoviesByAnimationReducer } from "./Best Animation Movies/BestAnimationMoviesReducer";
import { BestMoviesByComedyReducer } from "./Best Comedy Movies/BestComedyMoviesReducer";
import { BestMoviesByFamilyReducer } from "./Best Family Movies/BestFamilyMovies";
import { BestMoviesByHistoryReducer } from "./Best History Movies/BestHistoryMovies";
import { BestMoviesByWarReducer } from "./Best War Movies/BestWarMoviesReducer";
import { comingSoonMoviesReducer } from "./Coming Soon Movies/ComingSoonMovies";
import { GetActorAwardsReducer } from "./Get Actor Awards By Actor Id/GetActorAwardsById";
import { GetActorBioReducer } from "./Get Actor Bio/GetActorBio";
import { getActorMoviesReducer } from "./Get Actor Movies By Actor Id/GetActorMoviesByActorId";
import { getActorSeriesReducer } from "./Get Actor Series By Actor Id/GetActorSeriesByActorId";
import { MovieKeywordsWithMovieIdReducer } from "./Get Keywords By Movie Id/GetKeywordsByMovieId";
import { MovieCastsReducer } from "./Get Movie Cast By Movie Id/GetMovieCastByMovieId";
import { MovieDataWithImdbIdReducer } from "./Get Movie Data With imdb Id/GetMovieDataWithImdbId";
import { MovieMoreLikeThisReducer } from "./Get Movie More Like This By Movie Id/GetMovieMoreLikeThis";
import { MovieNewsWithImdbIdReducer } from "./Get Movie News By Imdb Id/GetMovieNewsByImdbId";
import { MovieSynopsesWithImdbIdReducer } from "./Get Movie Synopses With Imdb Id/GetMovieSynopsesWithImdbId";
import { BestMoviesByGenreReducer } from "./Get Movies By Genre/GetMovieByGenre";
import { getMoviesByKeywordReducer } from "./Get Movies By Keyword/GetMoviesByKeyword";
import { getSeriesByKeywordReducer } from "./Get Series By Keyword/GetSeriesByKeyword";
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
        MovieNewsWithImdbId : MovieNewsWithImdbIdReducer,
        MovieCasts : MovieCastsReducer,
        MovieKeywordsWithMovieId : MovieKeywordsWithMovieIdReducer,
        MovieMoreLikeThis : MovieMoreLikeThisReducer,
        BestMoviesByGenre : BestMoviesByGenreReducer,
        GetActorBio : GetActorBioReducer,
        getActorMovies : getActorMoviesReducer,
        GetActorAwards : GetActorAwardsReducer,
        getActorSeries : getActorSeriesReducer,
        getMoviesByKeyword : getMoviesByKeywordReducer,
        getSeriesByKeyword : getSeriesByKeywordReducer
    }
})
export default store
