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



const BestMovieMiniSlider = () => {
    return (  
        <div className="slider_miniSlider">
            <div className={Styles.silderTitle}>
                <a href="/">The best Movie in 2021</a>
                <AiFillCaretRight/>
            </div>
            <Swiper slidesPerView={6} spaceBetween={10} navigation freeMode={true}>
               
                <SwiperSlide className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://m.media-amazon.com/images/M/MV5BYzVjYThmNDAtOTE1NC00YjQ2LTk4NWYtNTc4Yzc4OTRhYjllXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg"/>
                </SwiperSlide>
                
                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://m.media-amazon.com/images/M/MV5BM2E4ZGFmZTgtMDVkYS00ZTk0LWIzYWMtODk5OGVmYmEyMzEzXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg"/>
                </SwiperSlide>
                
                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg"/>
                </SwiperSlide>  

                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://m.media-amazon.com/images/M/MV5BNjZjNDE1NTYtYTgwZS00M2VmLWEyODktM2FlNjhiYTk3OGU2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"/>
                </SwiperSlide>  

                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://m.media-amazon.com/images/M/MV5BNjE5NzA4ZDctOTJkZi00NzM0LTkwOTYtMDI4MmNkMzIxODhkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg"/>
                </SwiperSlide>    

                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://m.media-amazon.com/images/M/MV5BMWRiZGQ1NDMtODQ2OS00MDlhLWJkZGYtM2ZmNjlhZThjOWRmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"/>
                </SwiperSlide>   

                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://m.media-amazon.com/images/M/MV5BMmZiMjdlN2UtYzdiZS00YjgxLTgyZGMtYzE4ZGU5NTlkNjhhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"/>
                </SwiperSlide>

                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://m.media-amazon.com/images/M/MV5BMGJkNDJlZWUtOGM1Ny00YjNkLThiM2QtY2ZjMzQxMTIxNWNmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg"/>
                </SwiperSlide>


                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://m.media-amazon.com/images/M/MV5BZGRhYjE2NWUtN2FkNy00NGI3LTkxYWMtMDk4Yjg5ZjI3MWI2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"/>
                </SwiperSlide>


                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://m.media-amazon.com/images/M/MV5BMjM2MjhmYmYtN2Q2MS00NGMwLWJmOTEtMmU1MjljNzllZmNkXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg"/>
                </SwiperSlide>


                <SwiperSlide  className={Styles.sliderSlideParent}>
                    <img className={Styles.sliderSlide} src="https://m.media-amazon.com/images/M/MV5BZTJmYTJmYTktMzU1Yy00ZTZlLTgzNjItYmY4ZDFjZGFjYjZhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"/>
                </SwiperSlide>



            </Swiper>
        </div>
    );
}
 
export default BestMovieMiniSlider;