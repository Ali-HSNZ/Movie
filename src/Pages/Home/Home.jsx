import BestMovieMiniSlider from "../../Components/Best Movie Mini Slider/BestMovieMiniSlider";
import BestSerialMiniSlider from "../../Components/Best Serial Mini Slider/BestSerialMiniSlider";
import SliderGenreBanner from "../../Components/Slider & Genre Banner/SliderGenreBanner";

const Home = () => {
    return ( 
        <>
            <SliderGenreBanner/>
            <BestSerialMiniSlider/>
            <BestMovieMiniSlider/>
        </>
        
    );
}
 
export default Home;