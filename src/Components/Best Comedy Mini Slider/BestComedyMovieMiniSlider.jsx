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

const BestComedyMiniSlider = () => {
    const [dataMovie , setDataMovie] = useState({data : []})

    
    useEffect(()=>{
        // Get Imdb movie id & map on id and get Movie by id

        const getAllImdbCode = async() => {
            const endPoint = "https://data-imdb1.p.rapidapi.com/movie/byGen/Comedy/"
            await axios.get(endPoint ,{
                params : {
                    page_size: '15'
                }, 
                headers: {
                    'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
                    'x-rapidapi-key': '61398a6ee8msh0033ca9207b7556p1fdb09jsn1ea8d45f729a'
                },
            })
            .then(response => {
                const  responseData =  response.data.results;
                responseData.map(movieId => {
                    const id = movieId.imdb_id

                    axios.get(`https://data-imdb1.p.rapidapi.com/movie/id/${id}/`,{headers : { 'x-rapidapi-host': 'data-imdb1.p.rapidapi.com','x-rapidapi-key': '61398a6ee8msh0033ca9207b7556p1fdb09jsn1ea8d45f729a'}})
                    .then(function (response) {
                        setDataMovie(prevMovie => ({
                            data : [...prevMovie.data , response.data.results] 
                        }))
                    })
                    .catch(function (error) { });

                })
            })
            .catch()     
        }
        getAllImdbCode()
        
    },[])

    return (  
        <div className="slider_miniSlider">
            <div className={Styles.silderTitle}>
                <a href="/">Best Comedy Movies</a>
                <AiFillCaretRight/>
            </div>
            <Swiper slidesPerView={6} spaceBetween={10} navigation freeMode={true}>
               
                {dataMovie.data.length === 0 && <p style={{color:'#ffffff'}}>Loading...</p>}
                {dataMovie.data?.map((movie,index) => {
                    return (
                        <SwiperSlide className={Styles.sliderSlideParent} key={index}>
                            <img className={Styles.sliderSlide} src={`https://img.gs/knzwmsmxwd/268x215,quality=high/${movie.banner}`} />
                        </SwiperSlide>
                    );
                })}
                
            </Swiper>
        </div>
    );
}
 
export default BestComedyMiniSlider;