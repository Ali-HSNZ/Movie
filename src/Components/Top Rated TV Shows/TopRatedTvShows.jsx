import { Swiper, SwiperSlide } from "swiper/react";

import '../Mini Slider Style/MiniSlider.css'
import Styles from '../Mini Slider Style/MiniSlider.module.css'

import { AiFillCaretRight } from "react-icons/ai";

import "swiper/css";
import "swiper/css/free-mode"

import SwiperCore, {
  FreeMode,Navigation
} from 'swiper';

import { useDispatch } from "react-redux";
import { getAsyncTopRatingTvShow } from "../../Redux/Top Rating Tv Show/TopRatingTvShowReducer";
import { useEffect } from "react";
import { useSelector } from "react-redux";

SwiperCore.use([FreeMode , Navigation]);

const TopRatedTvShow = () => {

    const dispatch = useDispatch()
    const {data , loading , error} = useSelector(state => state.TopRatingTvShow)

    useEffect(()=>{
        dispatch(getAsyncTopRatingTvShow(20))
    } , [])

    return (  
        <div className="slider_miniSlider">
            <div className={Styles.silderTitle}>
                <a href="/">Top Rated Tv Show</a>
                <AiFillCaretRight/>
            </div>
            <Swiper slidesPerView={6} spaceBetween={10} navigation freeMode={true}>
                {loading && <p className={Styles.loading}>Loading...</p>}
                {error && <p className={Styles.error}>{error}</p>}
                {data ?.map(movie => {
                    return (
                        <SwiperSlide  className={Styles.sliderSlideParent}>
                            <img className={Styles.sliderSlide} src={`https://img.gs/knzwmsmxwd/268x215,quality=low/${movie.banner}`}/>
                        </SwiperSlide>
                    )
                })}    
            </Swiper>
        </div>
    );
}
export default TopRatedTvShow;