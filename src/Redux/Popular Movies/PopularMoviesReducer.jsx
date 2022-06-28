import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncPopularMovies = createAsyncThunk("Movies/PopularMoviesAsync" , async(data ,{rejectWithValue,dispatch}) => {
    const {count , type} = data
    try {
        const endPoint = `https://data-imdb1.p.rapidapi.com/${type}/order/byPopularity/`
        const AsyncPopularMovies_list = await axios.get(endPoint ,{
            params : {page_size: count},
            headers: {
                'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
                'x-rapidapi-key': '61398a6ee8msh0033ca9207b7556p1fdb09jsn1ea8d45f729a'
            },
        })
        dispatch(getAsyncPopularMoviesByImdbId({dataList : AsyncPopularMovies_list.data.results , type}))
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const getAsyncPopularMoviesByImdbId = createAsyncThunk("Movies/PopularMoviesAsync" , async(data ,{rejectWithValue}) => {
    const {dataList , type} = data

    try {
        const AsyncPopularMovies_MovieData = await axios.all(dataList.map(movie => {
            return  axios.get(`https://data-imdb1.p.rapidapi.com/${type}/id/${movie.imdb_id}/`,{
                headers : {
                    'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
                    'x-rapidapi-key': '61398a6ee8msh0033ca9207b7556p1fdb09jsn1ea8d45f729a'
                }
            })
            
        }))
       return AsyncPopularMovies_MovieData.map(e => e.data.results)
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const PopularMovies = createSlice({
    name : "PopularMovies",
    initialState : {data : [] , loading : false , error : null},
    extraReducers : {
        [getAsyncPopularMovies.pending] : ( state , action ) => {
            return {data : [] , error : null , loading : true}
        },
        [getAsyncPopularMovies.fulfilled] : ( state , action ) => {
            return {data : action.payload , error : null , loading : false}
        },
        [getAsyncPopularMovies.rejected] : ( state , action ) => {
            return {data : [] , error : action.payload , loading : false}
        },
    },
})
export const PopularMoviesReducer = PopularMovies.reducer;
