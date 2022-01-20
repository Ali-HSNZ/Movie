import Footer from './Footer/Footer';
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
                <Footer/>
            </div>
        </div>
    );
}
 
export default Layout;