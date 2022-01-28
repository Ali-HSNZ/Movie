import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncAllMoviesByGenre = createAsyncThunk("Movies/AllMoviesByGenre" , async(count ,{rejectWithValue,dispatch}) => {
    try {
        const endPoint = "https://data-imdb1.p.rapidapi.com/genres/"
        const AsyncAllGenres_list = await axios.get(endPoint ,{
            headers: {
                'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
                'x-rapidapi-key': 'ef9d3c3f13msh2474c99e5fa56d7p1fa5c1jsn3babf0ae016f'
            },
        })
        dispatch(getAsyncAllMovies(AsyncAllGenres_list.data.results.slice(0,count)))
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const getAsyncAllMovies = createAsyncThunk("Movies/AllMoviesByGenre" , async(dataList ,{rejectWithValue}) => {
    
    const genreList = dataList.map(e => e.genre)
    try {
        const AsyncGetMoviesByGenres = await axios.all(genreList.map(genre => {
            return  axios.get(`https://data-imdb1.p.rapidapi.com/movie/byGen/${genre}/`,{
                headers : {
                    'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
                    'x-rapidapi-key': 'ef9d3c3f13msh2474c99e5fa56d7p1fa5c1jsn3babf0ae016f'
                }
            })
        }))
        return AsyncGetMoviesByGenres.map(e => e.data)
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const AllMoviesByGenre = createSlice({
    name : "AllMoviesByGenres",
    initialState : {data : [] , loading : false , error : null},
    extraReducers : {
        [getAsyncAllMoviesByGenre.pending] : ( state , action ) => {
            return {data : [] , error : null , loading : true}
        },
        [getAsyncAllMoviesByGenre.fulfilled] : ( state , action ) => {
            return {data : action.payload , error : null , loading : false}
        },
        [getAsyncAllMoviesByGenre.rejected] : ( state , action ) => {
            return {data : [] , error : action.payload , loading : false}
        },
    },
})
export const AllMoviesByGenreReducer = AllMoviesByGenre.reducer;
