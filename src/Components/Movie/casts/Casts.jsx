import Styles from './Casts.module.css'
import userImage from '../../../images/userImage.png'
import { Skeleton} from "@mui/material"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAsyncGetMovieCastByImdbId } from '../../../Redux/Get Movie Cast By Movie Id/GetMovieCastByMovieId'
import { useQuery } from '../../../hooks/useQuery'
import {useLocation , Link} from 'react-router-dom'
const Casts = () => {

    const {pathname} = useLocation()
    
    const query = useQuery().get("id")

    const dispatch = useDispatch()

    useEffect(()=>{
        if(pathname == '/movie'){
            dispatch(getAsyncGetMovieCastByImdbId({page : 'movie' , query}))
        }else if(pathname == '/serial'){
            dispatch(getAsyncGetMovieCastByImdbId({page : 'serial' , query}))
        }
    },[query])

    const renderSkeleton = () => {
        return (
            <>
                <Skeleton variant='rectangular' width={187} height={33} sx={{ bgcolor: "#1d1d2e"}}/>
                <Skeleton variant='rectangular' width={187} height={13} sx={{ bgcolor: "#181824" , minWidth : "100%" }}/>   
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

                <Skeleton variant='rectangular' width={187} height={13} sx={{ bgcolor: "#181824" , minWidth : "100%" }}/>   
                
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
                
                <Skeleton variant='rectangular' width={187} height={13} sx={{ bgcolor: "#181824" , minWidth : "100%" }}/>   
                
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
        )
    }

    const {castData , castLoading , castError} = useSelector(state => state.MovieCasts)
    

    return(
        <div className={Styles.parent}>
            {castError && <p className={Styles.error}>{castError}</p>}
            {castData && castData.length > 0  ? (
                <>                    
                    <header className={Styles.parentHead}>
                        <h1 className={Styles.movieCastTitle}>Casts :</h1>
                    </header>
             
                    <div className={Styles.footer}>
                        {castData.map((cast,index) => {
                            return(
                                <Link to={{pathname:'/cast' , search:`actorId=${cast.imdb_id}`}} className={Styles.group} key={index}>
                                    <div className={Styles.imgParent}>
                                    {cast.image_url ?(
                                        <img  src={`https://img.gs/knzwmsmxwd/34x50,quality=low/${cast.image_url}`}/>
                                    ) : (
                                        <img  src={userImage}/>
                                    )}
                                    </div>
                                    <hr/>
                                    <div  className={Styles.title}>
                                        <p className={Styles.cast_name}>{cast.name}</p>
                                        <p className={Styles.cast_starSign}>{cast.star_sign == "" || cast.star_sign == "-" ? 'Unknown' : cast.star_sign}</p>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </>
            ) :  <> {castLoading  && renderSkeleton()} </> }
           
        </div>
    )
}
export default Casts