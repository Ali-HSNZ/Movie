import Styles from './MovieDetail.module.css'
import { Skeleton} from "@mui/material"
import { useDispatch, useSelector } from 'react-redux'
import { useQuery } from '../../../hooks/useQuery'

import { getAsyncMovieDataWithImdbId } from '../../../Redux/Get Movie Data With imdb Id/GetMovieDataWithImdbId'

import { useEffect } from 'react'
import {useLocation} from 'react-router-dom'

const MovieDetail = (props) => {

    const {pathname} = useLocation()

    const query = useQuery().get("id")

    const dispatch = useDispatch()
 
    useEffect(()=>{
        if(pathname == '/movie'){
            dispatch(getAsyncMovieDataWithImdbId({page : 'movie' , query}))
        }else if(pathname == '/serial'){
            dispatch(getAsyncMovieDataWithImdbId({page : 'serial' , query}))
        }
    },[query])

    const { data , loading , error } = useSelector(state => state.MovieDataWithImdbId)

    const movie_hr = data && Math.floor(data.movie_length/60); 
    const movie_min = data && Math.floor(data.movie_length % 60);

    return (  
        <>
            {error ? <span>{error}</span> : (
                <>
                    <div className={Styles.movieTitleParent}>
                        {loading ? (
                            <Skeleton variant='rectangular' width={187} height={33} sx={{ bgcolor: "#1d1d2e" , minWidth : "100px" }}/>
                        ) : (
                            <h2>{data.title}</h2>
                        )}
                    </div>

                    <div className={Styles.parent}>
                        <div className={Styles.imgParent}>
                            {loading ? (
                                <Skeleton variant='rectangular' width={187} height={280}  sx={{ bgcolor: "#1d1d2e" }}/>
                                ) : (
                                <img src={`https://img.gs/knzwmsmxwd/187x280,quality=low/${data.banner}`}/>
                            )}
                        </div>
                        <div className={Styles.describtionParent}>
                            {loading ? (
                                <>
                                    <Skeleton variant='rectangular' width={187} height={22} sx={{ bgcolor: "#1d1d2e" , minWidth : "100%" }}/>
                                    <Skeleton variant='rectangular' width={187} height={13} sx={{ bgcolor: "#181824" , minWidth : "100%" }}/>
                                    <Skeleton variant='rectangular' width={187} height={22} sx={{ bgcolor: "#1d1d2e" , minWidth : "100%" }}/>
                                    <Skeleton variant='rectangular' width={187} height={13} sx={{ bgcolor: "#181824" , minWidth : "100%" }}/>
                                    <Skeleton variant='rectangular' width={187} height={22} sx={{ bgcolor: "#1d1d2e" , minWidth : "100%" }}/>
                                </>
                            ) : (
                                <h4>{data.description}</h4>
                            )}
                        </div>
                            {loading ? (
                                <Skeleton variant='rectangular' width={270} height={266} sx={{ bgcolor: "#1d1d2e" , minWidth : "270px" }}/>
                            ) : (
                                <div className={Styles.propertiesParent}>
                                    <div className={Styles.propertiesGroup}>
                                        <span className={Styles.propertiesGroup_title}>Release : </span>
                                        <span className={Styles.propertiesGroup_detail}>{data.release ? data.release.replace(/[-]/g,'/') : "Unkown"}</span> 
                                    </div>

                                    <div className={Styles.propertiesGroup}>
                                        <span className={Styles.propertiesGroup_title}>rating : </span>
                                        <span className={Styles.propertiesGroup_detail}>{data.rating ? data.rating : "Unkown"}</span> 
                                    </div>

                                    <div className={Styles.propertiesGroup}>
                                        <span className={Styles.propertiesGroup_title}>Content Rating : </span>
                                        <span className={Styles.propertiesGroup_detail}>{data.content_rating ? data.content_rating : "Unkown"}</span> 
                                    </div>

                                    <div className={Styles.propertiesGroup}>
                                        <span className={Styles.propertiesGroup_title}>Gen : </span>
                                        {data.gen ? data.gen.map((gen,index) => {
                                            return (
                                                <span className={Styles.propertiesGroup_detail} key={index}>{gen.genre} , </span>
                                            )
                                        }) : <span className={Styles.propertiesGroup_detail}>Unkown</span>}
                                    </div>

                                    <div className={Styles.propertiesGroup}>
                                        <span className={Styles.propertiesGroup_title}>Length : </span>
                                        <span className={Styles.propertiesGroup_detail}>{data.movie_length ? `${movie_hr}h ${movie_min}m` : "Unkown"}</span> 
                                    </div>

                                    <div className={Styles.propertiesGroup}>
                                        <span className={Styles.propertiesGroup_title}>Trailer : </span>
                                        <button className={Styles.trailerButton}>Watch </button>
                                        <span className={Styles.trailerSpan}>or</span>
                                        <button className={Styles.trailerButton}>Download</button>
                                    </div>

                                </div>
                            )}
                    </div>
                </>
            )}
        </>
    );
}
export default MovieDetail