import { useQuery } from './../../hooks/useQuery';
const Keyword = () => {
    const keywordName = useQuery().get('name')
    return ( 
        <h1>Keyword : {keywordName}</h1>
     );
}
 
export default Keyword;