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
import MiniSliderSlideCommon from "../../Common/Mini Slider Slide/MiniSliderSlide";

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
                {data ? data.map((movie,index) => {
                    return(
                        <SwiperSlide key={index}>
                            <MiniSliderSlideCommon movie={movie}/>
                        </SwiperSlide>
                    )
                }) : <p className={Styles.loading}>Loading...</p>}
            </Swiper>
        </div>
    );
}
 
export default BestWarMovieMiniSlider;