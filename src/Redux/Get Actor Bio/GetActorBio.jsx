import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { imdb8_apiKey } from './../../Services/API_KEY';

export const getAsyncActorBio = createAsyncThunk("Actor/GetActorBio" , async(actorId ,{rejectWithValue,dispatch}) => {
    try {
        const endPoint = "https://online-movie-database.p.rapidapi.com/actors/get-bio"
        const getAsyncactorBio = await axios.get(endPoint ,{
            params: {nconst: actorId},
            headers: {
              'X-RapidAPI-Key': imdb8_apiKey,
              'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
            }
        })
        return  getAsyncactorBio.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const getActorBio = createSlice({
    name : "GetActorBio",
    initialState : {data : [] , loading : false , error : null},
    extraReducers : {
        [getAsyncActorBio.pending] : ( state , action ) => {
            return {data : [] , error : null , loading : true}
        },
        [getAsyncActorBio.fulfilled] : ( state , action ) => {
            return {data : action.payload , error : null , loading : false}
        },
        [getAsyncActorBio.rejected] : ( state , action ) => {
            return {data : [] , error : action.payload , loading : false}
        },
    },
})
export const GetActorBioReducer = getActorBio.reducer;
