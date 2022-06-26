import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { imdb8_apiKey } from './../../Services/API_KEY';

export const getAsyncBestMoviesByGenre = createAsyncThunk("Movies/BestGenreMoviesAsync" , async(data ,{rejectWithValue,dispatch}) => {
    
    const {genre , count} = data;

    try {
        const endPoint = `https://online-movie-database.p.rapidapi.com/title/v2/get-popular-movies-by-genre`
        const AsyncBestGenreMovies_list = await axios.get(endPoint ,{
            params: {genre: genre.toLowerCase(), limit: count},
            headers: {
                'X-RapidAPI-Key': `${imdb8_apiKey}`,
                'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
              }
        })
        dispatch(getAsyncMoviesByImdbId(AsyncBestGenreMovies_list.data))
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const getAsyncMoviesByImdbId = createAsyncThunk("Movies/BestGenreMoviesAsync" , async(imdbId_list ,{rejectWithValue}) => {
    try {
        const AsyncPopularMovies_MovieData = await axios.all(imdbId_list.map(movie => {
            const movieId = movie.replace("/title/",'').replace('/','');
            // console.log("movieId : ",movieId)

            return axios.get(`https://data-imdb1.p.rapidapi.com/movie/id/${movieId}/`,{
                headers : {
                    'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
                    'x-rapidapi-key': '61398a6ee8msh0033ca9207b7556p1fdb09jsn1ea8d45f729a'
                }
            })
        }))
       return AsyncPopularMovies_MovieData.map(e => e.data.results)
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const BestGenreMovies = createSlice({
    name : "BestGenreMovies",
    initialState : {data : [] , loading : false , error : null},
    extraReducers : {
        [getAsyncBestMoviesByGenre.pending] : ( state , action ) => {
            return {data : [] , error : null , loading : true}
        },
        [getAsyncBestMoviesByGenre.fulfilled] : ( state , action ) => {
            return {data : action.payload , error : null , loading : false}
        },
        [getAsyncBestMoviesByGenre.rejected] : ( state , action ) => {

            return {data : [] , error : action.payload , loading : false}
        },
    },
})
export const BestMoviesByGenreReducer = BestGenreMovies.reducer;