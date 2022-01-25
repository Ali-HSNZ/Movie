import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { imdb8_apiKey } from "../../Services/API_KEY";

// get order by Rating List 
export const moviesOrderByRating_list = createAsyncThunk("slider/MoviesOrderByRating",async(count,{rejectWithValue ,dispatch}) => {
    try {
            const endPoint = "https://data-imdb1.p.rapidapi.com/movie/order/byRating/"
            const getdata = await axios.get(endPoint ,{
                params : { page_size : count}, 
                headers: {
                    'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
                    'x-rapidapi-key': '61398a6ee8msh0033ca9207b7556p1fdb09jsn1ea8d45f729a'
                },
            })
            if(getdata.data.results){
                return dispatch(moviesOrderByRating_lisst(getdata.data.results))
            }
    } catch (error) {
        return rejectWithValue(error.message)
    }
}) 

// get Movie image with imdb id 
export const moviesOrderByRating_lisst = createAsyncThunk("slider/getImage",async(getData,{rejectWithValue}) =>{
    try {
        if(getData){
            const asyncData = await axios.all(getData.map(movie => {
                return axios.get(`https://imdb8.p.rapidapi.com/title/get-images`,{
                    headers : {     
                        'x-rapidapi-host': 'imdb8.p.rapidapi.com',
                        'x-rapidapi-key': imdb8_apiKey
                    },
                    params : {tconst: movie.imdb_id}
                })
            }))
            return asyncData.map(e => e.data.images[1])
        }
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const HeadSliderReducer = createSlice({
    name : "HeadSlider",
    initialState : {data : [] , error : null , loading : false},
    extraReducers:{
        [moviesOrderByRating_list.pending] : (state , action)=>{
            return {data : [] , loading : true , error : null}
        },
        [moviesOrderByRating_list.fulfilled] : (state , action)=>{
            return {data : action.payload.payload , loading : false , error : null}
        },
        [moviesOrderByRating_list.rejected] : (state , action)=>{
            return {data : [] , loading : false , error : action.payload}
        },
    }
})
export const  headSliderReducer = HeadSliderReducer.reducer