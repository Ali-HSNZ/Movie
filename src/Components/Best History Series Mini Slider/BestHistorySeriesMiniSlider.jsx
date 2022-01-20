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

// <==  Slider 

SwiperCore.use([FreeMode , Navigation]);



const BestHistorySeriesMiniSlider = () => {
    return (  
        <div className="slider_miniSlider">
            <div className={Styles.silderTitle}>
                <a href="/">The best History Series</a>
                <AiFillCaretRight/>
            </div>
            <Swiper slidesPerView={6} spaceBetween={10} navigation freeMode={true}>
               
                <SwiperSlide className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215,quality=low/https://m.media-amazon.com/images/M/MV5BZmY0MzBlNjctNTRmNy00Njk3LWFjMzctMWQwZDAwMGJmY2MyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg"/>
                </SwiperSlide>
                
                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215,quality=low/https://m.media-amazon.com/images/M/MV5BODk4ZjU0NDUtYjdlOS00OTljLTgwZTUtYjkyZjk1NzExZGIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg"/>
                </SwiperSlide>
                
                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215,quality=low/https://m.media-amazon.com/images/M/MV5BMjE1MzYzNjk3OF5BMl5BanBnXkFtZTgwMzk0MzYwNzE@._V1_.jpg"/>
                </SwiperSlide>  

                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215,quality=low/https://m.media-amazon.com/images/M/MV5BNmE3Y2U1MjItODQxNS00YTkzLWEwZjQtYTRhM2QxNjA1OTBiXkEyXkFqcGdeQXVyNTY2MTA4NA@@._V1_.jpg"/>
                </SwiperSlide>  

                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215,quality=low/https://m.media-amazon.com/images/M/MV5BMTY2NDk0MjkxNl5BMl5BanBnXkFtZTcwNDc2ODcyMQ@@._V1_.jpg"/>
                </SwiperSlide>    

                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215,quality=low/https://m.media-amazon.com/images/M/MV5BYjBiN2FhNmItYjVkNS00MzVlLWIxZTItMDlmNzk0YjE1OWMxXkEyXkFqcGdeQXVyODE5OTE0ODc@._V1_.jpg"/>
                </SwiperSlide>   

                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215,quality=low/https://m.media-amazon.com/images/M/MV5BMjIyMDM0NDc4MV5BMl5BanBnXkFtZTgwMjIzODQxMjI@._V1_.jpg"/>
                </SwiperSlide>

                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215,quality=low/https://m.media-amazon.com/images/M/MV5BMTAzMjAwNzc1MzVeQTJeQWpwZ15BbWU4MDQzODgzMjEx._V1_.jpg"/>
                </SwiperSlide>


                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215,quality=low/https://m.media-amazon.com/images/M/MV5BNDNhNjlkYjYtMzYwNi00MTM2LTlkZTAtOTZiZDEwMzQ1OWM1XkEyXkFqcGdeQXVyNTg4MDc2NTQ@._V1_.jpg"/>
                </SwiperSlide>


                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215,quality=low/https://m.media-amazon.com/images/M/MV5BYzgwZmIwZDktNTBjYi00NWUyLTljMzAtOTYxZDgwNzgyMjYxXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_.jpg"/>
                </SwiperSlide>


                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215,quality=low/https://m.media-amazon.com/images/M/MV5BMTMxNjYzNTg0M15BMl5BanBnXkFtZTcwNzY1MzIxNg@@._V1_.jpg"/>
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
}
 
export default BestHistorySeriesMiniSlider;