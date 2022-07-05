import Home from "../Pages/Home/Home"
import MoviePage from "../Pages/Movie/Movie"
import Genre from './../Pages/Genre/Gnere';
import Popular from './../Pages/Popular/Popular';
import NotFoundPage from './../Pages/404';
import TopRatingMovies from "../Pages/Top Rating Movies/TopRatingMovies";
import AllSeriesByGenre from "../Pages/All Series By Genre/AllSeriesByGenre";
import Cast from './../Pages/Cast/Cast';
import Keyword from './../Pages/Keyword/Keyword';
import AllMoviesByGenre from "../Pages/All Movies By Genre/AllMoviesByGenre";

 const pageRoutes = [
    {id : 1 , path : "/" , element : <Home/>  },
    {id : 2 , path : "/movie/" , element : <MoviePage/>  },
    {id : 3 , path : "/serial/" , element : <MoviePage/>  },
    {id : 4 , path : '/genre/:q' , element : <Genre/> },
    {id : 5 , path : '/popular' , element : <Popular/> },
    {id : 6 , path : '/topRatingMovies' , element : <TopRatingMovies/> },
    {id : 7 , path : '/allMoviesByGenre' , element : <AllMoviesByGenre/> },
    {id : 8 , path : '/allSeriesByGenre' , element : <AllSeriesByGenre/> },
    {id : 9 , path : '/cast' , element : <Cast/> },
    {id : 10 , path : '/Keyword', element:<Keyword/>},
    {id : 11 , path : '*', element:<NotFoundPage/>},
]
export default pageRoutes