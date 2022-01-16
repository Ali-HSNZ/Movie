
import Slider from './Slider/Slider';
import Styles from './SliderGenreBanner.module.css'


const SliderGenreBanner = () => {
    return (  
        <div className={Styles.parent}>
            <Slider/>
            <div className={Styles.genreBanner}></div>
        </div>
    );
}
 
export default SliderGenreBanner;