import Styles from "./TopMoviesRating.module.css"
import { AiFillCaretRight } from "react-icons/ai";
import { BsFillCaretRightFill } from "react-icons/bs";

const TopMoviesRating = () => {
    return (  
        <div className={Styles.parent}>

            <p className={Styles.title}>Top Movies Rating
                <AiFillCaretRight/>
            </p>

            <div className={Styles.footer}>


                    <div className={Styles.item}>

                        <div className={Styles.item_numberLine}>
                            <p>1</p>
                            <div className={Styles.item_line}></div>
                        </div>
                        
                        <div className={Styles.desc}>
                            <p className={Styles.item_movieTitle}>The Get Together</p>
                            <p className={Styles.item_movieRating}>Rating : 9.4</p>
                        </div>
                        <div className={Styles.item_play}>
                            <BsFillCaretRightFill size='24px'/>
                        </div>

                    </div>
                    
                    <div className={Styles.item}>

                        <div className={Styles.item_numberLine}>
                            <p>1</p>
                            <div className={Styles.item_line}></div>
                        </div>
                        
                        <div className={Styles.desc}>
                            <p className={Styles.item_movieTitle}>The Get Together</p>
                            <p className={Styles.item_movieRating}>Rating : 9.4</p>
                        </div>
                        <div className={Styles.item_play}>
                            <BsFillCaretRightFill size='24px'/>
                        </div>

                    </div>

                    <div className={Styles.item}>

                        <div className={Styles.item_numberLine}>
                            <p>1</p>
                            <div className={Styles.item_line}></div>
                        </div>
                        
                        <div className={Styles.desc}>
                            <p className={Styles.item_movieTitle}>The Get Together</p>
                            <p className={Styles.item_movieRating}>Rating : 9.4</p>
                        </div>
                        <div className={Styles.item_play}>
                            <BsFillCaretRightFill size='24px'/>
                        </div>

                    </div>
                    
                    <div className={Styles.item}>

                        <div className={Styles.item_numberLine}>
                            <p>1</p>
                            <div className={Styles.item_line}></div>
                        </div>
                        
                        <div className={Styles.desc}>
                            <p className={Styles.item_movieTitle}>The Get Together</p>
                            <p className={Styles.item_movieRating}>Rating : 9.4</p>
                        </div>
                        <div className={Styles.item_play}>
                            <BsFillCaretRightFill size='24px'/>
                        </div>

                    </div>
            </div>


        </div>
    );
}
 
export default TopMoviesRating;