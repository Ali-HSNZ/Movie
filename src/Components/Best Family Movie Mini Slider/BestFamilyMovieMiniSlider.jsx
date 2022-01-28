import { Swiper, SwiperSlide } from "swiper/react";

import '../Mini Slider Style/MiniSlider.css'
import Styles from '../Mini Slider Style/MiniSlider.module.css'

import { AiFillCaretRight } from "react-icons/ai";

// Slider ==>

import "swiper/css";
import "swiper/css/free-mode"

import SwiperCore, {
  FreeMode,Navigation
} from 'swiper';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAsyncBestMoviesByFamily } from "../../Redux/Best Family Movies/BestFamilyMovies";

SwiperCore.use([FreeMode , Navigation]);


const BestFamilyMovieMiniSlider = () => {

    const dispatch = useDispatch()
    const {data , loading , error} = useSelector(state => state.BestMoviesByFamily)

    useEffect(()=>{
        dispatch(getAsyncBestMoviesByFamily(20))
    },[])

    return (  
        <div className="slider_miniSlider">
            <div className={Styles.silderTitle}>
                <a  href="#">Best Family Movie in 2021</a>
                <AiFillCaretRight/>
            </div>
            <Swiper slidesPerView={6} spaceBetween={10} navigation freeMode={true}>
                {loading && <p className={Styles.loading}>Loading...</p>}
                {error && <p className={Styles.error}>{error}</p>}
                {data ? data.map((movie,index) => {
                    return (
                        <SwiperSlide  className={Styles.sliderSlideParent} key={index}>
                            <img className={Styles.sliderSlide} src={`https://img.gs/knzwmsmxwd/268x215,quality=low/${movie.banner}`} />
                        </SwiperSlide>
                    )
                 }) : <p className={Styles.loading}>Loading...</p>}

            </Swiper>
        </div>
    );
}
 
export default BestFamilyMovieMiniSlider;