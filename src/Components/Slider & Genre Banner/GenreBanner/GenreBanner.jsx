import Styles from './GenreBanner.module.css'
const GenreBanner = () => {
    return (  
        <div className={Styles.genreBanner}>

        <div className={Styles.parentDiv}>
            <div className={Styles.parentDivChildren}>
                <div><p>Action</p></div>
                
            </div>    
        </div>

        <div className={Styles.parentDiv}>
            <div className={Styles.parentDivChildren}>
                
                <div><p>Animation</p></div>
            </div>    
        </div>

        <div className={Styles.parentDiv}>
            <div className={Styles.parentDivChildren}>
                
                <div><p>drama </p></div>
            </div>    
        </div>

    </div>
    );
}
 
export default GenreBanner;