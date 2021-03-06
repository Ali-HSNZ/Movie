import { Link } from 'react-router-dom';
import Styles from './MiniSliderSlide.module.css'

const MiniSliderSlideCommon = ({movie}) => {
    const movie_hr = Math.floor(movie.movie_length/60); 
    const movie_min = Math.floor(movie.movie_length % 60)
    return (  
        <Link className={Styles.sliderSlideParent} to={{pathname:movie.type === "movie" ? "/movie" : "/serial" , search:`id=${movie.imdb_id}`}}>
            <img className={Styles.sliderSlideImg} src={`https://img.gs/knzwmsmxwd/268x215,quality=low/${movie.banner}`} loading='lazy' />
            <span className={Styles.movieTitle}>{movie.title.length >20 ?movie.title.substring(0,20)+"..." :movie.title}</span>

            <div className={Styles.movieDetail}>
                <div className={Styles.movieInfo}>
                    <span className={Styles.movieInfo_title}>Title: </span>
                    <span className={Styles.movieInfo_detaill}>{movie.title.length >50 ?movie.title.substring(0,50)+"..." :movie.title}</span>
                </div>
                <div className={Styles.movieInfo}>
                    <span className={Styles.movieInfo_title}>Rating: </span>
                    <span className={Styles.movieInfo_detaill}>{movie.rating === 0 ? "Unknown" : movie.rating }</span>
                </div>
                <div className={Styles.movieInfo}>
                    <span className={Styles.movieInfo_title}>Movie Length:</span>
                    <span className={Styles.movieInfo_detaill}> {movie.movie_length === 0 ? "Unknown" : `${movie_hr}h ${movie_min}m`}</span>
                </div>
                <div className={Styles.movieInfo}>
                    <span className={Styles.movieInfo_title}>Release:</span>
                    <span className={Styles.movieInfo_detaill}> {movie.release? movie.release.replaceAll('-','/') : "Unknown"}</span>
                </div>
                <div className={Styles.movieInfo}>
                    <span className={Styles.movieInfo_title}>Gen: </span>
                    {movie.gen.map((gen,index) => {
                        return (
                            <span className={Styles.movieInfo_detaill} key={index}>{gen.genre} , </span>
                        )
                    })}
                </div>
            </div>
            
        </Link>
    );
}
 
export default MiniSliderSlideCommon;