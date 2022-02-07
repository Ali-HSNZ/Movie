import Home from "../Pages/Home/Home"
import MoviePage from "../Pages/Movie/Movie"
import SerialPage from "../Pages/Serial/Serial"

 const pageRoutes = [
    {id : 1 , path : "/" , element : <Home/> },
    {id : 2 , path : "/movie/" , element : <MoviePage/> },
    {id : 3 , path : "/serial/*" , element : <SerialPage/> },
]
export default pageRoutes