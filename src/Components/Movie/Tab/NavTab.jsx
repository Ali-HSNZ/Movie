import Styles from './NavTab.module.css'
import Box from '@mui/material/Box';
import { Link, Route, Routes } from 'react-router-dom';
import { Button } from '@mui/material';

function NavTabs() {
    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Button className={Styles.Button}><Link to=""> Main</Link></Button>
                <Button className={Styles.Button}><Link to="actors">Actors</Link></Button>
                <Button className={Styles.Button}><Link to="productionLocations">Production locations</Link></Button>
                <Button className={Styles.Button}><Link to="awards">awards</Link></Button>
                <Button className={Styles.Button}><Link to="allNews">All News</Link></Button>
            </Box>

            <Routes>
                <Route path=""></Route>
            </Routes>
            
        </>
    );
}
export default NavTabs