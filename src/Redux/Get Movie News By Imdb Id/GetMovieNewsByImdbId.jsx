import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { imdb8_apiKey } from "../../Services/API_KEY";

export const  getAsyncNewsDataWithImdbId = createAsyncThunk("Movies/GetMovieNewsWithImdbId" , async(movieId ,{rejectWithValue}) => {    
    try {
        const movieData = await axios.get(`https://online-movie-database.p.rapidapi.com/title/get-news`,{
            params: {tconst: `${movieId}` , limit: '50'},
            headers : {
                'x-rapidapi-host': 'online-movie-database.p.rapidapi.com',
                'x-rapidapi-key': imdb8_apiKey
            }
        })
        return movieData.data.items

    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const MovieNewsWithImdbId = createSlice({
    name : "MovieNewsWithImdbId",
    initialState : {newsData : [] , newsLoading : false , newsError : null},
    extraReducers : {
        [getAsyncNewsDataWithImdbId.pending] : ( state , action ) => {
            return {newsData : [] , newsError : null , newsLoading : true} 
        },
        [getAsyncNewsDataWithImdbId.fulfilled] : ( state , action ) => {
            return {newsData : action.payload , newsError : null , newsLoading : false}
        },
        [getAsyncNewsDataWithImdbId.rejected] : ( state , action ) => {
            return {newsData : [] , newsError : action.payload , newsLoading : false}
        },
    },
})
export const MovieNewsWithImdbIdReducer = MovieNewsWithImdbId.reducer;
