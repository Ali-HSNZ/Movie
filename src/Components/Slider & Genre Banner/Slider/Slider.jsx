import Styles from './Slider.module.css'

import { Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './manageSlider.css'


const Slider = () => {
    return (  
        <div className='slider_slideGenreBanner'>
            <Swiper spaceBetween={0} slidesPerView={1} navigation>
                <SwiperSlide className={Styles.sliderSlide}>
                <img src='https://m.media-amazon.com/images/M/MV5BOGI0OGU4NDMtNjc0Zi00ODc1LTlhNTktYTliMjAzNWEzM2JmXkEyXkFqcGdeQXVyNjczOTE0MzM@._V1_.jpg'/>

                    <div className={Styles.sliderFooter}>
                        <span>Title : Fast And Furios </span>
                        
                        <div className={Styles.sliderFooter_detail}>
                            <span>Rating : 9.2</span>
                            <span>Year : 2021</span>
                            <span>Genre : Action</span>
                        </div>
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide className={Styles.sliderSlide}>
                    <img src='https://m.media-amazon.com/images/M/MV5BNjliN2E5YWYtODUyYy00Mjg0LWI3MTctM2RmYTFhOWYzMTQ2XkEyXkFqcGdeQXVyMjkwMjE3Mjk@._V1_.jpg'/>
                    <div className={Styles.sliderFooter}>
                        <span>Title : Fast And Furios </span>
                        
                        <div className={Styles.sliderFooter_detail}>
                            <span>Rating : 9.2</span>
                            <span>Year : 2021</span>
                            <span>Genre : Action</span>
                        </div>
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide className={Styles.sliderSlide}>
                <img src='https://m.media-amazon.com/images/M/MV5BZjkwMjQ4MDYtNzNmYy00ODRlLWI1MTEtODFjZGE2ZjRkMmNjXkEyXkFqcGdeQXVyMjAwNDk0MDA@._V1_.jpg'/>
                    <div className={Styles.sliderFooter}>
                        <span>Title : Fast And Furios </span>
                        
                        <div className={Styles.sliderFooter_detail}>
                            <span>Rating : 9.2</span>
                            <span>Year : 2021</span>
                            <span>Genre : Action</span>
                        </div>
                        
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
}
 
export default Slider;