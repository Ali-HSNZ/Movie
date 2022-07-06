import { NavLink } from 'react-router-dom';
import Styles from './Navigation.module.css'
import { BiSearch } from "react-icons/bi";
const Navigation = () => {
    return (  
        <div className={Styles.parent}>
            <div className={Styles.left}>
                <NavLink to='/' className={Styles.logoParent_title}>IMDB</NavLink>    
                <div className={Styles.searchParent}>
                    <input type='text' placeholder='Search The Movie Name'/>
                    <BiSearch className={Styles.inputSearchIcon} size='23px'/>
                    <button>Advanced</button>    
                </div>     
            </div>

            <nav className={Styles.right}>
                <NavLink to={{pathname:"/aboutUs"}} className={ ({isActive})=> isActive ? Styles.navLink : Styles.navLinkActive}>About Us</NavLink>    
                <NavLink to={{pathname:"/suport"}} className={ ({isActive})=> isActive ? Styles.navLink : Styles.navLinkActive}>Suport</NavLink>    
                <NavLink to={{pathname:"/needHelp"}} className={ ({isActive})=> isActive ? Styles.navLink : Styles.navLinkActive}>Need Help?</NavLink>    
                <NavLink to={{pathname:"/routeMap"}} className={ ({isActive})=> isActive ? Styles.navLink : Styles.navLinkActive}>Route Map</NavLink>    
            </nav>
           
        </div>
    );
}
export default Navigation;