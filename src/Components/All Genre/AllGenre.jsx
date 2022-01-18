import Styles from "./AllGenre.module.css"
import { AiFillCaretRight } from "react-icons/ai";

const AllGenre = () => {
    return (  
        <div className={Styles.parent}>
            <div className={Styles.header}>
                <p className={Styles.headerTitle}>
                    All genres
                    <AiFillCaretRight/>
                </p>
            </div>
            <div className={Styles.footer}>

                <div className={Styles.row}>
                    <div className={Styles.rowItem}>
                        <div className={Styles.genre}>
                                <section className={Styles.genreRanke_genreLine}>
                                    <p>1</p>
                                    <section className={Styles.genreLine}></section>
                                </section>
                                
                                <p className={Styles.genreTitle}>Adventure</p>
                                <button className={Styles.genreSubmit}>Go</button>
                        </div>
                        <span className={Styles.genreVidoeCount}>Video : 15</span>
                    </div>

                    <div className={Styles.rowItem}>
                        <div className={Styles.genre}>
                                <section className={Styles.genreRanke_genreLine}>
                                    <p>2</p>
                                    <section className={Styles.genreLine}></section>
                                </section>
                                
                                <p className={Styles.genreTitle}>Adventure</p>
                                <button className={Styles.genreSubmit}>Go</button>
                        </div>
                        <span className={Styles.genreVidoeCount}>Video : 15</span>
                    </div>
                    
                    <div className={Styles.rowItem}>
                        <div className={Styles.genre}>
                                <section className={Styles.genreRanke_genreLine}>
                                    <p>3</p>
                                    <section className={Styles.genreLine}></section>
                                </section>
                                
                                <p className={Styles.genreTitle}>Adventure</p>
                                <button className={Styles.genreSubmit}>Go</button>
                        </div>
                        <span className={Styles.genreVidoeCount}>Video : 15</span>
                    </div>





                </div>

                <div className={Styles.row}>
                    <div className={Styles.rowItem}>
                        <div className={Styles.genre}>
                                <section className={Styles.genreRanke_genreLine}>
                                    <p>4</p>
                                    <section className={Styles.genreLine}></section>
                                </section>
                                
                                <p className={Styles.genreTitle}>Adventure</p>
                                <button className={Styles.genreSubmit}>Go</button>
                        </div>
                        <span className={Styles.genreVidoeCount}>Video : 15</span>
                    </div>

                    <div className={Styles.rowItem}>
                        <div className={Styles.genre}>
                                <section className={Styles.genreRanke_genreLine}>
                                    <p>5</p>
                                    <section className={Styles.genreLine}></section>
                                </section>
                                
                                <p className={Styles.genreTitle}>Adventure</p>
                                <button className={Styles.genreSubmit}>Go</button>
                        </div>
                        <span className={Styles.genreVidoeCount}>Video : 15</span>
                    </div>
                    
                    <div className={Styles.rowItem}>
                        <div className={Styles.genre}>
                                <section className={Styles.genreRanke_genreLine}>
                                    <p>6</p>
                                    <section className={Styles.genreLine}></section>
                                </section>
                                
                                <p className={Styles.genreTitle}>Adventure</p>
                                <button className={Styles.genreSubmit}>Go</button>
                        </div>
                        <span className={Styles.genreVidoeCount}>Video : 15</span>
                    </div>





                </div>

                <div className={Styles.row}>
                    <div className={Styles.rowItem}>
                        <div className={Styles.genre}>
                                <section className={Styles.genreRanke_genreLine}>
                                    <p>7</p>
                                    <section className={Styles.genreLine}></section>
                                </section>
                                
                                <p className={Styles.genreTitle}>Adventure</p>
                                <button className={Styles.genreSubmit}>Go</button>
                        </div>
                        <span className={Styles.genreVidoeCount}>Video : 15</span>
                    </div>

                    <div className={Styles.rowItem}>
                        <div className={Styles.genre}>
                                <section className={Styles.genreRanke_genreLine}>
                                    <p>8</p>
                                    <section className={Styles.genreLine}></section>
                                </section>
                                
                                <p className={Styles.genreTitle}>Adventure</p>
                                <button className={Styles.genreSubmit}>Go</button>
                        </div>
                        <span className={Styles.genreVidoeCount}>Video : 15</span>
                    </div>
                    
                    <div className={Styles.rowItem}>
                        <div className={Styles.genre}>
                                <section className={Styles.genreRanke_genreLine}>
                                    <p>9</p>
                                    <section className={Styles.genreLine}></section>
                                </section>
                                
                                <p className={Styles.genreTitle}>Adventure</p>
                                <button className={Styles.genreSubmit}>Go</button>
                        </div>
                        <span className={Styles.genreVidoeCount}>Video : 15</span>
                    </div>





                </div>

            </div>

            <div className={Styles.cover}>
                <a href="/">Load More</a>
            </div>
        </div>
    );
}
 
export default AllGenre;