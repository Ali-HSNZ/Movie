import Styles from "./TopMoviesRating.module.css"
import { AiFillCaretRight } from "react-icons/ai";
import { BsFillCaretRightFill } from "react-icons/bs";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncRatingMovies } from "../../../Redux/Top Rating Movies/TopRatingMoviesReducer";
import { Skeleton } from "@mui/material";
import { Link } from 'react-router-dom';

const TopMoviesRating = () => {
    const {data , loading , error} = useSelector(state => state.TopRatingMovies)
    const dispatch = useDispatch()

    const NumOfvideos = 9
    useEffect(()=> {
        window.scroll({top : 0})
    },[])
    useEffect(()=>{
        dispatch(getAsyncRatingMovies(NumOfvideos))
    },[NumOfvideos])

    const renderSkeleton = ()=>{
        let content = [];
        for (let index = 0; index < NumOfvideos; index++) {
            content.push(
                <Skeleton key={index} variant="rectangular" height={79} sx={{ bgcolor: "#1d1d2e" }} className={Styles.itemSkeleton}/>
            );
        }
        return content
    }

    return (  
        <div className={Styles.parent}>

            <nav className={Styles.title}>
               <Link to={'/topRatingMovies'} >Top Rating Movies</Link> 
                <AiFillCaretRight/>
            </nav>

            <nav className={Styles.movieParent}>

                {error && <p className={Styles.error}>{error}</p>}
                {loading && renderSkeleton()}
                {data ? data.map((movie,index) => {
                    return (
                        <Link className={Styles.item} to={{pathname: "/movie" , search:`id=${movie.imdb_id}`}}>

                            <div className={Styles.item_numberLine}>
                                <p>{index+1}</p>
                                <div className={Styles.item_line}></div>
                            </div>
                            <div className={Styles.desc}>
                                <p className={Styles.item_movieTitle}>{movie.title}</p>
                                <p className={Styles.item_movieRating}>{movie.rating}</p>
                            </div>
                            <div className={Styles.item_play}>
                                <BsFillCaretRightFill size='23px'/>
                            </div>
                        </Link>
                    )
                }) : renderSkeleton()}   
            </nav>
        </div>
    );
}
export default TopMoviesRating;