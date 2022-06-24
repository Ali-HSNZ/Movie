import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const  getAsyncMovieKeywordsWithMovieId = createAsyncThunk("Movies/getAsyncMovieKeywordsWithMovieId" , async(data ,{rejectWithValue}) => {    
    
    const {page , query} = data

    try {
        if(page === 'movie'){
            const movieKeywords = await axios.get(`https://data-imdb1.p.rapidapi.com/movie/id/${query}/keywords/`,{
                headers : {
                    'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
                    'x-rapidapi-key': '396322dc0fmsh453a908c695847cp158f3cjsn36782745f6c3'
                }
            })
            return movieKeywords.data.results
        }
        else if(page === 'serial'){
            const movieKeywords = await axios.get(`https://data-imdb1.p.rapidapi.com/series/id/${query}/keywords/`,{
                headers : {
                    'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
                    'x-rapidapi-key': '396322dc0fmsh453a908c695847cp158f3cjsn36782745f6c3'
                }
            })
            return movieKeywords.data.results
        }
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const MovieKeywordsWithMovieId = createSlice({
    name : "MovieKeywordsWithMovieId",
    initialState : {data : [] , loading : false , error : null},
    extraReducers : {
        [getAsyncMovieKeywordsWithMovieId.pending] : ( state , action ) => {
            return {data : [] , error : null , loading : true}
        },
        [getAsyncMovieKeywordsWithMovieId.fulfilled] : ( state , action ) => {
            return {data : action.payload , error : null , loading : false}
        },
        [getAsyncMovieKeywordsWithMovieId.rejected] : ( state , action ) => {
            return {data : [] , error : action.payload , loading : false}
        },
    },
})
export const MovieKeywordsWithMovieIdReducer = MovieKeywordsWithMovieId.reducer;
