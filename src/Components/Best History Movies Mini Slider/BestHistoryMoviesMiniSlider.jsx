import { Swiper, SwiperSlide } from "swiper/react";

import '../Mini Slider Style/MiniSlider.css'
import Styles from '../Mini Slider Style/MiniSlider.module.css'

import { AiFillCaretRight } from "react-icons/ai";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncBestMoviesByHistory } from "../../Redux/Best History Movies/BestHistoryMovies";


import "swiper/css";
import "swiper/css/free-mode"
import SwiperCore, {
  FreeMode,Navigation
} from 'swiper';

SwiperCore.use([FreeMode , Navigation]);

const BestHistorySeriesMiniSlider = () => {

    const {data , loading , error} = useSelector(state =>state.BestMoviesByHistory)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAsyncBestMoviesByHistory(21))
    },[])

    return (  
        <div className="slider_miniSlider">
            <div className={Styles.silderTitle}>
                <a href="/">Best History Movies</a>
                <AiFillCaretRight/>
            </div>
            <Swiper slidesPerView={6} spaceBetween={10} navigation freeMode={true}>
                {loading && <p className={Styles.loading}>Loading...</p>}
                {error && <p className={Styles.error}>{error}</p>}
                {data ? data.map((movie,index) => {
                    return (
                        <SwiperSlide className={Styles.sliderSlideParent} key={index}>
                            <img className={Styles.sliderSlide} src={`https://img.gs/knzwmsmxwd/268x215,quality=low/${movie.banner}`} />
                        </SwiperSlide>
                    );
                }) : <p className={Styles.loading}>Loading...</p>}
            </Swiper>
        </div>
    );
}
 
export default BestHistorySeriesMiniSlider;