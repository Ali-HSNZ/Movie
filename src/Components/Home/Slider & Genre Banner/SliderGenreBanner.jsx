import Styles from './SliderGenreBanner.module.css'
import GenreBanner from './GenreBanner/GenreBanner';
import Slider from './Slider/Slider';

const SliderGenreBanner = () => {
    return (  
        <div className={Styles.parent}>
            <Slider/>
            <GenreBanner/>
        </div>
    );
}
export default SliderGenreBanner;