import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { imdb8_apiKey } from './../../Services/API_KEY';

export const getAsyncBestMoviesByGenre = createAsyncThunk("Movies/BestGenreMoviesAsync" , async(data ,{rejectWithValue,dispatch}) => {
    
    const {genre , count} = data;

    try {
        const endPoint = `https://data-imdb1.p.rapidapi.com/movie/byYear/2020/byGen/${genre}/`
        const AsyncBestComedyMovies_list = await axios.get(endPoint ,{
            params: {page_size: count},
            headers: {
                'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
                'x-rapidapi-key': '0760fbecffmsh1446d59419ae965p1f92e0jsn73eef9fcda88'
            },
        })
        dispatch(getAsyncMoviesByImdbId(AsyncBestComedyMovies_list.data.results))
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const getAsyncMoviesByImdbId = createAsyncThunk("Movies/BestGenreMoviesAsync" , async(imdbId_list ,{rejectWithValue}) => {
    try {
        const AsyncPopularMovies_MovieData = await axios.all(imdbId_list.map(movie => {
            const movieId = movie.imdb_id.replace("/title/",'').replace('/','');
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