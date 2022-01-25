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
// <==  Slider 

SwiperCore.use([FreeMode , Navigation]);

const BestSerialMiniSlider = () => {

    const dispatch = useDispatch()
    
    const [dataMovie , setDataMovie] = useState({data : []})
    const {data , loading , error} = useSelector(state => state.popularSeriesTvs)

    useEffect(()=>{
        dispatch(getAsyncPopularSeries(18));
    },[])
        
    return (  
        <div className="slider_miniSlider">
            <div className={Styles.silderTitle}>
                <a href="/">Popular Series TVs</a>
                <AiFillCaretRight/>
            </div>

            <Swiper slidesPerView={6} spaceBetween={10} navigation freeMode={true}>
                {loading &&  <p className={Styles.loading}>Loading...</p>}
                {error &&  <p className={Styles.error}>{error}</p>}
                {data?.map((movie,index) => {
                    if(index > 1)
                    return (
                        <SwiperSlide className={Styles.sliderSlideParent} key={index}>
                            <img alt={movie.title} className={Styles.sliderSlide} src={`https://img.gs/knzwmsmxwd/268x215,quality=high/${movie.banner}`} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}
 
export default BestSerialMiniSlider;