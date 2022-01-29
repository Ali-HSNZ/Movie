import AllMoviesByGenre from "../../Components/Home/All Movies By Genre/AllMoviesByGenre";
import AllSeriesByGenre from "../../Components/Home/All Series By Genre/AllSeriesByGenre";
import BestAnimationMiniSlider from "../../Components/Home/Best Animation Mini Slider/BestAnimationMiniSlider";
import BestComedyMiniSlider from "../../Components/Home/Best Comedy Mini Slider/BestComedyMovieMiniSlider";
import BestFamilyMovieMiniSlider from "../../Components/Home/Best Family Movie Mini Slider/BestFamilyMovieMiniSlider";
import BestHistoryMoviesMiniSlider from "../../Components/Home/Best History Movies Mini Slider/BestHistoryMoviesMiniSlider";
import BestMovieMiniSlider from "../../Components/Home/Best Movie Mini Slider/BestMovieMiniSlider";
import BestSerialMiniSlider from "../../Components/Home/Best Serial Mini Slider/BestSerialMiniSlider";
import BestWarMovieMiniSlider from "../../Components/Home/Best War Movies Mini Slider/BestWarMoviesMiniSlider";
import SliderGenreBanner from "../../Components/Home/Slider & Genre Banner/SliderGenreBanner";
import TopMoviesRating from "../../Components/Home/Top Movies Rating/TopMoviesRating";
import TopRatedTvShow from "../../Components/Home/Top Rated TV Shows/TopRatedTvShows";

const Home = () => {
    return ( 
        <>
            <SliderGenreBanner/>
            <BestSerialMiniSlider/>
            <BestMovieMiniSlider/>
            <TopMoviesRating/>
            <BestComedyMiniSlider/>
            <BestAnimationMiniSlider/>
            <TopRatedTvShow/>
            <AllMoviesByGenre/>
            <BestWarMovieMiniSlider/>
            <BestFamilyMovieMiniSlider/>
            <AllSeriesByGenre/>
            <BestHistoryMoviesMiniSlider/>
        </>
    ); 
}
 
export default Home;