import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { imdb8_apiKey } from "../../Services/API_KEY";

// get Coming Soon Movies
export const getAsyncComingSoonMovies = createAsyncThunk("Movies/CommingSoonMovies",async(count,{rejectWithValue ,dispatch}) => {
    try {


            const endPoint = "https://imdb8.p.rapidapi.com/title/get-coming-soon-movies"
            const comingSoonMoviesList = await axios.get(endPoint ,{
                params : { today: '2022-02-09'}, 
                headers: {
                    'x-rapidapi-host': 'imdb8.p.rapidapi.com',
                    'x-rapidapi-key': imdb8_apiKey
                },
            })
            return dispatch(getAsyncMovieDetail(comingSoonMoviesList.data.slice(0,count)))
    } catch (error) {
        return rejectWithValue(error.message)
    }
}) 

// get Movie image with imdb id 
export const getAsyncMovieDetail = createAsyncThunk("Movies/CommingSoonMovies",async(getData,{rejectWithValue}) =>{
    
    try {
        const asyncData = await axios.all(getData.map(movie => {
           const movieId = movie.id.replace("/title/",'').replace('/','');
            return axios.get(`https://imdb8.p.rapidapi.com/title/get-images`,{
                headers : {     
                    'x-rapidapi-host': 'imdb8.p.rapidapi.com',
                    'x-rapidapi-key': imdb8_apiKey
                },
                params : {tconst: movieId ,limit: '1'}
            })
        }))
        return asyncData.map(e => e.data)
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const comingSoonMovies = createSlice({
    name : "HeadSlider/CommingSoon",
    initialState : {data : [] , error : null , loading : false},
    extraReducers:{
        [getAsyncComingSoonMovies.pending] : ()=>{
            return {data : [] , loading : true , error : null}
        },
        [getAsyncComingSoonMovies.fulfilled] : (state , action)=>{
            return {data : action.payload.payload , loading : false , error : null}
        },
        [getAsyncComingSoonMovies.rejected] : (state , action)=>{
            return {data : [] , loading : false , error : action.payload}
        },
    }
})
export const  comingSoonMoviesReducer = comingSoonMovies.reducer