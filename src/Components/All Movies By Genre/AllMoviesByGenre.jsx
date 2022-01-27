import Styles from "./AllMoviesByGenre.module.css"
import { AiFillCaretRight } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAsyncAllGenres } from "../../Redux/All Movies by Genres/AllMoviesByGenres";
import { useSelector } from "react-redux";

const AllMoviesByGenre = () => {
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAsyncAllGenres(9))
    },[])

    const {data , loading , error} = useSelector(state => state.AllGenres)

    return (  
        <div className={Styles.parent}>
            <div className={Styles.header}>
                <p className={Styles.headerTitle}>
                    All Movies By  Genres
                    <AiFillCaretRight/>
                </p>
            </div>
            <div className={Styles.footer}>
                {loading && <p className={Styles.loading}>Loading...</p>}
                {error && <p className={Styles.error}>{error}</p>}
                {data ?.map((genre,index) => {

                    // slashOne ==>  http://47.254.174.28/movie/byGen/
                    // slashTwo ==>  /?
                    // genreName ===> http://47.254.174.28/movie/byGen/   <Genre Name>     /? 
                    const slashOne = genre.next.indexOf("byGen/"); 
                    const slashTwo = genre.next.indexOf("/?"); 
                    const genreName = genre.next.substring(slashOne +6, slashTwo)
                    
                    return(
                        <div className={Styles.rowItem} key={index}>
                            <div className={Styles.genre}>
                                <section className={Styles.genreRanke_genreLine}>
                                    <p>{index+1}</p>
                                    <section className={Styles.genreLine}></section>
                                </section>
                                
                                <p className={Styles.genreTitle}>{genreName}</p>
                                <button className={Styles.genreSubmit}>Go</button>
                            </div>
                            <span className={Styles.genreVidoeCount}>Movie : {genre.count}</span>
                        </div>
                    )
                })}
            </div>

            {data.length > 0 ? <div className={Styles.cover}><a href="/">Load More</a></div> : null}
        </div>
    );
}
export default AllMoviesByGenre;