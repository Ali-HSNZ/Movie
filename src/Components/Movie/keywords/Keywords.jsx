import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Styles from './Keywords.module.css'
import {getAsyncMovieKeywordsWithMovieId} from '../../../Redux/Get Keywords By Movie Id/GetKeywordsByMovieId'
import {useQuery} from '../../../hooks/useQuery'

import { BiChevronRight } from "react-icons/bi";
import { Skeleton } from '@mui/material';

import {useLocation , Link} from 'react-router-dom'


const Keywords = () => {

    const {pathname} = useLocation()

    const query = useQuery().get("id")
    const dispatch = useDispatch()
    const {data , error , loading} = useSelector(state => state.MovieKeywordsWithMovieId)

    useEffect(()=>{
        if(pathname == '/movie'){
            dispatch(getAsyncMovieKeywordsWithMovieId({page : 'movie' , query}))
        }else if(pathname == '/serial'){
            dispatch(getAsyncMovieKeywordsWithMovieId({page : 'serial' , query}))
        }
    },[query])


    return (  
        <div className={Styles.parent}>
           {data && data.length > 0 &&  <h1 className={Styles.title}>Keywords :</h1>}
            <footer className={Styles.footer}>
                {error && <p className={Styles.error}>{error}</p>}
                {data && data.length > 0 ? (
                    data.map((item,index) => {
                        return(
                            <Link to={{pathname:'/keyword' , search:`name=${item.keyword}`}} className={Styles.group} key={index}>
                                <span className={Styles.groupTitle}>
                                    {item.keyword}
                                    <BiChevronRight className={Styles.groupTitleIcon} size={"23px"}/>
                                </span>
                            </Link>
                        )
                    })
                ) : (
                    <>
                    {loading && (
                        <>
                            <div>
                                <Skeleton variant='rectangular' height={35} sx={{ bgcolor: "#1d1d2e"  , minWidth : "200px"}}/>
                                <Skeleton variant='rectangular' height={10} sx={{ bgcolor: "#181824"  , minWidth : "200px"}}/>
                            </div>
                            <div style={{display:'flex',flexWrap:'wrap'}}>
                                <Skeleton variant='rectangular' height={25} sx={{ bgcolor: "#1d1d2e"  , minWidth : "200px"}}/>
                                <Skeleton variant='rectangular' height={25} sx={{ bgcolor: "#181824"  , minWidth : "10px"}}/>
                                
                                <Skeleton variant='rectangular' height={25} sx={{ bgcolor: "#1d1d2e"  , minWidth : "200px"}}/>
                                <Skeleton variant='rectangular' height={25} sx={{ bgcolor: "#181824"  , minWidth : "10px"}}/>

                                <Skeleton variant='rectangular' height={25} sx={{ bgcolor: "#1d1d2e"  , minWidth : "200px"}}/>
                                <Skeleton variant='rectangular' height={25} sx={{ bgcolor: "#181824"  , minWidth : "10px"}}/>

                                <Skeleton variant='rectangular' height={25} sx={{ bgcolor: "#1d1d2e"  , minWidth : "200px"}}/>
                                <Skeleton variant='rectangular' height={25} sx={{ bgcolor: "#181824"  , minWidth : "10px"}}/>

                                <Skeleton variant='rectangular' height={25} sx={{ bgcolor: "#1d1d2e"  , minWidth : "200px"}}/>
                                <Skeleton variant='rectangular' height={25} sx={{ bgcolor: "#181824"  , minWidth : "10px"}}/>

                                <Skeleton variant='rectangular' height={25} sx={{ bgcolor: "#1d1d2e"  , minWidth : "200px"}}/>
                                <Skeleton variant='rectangular' height={25} sx={{ bgcolor: "#181824"  , minWidth : "10px"}}/>

                            </div>
                    </>  
                    )}
                    </>
                )}
            </footer>
        </div>
    );
}
 
export default Keywords;