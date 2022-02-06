import MovieDetail from "./Movie Detail/MovieDetail"
import News from "./Movie News/News"
import Casts from "./Movie Casts/Casts"
import Synopses from "./Movie Synopses/Synopses"
import Keywords from './Movie Keywords/Keywords'
const Main = () => {
    return (  
        <>
            <MovieDetail/>
            <Synopses/>
            <Casts/>
            <News/>
            <Keywords/>
        </>
    )
}
export default Main;