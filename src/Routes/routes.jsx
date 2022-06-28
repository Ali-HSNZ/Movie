import Home from "../Pages/Home/Home"
import MoviePage from "../Pages/Movie/Movie"
import Genre from './../Pages/Genre/Gnere';
import Popular from './../Pages/Popular/Popular';
import NotFoundPage from './../Pages/404';
import TopRatingMovies from "../Pages/Top Rating Movies/TopRatingMovies";
import AllSeriesByGenre from "../Pages/All Series By Genre/AllSeriesByGenre";
import Cast from './../Pages/Cast/Cast';

 const pageRoutes = [
    {id : 1 , path : "/" , element : <Home/>  },
    {id : 2 , path : "/movie/" , element : <MoviePage/>  },
    {id : 3 , path : "/serial/" , element : <MoviePage/>  },
    {id : 4 , path : '/genre/:q' , element : <Genre/> },
    {id : 5 , path : '/popular' , element : <Popular/> },
    {id : 6 , path : '/topRatingMovies' , element : <TopRatingMovies/> },
    {id : 7 , path : '/allSeriesByGenre' , element : <AllSeriesByGenre/> },
    {id : 8 , path : '/cast' , element : <Cast/> },
    {id : 9 , path : '*', element:<NotFoundPage/>}
]
export default pageRoutes