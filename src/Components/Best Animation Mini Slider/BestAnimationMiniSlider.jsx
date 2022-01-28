import { Swiper, SwiperSlide } from "swiper/react";

import '../Mini Slider Style/MiniSlider.css'
import Styles from '../Mini Slider Style/MiniSlider.module.css'

import { AiFillCaretRight } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAsyncBestMoviesByAnimation } from "../../Redux/Best Animation Movies/BestAnimationMoviesReducer";

import "swiper/css";
import "swiper/css/free-mode"

import SwiperCore, {
  FreeMode,Navigation
} from 'swiper';

SwiperCore.use([FreeMode , Navigation]);

const BestAnimationMiniSlider = () => {

    const {data , loading , error} = useSelector(state =>state.BestMoviesByAnimation)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAsyncBestMoviesByAnimation({byGenre : "Animation" , count : 16}))
    },[])


    return (  
        <div className="slider_miniSlider">
            <div className={Styles.silderTitle}>
                <a href="/">Best Animation Movie in 2021</a>
                <AiFillCaretRight/>
            </div>
            <Swiper slidesPerView={6} spaceBetween={10} navigation freeMode={true}>
               {loading && <p className={Styles.loading}>Loading...</p>}
               {error && <p className={Styles.error}>{error}</p>}
                {data ? data.map((movie,index) => {
                    return (
                        <SwiperSlide className={Styles.sliderSlideParent} key={index}>
                            <img className={Styles.sliderSlide} src={`https://img.gs/knzwmsmxwd/268x215,quality=low/${movie.banner}`}/>
                        </SwiperSlide>
                    )
                }) : <p className={Styles.loading}>Loading...</p>}
            </Swiper>
        </div>
    );
}
 
export default BestAnimationMiniSlider;