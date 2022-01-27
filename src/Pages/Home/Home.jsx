import AllMoviesByGenre from "../../Components/All Movies By Genre/AllMoviesByGenre";
import BestAnimationMiniSlider from "../../Components/Best Animation Mini Slider/BestAnimationMiniSlider";
import BestComedyMiniSlider from "../../Components/Best Comedy Mini Slider/BestComedyMovieMiniSlider";
import BestFamilyMovieMiniSlider from "../../Components/Best Family Movie Mini Slider/BestFamilyMovieMiniSlider";
import BestHistorySeriesMiniSlider from "../../Components/Best History Series Mini Slider/BestHistorySeriesMiniSlider";
import BestMovieMiniSlider from "../../Components/Best Movie Mini Slider/BestMovieMiniSlider";
import BestSerialMiniSlider from "../../Components/Best Serial Mini Slider/BestSerialMiniSlider";
import BestWarMovieMiniSlider from "../../Components/Best War Movies Mini Slider/BestWarMoviesMiniSlider";
import SliderGenreBanner from "../../Components/Slider & Genre Banner/SliderGenreBanner";
import TopMoviesRating from "../../Components/Top Movies Rating/TopMoviesRating";
import TopRatedTvShow from "../../Components/Top Rated TV Shows/TopRatedTvShows";

const Home = () => {
    return ( 
        <>
            <SliderGenreBanner/>
            <BestSerialMiniSlider/>
            <BestMovieMiniSlider/>
            <BestComedyMiniSlider/>
            <TopMoviesRating/>
            <BestAnimationMiniSlider/>
            <TopRatedTvShow/>
            <AllMoviesByGenre/>
            <BestWarMovieMiniSlider/>
            <BestFamilyMovieMiniSlider/>
            <BestHistorySeriesMiniSlider/>
        </>
    ); 
}
 
export default Home;