import AllGenre from "../../Components/All Genre/AllGenre";
import BestAnimationMiniSlider from "../../Components/Best Animation Mini Slider/BestAnimationMiniSlider";
import BestComedyMiniSlider from "../../Components/Best Comedy Mini Slider/BestComedyMovieMiniSlider";
import BestFamilyMovieMiniSlider from "../../Components/Best Family Movie Mini Slider/BestFamilyMovieMiniSlider";
import BestHistorySeriesMiniSlider from "../../Components/Best History Series Mini Slider/BestHistorySeriesMiniSlider";
import BestMovieMiniSlider from "../../Components/Best Movie Mini Slider/BestMovieMiniSlider";
import BestSerialMiniSlider from "../../Components/Best Serial Mini Slider/BestSerialMiniSlider";
import BestWarMovieMiniSlider from "../../Components/Best War Movies Mini Slider/BestWarMoviesMiniSlider";
import SliderGenreBanner from "../../Components/Slider & Genre Banner/SliderGenreBanner";
import Top250MoviesMiniSlider from "../../Components/Top 250 Movies Mini Slider/Top250MoviesMiniSlider";
import TopMoviesRating from "../../Components/Top Movies Rating/TopMoviesRating";
import TopRatedTvShow from "../../Components/Top Rated TV Shows/TopRatedTvShows";

const Home = () => {
    return ( 
        <>
            <SliderGenreBanner/>
            <Top250MoviesMiniSlider/>
            <BestSerialMiniSlider/>
            <BestMovieMiniSlider/>
            <BestComedyMiniSlider/>
            <TopMoviesRating/>
            <BestAnimationMiniSlider/>
            <TopRatedTvShow/>
            <AllGenre/>
            <BestWarMovieMiniSlider/>
            <BestFamilyMovieMiniSlider/>
            <BestHistorySeriesMiniSlider/>
        </>
    ); 
}
 
export default Home;