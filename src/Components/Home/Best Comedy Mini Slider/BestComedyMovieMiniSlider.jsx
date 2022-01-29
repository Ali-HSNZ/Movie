import { Swiper, SwiperSlide } from "swiper/react";

import '../Mini Slider Style/MiniSlider.css'
import Styles from '../Mini Slider Style/MiniSlider.module.css'

import { AiFillCaretRight } from "react-icons/ai";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncBestMoviesByComedy } from "../../../Redux/Best Comedy Movies/BestComedyMoviesReducer";

import MiniSliderSlideCommon from "../../../Common/Mini Slider Slide/MiniSliderSlide";


import "swiper/css";
import "swiper/css/free-mode"
import SwiperCore, {
  FreeMode,Navigation
} from 'swiper';
import { Skeleton } from "@mui/material";

SwiperCore.use([FreeMode , Navigation]);

const BestComedyMiniSlider = () => {

    const {data , loading , error} = useSelector(state =>state.BestMoviesByComedy)
    const dispatch = useDispatch()

    const NumOfvideos = 18;
    useEffect(()=>{
        dispatch(getAsyncBestMoviesByComedy({byGenre : "Comedy" , count : NumOfvideos}))
    },[])

    const renderSkeleton = ()=>{
        let content = [];
        for (let index = 0; index < NumOfvideos; index++) {
            content.push(
                <SwiperSlide key={index}>
                    <Skeleton  variant="rectangular" width={215} height={268} sx={{ bgcolor: "#1d1d2e" }}/>
                    <Skeleton  variant="rectangular" width={100} height={15} sx={{ bgcolor: "#181824" }}/>
                    <Skeleton  variant="rectangular" width={215} height={18} sx={{ bgcolor: "#1d1d2e" }}/>
                </SwiperSlide>   
            );
        }
        return content
    }


    return (  
        <div className="slider_miniSlider">
            <div className={Styles.silderTitle}>
                <a href="/">Best Comedy Movies</a>
                <AiFillCaretRight/>
            </div>
            <Swiper slidesPerView={6} spaceBetween={10} navigation freeMode={true}>
                {loading && renderSkeleton()}
                {error && <p className={Styles.error}>{error}</p>}
                {data ? data.map((movie,index) => {
                    return (
                        <SwiperSlide key={index}>
                            <MiniSliderSlideCommon movie={movie}/>
                        </SwiperSlide>
                    );
                }) : renderSkeleton()}
            </Swiper>
        </div>
    );
}
 
export default BestComedyMiniSlider;