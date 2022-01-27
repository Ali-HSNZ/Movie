import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncRatingMovies = createAsyncThunk("Rating/TopRatingMovies",async(count,{rejectWithValue}) => {
    try {
        const endPoint = "https://data-imdb1.p.rapidapi.com/movie/order/byRating/"
        const TopRating = await axios.get(endPoint ,{
            params : {
                page_size: count
            }, 
            headers: {
                'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
                'x-rapidapi-key': '61398a6ee8msh0033ca9207b7556p1fdb09jsn1ea8d45f729a'
            },
        })
        
        // Sort Movie By rating
        const sortData = TopRating && TopRating.data.results.sort((a, b) =>  b.rating - a.rating)
        return sortData
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const TopRatingMovies = createSlice({
    name : "topRatingMovies",
    initialState : {data : [] , loading : false , error : null},
    extraReducers : {
        [getAsyncRatingMovies.pending] : (state , action)=>{
            return {data : [] , loading : true , error : null}
        },
        [getAsyncRatingMovies.fulfilled] : (state , action)=>{
            return {data : action.payload , loading : false , error : null}
        },
        [getAsyncRatingMovies.rejected] : (state , action)=>{
            return {data : [] , loading : false , error : action.payload}
        },
    }
})

export const TopRatingMoviesReducer = TopRatingMovies.reducer;