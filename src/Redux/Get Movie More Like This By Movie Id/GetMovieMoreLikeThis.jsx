import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { imdb8_apiKey } from "../../Services/API_KEY";

export const getAsyncMovieMoreLikeThis = createAsyncThunk("Movies/MoreLikeThis" , async(movieId ,{rejectWithValue,dispatch}) => {
    try {
        const endPoint = `https://imdb8.p.rapidapi.com/title/get-more-like-this`
        const AsyncMovieMoreLikeThis_list = await axios.get(endPoint ,{
            params: {tconst: movieId},
            headers: {
                'x-rapidapi-host': 'imdb8.p.rapidapi.com',
                'x-rapidapi-key': imdb8_apiKey
            },
        })
        const extractMovieId_list = AsyncMovieMoreLikeThis_list.data.map(e => e.replace("/title/",'').replace("/",''))
        dispatch(getAsyncMoviesByImdbId(extractMovieId_list))
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const getAsyncMoviesByImdbId = createAsyncThunk("Movies/MoreLikeThis" , async(imdbId_list ,{rejectWithValue}) => {
    try {
        const AsyncPopularMovies_MovieData = await axios.all(imdbId_list.map(movieId => {
            return  axios.get(`https://data-imdb1.p.rapidapi.com/movie/id/${movieId}/`,{
                headers : {
                    'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
                    'x-rapidapi-key': '61398a6ee8msh0033ca9207b7556p1fdb09jsn1ea8d45f729a'
                }
            })
        }))

        const availableMovies =  AsyncPopularMovies_MovieData.map(e => e.data.results).filter(e => e.length !==0)
       return availableMovies
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const MovieMoreLikeThis = createSlice({
    name : "MovieMoreLikeThis",
    initialState : {data : [] , loading : false , error : null},
    extraReducers : {
        [getAsyncMovieMoreLikeThis.pending] : ( state , action ) => {
            return {data : [] , error : null , loading : true}
        },
        [getAsyncMovieMoreLikeThis.fulfilled] : ( state , action ) => {
            return {data : action.payload , error : null , loading : false}
        },
        [getAsyncMovieMoreLikeThis.rejected] : ( state , action ) => {
            return {data : [] , error : action.payload , loading : false}
        },
    },
})
export const MovieMoreLikeThisReducer = MovieMoreLikeThis.reducer;