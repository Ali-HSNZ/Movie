import Home from "../Pages/Home/Home"
import MoviePage from "../Pages/Movie/Movie"

 const pageRoutes = [
    {id : 1 , path : "/" , element : <Home/> },
    {id : 2 , path : "/movie/*" , element : <MoviePage/> },
]
export default pageRoutes