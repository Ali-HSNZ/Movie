import Styles from './Slider.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './manageSlider.css'
import { useEffect, useState } from 'react';

import {moviesOrderByRating_list} from '../../../Redux/Movies Order By Rating/MoviesOrderByRating'

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const Slider = () => {

const {data , loading , error} = useSelector(state => state.headSlider)

    console.log("data : ",data)
    console.log("loading : ",loading)
    console.log("error : ",error)
    console.log("------------------------------------------------------")
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(moviesOrderByRating_list(2))
    },[])

    return (  
        <div className='slider_slideGenreBanner'>
            {loading && <p className={Styles.loading}>Loading data...</p>}
            {error && <p className={Styles.error}>{error}</p>}
            <Swiper spaceBetween={0} slidesPerView={1} navigation>
                {data ?.map((movie,index) => {
                    return(
                        <SwiperSlide className={Styles.sliderSlide}key={index}>
                            <img src={`https://img.gs/knzwmsmxwd/741x400/${movie.url}`}/>
                            <div className={Styles.sliderFooter}>
                                <span>{movie.caption.length > 40 ? movie.caption.substring(0,40)+"..." : movie.caption } </span>
                                <div className={Styles.sliderFooter_detail}>
                                    <span>Type : {movie.relatedTitles[0].titleType}</span>
                                    <span>Year : {movie.relatedTitles[0].year}</span>
                                </div>
                            </div>
                        </SwiperSlide>  
                    )
                })}
            </Swiper>
        </div>
    );
}
 
export default Slider;