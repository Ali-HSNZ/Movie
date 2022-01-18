import AllGenre from "../../Components/All Genre/AllGenre";
import BestAnimationMiniSlider from "../../Components/Best Animation Mini Slider/BestAnimationMiniSlider";
import BestComedyMiniSlider from "../../Components/Best Comedy Mini Slider/BestMovieMiniSlider";
import BestMovieMiniSlider from "../../Components/Best Movie Mini Slider/BestMovieMiniSlider";
import BestSerialMiniSlider from "../../Components/Best Serial Mini Slider/BestSerialMiniSlider";
import SliderGenreBanner from "../../Components/Slider & Genre Banner/SliderGenreBanner";
import TopMoviesRating from "../../Components/Top Movies Rating/TopMoviesRating";

const Home = () => {
    return ( 
        <>
            <SliderGenreBanner/>
            <BestSerialMiniSlider/>
            <BestMovieMiniSlider/>
            <TopMoviesRating/>
            <BestComedyMiniSlider/>
            <AllGenre/>
            <BestAnimationMiniSlider/>
        </>
    ); 
}
 
export default Home;