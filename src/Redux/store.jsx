import { configureStore } from "@reduxjs/toolkit";
import {headSliderReducer} from "./Movies Order By Rating/MoviesOrderByRating";
import { PopularSeriesTvsReducer } from "./Popular Series Tvs/PopularSeriesTvsReducer";


const store = configureStore({
    reducer : {
        headSlider : headSliderReducer,
        popularSeriesTvs : PopularSeriesTvsReducer,
    }
})
export default store
