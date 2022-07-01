
import { createAsyncThunk ,createSlice } from '@reduxjs/toolkit';
import  axios  from 'axios';


export const getAsyncActorSeriesAction = createAsyncThunk("Actor/ActorSeries" , async(actorId ,{rejectWithValue,dispatch}) => {
    try {
        const endPoint = `https://data-imdb1.p.rapidapi.com/actor/id/${actorId}/series_knownFor/`;
        const response = await axios.get(endPoint ,{
            params: {page_size: '50'},
            headers: {
                'X-RapidAPI-Key': '31948c12f0msh55620a113fddd97p1bd855jsn995cac5eba5e',
                'X-RapidAPI-Host': 'data-imdb1.p.rapidapi.com'
            }
        })
       const imdbId_list = response.data.results.map(e => e[0].imdb_id)
        dispatch(getAsyncSeriesData(imdbId_list))
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const getAsyncSeriesData = createAsyncThunk("Actor/ActorSeries" , async(seriesList ,{rejectWithValue}) => {
    try {
        const response = await axios.all(seriesList.map(series => {
            return  axios.get(`https://data-imdb1.p.rapidapi.com/series/id/${series}/`,{
                headers : {
                    'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
                    'x-rapidapi-key': 'bc4dd2d022msh82cb1b347411b36p1fbf31jsn0ebb7514b3f9'
                }
            })
        }))
        const data = response.map(e => e.data.results)
        console.log(data)
        const availableSeries = data && data.filter(Series => {
            if(Object.keys(Series).length !== 0){
                return true
            }
            return false
        })
        return availableSeries
    } catch (error) {
        return rejectWithValue(error.message)
    }
})


const getActorSeries = createSlice({
    name : "getActorSeriesByImbIds",
    initialState : {data : [] , loading : false , error : null},
    extraReducers : {
        [getAsyncActorSeriesAction.pending] : ( state , action ) => {
            return {data : [] , error : null , loading : true}
        },
        [getAsyncActorSeriesAction.fulfilled] : ( state , action ) => {
            // console.log("action ===> ",action)
            return {data : action.payload , error : null , loading : false}
        },
        [getAsyncActorSeriesAction.rejected] : ( state , action ) => {
            return {data : [] , error : action.payload , loading : false}
        },
    },
})


export const getActorSeriesReducer = getActorSeries.reducer