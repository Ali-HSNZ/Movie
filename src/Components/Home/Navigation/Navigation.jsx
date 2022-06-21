import { NavLink } from 'react-router-dom';
import Styles from './Navigation.module.css'
import { BiSearch } from "react-icons/bi";
const Navigation = () => {
    return (  
       
        <div className={Styles.parent}>

            <div className={Styles.left}>

                <div className={Styles.logoParent}>
                    <NavLink to='/' className={Styles.logoParent_title}>IMDB</NavLink>    
                </div>

                <div className={Styles.searchParent}>
                    <input type='text' placeholder='Search The Movie Name'/>
                    <BiSearch className={Styles.inputSearchIcon} size='23px'/>
                    <button>Advanced</button>    
                </div>     
            </div>

            <nav className={Styles.right}>
                <NavLink to={{pathname:"/3"}} className={ ({isActive})=> isActive ? Styles.navLink : Styles.navLinkActive}>Coming Soon</NavLink>    
                <NavLink to={{pathname:"/"}} className={ ({isActive})=> isActive ? Styles.navLink : Styles.navLinkActive}>Popular Series</NavLink>    
                <NavLink to={{pathname:"/4"}} className={ ({isActive})=> isActive ? Styles.navLink : Styles.navLinkActive}>Popular Movies</NavLink>    
            </nav>
           
        </div>
    );
}
 
export default Navigation;