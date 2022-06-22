import Styles from './Slider.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './manageSlider.css'
import { useEffect } from 'react';

import {getAsyncComingSoonMovies} from '../../../../Redux/Coming Soon Movies/ComingSoonMovies'

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Skeleton } from '@mui/material';
const Slider = () => {

const {data , loading , error} = useSelector(state => state.comingSoonMovies)

    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getAsyncComingSoonMovies(1))
    },[])

    return (  
        <div className='slider_slideGenreBanner'>
            {loading &&  <Skeleton  variant="rectangular" width={753} height={400} sx={{ bgcolor: "#1d1d2e" }}/>}
            {error && <p className={Styles.error}>{error}</p>}
            <Swiper spaceBetween={0} slidesPerView={1} navigation>
                {data ?.map((movie,index) => {
                    return(
                        <SwiperSlide className={Styles.sliderSlide}key={index}>
                            <img src={`https://img.gs/knzwmsmxwd/741x400/${movie.images[0].url}`}/>
                            <div className={Styles.sliderFooter}>
                                <span>{movie && movie.images[0].caption.length > 40 ? movie.images[0].caption.substring(0,40)+"..." : movie.images[0].caption } </span>
                                <div className={Styles.sliderFooter_detail}>
                                    <span>Type : {movie.images[0].relatedTitles[0].titleType}</span>
                                    <span>Release Date : {movie.images[0].relatedTitles[0].year}</span>
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