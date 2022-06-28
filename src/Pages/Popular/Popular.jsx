// import { useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';

import Styles from './Popular.module.css'

import { useDispatch , useSelector } from "react-redux";

import MiniSliderSlide from "../../Common/Mini Slider Slide/MiniSliderSlide";
import { makeStyles } from '@mui/styles';
import  Pagination  from '@mui/material/Pagination';
import { PaginationItem } from '@mui/material';
import  ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import  ArrowForwardRoundedIcon  from '@mui/icons-material/ArrowForwardRounded';
import { Skeleton } from '@mui/material';
import { getAsyncPopularMovies } from './../../Redux/Popular Movies/PopularMoviesReducer';
import { useQuery } from './../../hooks/useQuery';
import {useNavigate} from 'react-router-dom'

const Popular = () => {
    const navigate = useNavigate()
    const pageType = useQuery().get('type')
   let type;
   if(pageType === 'movie'){
        type = 'movie'
    }else if(pageType === 'series'){
        type = 'series'
    }else{
        navigate('/notFoundPage')
    }

    const dispatch = useDispatch()
    
    const {data , loading , error} = useSelector(state => state.PopularMovies);
    const [moviePageNum , setMoviePageNum] = useState(0)

    const availableData = data && data.filter(movie => {
        if(Object.keys(movie).length !== 0){
            return true
        }
        return false
    })


    const useStyles = makeStyles(() =>({
        root: {
            backgroundColor: 'transparent',
            color:'#181824',
            display:'block',
            justifyContent:'center',
            marginTop:'20px',
            "& .MuiPaginationItem-previousNext" :{
                backgroundColor:'#0e0e17',
                color:"#A8B60C",
                padding : "17px 25px",
                border:"none"
            },
            "&  button":{
                border:"1px solid #000",
                color:"#A8B60C",
            },
            "& div":{
                color:"#A8B60C",
            },
            "& .Mui-selected":{
                backgroundColor:'#A8B60C',
                color:"black"
            }
        },
    }));
    const classes = useStyles();



    useEffect(() => {
        dispatch(getAsyncPopularMovies({type , count : 28}))
    } ,[type])

    useEffect(() => {
        window.scroll({top : 0 , behavior : 'smooth'})
    } ,[moviePageNum])



    const numOfMovieOnPage = 13;
    const MovieReaded = moviePageNum * numOfMovieOnPage;
    const showMovie = availableData && availableData.slice(MovieReaded , MovieReaded + numOfMovieOnPage).map((movie , index) => {
        return (
            <div className={Styles.miniSliderParent}>
                <MiniSliderSlide key={index} movie={movie}/>
            </div>
        )
    }) 
    const pageCount = availableData ? Math.ceil(availableData.length / numOfMovieOnPage) : 0
    

    const renderSkeleton = ()=>{
        let content = [];
        for (let index = 0; index < numOfMovieOnPage; index++) {
            content.push(
                <div>
                    <Skeleton  variant="rectangular" width={215} height={268} sx={{ bgcolor: "#1d1d2e" }}/>
                    <Skeleton  variant="rectangular" width={100} height={15} sx={{ bgcolor: "#181824" }}/>
                    <Skeleton  variant="rectangular" width={215} height={18} sx={{ bgcolor: "#1d1d2e" }}/>
                </div>
            );
        }
        return content
    }



    return ( 
        <>
        <h2 className={Styles.pageTitle}>Popular {type}</h2>
        <div className={Styles.parent}>
            {showMovie}
            {loading || data === undefined  ? renderSkeleton() : ""}

        </div>
            <div className={Styles.pageParent}>
                {!loading  && (
                    <Pagination 
                        className={Styles.pagination}
                        count={pageCount}  
                        shape={"rounded"} 
                        variant={"string"} 
                        sx= {{
                            "&& .Mui-selected": {
                                backgroundColor: "#d4e60e"
                            },
                            "&& .Mui-selected:hover": {
                                backgroundColor: "#a8b330"
                            }
                        }}
                        onChange={(event , pageNum) =>  setMoviePageNum(pageNum-1)}
                        classes={{root : classes.root}}    
                        renderItem={(item) => (
                            <PaginationItem
                                components={{ previous: ArrowBackRoundedIcon , next: ArrowForwardRoundedIcon}}
                                {...item}
                            />
                        )} 
                    />
                ) }
                
            </div>
        </>
    );
}
 
export default Popular;