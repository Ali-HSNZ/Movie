import { Swiper, SwiperSlide } from "swiper/react";
import '../Mini Slider Style/MiniSlider.css'
import Styles from '../Mini Slider Style/MiniSlider.module.css'
import { AiFillCaretRight } from "react-icons/ai";
import { movieCount } from './../miniSliderSettings';
import "swiper/css";
import "swiper/css/free-mode"
import SwiperCore, {FreeMode,Navigation} from 'swiper';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAsyncBestMoviesByFamily } from "../../../Redux/Best Family Movies/BestFamilyMovies";
import MiniSliderSlideCommon from "../../../Common/Mini Slider Slide/MiniSliderSlide";
import { Skeleton } from "@mui/material";
import { Link } from 'react-router-dom';

SwiperCore.use([FreeMode , Navigation]);


const BestFamilyMovieMiniSlider = () => {

    const dispatch = useDispatch()
    const {data , loading , error} = useSelector(state => state.BestMoviesByFamily)

    useEffect(()=>{
        dispatch(getAsyncBestMoviesByFamily(movieCount))
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
                <Link  to="/genre/Family">Best Family Movies</Link>
                <AiFillCaretRight/>
            </nav>
            <Swiper slidesPerView={6} spaceBetween={10} navigation freeMode={true}>
                {loading && renderSkeleton()}
                {error && <p className={Styles.error}>{error}</p>}
                {data ? data.map((movie,index) => {
                    return (
                        <SwiperSlide key={index}>
                            <MiniSliderSlideCommon movie={movie}/>
                        </SwiperSlide>
                    )
                 }) : renderSkeleton()}
            </Swiper>
        </div>
    );
}
 
export default BestFamilyMovieMiniSlider;