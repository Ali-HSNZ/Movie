import { Swiper, SwiperSlide } from "swiper/react";

import '../Mini Slider Style/MiniSlider.css'
import Styles from '../Mini Slider Style/MiniSlider.module.css'

import { AiFillCaretRight } from "react-icons/ai";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncPopularSeries } from "../../Redux/Popular Series Tvs/PopularSeriesTvsReducer";


// Slider ==>
import "swiper/css";
import "swiper/css/free-mode"
import SwiperCore, {
    FreeMode,Navigation
} from 'swiper';
import MiniSliderSlideCommon from "../../Common/Mini Slider Slide/MiniSliderSlide";
import {Skeleton } from "@mui/material";
// <==  Slider 

SwiperCore.use([FreeMode , Navigation]);

const BestSerialMiniSlider = () => {

    const dispatch = useDispatch()
    const {data , loading , error} = useSelector(state => state.popularSeriesTvs)
    
    const NumOfvideos = 18;
    useEffect(()=>{
        dispatch(getAsyncPopularSeries(NumOfvideos));
    },[])

    const renderSkeleton = ()=>{
        let content = [];
        for (let index = 0; index < NumOfvideos; index++) {
            content.push(
                <SwiperSlide>
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
                <a href="/">Popular Series TVs</a>
                <AiFillCaretRight/>
            </div>
            <Swiper slidesPerView={6} spaceBetween={10} navigation freeMode={true}>
                {loading && renderSkeleton() }
                {error &&  <p className={Styles.error}>{error}</p>}
                {data ? data.map((movie,index) => {
                    if(index > 1)
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
 
export default BestSerialMiniSlider;