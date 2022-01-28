import { Swiper, SwiperSlide } from "swiper/react";

import '../Mini Slider Style/MiniSlider.css'
import Styles from '../Mini Slider Style/MiniSlider.module.css'

import { AiFillCaretRight } from "react-icons/ai";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncBestMoviesByComedy } from "../../Redux/Best Comedy Movies/BestComedyMoviesReducer";

import MiniSliderSlideCommon from "../../Common/Mini Slider Slide/MiniSliderSlide";


import "swiper/css";
import "swiper/css/free-mode"
import SwiperCore, {
  FreeMode,Navigation
} from 'swiper';

SwiperCore.use([FreeMode , Navigation]);

const BestComedyMiniSlider = () => {

    const {data , loading , error} = useSelector(state =>state.BestMoviesByComedy)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAsyncBestMoviesByComedy({byGenre : "Comedy" , count : 15}))
    },[])

    return (  
        <div className="slider_miniSlider">
            <div className={Styles.silderTitle}>
                <a href="/">Best Comedy Movies</a>
                <AiFillCaretRight/>
            </div>
            <Swiper slidesPerView={6} spaceBetween={10} navigation freeMode={true}>
                {loading && <p className={Styles.loading}>Loading...</p>}
                {error && <p className={Styles.error}>{error}</p>}
                {data ? data.map((movie,index) => {
                    return (
                        <SwiperSlide key={index}>
                            <MiniSliderSlideCommon movie={movie}/>
                        </SwiperSlide>
                    );
                }) : <p className={Styles.loading}>Loading...</p>}
            </Swiper>
        </div>
    );
}
 
export default BestComedyMiniSlider;