import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { imdb8_apiKey } from './../../Services/API_KEY';

export const getAsyncActorAwards = createAsyncThunk("Actor/getActorAwards" , async(data ,{rejectWithValue,dispatch}) => {
    
    const {actorId , count} = data
    try {
        const endPoint = `https://online-movie-database.p.rapidapi.com/actors/get-awards`
        const getAsyncActorAwards = await axios.get(endPoint ,{
            params: {nconst: actorId},
            headers: {
                'X-RapidAPI-Key': imdb8_apiKey,
                'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
            }
        })
        return  getAsyncActorAwards.data.resource.awards.length > count ? getAsyncActorAwards.data.resource.awards.slice(0,count) : getAsyncActorAwards.data.resource.awards
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const getActorAwards = createSlice({
    name : "getActorAwards",
    initialState : {data : [] , loading : false , error : null},
    extraReducers : {
        [getAsyncActorAwards.pending] : ( state , action ) => {
            return {data : [] , error : null , loading : true}
        },
        [getAsyncActorAwards.fulfilled] : ( state , action ) => {
            return {data : action.payload , error : null , loading : false}
        },
        [getAsyncActorAwards.rejected] : ( state , action ) => {
            return {data : [] , error : action.payload , loading : false}
        },
    },
})
export const GetActorAwardsReducer = getActorAwards.reducer;
