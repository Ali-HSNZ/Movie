import Styles from './NavTab.module.css'
import { NavLink, Route, Routes } from 'react-router-dom';
import { Skeleton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {getAsyncMovieDataWithImdbId} from '../../../Redux/Get Movie Data With imdb Id/GetMovieDataWithImdbId'
import {useQuery} from '../../../hooks/useQuery'
import {Main , Actor , ProductionLocations , AllNews , Awards} from '../MovieNavTab';
import { useEffect } from 'react';


function NavTabs(props) {

    const query = useQuery().get("id")

    const {data , loading , error} = useSelector(state => state.MovieDataWithImdbId)

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAsyncMovieDataWithImdbId(query))
    },[query])


    return (
        <>
        {loading && <Skeleton variant='rectangular' width={500} height={27}  sx={{ bgcolor: "#1d1d2e" }} style={{margin : "20px 0"}}/>}
        {error && <p className={Styles.error}>{error}</p>}
        {data && <h1 className={Styles.movieTitle}>{data.title}</h1>}
            
            <div className={Styles.tabParent}>
               <NavLink className={({isActive}) => isActive ? Styles.tabActive : Styles.tabNotActive} to={{pathname:"main" , search:`id=${query}`}}> Main</NavLink>
               <NavLink className={({isActive}) => isActive ? Styles.tabActive : Styles.tabNotActive}  to={{pathname:"actors" , search:`id=${query}`}}>Actors</NavLink>
               <NavLink className={({isActive}) => isActive ? Styles.tabActive : Styles.tabNotActive}  to={{pathname:"production-locations" , search:`id=${query}`}}>Production locations</NavLink>
               <NavLink className={({isActive}) => isActive ? Styles.tabActive : Styles.tabNotActive}  to={{pathname:"awards" , search:`id=${query}`}}>Awards</NavLink>
               <NavLink className={({isActive}) => isActive ? Styles.tabActive : Styles.tabNotActive}  to={{pathname:"all-news" , search:`id=${query}`}}>All News</NavLink>
            </div>

            <Routes>
                <Route path={`/main`} element={<Main/>}></Route>
                <Route path={`/actors`} element={<Actor/>}></Route>
                <Route path={`/production-locations`} element={<ProductionLocations/>}></Route>
                <Route path={`/awards`} element={<Awards/>}></Route>
                <Route path={`/all-news`} element={< AllNews/>}></Route>
            </Routes>
            
        </>
    );
}
export default NavTabs