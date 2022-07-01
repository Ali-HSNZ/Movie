import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getAsyncActorMoviesAction } from './../../../Redux/Get Actor Movies By Actor Id/GetActorMoviesByActorId';
import { useEffect } from 'react';
import MiniSliderSlide from '../../../Common/Mini Slider Slide/MiniSliderSlide';
import Styles from './Series.module.css'
import { useQuery } from './../../../hooks/useQuery';
import { Skeleton } from '@mui/material';
import { getAsyncActorSeriesAction } from '../../../Redux/Get Actor Series By Actor Id/GetActorSeriesByActorId';


const Series = () => {
    const actorId = useQuery().get('actorId')
    const dispatch = useDispatch()
    const { data , loading , error} = useSelector(state => state.getActorSeries)

    useEffect(()=> {
        window.scroll({top : 0 , behavior : 'smooth'})
        dispatch(getAsyncActorSeriesAction(actorId))
    },[actorId])

    const renderSkeleton = ()=>{
        let content = [];
        for (let index = 0; index < 8; index++) {
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
        
           { data && data.length > 0 &&  <h1 className={Styles.title}>Series :</h1>}
            
            <div className={Styles.movieParent}>
                {loading || data === undefined && renderSkeleton()}

                    
                {data && data.map((movie,index) => {
                    return (
                        <div className={Styles.miniSliderParent}>
                            <MiniSliderSlide movie={movie}/>
                        </div>
                    )
                })}
            </div>
        
        </div>
    );
};

export default Series;
