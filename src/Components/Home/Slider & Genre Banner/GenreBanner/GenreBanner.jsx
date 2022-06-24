import Styles from './GenreBanner.module.css'

const genreList = [
    {id : 1 , imageSrc : "https://1.bp.blogspot.com/-2qBa46d-Ah0/YOXXf2Vm9gI/AAAAAAAABdc/mR9q76a9_UgzYw7uQxrrGjwd7fhATD-TwCLcBGAsYHQ/s1920/Occupation%2BRainfall%2B%2528Signature%2BEntertainment%2529%2BBanner.jpg" , genre : "Action" },
    {id : 2 , imageSrc : "https://wallpapercave.com/wp/wp11029115.jpg" , genre : "Comedy" },
    {id : 3 , imageSrc : "https://firsthand.co/_next/image?url=https%3A%2F%2Fmedia2.vault.com%2F16976%2Fcoco.jpg&w=640&q=75" , genre : "Animation" },
]

const GenreBanner = () => {
    return (  
        <div className={Styles.parent}>
            {genreList.map(genre => {
                return(
                    <div key={genre.id} className={Styles.genre}  style={{
                        background: `url('${genre.imageSrc}')`,
                        backgroundPosition:'0px -30px',
                        backgroundSize:'',
                        backgroundRepeat:'no-repeat'
                    }}>
                        <div className={Styles.popUp}></div>
                        <h4 className={Styles.genreTitle}>{genre.genre}</h4>
                    </div>
                )
            })}
        </div>
    );
}
export default GenreBanner;