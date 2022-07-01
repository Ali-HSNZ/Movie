import Movie from "./Movie/Movie";
import Series from "./Series/Series";
import { useQuery } from './../../hooks/useQuery';
import Styles from './Keyword.module.css'
import { useEffect } from 'react';

const Keyword = () => {
    const keyword = useQuery().get('name')

    useEffect(() => {
        window.scroll({top : 0 , behavior : 'smooth'})
    } , [keyword])
    
    return ( 
        <>
            {keyword && <h1 className={Styles.pageTitle}>{keyword}</h1>}
            <Movie/>
            <Series/>
        </>    
    );
}
 
export default Keyword;