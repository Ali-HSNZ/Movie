import Styles from './Synopsis.module.css'
import { Skeleton} from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAsyncSynopsesDataWithImdbId } from '../../../Redux/Get Movie Synopses With Imdb Id/GetMovieSynopsesWithImdbId'
import { useQuery } from '../../../hooks/useQuery'

const Synopsis = () => {

    const dispatch = useDispatch()
    const query = useQuery().get("id")

    useEffect(()=>{
        dispatch(getAsyncSynopsesDataWithImdbId(query))
    },[])

    const { synopsesData , synopsesError ,synopsesLoading } = useSelector(state => state.MovieSynopsesWithImdbId)

    return (  
        <div className={Styles.parent}>
            {synopsesError && <p className={Styles.error}>{synopsesError}</p>}
            {synopsesData && synopsesData.text ?(
                <>
                    <h2 className={Styles.synopsesTitle}>Synopses : </h2>
                    <h5 className={Styles.text}>
                        {synopsesData.text && synopsesData.text.length >=1100 ? synopsesData.text.substring(0,1100)+"..." : synopsesData.text}
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
export default Synopsis