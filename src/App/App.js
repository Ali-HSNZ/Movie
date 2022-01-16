
import pageRoutes from '../Routes/routes'
import {Route , Routes} from 'react-router-dom'
import Layout from '../Layout/Layout';

function App() {
  return (
      <Layout>
            <Routes>
                {pageRoutes.map(route => {return (
                  <Route key={route.id} path={route.path}  element={route.element} />
                ) })}
          </Routes>    
      </Layout>
  );
}

export default App;
