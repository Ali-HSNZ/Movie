import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { imdb8_apiKey } from "../../Services/API_KEY";

export const  getAsyncSynopsesDataWithImdbId = createAsyncThunk("Movies/GetMovieSynopsesWithImdbId" , async(movieId ,{rejectWithValue}) => {    
    try {
        const movieData = await axios.get(`https://imdb8.p.rapidapi.com/title/get-synopses`,{
            params: {tconst: `${movieId}`},
            headers : {
                'x-rapidapi-host': 'imdb8.p.rapidapi.com',
                'x-rapidapi-key': imdb8_apiKey
            }
        })
        return movieData.data[0]

    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const MovieSynopsesWithImdbId = createSlice({
    name : "MovieSynopsesWithImdbId",
    initialState : {synopsesData : [] , synopsesLoading : false , synopsesError : null},
    extraReducers : {
        [getAsyncSynopsesDataWithImdbId.pending] : ( state , action ) => {
            return {synopsesData : [] , synopsesError : null , synopsesLoading : true} 
        },
        [getAsyncSynopsesDataWithImdbId.fulfilled] : ( state , action ) => {
            return {synopsesData : action.payload , synopsesError : null , synopsesLoading : false}
        },
        [getAsyncSynopsesDataWithImdbId.rejected] : ( state , action ) => {
            return {synopsesData : [] , synopsesError : action.payload , synopsesLoading : false}
        },
    },
})
export const MovieSynopsesWithImdbIdReducer = MovieSynopsesWithImdbId.reducer;
