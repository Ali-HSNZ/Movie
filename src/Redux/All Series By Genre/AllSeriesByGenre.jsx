import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncAllMoviesByGenres = createAsyncThunk("Series/AllSeriesByGenre" , async(count ,{rejectWithValue,dispatch}) => {
    try {
        const endPoint = "https://data-imdb1.p.rapidapi.com/genres/"
        const AsyncAllGenres_list = await axios.get(endPoint ,{
            headers: {
                'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
                'x-rapidapi-key': 'ef9d3c3f13msh2474c99e5fa56d7p1fa5c1jsn3babf0ae016f'
            },
        })
        dispatch(getAsyncAllSeriesByGenres(AsyncAllGenres_list.data.results.slice(0,count)))
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const getAsyncAllSeriesByGenres = createAsyncThunk("Series/AllSeriesByGenre" , async(dataList ,{rejectWithValue}) => {
    
    const genreList = dataList.map(e => e.genre)

    try {
        const AsyncGetSeriesByGenres = await axios.all(genreList.map(genre => {
            return  axios.get(`https://data-imdb1.p.rapidapi.com/series/byGen/${genre}/`,{
                headers : {
                    'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
                    'x-rapidapi-key': 'ef9d3c3f13msh2474c99e5fa56d7p1fa5c1jsn3babf0ae016f'
                }
            })
        }))

        return AsyncGetSeriesByGenres.map(e => e.data)
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const AllSeriesByGenres = createSlice({
    name : "AllGenres",
    initialState : {data : [] , loading : false , error : null},
    extraReducers : {
        [getAsyncAllMoviesByGenres.pending] : () => {
            return {data : [] , error : null , loading : true}
        },
        [getAsyncAllMoviesByGenres.fulfilled] : ( state , action ) => {
            return {data : action.payload , error : null , loading : false}
        },
        [getAsyncAllMoviesByGenres.rejected] : ( state , action ) => {
            return {data : [] , error : action.payload , loading : false}
        },
    },
})
export const AllSeriesByGenresReducer = AllSeriesByGenres.reducer;
