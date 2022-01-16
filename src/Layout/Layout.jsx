import Header from './Header/Header';
import Styles from './Layout.module.css'
const Layout = ({children}) => {
    return ( 
        <div className={Styles.parent}>
            <div className={Styles.main}>
                <Header/>
                <div className={Styles.children}>
                    {children}
                </div>
            </div>
        </div>
    );
}
 
export default Layout;