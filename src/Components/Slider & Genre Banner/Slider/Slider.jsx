import Styles from './Slider.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './manageSlider.css'
import { useEffect, useState } from 'react';

import axios from 'axios'
const Slider = () => {

    const [dataMovie , setDataMovie] = useState({data : []})

    useEffect(()=>{
        const getAllImdbCode = async() => {
            const endPoint = "https://data-imdb1.p.rapidapi.com/movie/order/byRating/"
            await axios.get(endPoint ,{
                params : { page_size: '1'}, 
                headers: {
                    'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
                    'x-rapidapi-key': '61398a6ee8msh0033ca9207b7556p1fdb09jsn1ea8d45f729a'
                },
            })
            .then(response => {
                const  responseData =  response.data.results;
                responseData.map(movieId => {
                    const id = movieId.imdb_id

                    axios.get(`https://imdb8.p.rapidapi.com/title/get-images`,{
                        headers : {     
                            'x-rapidapi-host': 'imdb8.p.rapidapi.com',
                            'x-rapidapi-key': '61398a6ee8msh0033ca9207b7556p1fdb09jsn1ea8d45f729a'
                        },
                        params : {tconst: id}
                    })
                    .then(function (response) {
                        setDataMovie(prevMovie => ({
                            data : [...prevMovie.data , response.data.images[0]] 
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
        <div className='slider_slideGenreBanner'>
            <Swiper spaceBetween={0} slidesPerView={1} navigation>
                {dataMovie.data ?.map((movie,index) => {
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