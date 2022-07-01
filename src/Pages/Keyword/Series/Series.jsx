import { useQuery } from './../../../hooks/useQuery';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import MiniSliderSlide from './../../../Common/Mini Slider Slide/MiniSliderSlide';
import Styles from '../Keyword.module.css'

import { getAsyncSeriesByKeyword } from '../../../Redux/Get Series By Keyword/GetSeriesByKeyword';
import { Skeleton } from '@mui/material';

const Series = () => {
    const keyword = useQuery().get('name')
    const dispatch = useDispatch()
    const movieCount = 24;
    const {data , loading , error} = useSelector(state => state.getSeriesByKeyword)

    useEffect(()=> {
        dispatch(getAsyncSeriesByKeyword({keyword , count :  22}))
    },[])

    const renderSkeleton = ()=>{
        let content = [];
        for (let index = 0; index < movieCount; index++) {
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
        <div className={Styles.parent}>
            <h1 className={Styles.movieTitle}>Series :</h1>

            <div className={Styles.movieParent}>
            {loading  || data == undefined && renderSkeleton()}

                {data && data.map(movie => {
                    return(
                        <div className={Styles.miniSliderSlideParent}>
                            <MiniSliderSlide movie={movie}/>
                        </div>
                    )
                })}
            </div>
        </div>
     );
}
 
export default Series;