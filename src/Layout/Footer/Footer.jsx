import Styles from './Footer.module.css'
const Footer = () => {
    return (  
        <div className={Styles.parent}>
            <button className={Styles.backToTop}>
                <p>Back To Top</p>
            </button>
            <div className={Styles.footer}>
                <div className={Styles.column}>
                    <span className={Styles.columnTitle}>Genre</span>
                    <nav className={Styles.columnActions}>
                        <a>Get All Genre</a>
                        <a>List Popular Genres</a>
                    </nav>
                    <div className={Styles.inputGroup}>
                        <input type='text' placeholder='Get Movie By Genre ...'/>
                        <button>Go</button>
                    </div>
                </div>
                <div className={Styles.column}>
                    <span className={Styles.columnTitle}>Series</span>
                    <nav className={Styles.columnActions}>
                        <a>Series By Content Rating</a>
                        <a>Best Series By Rating</a>
                        <a>The Best Series Movies</a>
                    </nav>
                    <div className={Styles.inputGroup}>
                        <input type='text' placeholder='Get Series By Genre ...'/>
                        <button>Go</button>
                    </div>
                    <div className={Styles.inputGroup}>
                        <input type='text' placeholder='Get Series By Title ...'/>
                        <button>Go</button>
                    </div>
                </div>
                <div className={Styles.column}>
                <span className={Styles.columnTitle}>Movies</span>
                    <nav className={Styles.columnActions}>
                        <a>best Movies by rating</a>
                        <a>The best Popular Movies</a>
                        <a>Movies By Content Rating</a>
                    </nav>
                    <div className={Styles.inputGroup}>
                        <input type='text' placeholder='Get Movie By Title ...'/>
                        <button>Go</button>
                    </div>
                    <div className={Styles.inputGroup}>
                        <input type='text' placeholder='Get Movies By Year ...'/>
                        <button>Go</button>
                    </div>
                </div>
                <div className={Styles.column}>
                    <span className={Styles.columnTitle}>Contact us</span>
                    <nav className={Styles.columnActions}>
                        <a>Aliatraby@gmail.com</a>
                    </nav>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;