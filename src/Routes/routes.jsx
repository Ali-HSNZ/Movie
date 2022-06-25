import Home from "../Pages/Home/Home"
import MoviePage from "../Pages/Movie/Movie"
import Genre from './../Components/Genre/Gnere';

 const pageRoutes = [
    {id : 1 , path : "/" , element : <Home/> },
    {id : 2 , path : "/movie/" , element : <MoviePage/> },
    {id : 3 , path : "/serial/" , element : <MoviePage/> },
    {id : 4 , path : '/genre/:q' , element : <Genre/>},
]
export default pageRoutes