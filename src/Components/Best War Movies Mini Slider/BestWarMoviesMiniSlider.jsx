import { Swiper, SwiperSlide } from "swiper/react";

import '../Mini Slider Style/MiniSlider.css'
import Styles from '../Mini Slider Style/MiniSlider.module.css'

import { AiFillCaretRight } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAsyncBestMoviesByWar } from "../../Redux/Best War Movies/BestWarMoviesReducer";

import "swiper/css";
import "swiper/css/free-mode"

import SwiperCore, {
  FreeMode,Navigation
} from 'swiper';

SwiperCore.use([FreeMode , Navigation]);

const BestWarMovieMiniSlider = () => {
    const {data , error , loading} = useSelector(state => state.BestMoviesByWar)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAsyncBestMoviesByWar(20))
    },[])

    return (  
        <div className="slider_miniSlider">
            <div className={Styles.silderTitle}>
                <a  href="#">Best War Movies</a>
                <AiFillCaretRight/>
            </div>
            <Swiper slidesPerView={6} spaceBetween={10} navigation freeMode={true}>
                {loading && <p className={Styles.loading}>Loading...</p>}
                {error && <p className={Styles.error}>{error}</p>}
                {data ?.map(movie => {
                    return(
                        <SwiperSlide  className={Styles.sliderSlideParent}>
                            <img className={Styles.sliderSlide} src={`https://img.gs/knzwmsmxwd/268x215,quality=low/${movie.banner}`}/>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
}
 
export default BestWarMovieMiniSlider;