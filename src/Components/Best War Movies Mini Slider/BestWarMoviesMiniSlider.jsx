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




const BestWarMovieMiniSlider = () => {
    return (  
        <div className="slider_miniSlider">
            <div className={Styles.silderTitle}>
                <a  href="#">The best War Movie in 2021</a>
                <AiFillCaretRight/>
            </div>
            <Swiper slidesPerView={6} spaceBetween={10} navigation freeMode={true}>
               
                <SwiperSlide className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215/https://m.media-amazon.com/images/M/MV5BYzVjYThmNDAtOTE1NC00YjQ2LTk4NWYtNTc4Yzc4OTRhYjllXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg"/>
                </SwiperSlide>
                
                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215/https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg"/>
                </SwiperSlide>
                
                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215/https://m.media-amazon.com/images/M/MV5BMGJkNDJlZWUtOGM1Ny00YjNkLThiM2QtY2ZjMzQxMTIxNWNmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg"/>
                </SwiperSlide>  

                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215/https://m.media-amazon.com/images/M/MV5BMDEzZDY2ZDktNTlmOS00NThjLThkNTEtMjE5MzI5NWEwZmRjXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg"/>
                </SwiperSlide>  

                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215/https://m.media-amazon.com/images/M/MV5BYTExZTdhY2ItNGQ1YS00NjJlLWIxMjYtZTI1MzNlMzY0OTk4XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"/>
                </SwiperSlide>    

                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215/https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"/>
                </SwiperSlide>   

                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215/https://m.media-amazon.com/images/M/MV5BZGExZTUzYWQtYWJjZi00OTI4LTk4OGYtNTA2YzcwMmNiZTMxXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"/>
                </SwiperSlide>

                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215/https://m.media-amazon.com/images/M/MV5BNzk4MDZhNTctMDA3OC00ODdkLWIyOWYtN2M0MzA3MDY5NDk1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"/>
                </SwiperSlide>


                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215/https://m.media-amazon.com/images/M/MV5BMmQ4YmM3NjgtNTExNC00ZTZhLWEwZTctYjdhOWI4ZWFlMDk2XkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_.jpg"/>
                </SwiperSlide>


                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215/https://m.media-amazon.com/images/M/MV5BYWQ2NzQ1NjktMzNkNS00MGY1LTgwMmMtYTllYTI5YzNmMmE0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg"/>
                </SwiperSlide>


                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215/https://m.media-amazon.com/images/M/MV5BZjk0OWZiN2ItNmQ2YS00NTJmLTg0MjItNzM4NzBkMWM1ZTRlXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_.jpg"/>
                </SwiperSlide>



            </Swiper>
        </div>
    );
}
 
export default BestWarMovieMiniSlider;