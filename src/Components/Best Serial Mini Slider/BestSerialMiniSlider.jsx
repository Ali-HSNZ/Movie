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
import { useEffect, useState } from "react";
import axios from "axios";

// <==  Slider 

SwiperCore.use([FreeMode , Navigation]);



const BestSerialMiniSlider = () => {

    const [data , setData] = useState(null)

    // Fetching Top 250 Movies
    useEffect(()=>{
        const getData = async() =>{
            // const endPoint = "https://imdb-api.com/en/API/MostPopularTVs/k_t4uhs4ca"
            const endPoint = "https://imdb-api.com/en/API/MostPopularTVs/k_t4uhs4c"
            await axios.get(endPoint)
            .then(response => setData(response.data.items.slice(0,20)))
            .catch()
        }
        getData()
    },[])

    return (  
        <div className="slider_miniSlider">
            <div className={Styles.silderTitle}>
                <a href="/">Polular Series TVs</a>
                <AiFillCaretRight/>
            </div>

            <Swiper slidesPerView={6} spaceBetween={10} navigation freeMode={true}>
                {!data && <p style={{color:'#ffffff'}}>Loading...</p>}
                {data &&  data.length > 0 && data.map(items => {
                    return(
                        <SwiperSlide  className={Styles.sliderSlideParent} key={items.id}>
                            <img className={Styles.sliderSlide} src={`https://img.gs/knzwmsmxwd/268x215,quality=low/${items.image}`}/>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
}
 
export default BestSerialMiniSlider;