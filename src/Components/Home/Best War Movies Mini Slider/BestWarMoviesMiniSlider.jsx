import { Swiper, SwiperSlide } from "swiper/react";
import '../Mini Slider Style/MiniSlider.css'
import Styles from '../Mini Slider Style/MiniSlider.module.css'
import { AiFillCaretRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAsyncBestMoviesByWar } from "../../../Redux/Best War Movies/BestWarMoviesReducer";
import { movieCount } from './../miniSliderSettings';
import "swiper/css";
import "swiper/css/free-mode"
import SwiperCore, {FreeMode,Navigation} from 'swiper';
import MiniSliderSlideCommon from "../../../Common/Mini Slider Slide/MiniSliderSlide";
import { Skeleton } from "@mui/material";
import { Link } from 'react-router-dom';

SwiperCore.use([FreeMode , Navigation]);

const BestWarMovieMiniSlider = () => {
    const {data , error , loading} = useSelector(state => state.BestMoviesByWar)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAsyncBestMoviesByWar(movieCount))
    },[])

    const renderSkeleton = ()=>{
        let content = [];
        for (let index = 0; index < movieCount; index++) {
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
            <nav className={Styles.silderTitle}>
                <Link  to="genre/War">Best War Movies</Link>
                <AiFillCaretRight/>
            </nav>
            <Swiper slidesPerView={6} spaceBetween={10} navigation freeMode={true}>
                {loading && renderSkeleton()}
                {error && <p className={Styles.error}>{error}</p>}
                {data ? data.map((movie,index) => {
                    return(
                        <SwiperSlide key={index}>
                            <MiniSliderSlideCommon movie={movie}/>
                        </SwiperSlide>
                    )
                }) : renderSkeleton()}
            </Swiper>
        </div>
    );
}
 
export default BestWarMovieMiniSlider;