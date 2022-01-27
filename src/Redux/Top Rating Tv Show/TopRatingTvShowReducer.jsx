import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncTopRatingTvShow = createAsyncThunk("TvShow/TopRatingTvShow" , async(count ,{rejectWithValue,dispatch}) => {
    try {
        const endPoint = "https://data-imdb1.p.rapidapi.com/series/order/byRating/"
        const AsyncTopRatingTvShow_list = await axios.get(endPoint ,{
            params : {page_size: count},
            headers: {
                'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
                'x-rapidapi-key': '61398a6ee8msh0033ca9207b7556p1fdb09jsn1ea8d45f729a'
            },
        })
        return dispatch(getAsyncMovieDataByImdbId(AsyncTopRatingTvShow_list.data.results))
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const getAsyncMovieDataByImdbId = createAsyncThunk("TvShow/TopRatingTvShow" , async(dataList ,{rejectWithValue}) => {
    try {
        const Async_MovieData = await axios.all(dataList.map(movie => {
            return  axios.get(`https://data-imdb1.p.rapidapi.com/series/id/${movie.imdb_id}/`,{
                headers : {
                    'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
                    'x-rapidapi-key': '61398a6ee8msh0033ca9207b7556p1fdb09jsn1ea8d45f729a'
                }
            })
            
        }))
       return Async_MovieData.map(e => e.data.results)
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const TopRatingTvShow = createSlice({
    name : "TopRatingTvShow",
    initialState : {data : [] , loading : false , error : null},
    extraReducers : {
        [getAsyncTopRatingTvShow.pending] : ( state , action ) => {
            return {data : [] , error : null , loading : true}
        },
        [getAsyncTopRatingTvShow.fulfilled] : ( state , action ) => {
            return {data : action.payload.payload , error : null , loading : false}
        },
        [getAsyncTopRatingTvShow.rejected] : ( state , action ) => {
            return {data : [] , error : action.payload , loading : false}
        },
    },
})
export const TopRatingTvShowReducer = TopRatingTvShow.reducer;
