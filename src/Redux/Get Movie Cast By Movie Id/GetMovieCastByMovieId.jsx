import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncGetMovieCastByImdbId = createAsyncThunk("Movies/GetMovieCastsByImdbId" , async(movieId ,{rejectWithValue,dispatch}) => {
    try {
        const endPoint = `https://data-imdb1.p.rapidapi.com/movie/id/${movieId}/cast/`
        const AsyncMovieCasts_list = await axios.get(endPoint ,{
            headers: {
                'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
                'x-rapidapi-key': '423451439cmsh37b65307257e1d8p1f2fdajsn7ec4491007b3'
            },
        })
        const AsyncMovieCastsData = AsyncMovieCasts_list.data.results.roles.length > 20 ? AsyncMovieCasts_list.data.results.roles.slice(0,20) : AsyncMovieCasts_list.data.results.roles
        dispatch(getAsyncCastBio(AsyncMovieCastsData))
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const getAsyncCastBio = createAsyncThunk("Movies/GetMovieCastsByImdbId" , async(imdbId_list ,{rejectWithValue}) => {
    try {
        const AsyncActoreBio = await axios.all(imdbId_list.map(cast => {
            return  axios.get(`https://data-imdb1.p.rapidapi.com/actor/id/${cast.actor.imdb_id}/`,{
                headers : {
                    'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
                    'x-rapidapi-key': '423451439cmsh37b65307257e1d8p1f2fdajsn7ec4491007b3'
                }
            })
        }))
       return AsyncActoreBio.map(e => e.data.results)
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const MovieCasts = createSlice({
    name : "MovieCasts",
    initialState : {castData : [] , castLoading : false , castError : null},
    extraReducers : {
        [getAsyncGetMovieCastByImdbId.pending] : ( state , action ) => {
            return {castData : [] , castError : null , castLoading : true}
        },
        [getAsyncGetMovieCastByImdbId.fulfilled] : ( state , action ) => {
            return {castData : action.payload , castError : null , castLoading : false}
        },
        [getAsyncGetMovieCastByImdbId.rejected] : ( state , action ) => {
            return {castData : [] , castError : action.payload , castLoading : false}
        },
    },
})
export const MovieCastsReducer = MovieCasts.reducer;