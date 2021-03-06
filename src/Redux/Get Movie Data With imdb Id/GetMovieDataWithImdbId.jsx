import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const  getAsyncMovieDataWithImdbId = createAsyncThunk("Movies/GetMovieDataWithImdbId" , async(data ,{rejectWithValue}) => {    
    const {page , query} = data
    try {
        if(page === "movie" ){
            const response = await axios.get(`https://data-imdb1.p.rapidapi.com/movie/id/${query}/`,{
                headers : {
                    'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
                    'x-rapidapi-key': 'bc4dd2d022msh82cb1b347411b36p1fbf31jsn0ebb7514b3f9'
                }
            })
            return response.data.results
        }
        if(page === 'serial'){
            const response = await axios.get(`https://data-imdb1.p.rapidapi.com/series/id/${query}/`,{
                headers : {
                    'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
                    'x-rapidapi-key': 'bc4dd2d022msh82cb1b347411b36p1fbf31jsn0ebb7514b3f9'
                }
            })
            return response.data.results
        }
        
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const MovieDataWithImdbId = createSlice({
    name : "MovieDataWithImdbId",
    initialState : {data : [] , loading : false , error : null},
    extraReducers : {
        [getAsyncMovieDataWithImdbId.pending] : ( state , action ) => {
            return {data : [] , error : null , loading : true}
        },
        [getAsyncMovieDataWithImdbId.fulfilled] : ( state , action ) => {
            return {data : action.payload , error : null , loading : false}
        },
        [getAsyncMovieDataWithImdbId.rejected] : ( state , action ) => {
            return {data : [] , error : action.payload , loading : false}
        },
    },
})
export const MovieDataWithImdbIdReducer = MovieDataWithImdbId.reducer;
