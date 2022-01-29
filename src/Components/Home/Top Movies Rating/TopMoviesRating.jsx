import Styles from "./TopMoviesRating.module.css"
import { AiFillCaretRight } from "react-icons/ai";
import { BsFillCaretRightFill } from "react-icons/bs";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncRatingMovies } from "../../../Redux/Top Rating Movies/TopRatingMoviesReducer";
import { Skeleton } from "@mui/material";

const TopMoviesRating = () => {
    const {data , loading , error} = useSelector(state => state.TopRatingMovies)
    const dispatch = useDispatch()

    const NumOfvideos = 9
    useEffect(()=>{
        dispatch(getAsyncRatingMovies(NumOfvideos))
    },[])

    const renderSkeleton = ()=>{
        let content = [];
        for (let index = 0; index < NumOfvideos; index++) {
            content.push(
                <Skeleton  variant="rectangular" height={79} sx={{ bgcolor: "#1d1d2e" }} className={Styles.itemSkeleton}/>
            );
        }
        return content
    }

    return (  
        <div className={Styles.parent}>

            <p className={Styles.title}>
                Top Movies Rating
                <AiFillCaretRight/>
            </p>

            <div className={Styles.footer}>

                {error && <p className={Styles.error}>{error}</p>}
                {loading && renderSkeleton()}
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
                }) : renderSkeleton()}   
            </div>
        </div>
    );
}
export default TopMoviesRating;