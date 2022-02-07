import MovieDetail from "./Movie Detail/MovieDetail"
import News from "./Movie News/News"
import Casts from "./Movie Casts/Casts"
import Synopses from "./Movie Synopses/Synopses"
import Keywords from './Movie Keywords/Keywords'
import MoreLikeThis from './Movie More Like This/MoreLikeThis'
import { useQuery } from "../../hooks/useQuery"
import { useEffect } from "react"

const Main = () => {
    
    const query = useQuery().get("id")

    useEffect(()=>{
        window.scroll({top:0 ,behavior:"smooth"})
    },[query])
    
    return (  
        <>
            <MovieDetail/>
            <Synopses/>
            <Casts/>
            <News/>
            <Keywords/>
            <MoreLikeThis/>
        </>
    )
}
export default Main;