import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncMoviesByKeyword = createAsyncThunk("keyword/getMovies" , async(data ,{rejectWithValue,dispatch}) => {
    const {keyword , count} = data
    try {
        const endPoint = `https://data-imdb1.p.rapidapi.com/movie/byKeywords/${keyword}/`
        const getMoviesByKeyword = await axios.get(endPoint ,{
            params: {page_size: count},
            headers: {
                'X-RapidAPI-Key': '31948c12f0msh55620a113fddd97p1bd855jsn995cac5eba5e',
                'X-RapidAPI-Host': 'data-imdb1.p.rapidapi.com'
              }
        })
        dispatch(getAsyncMoviesByImdbId(getMoviesByKeyword.data.results))
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const getAsyncMoviesByImdbId = createAsyncThunk("keyword/getMovies" , async(imdbId_list ,{rejectWithValue}) => {
    try {
        const movieData = await axios.all(imdbId_list.map(movie => {
            const movieId = movie.imdb_id.replace("/title/",'').replace('/','');
            // console.log("movieId : ",movieId)

            return axios.get(`https://data-imdb1.p.rapidapi.com/movie/id/${movieId}/`,{
                headers : {
                    'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
                    'x-rapidapi-key': '61398a6ee8msh0033ca9207b7556p1fdb09jsn1ea8d45f729a'
                }
            })
        }))
       return movieData.map(e => e.data.results)
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const getMoviesByKeyword = createSlice({
    name : "movieData",
    initialState : {data : [] , loading : false , error : null},
    extraReducers : {
        [getAsyncMoviesByKeyword.pending] : ( state , action ) => {
            return {data : [] , error : null , loading : true}
        },
        [getAsyncMoviesByKeyword.fulfilled] : ( state , action ) => {
            return {data : action.payload , error : null , loading : false}
        },
        [getAsyncMoviesByKeyword.rejected] : ( state , action ) => {

            return {data : [] , error : action.payload , loading : false}
        },
    },
})
export const getMoviesByKeywordReducer = getMoviesByKeyword.reducer;