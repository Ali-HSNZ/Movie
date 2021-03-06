import Styles from "./AllMoviesByGenre.module.css"
import { AiFillCaretRight } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAsyncAllMoviesByGenre } from "../../Redux/All Movies by Genres/AllMoviesByGenres";
import { Skeleton } from "@mui/material";
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const AllMoviesByGenre = () => {
    
    const dispatch = useDispatch()

    const location = useLocation()

    const NumOfvideos = 21;

    useEffect(() => {
        window.scroll({top : 0 , behavior : 'smooth'})
    } ,[location])
    useEffect(()=>{
        dispatch(getAsyncAllMoviesByGenre(NumOfvideos))
    },[])

    const {data , loading , error} = useSelector(state => state.AllMoviesByGenre)

    const renderSkeleton = ()=>{
        let content = [];
        for (let index = 0; index < NumOfvideos; index++) {
            content.push(
                <Skeleton key={index} variant="rectangular" height={108} sx={{ bgcolor: "#1d1d2e" }} className={Styles.rowItem}/>
            );
        }
        return content
    }

    return (  
        <div className={Styles.parent}>
            <div className={Styles.header}>
                <p className={Styles.headerTitle}>
                    All Movies By Genres
                    <AiFillCaretRight/>
                </p>
            </div>
            <div className={Styles.footer}>
                {loading && renderSkeleton()}
                {error && <p className={Styles.error}>{error}</p>}
                {data ? data.map((genre,index) => {

                    // slashOne ==>  http://47.254.174.28/movie/byGen/
                    // slashTwo ==>  /...
                    // genreName ===> http://47.254.174.28/movie/byGen/   <Genre Name>     /...

                    const slashOne = genre.links.next && genre.links.next.indexOf("byGen/")
                    const slashTwo = genre.links.next && genre.links.next.indexOf("/?")
                    const genreName = genre.links.next && genre.links.next.substring(slashOne +6, slashTwo)
                    
                    return(
                        <div className={Styles.rowItem} key={index}>
                            <div className={Styles.genre}>
                                <section className={Styles.genreRanke_genreLine}>
                                    <p>{index+1}</p>
                                    <section className={Styles.genreLine}></section>
                                </section>
                                <p className={Styles.genreTitle}>{genreName}</p>
                                <Link to={`/genre/${genreName}`} className={Styles.genreSubmit}>Go</Link>

                            </div>
                            <span className={Styles.genreVidoeCount}>Movie : {genre.count}</span>
                        </div>
                    )
                }) : renderSkeleton()}
            </div>
        </div>
    );
}
export default AllMoviesByGenre;