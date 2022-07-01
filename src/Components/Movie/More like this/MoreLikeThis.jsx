import { Swiper, SwiperSlide } from "swiper/react";

import '../../../Components/Home/Mini Slider Style/MiniSlider.css'
import Styles from '../../../Components/Home/Mini Slider Style/MiniSlider.module.css'
import SliderStyles from './MoreLikeThis.module.css'

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import MiniSliderSlideCommon from "../../../Common/Mini Slider Slide/MiniSliderSlide";

import {useQuery} from '../../../hooks/useQuery'

import "swiper/css";
import "swiper/css/free-mode"
import SwiperCore, {
  FreeMode,Navigation
} from 'swiper';
import { Skeleton } from "@mui/material";
import { getAsyncMovieMoreLikeThis } from "../../../Redux/Get Movie More Like This By Movie Id/GetMovieMoreLikeThis";

SwiperCore.use([FreeMode , Navigation]);

const MoreLikeThis = () => {

    const query = useQuery().get("id")
    
    const {data , loading , error} = useSelector(state =>state.MovieMoreLikeThis)
    const dispatch = useDispatch()

    const NumOfvideos = 18;
    useEffect(()=>{
        dispatch(getAsyncMovieMoreLikeThis(query))
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
                {loading && (
                    <>
                        <Skeleton variant='rectangular' height={25} sx={{ bgcolor: "#1d1d2e"  , minWidth : "200px"}}/>
                        <Skeleton variant='rectangular' height={25} sx={{ bgcolor: "#181824"  , minWidth : "10px"}}/>
                    </>
                )}
                {data && data.length > 0 &&   <h1 className={SliderStyles.sliderTitle} href="/">More Like This :</h1>}
            </div>
            <Swiper slidesPerView={6} spaceBetween={10} navigation freeMode={true}>
                {loading && renderSkeleton()}
                {error && <p className={Styles.error}>{error}</p>}
                {data ? data.map((movie,index) => {
                    return (
                        <SwiperSlide key={index}>
                            {movie && (
                                <MiniSliderSlideCommon movie={movie}/>
                            )}
                        </SwiperSlide>
                    );
                }) : renderSkeleton()}
            </Swiper>
        </div>
    );
}
 
export default MoreLikeThis;