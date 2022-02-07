import Styles from './News.module.css'
import { PaginationItem, Skeleton} from "@mui/material"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { makeStyles} from "@mui/styles"
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { AiFillCaretRight } from 'react-icons/ai';
import { useQuery } from '../../../hooks/useQuery';
import { getAsyncNewsDataWithImdbId } from '../../../Redux/Get Movie News By Imdb Id/GetMovieNewsByImdbId';

const News = () => {

    const dispatch = useDispatch()
    const query = useQuery().get("id")

    useEffect(()=>{
        dispatch(getAsyncNewsDataWithImdbId(query))
    },[])

    const { newsData , newsError ,newsLoading } = useSelector(state => state.MovieNewsWithImdbId)

    const [newsPageNum , setNewsPageNum] = useState(0)
    const numOfNewsOnPage = 6;
    const newsReaded = newsPageNum * numOfNewsOnPage;
    const showNews = newsData && newsData.slice(newsReaded , newsReaded + numOfNewsOnPage) 
    .map((item,index) => {
        return (
            <Accordion key={index}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{color:"#fff"}}/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{bgcolor:"#1c1c2b" , color:"#cccccc"}}>
                        <Typography>{item.head}</Typography>
                </AccordionSummary>
                <AccordionDetails 
                    sx={{
                        bgcolor:"#222236" ,
                        color:"#cccccc",
                    }}>
                    <Typography sx={{fontWeight:"100",fontSize:"14px" , fontFamily:"Open Sans light", lineHeight:"26px"}}>{item.body}</Typography>    
                </AccordionDetails>
            </Accordion>
        )
    })
    const pageCount = newsData ? Math.floor(newsData.length / numOfNewsOnPage) : 0


    const useStyles = makeStyles(() =>({
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
        <div className={Styles.parent}>

        {newsError && <p className={Styles.error}>{newsError}</p>}
        {newsData && newsData.length > 0  ? (
            <>
                <header className={Styles.titleParnet}>
                    <h1 className={Styles.title}>News :</h1>
                </header>
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
export default News