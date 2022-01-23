import Styles from "./TopMoviesRating.module.css"
import { AiFillCaretRight } from "react-icons/ai";
import { BsFillCaretRightFill } from "react-icons/bs";
import axios from "axios";
import { useEffect, useState } from "react";

const TopMoviesRating = () => {

    const [dataMovie , setDataMovie] = useState({data : []})

    useEffect(()=>{

        const getAllImdbCode = async() => {
            const endPoint = "https://data-imdb1.p.rapidapi.com/movie/order/byRating/"
            await axios.get(endPoint ,{
                params : {
                    page_size: '6'
                }, 
                headers: {
                    'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
                    'x-rapidapi-key': '61398a6ee8msh0033ca9207b7556p1fdb09jsn1ea8d45f729a'
                },
            })
            .then(response => {
                const  responseData =  response.data.results;
                responseData.map(movie => {
                    const id = movie.imdb_id

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

    function sortData(){
        return dataMovie.data.sort((a, b) =>  b.rating - a.rating)
    }

    return (  
        <div className={Styles.parent}>

            <p className={Styles.title}>
                Top Movies Rating
                <AiFillCaretRight/>
            </p>

            <div className={Styles.footer}>

                 {dataMovie && sortData() ?.map((movie,index) => {
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
                                <BsFillCaretRightFill size='24px'/>
                            </div>
                        </div>
                    )
                })}   
            </div>
        </div>
    );
}
 
export default TopMoviesRating;