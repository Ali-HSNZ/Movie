import Styles from './Detail.module.css'
import { Skeleton} from "@mui/material"
import { useDispatch, useSelector } from 'react-redux'
import { useQuery } from '../../../hooks/useQuery'
import { useEffect } from 'react'
import { getAsyncActorBio } from '../../../Redux/Get Actor Bio/GetActorBio';

const Detail = () => {


    const actorId = useQuery().get("actorId")

    const dispatch = useDispatch()
 
    useEffect(()=>{
        dispatch(getAsyncActorBio(actorId))
    },[])

    const { data , loading , error } = useSelector(state => state.GetActorBio)


    return (  
        <>
            {error ? <span>{error}</span> : (
                <>
                    <div className={Styles.movieTitleParent}>
                        {loading ? (
                            <Skeleton variant='rectangular' width={187} height={33} sx={{ bgcolor: "#1d1d2e" , minWidth : "100px" }}/>
                        ) : (
                            <h2>{data.name}</h2>
                        )}
                    </div>

                    <div className={Styles.parent}>
                        <div className={Styles.imgParent}>
                            {loading ? (
                                <Skeleton variant='rectangular' width={187} height={280}  sx={{ bgcolor: "#1d1d2e" }}/>
                                ) : (
                                <img src={`https://img.gs/knzwmsmxwd/187x280,quality=low/${data.image ? data.image.url : "Unknown"}`}/>
                            )}
                        </div>
                        <div className={Styles.describtionParent}>
                            {loading ? (
                                <>
                                    <Skeleton variant='rectangular' width={187} height={22} sx={{ bgcolor: "#1d1d2e" , minWidth : "100%" }}/>
                                    <Skeleton variant='rectangular' width={187} height={13} sx={{ bgcolor: "#181824" , minWidth : "100%" }}/>
                                    <Skeleton variant='rectangular' width={187} height={22} sx={{ bgcolor: "#1d1d2e" , minWidth : "100%" }}/>
                                    <Skeleton variant='rectangular' width={187} height={13} sx={{ bgcolor: "#181824" , minWidth : "100%" }}/>
                                    <Skeleton variant='rectangular' width={187} height={22} sx={{ bgcolor: "#1d1d2e" , minWidth : "100%" }}/>
                                </>
                            ) : (
                                <h4>{data.miniBios ? data.miniBios[0].language.toUpperCase() + ' - ' +data.miniBios[0].text : "un"}</h4>
                            )}
                        </div>
                            {loading ? (
                                <Skeleton variant='rectangular' width={270} height={266} sx={{ bgcolor: "#1d1d2e" , minWidth : "270px" }}/>
                            ) : (
                                <div className={Styles.propertiesParent}>

                                    <div className={Styles.propertiesGroup}>
                                        <span className={Styles.propertiesGroup_title}>Real Name : </span>
                                        <span className={Styles.propertiesGroup_detail}>{data.realName ? data.realName : "Unknown"}</span> 
                                    </div>




                                    <div className={Styles.propertiesGroup}>
                                        <span className={Styles.propertiesGroup_title}>Gender : </span>
                                        <span className={Styles.propertiesGroup_detail}>{data.gender ? data.gender : "Unknown"}</span> 
                                    </div>

                                    <div className={Styles.propertiesGroup}>
                                        <span className={Styles.propertiesGroup_title}>Birth Date : </span>
                                        <span className={Styles.propertiesGroup_detail}>{data.birthDate ? data.birthDate : "Unknown"}</span> 
                                    </div>

                                    <div className={Styles.propertiesGroup}>
                                        <span className={Styles.propertiesGroup_title}>Birth Place : </span>
                                        <span className={Styles.propertiesGroup_detail}>{data.birthPlace ? data.birthPlace : "Unknown"}</span> 
                                    </div>

                                    <div className={Styles.propertiesGroup}>
                                        <span className={Styles.propertiesGroup_title}>height Centimeters : </span>
                                        <span className={Styles.propertiesGroup_detail}>{data.heightCentimeters ? data.heightCentimeters : "Unknown"}</span> 
                                    </div>


                                </div>
                            )}
                    </div>


                </>
            )}
        </>
    );
}
export default Detail