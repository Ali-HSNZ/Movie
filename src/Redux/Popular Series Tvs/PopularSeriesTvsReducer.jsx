import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncPopularSeries = createAsyncThunk("seriesTvs/PopularSeriesTvsAsync" , async(count ,{rejectWithValue,dispatch}) => {
    try {
        const endPoint = "https://data-imdb1.p.rapidapi.com/series/order/byPopularity/"
        const AsyncPopularSeries_list = await axios.get(endPoint ,{
            params : {
                page_size: count
            }, 
            headers: {
                'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
                'x-rapidapi-key': '61398a6ee8msh0033ca9207b7556p1fdb09jsn1ea8d45f729a'
            },
        })
        dispatch(getAsyncPopularSeriesByImdbId(AsyncPopularSeries_list.data.results))
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const getAsyncPopularSeriesByImdbId = createAsyncThunk("seriesTvs/PopularSeriesTvsAsync" , async(dataList ,{rejectWithValue,dispatch}) => {
    try {
        const AsyncPopularSeries_MovieData = await axios.all(dataList.map(movie => {
            return  axios.get(`https://data-imdb1.p.rapidapi.com/series/id/${movie.imdb_id}/`,{
                headers : {
                    'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
                    'x-rapidapi-key': '61398a6ee8msh0033ca9207b7556p1fdb09jsn1ea8d45f729a'
                }
            })
        }))
       return AsyncPopularSeries_MovieData.map(e => e.data.results)
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const PopularSeriesTvs = createSlice({
    name : "PopularSeriesTvs",
    initialState : {data : [] , loading : false , error : null},
    extraReducers : {
        [getAsyncPopularSeries.pending] : () => {
            return {data : [] , error : null , loading : true}
        },
        [getAsyncPopularSeries.fulfilled] : ( state , action ) => {
            return {data : action.payload , error : null , loading : false}
        },
        [getAsyncPopularSeries.rejected] : ( state , action ) => {
            return {data : [] , error : action.payload , loading : false}
        },
    },
})
export const PopularSeriesTvsReducer = PopularSeriesTvs.reducer;
