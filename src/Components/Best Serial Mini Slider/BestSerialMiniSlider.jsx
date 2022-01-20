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



const BestSerialMiniSlider = () => {
    return (  
        <div className="slider_miniSlider">
            <div className={Styles.silderTitle}>
                <a href="/">The best series in 2021</a>
                <AiFillCaretRight/>
            </div>
            <Swiper slidesPerView={6} spaceBetween={10} navigation freeMode={true}  className="mySwiper">
               
                <SwiperSlide className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215/https://m.media-amazon.com/images/M/MV5BNzBhNDUzMmMtYzMyYi00NTJkLTg5OGYtYjAxMzMyNWM3YWE0XkEyXkFqcGdeQXVyMDM0MzU2NA@@._V1_.jpg"/>
                </SwiperSlide>
                
                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215/https://m.media-amazon.com/images/M/MV5BMWM2YWQ3NjItN2M4Yy00NjlmLWI5YmMtYzEyMjFjYzUxZTlkXkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_.jpg"/>
                </SwiperSlide>
                
                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215/https://m.media-amazon.com/images/M/MV5BZjkxMmMzNzYtODM5ZS00ZGFkLWFlMjItMTA5MTE0ZDZmMzQ5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_.jpg"/>
                </SwiperSlide>  

                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215/https://m.media-amazon.com/images/M/MV5BYzM5OWU5YmMtYzQ0ZC00YWQ2LWFmMzUtNTA2YWI2Yzk0ZmMxXkEyXkFqcGdeQXVyMzAzNTY3MDM@._V1_.jpg"/>
                </SwiperSlide>  

                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215/https://m.media-amazon.com/images/M/MV5BMTk3MzUwOTU2NF5BMl5BanBnXkFtZTcwOTk2MTgyMQ@@._V1_.jpg"/>
                </SwiperSlide>    

                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215/https://m.media-amazon.com/images/M/MV5BYmM2YjFiMjUtYzY4NS00NjViLThkMTYtZDFkZGQyMDFlZTAyXkEyXkFqcGdeQXVyMTg2NjYzOA@@._V1_.jpg"/>
                </SwiperSlide>   

                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215/https://m.media-amazon.com/images/M/MV5BZWNmNWNlZWMtYmRjMy00YzRiLWI3NDYtYzNlNDUzZDA0YjAwXkEyXkFqcGdeQXVyMTE2MTc3MzU1._V1_.jpg"/>
                </SwiperSlide>

                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215/https://m.media-amazon.com/images/M/MV5BMzcxNmU1ZDAtZGViOC00Y2Q2LWJiODgtNzhlOGJjY2Q2MTM2XkEyXkFqcGdeQXVyMTA0MTI2ODE4._V1_.jpg"/>
                </SwiperSlide>


                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215/https://m.media-amazon.com/images/M/MV5BMTc3NDYyNzYxM15BMl5BanBnXkFtZTgwMzgxMjEzNDM@._V1_.jpg"/>
                </SwiperSlide>


                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215/https://m.media-amazon.com/images/M/MV5BYmU4ZjM2ZWMtMDFhMy00MGM4LTlkMmEtYTJhZTU5ODAzODk0XkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg"/>
                </SwiperSlide>


                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://img.gs/knzwmsmxwd/268x215/https://m.media-amazon.com/images/M/MV5BMTY1NzIyNjM1MF5BMl5BanBnXkFtZTgwNjY2NDUxMjE@._V1_.jpg"/>
                </SwiperSlide>



            </Swiper>
        </div>
    );
}
 
export default BestSerialMiniSlider;