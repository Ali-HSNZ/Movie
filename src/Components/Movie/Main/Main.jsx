import Styles from "./Main.module.css"
import { useDispatch, useSelector } from "react-redux"
import { useQuery } from "../../../hooks/useQuery"
import { getAsyncMovieDataWithImdbId } from "../../../Redux/Get Movie Data With imdb Id/GetMovieDataWithImdbId"
import { useEffect, useState } from "react"
import { makeStyles} from "@mui/styles"
import { PaginationItem, Skeleton} from "@mui/material"

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { getAsyncSynopsesDataWithImdbId } from "../../../Redux/Get Movie Synopses With Imdb Id/GetMovieSynopsesWithImdbId"
import { getAsyncNewsDataWithImdbId } from "../../../Redux/Get Movie News By Imdb Id/GetMovieNewsByImdbId"

const Main = () => {
    const query = useQuery().get("id")

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAsyncMovieDataWithImdbId(query))
        dispatch(getAsyncSynopsesDataWithImdbId(query))
        dispatch(getAsyncNewsDataWithImdbId(query))
    },[query])

    return (  
        <div className={Styles.parent}>
            <MovieDetail/>
            <Synopses/>
            <News/>
        </div>
    )
}
export default Main;

export const MovieDetail = () => {

    const { data } = useSelector(state => state.MovieDataWithImdbId)

    const movie_hr = data && Math.floor(data.movie_length/60); 
    const movie_min = data && Math.floor(data.movie_length % 60);

    return (  
        <div className={Styles.movieDetail}>
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
                    {data.gen ? data.gen.map(gen => {
                        return (
                            <span className={Styles.propertiesGroup_detail}>{gen.genre} , </span>
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


export const Synopses = () => {
    const [isfullSynopses ,setIsFullSynopses] = useState(true)
    const { synopsesData , synopsesError ,synopsesLoading } = useSelector(state => state.MovieSynopsesWithImdbId)

    return (  
        <div className={Styles.SynopsesParent}>
            {synopsesError && <p className={Styles.error}>{synopsesError}</p>}
            {synopsesData && synopsesData.text  ?(
                <>
                    <h2 className={Styles.SynopsesTitle}>Synopses : </h2>
                    <h5 className={Styles.synopsesText}>
                        {isfullSynopses === true && synopsesData.text.length >=1100 && synopsesData.text.substring(0,1100)+"..."}
                        {isfullSynopses === false && synopsesData.text}
                        <button onClick={()=>setIsFullSynopses(!isfullSynopses)} className={Styles.synopsesDataButton}>{isfullSynopses ? "More" : "Less"}</button>
                    </h5>
                
                </>
            ) :(
                <>
                    {synopsesLoading &&(
                        <>
                            <Skeleton variant='rectangular' width={187} height={33} className = {Styles.describtionParent_keleton} sx={{ bgcolor: "#1d1d2e"}}/>
                            <Skeleton variant='rectangular' width={187} height={13} className = {Styles.describtionParent_keleton} sx={{ bgcolor: "#181824" , minWidth : "100%" }}/>   
                            {/* Breake */}
                            <Skeleton variant='rectangular' width={187} height={27} className = {Styles.describtionParent_keleton} sx={{ bgcolor: "#1d1d2e" , minWidth : "100%" }}/>                   
                            <Skeleton variant='rectangular' width={187} height={13} className = {Styles.describtionParent_keleton} sx={{ bgcolor: "#181824" , minWidth : "100%" }}/>                  
                            {/* Breake */}
                            <Skeleton variant='rectangular' width={187} height={27} className = {Styles.describtionParent_keleton} sx={{ bgcolor: "#1d1d2e" , minWidth : "100%" }}/>  
                            <Skeleton variant='rectangular' width={187} height={13} className = {Styles.describtionParent_keleton} sx={{ bgcolor: "#181824" , minWidth : "100%" }}/>                  
                            {/* Breake */}
                            <Skeleton variant='rectangular' width={187} height={27} className = {Styles.describtionParent_keleton} sx={{ bgcolor: "#1d1d2e" , minWidth : "100%" }}/>  
                            <Skeleton variant='rectangular' width={187} height={13} className = {Styles.describtionParent_keleton} sx={{ bgcolor: "#181824" , minWidth : "100%" }}/>                  
                            {/* Breake */}
                            <Skeleton variant='rectangular' width={187} height={27} className = {Styles.describtionParent_keleton} sx={{ bgcolor: "#1d1d2e" , minWidth : "100%" }}/>  
                        </>
                    ) }
                </>
            )}
        </div>
    );
}


export const News = () => {

    const { newsData , newsError ,newsLoading } = useSelector(state => state.MovieNewsWithImdbId)

    const [newsPageNum , setNewsPageNum] = useState(0)
    const numOfNewsOnPage = 6;
    const newsReaded = newsPageNum * numOfNewsOnPage;
    const showNews = newsData.slice(newsReaded , newsReaded + numOfNewsOnPage)
    .map(item => {
        return (
            <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{color:"#fff"}}/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{bgcolor:"#1c1c2b" , color:"#cccccc"}}
                >
                    <Typography>{item.head}</Typography>
            </AccordionSummary>
            <AccordionDetails 
                sx={{
                    bgcolor:"#222236" ,
                     color:"#cccccc",
    
                }}
            >
                <Typography sx={{fontWeight:"100",fontSize:"14px" , fontFamily:"Open Sans light", lineHeight:"26px"}}>{item.body}</Typography>
                
            </AccordionDetails>
        </Accordion>
        )
    })
    const pageCount = newsData ? Math.ceil(newsData.length / numOfNewsOnPage) : 0


    const useStyles = makeStyles((theme) =>({
        root: {
            backgroundColor: 'transparent',
            color:'#181824',
            display:'flex',
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


    return (  
        <div className={Styles.movieNewsParent}>

        {newsError && <p className={Styles.error}>{newsError}</p>}
        {newsData && newsData.length > 0  ? (
            <>
                <h1 className={Styles.movieNewsTitle}>News</h1>
                <section className={Styles.movieItem}>
                    {newsData && showNews }
                </section>

                <Stack spacing={5}>
                    <Pagination 
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
                        onChange={(event , pageNum) =>  setNewsPageNum(pageNum-1)}
                        classes={{root : classes.root}}    
                        renderItem={(item) => (
                            <PaginationItem
                                components={{ previous: ArrowBackRoundedIcon , next: ArrowForwardRoundedIcon}}
                                {...item}
                            />
                        )}
                    />
                </Stack>
            </>
        ) : (
        <>
            {newsLoading && (
                <>
                    <Skeleton variant='rectangular' width={187} height={33} className = {Styles.describtionParent_keleton} sx={{ bgcolor: "#1d1d2e"}}/>
                    <Skeleton variant='rectangular' width={187} height={13} className = {Styles.describtionParent_keleton} sx={{ bgcolor: "#181824" , minWidth : "100%" }}/>   

                    <Skeleton variant='rectangular' width={187} height={25} className = {Styles.describtionParent_keleton} sx={{ bgcolor: "#1d1d2e"  , minWidth : "100%"}}/>
                    <Skeleton variant='rectangular' width={187} height={13} className = {Styles.describtionParent_keleton} sx={{ bgcolor: "#181824" , minWidth : "100%" }}/>   

                    <Skeleton variant='rectangular' width={187} height={25} className = {Styles.describtionParent_keleton} sx={{ bgcolor: "#1d1d2e"  , minWidth : "100%"}}/>
                    <Skeleton variant='rectangular' width={187} height={13} className = {Styles.describtionParent_keleton} sx={{ bgcolor: "#181824" , minWidth : "100%" }}/>   

                    <Skeleton variant='rectangular' width={187} height={25} className = {Styles.describtionParent_keleton} sx={{ bgcolor: "#1d1d2e"  , minWidth : "100%"}}/>
                    <Skeleton variant='rectangular' width={187} height={13} className = {Styles.describtionParent_keleton} sx={{ bgcolor: "#181824" , minWidth : "100%" }}/>   

                    <Skeleton variant='rectangular' width={187} height={25} className = {Styles.describtionParent_keleton} sx={{ bgcolor: "#1d1d2e"  , minWidth : "100%"}}/>
                    <Skeleton variant='rectangular' width={187} height={13} className = {Styles.describtionParent_keleton} sx={{ bgcolor: "#181824" , minWidth : "100%" }}/>   

                    <Skeleton variant='rectangular' width={187} height={25} className = {Styles.describtionParent_keleton} sx={{ bgcolor: "#1d1d2e"  , minWidth : "100%"}}/>
                    <Skeleton variant='rectangular' width={187} height={13} className = {Styles.describtionParent_keleton} sx={{ bgcolor: "#181824" , minWidth : "100%" }}/>   
                    
                    <Skeleton variant='rectangular' width={187} height={25} className = {Styles.describtionParent_keleton} sx={{ bgcolor: "#1d1d2e"  , minWidth : "100%"}}/>
                    <Skeleton variant='rectangular' width={187} height={13} className = {Styles.describtionParent_keleton} sx={{ bgcolor: "#181824" , minWidth : "100%" }}/>   
                </>
            )}
        </>
        )}
            
        </div>
    );
}