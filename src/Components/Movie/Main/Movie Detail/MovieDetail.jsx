import Styles from './MovieDetail.module.css'
import { Skeleton} from "@mui/material"
import { useDispatch, useSelector } from 'react-redux'
import { useQuery } from '../../../../hooks/useQuery'
import { getAsyncMovieDataWithImdbId } from '../../../../Redux/Get Movie Data With imdb Id/GetMovieDataWithImdbId'
import { useEffect } from 'react'

const MovieDetail = () => {

    const query = useQuery().get("id")

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAsyncMovieDataWithImdbId(query))
    },[query])

    const { data } = useSelector(state => state.MovieDataWithImdbId)

    const movie_hr = data && Math.floor(data.movie_length/60); 
    const movie_min = data && Math.floor(data.movie_length % 60);

    return (  
        <div className={Styles.parent}>
            <div className={Styles.imgParent}>
                {data.banner ? (
                    <img src={`https://img.gs/knzwmsmxwd/187x280,quality=high/${data.banner}`}/>
                ) : (
                    <Skeleton variant='rectangular' width={187} height={280}  sx={{ bgcolor: "#1d1d2e" }}/>
                )}
            </div>
            <div className={Styles.describtionParent}>
                {data.description ? (
                    <h4>{data.description}</h4>
                ) : (
                    <>
                        <Skeleton variant='rectangular' width={187} height={22} className = {Styles.describtionParent_keleton} sx={{ bgcolor: "#1d1d2e" , minWidth : "100%" }}/>
                        <Skeleton variant='rectangular' width={187} height={13} className = {Styles.describtionParent_keleton} sx={{ bgcolor: "#181824" , minWidth : "100%" }}/>
                        <Skeleton variant='rectangular' width={187} height={22} className = {Styles.describtionParent_keleton} sx={{ bgcolor: "#1d1d2e" , minWidth : "100%" }}/>
                        <Skeleton variant='rectangular' width={187} height={13} className = {Styles.describtionParent_keleton} sx={{ bgcolor: "#181824" , minWidth : "100%" }}/>
                        <Skeleton variant='rectangular' width={187} height={22} className = {Styles.describtionParent_keleton} sx={{ bgcolor: "#1d1d2e" , minWidth : "100%" }}/>
                    </>
                )}
            </div>
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
                    <span className={Styles.propertiesGroup_title}>Movie Length : </span>
                    <span className={Styles.propertiesGroup_detail}>{data.movie_length ? `${movie_hr}h ${movie_min}m` : "Unkown"}</span> 
                </div>

                <div className={Styles.propertiesGroup}>
                    <span className={Styles.propertiesGroup_title}>Trailer : </span>
                    <button className={Styles.trailerButton}>Watch </button>
                    <span className={Styles.trailerSpan}>or</span>
                    <button className={Styles.trailerButton}>Download</button>
                </div>

            </div>
        </div>
    );
}
export default MovieDetail