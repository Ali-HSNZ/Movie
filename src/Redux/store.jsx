import { configureStore } from "@reduxjs/toolkit";
import {headSliderReducer} from "./Movies Order By Rating/MoviesOrderByRating";


const store = configureStore({
    reducer : {
        headSlider : headSliderReducer
    }
})
export default store
