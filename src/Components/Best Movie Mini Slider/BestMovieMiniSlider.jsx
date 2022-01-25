import { Swiper, SwiperSlide } from "swiper/react";

import '../Mini Slider Style/MiniSlider.css'
import Styles from '../Mini Slider Style/MiniSlider.module.css'

import { AiFillCaretRight } from "react-icons/ai";

import "swiper/css";
import "swiper/css/free-mode"

import SwiperCore, {
  FreeMode,Navigation
} from 'swiper';
import { useEffect } from "react";
import { getAsyncPopularMovies } from "../../Redux/Popular Movies/PopularMoviesReducer";

import { useDispatch , useSelector} from "react-redux";

SwiperCore.use([FreeMode , Navigation]);

const BestMovieMiniSlider = () => {
    const dispatch = useDispatch()

    const {data , loading , error} = useSelector(state =>state.PopularMovies)

    useEffect(()=>{
        dispatch(getAsyncPopularMovies(22))
    },[])

    return (  
        <div className="slider_miniSlider">
            <div className={Styles.silderTitle}>
                <a href="/">Popular Movies</a>
                <AiFillCaretRight/>
            </div>
            <Swiper slidesPerView={6} spaceBetween={10} navigation freeMode={true}>
                {loading && <p className={Styles.loading}>Loading...</p>}
                {error && <p className={Styles.error}>{error}</p>}
                {data?.map((movie,index) => {
                    return(
                        <SwiperSlide className={Styles.sliderSlideParent} key={index}>
                            <img className={Styles.sliderSlide} src={`https://img.gs/knzwmsmxwd/268x215,quality=high/${movie.banner}`}/>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
}
 
export default BestMovieMiniSlider;