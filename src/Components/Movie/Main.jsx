import MovieDetail from "./detail/MovieDetail"
import News from "./Movie News/News"
import Casts from "./casts/Casts"
import Synopses from "./Movie Synopses/Synopses"
import Keywords from './keywords/Keywords'
import MoreLikeThis from './More like this/MoreLikeThis'
import { useEffect } from "react"
import { useQuery } from "../../hooks/useQuery"

const Main = () => {

    const id = useQuery().get('id')

    useEffect(()=>{
        window.scroll({top:0 ,behavior:"smooth"})
    },[id])
    
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