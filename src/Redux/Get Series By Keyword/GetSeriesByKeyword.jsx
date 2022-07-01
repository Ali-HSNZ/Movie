import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncSeriesByKeyword = createAsyncThunk("keyword/getS" , async(data ,{rejectWithValue,dispatch}) => {
    const {keyword , count} = data
    try {
        const endPoint = `https://data-imdb1.p.rapidapi.com/series/byKeywords/${keyword}/`
        const getSeriesByKeyword = await axios.get(endPoint ,{
            params: {page_size: count},
            headers: {
                'X-RapidAPI-Key': '31948c12f0msh55620a113fddd97p1bd855jsn995cac5eba5e',
                'X-RapidAPI-Host': 'data-imdb1.p.rapidapi.com'
              }
        })
        console.log(getSeriesByKeyword.data.results);
        dispatch(getAsyncSeriesByImdbId(getSeriesByKeyword.data.results))
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const getAsyncSeriesByImdbId = createAsyncThunk("keyword/getS" , async(imdbId_list ,{rejectWithValue}) => {
    try {
        const seriesData = await axios.all(imdbId_list.map(Series => {
            const SeriesId = Series.imdb_id.replace("/title/",'').replace('/','');
            // console.log("SeriesId : ",SeriesId)

            return axios.get(`https://data-imdb1.p.rapidapi.com/series/id/${SeriesId}/`,{
                headers : {
                    'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
                    'x-rapidapi-key': '61398a6ee8msh0033ca9207b7556p1fdb09jsn1ea8d45f729a'
                }
            })
        }))
       return seriesData.map(e => e.data.results)
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const getSeriesByKeyword = createSlice({
    name : "SeriesData",
    initialState : {data : [] , loading : false , error : null},
    extraReducers : {
        [getAsyncSeriesByKeyword.pending] : ( state , action ) => {
            return {data : [] , error : null , loading : true}
        },
        [getAsyncSeriesByKeyword.fulfilled] : ( state , action ) => {
            return {data : action.payload , error : null , loading : false}
        },
        [getAsyncSeriesByKeyword.rejected] : ( state , action ) => {

            return {data : [] , error : action.payload , loading : false}
        },
    },
})
export const getSeriesByKeywordReducer = getSeriesByKeyword.reducer;