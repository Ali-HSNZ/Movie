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



const BestComedyMiniSlider = () => {
    return (  
        <div className="slider_miniSlider">
            <div className={Styles.silderTitle}>
                <a href="/">The best Comedy Movie in 2021</a>
                <AiFillCaretRight/>
            </div>
            <Swiper slidesPerView={6} spaceBetween={10} navigation freeMode={true}>
               
                <SwiperSlide className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215,quality=low/https://m.media-amazon.com/images/M/MV5BNjZjNDE1NTYtYTgwZS00M2VmLWEyODktM2FlNjhiYTk3OGU2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"/>
                </SwiperSlide>
                
                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215,quality=low/https://m.media-amazon.com/images/M/MV5BNjE5NzA4ZDctOTJkZi00NzM0LTkwOTYtMDI4MmNkMzIxODhkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg"/>
                </SwiperSlide>
                
                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215,quality=low/https://m.media-amazon.com/images/M/MV5BMWRiZGQ1NDMtODQ2OS00MDlhLWJkZGYtM2ZmNjlhZThjOWRmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"/>
                </SwiperSlide>  

                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215,quality=low/https://m.media-amazon.com/images/M/MV5BMmZiMjdlN2UtYzdiZS00YjgxLTgyZGMtYzE4ZGU5NTlkNjhhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"/>
                </SwiperSlide>  

                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215,quality=low/https://m.media-amazon.com/images/M/MV5BZTgxMWJkMzItMzg1YS00NDJiLTljYjctMTc2YzQzZDZjZDAyXkEyXkFqcGdeQXVyODQ2OTIzNDU@._V1_.jpg"/>
                </SwiperSlide>    

                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215,quality=low/https://m.media-amazon.com/images/M/MV5BMTlkMmVmYjktYTc2NC00ZGZjLWEyOWUtMjc2MDMwMjQwOTA5XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_.jpg"/>
                </SwiperSlide>   

                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215,quality=low/https://m.media-amazon.com/images/M/MV5BNmQxZTNiODYtNzBhYy00MzVlLWJlN2UtNTc4YWZjMDIwMmEzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"/>
                </SwiperSlide>

                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215,quality=low/https://m.media-amazon.com/images/M/MV5BMTkxMjYyNzgwMl5BMl5BanBnXkFtZTgwMTE3MjYyMTE@._V1_.jpg"/>
                </SwiperSlide>


                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215,quality=low/https://m.media-amazon.com/images/M/MV5BNGM3YzdlOWYtNjViZS00MTE2LWE1MWUtZmE2ZTcxZjcyMmU3XkEyXkFqcGdeQXVyODEyMTI1MjA@._V1_.jpg"/>
                </SwiperSlide>


                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215,quality=low/https://m.media-amazon.com/images/M/MV5BNTdmMDNmYmItOWFmNC00YzdkLWIyZWMtMGRlMTQyZDZmNDU0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"/>
                </SwiperSlide>


                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215,quality=low/https://m.media-amazon.com/images/M/MV5BMTYzODYzODU2Ml5BMl5BanBnXkFtZTgwNTc1MTA2NzE@._V1_.jpg"/>
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
}
 
export default BestComedyMiniSlider;