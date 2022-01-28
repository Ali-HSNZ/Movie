import Styles from "./TopMoviesRating.module.css"
import { AiFillCaretRight } from "react-icons/ai";
import { BsFillCaretRightFill } from "react-icons/bs";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncRatingMovies } from "../../Redux/Top Rating Movies/TopRatingMoviesReducer";

const TopMoviesRating = () => {


    const {data , loading , error} = useSelector(state => state.TopRatingMovies)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAsyncRatingMovies(9))
    },[])

    return (  
        <div className={Styles.parent}>

            <p className={Styles.title}>
                Top Movies Rating
                <AiFillCaretRight/>
            </p>

            <div className={Styles.footer}>

                {error && <p className={Styles.error}>{error}</p>}
                {loading && <p className={Styles.loading}>Loading...</p>}
                {data ? data.map((movie,index) => {
                    return (
                        <div className={Styles.item} key={index}>
                            <div className={Styles.item_numberLine}>
                                <p>{index+1}</p>
                                <div className={Styles.item_line}></div>
                            </div>
                            <div className={Styles.desc}>
                                <p className={Styles.item_movieTitle}>{movie.title}</p>
                                <p className={Styles.item_movieRating}>{movie.rating}</p>
                            </div>
                            <div className={Styles.item_play}>
                                <BsFillCaretRightFill size='21px'/>
                            </div>
                        </div>
                    )
                }) : <p className={Styles.loading}>Loading...</p>}   
            </div>
        </div>
    );
}
export default TopMoviesRating;