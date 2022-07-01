import Styles from './Awards.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useQuery } from './../../../hooks/useQuery';
import { getAsyncActorAwards } from '../../../Redux/Get Actor Awards By Actor Id/GetActorAwardsById';
import { Link } from 'react-router-dom';


const Awards = () => {

    const actorId = useQuery().get('actorId')
    const {data , loading , error } = useSelector(state => state.GetActorAwards)
    const dispatch = useDispatch()

    console.log("dataaaaaaaa======>",data)


    useEffect(() => {
        dispatch(getAsyncActorAwards({actorId , count : 7}))
    }, [])
    return ( 
        <div className={Styles.parent}>
            {data && data.length > 0 && <h1 className={Styles.title}>Awards :</h1>}
            <div className={Styles.awardsParent}>

                {data && data.map(award => {
                    return(
                        <div className={Styles.award}>
                        <div>                    
                            <div><span className={Styles.awardTitle}>Award Name : </span> <span>{award.awardName}</span></div>
                            <div><span className={Styles.awardTitle}>Event Name : </span> <span>{award.eventName}</span></div>
                        </div>
                        <hr/>
                        <div className={Styles.awardTitleParent}>
                            {award.nominations.titles && <Link to={{pathname :`/movie` , search: `id=${award.nominations.titles && award.nominations.titles[0].id.replace('/title/','').replace('/','')}`}}>Movie : {award.nominations.titles && award.nominations.titles[0].title}</Link>} 
                            {award.isWinner &&<span className={Styles.awardTitle_type}>Winner</span>}
                        </div>
                    </div>
                    )
                })}



            </div>
        </div>
     );
}
 
export default Awards;