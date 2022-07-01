
import { createAsyncThunk ,createSlice } from '@reduxjs/toolkit';
import  axios  from 'axios';


export const getAsyncActorMoviesAction = createAsyncThunk("Actor/ActorMovies" , async(actorId ,{rejectWithValue,dispatch}) => {
    try {
        const endPoint = `https://data-imdb1.p.rapidapi.com/actor/id/${actorId}/movies_knownFor/`;
        const response = await axios.get(endPoint ,{
            params: {page_size: '50'},
            headers: {
                'X-RapidAPI-Key': '31948c12f0msh55620a113fddd97p1bd855jsn995cac5eba5e',
                'X-RapidAPI-Host': 'data-imdb1.p.rapidapi.com'
            }
        })
       const imdbId_list = response.data.results.map(e => e[0].imdb_id)
        dispatch(getAsyncMovieData(imdbId_list))
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const getAsyncMovieData = createAsyncThunk("Actor/ActorMovies" , async(movieList ,{rejectWithValue}) => {
    try {
        const response = await axios.all(movieList.map(movie => {
            return  axios.get(`https://data-imdb1.p.rapidapi.com/movie/id/${movie}/`,{
                headers : {
                    'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
                    'x-rapidapi-key': 'bc4dd2d022msh82cb1b347411b36p1fbf31jsn0ebb7514b3f9'
                }
            })
        }))
        const data = response.map(e => e.data.results)
        const availableMovie = data && data.filter(movie => {
            if(Object.keys(movie).length !== 0){
                return true
            }
            return false
        })
        return availableMovie
    } catch (error) {
        return rejectWithValue(error.message)
    }
})


const GetActorMovies = createSlice({
    name : "getActorMoviesByImbIds",
    initialState : {data : [] , loading : false , error : null},
    extraReducers : {
        [getAsyncActorMoviesAction.pending] : ( state , action ) => {
            return {data : [] , error : null , loading : true}
        },
        [getAsyncActorMoviesAction.fulfilled] : ( state , action ) => {
            // console.log("action ===> ",action)
            return {data : action.payload , error : null , loading : false}
        },
        [getAsyncActorMoviesAction.rejected] : ( state , action ) => {
            return {data : [] , error : action.payload , loading : false}
        },
    },
})


export const getActorMoviesReducer = GetActorMovies.reducer