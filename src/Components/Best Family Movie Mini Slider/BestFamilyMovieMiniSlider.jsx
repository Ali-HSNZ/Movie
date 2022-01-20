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

// <==  Slider 

SwiperCore.use([FreeMode , Navigation]);




const BestFamilyMovieMiniSlider = () => {
    return (  
        <div className="slider_miniSlider">
            <div className={Styles.silderTitle}>
                <a  href="#">The best Family Movie in 2021</a>
                <AiFillCaretRight/>
            </div>
            <Swiper slidesPerView={6} spaceBetween={10} navigation freeMode={true}>
               
                <SwiperSlide className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215,quality=low/https://m.media-amazon.com/images/M/MV5BNjE5NzA4ZDctOTJkZi00NzM0LTkwOTYtMDI4MmNkMzIxODhkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg"/>
                </SwiperSlide>
                
                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215,quality=low/https://m.media-amazon.com/images/M/MV5BMWRiZGQ1NDMtODQ2OS00MDlhLWJkZGYtM2ZmNjlhZThjOWRmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"/>
                </SwiperSlide>
                
                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215,quality=low/https://m.media-amazon.com/images/M/MV5BZWM4MzUyYTAtMGFiYy00MmRkLWIyNDktMWFlMDlmZjJmNWZmXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg"/>
                </SwiperSlide>  

                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215,quality=low/https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg"/>
                </SwiperSlide>  

                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215,quality=low/https://m.media-amazon.com/images/M/MV5BMTYzODYzODU2Ml5BMl5BanBnXkFtZTgwNTc1MTA2NzE@._V1_.jpg"/>
                </SwiperSlide>    

                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215,quality=low/https://m.media-amazon.com/images/M/MV5BNTkzY2YzNmYtY2ViMS00MThiLWFlYTEtOWQ1OTBiOGEwMTdhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"/>
                </SwiperSlide>   

                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215,quality=low/https://m.media-amazon.com/images/M/MV5BODk0NzA4MTMtNGQ3Zi00OTdlLThiZmQtOTI0YWEyNDFiMTg2XkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_.jpg"/>
                </SwiperSlide>

                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215,quality=low/https://m.media-amazon.com/images/M/MV5BMTcxODgwMDkxNV5BMl5BanBnXkFtZTYwMDk2MDg3._V1_.jpg"/>
                </SwiperSlide>


                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215,quality=low/https://m.media-amazon.com/images/M/MV5BOTNjNWRjZDUtYjU1OC00NGFmLWE2ZDktMzhhYmIwOTU4YjVmXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"/>
                </SwiperSlide>


                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215,quality=low/https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg"/>
                </SwiperSlide>


                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215,quality=low/https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_.jpg"/>
                </SwiperSlide>

            </Swiper>
        </div>
    );
}
 
export default BestFamilyMovieMiniSlider;