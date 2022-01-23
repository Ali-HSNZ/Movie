
import pageRoutes from '../Routes/routes'
import {Route , Routes} from 'react-router-dom'
import Layout from '../Layout/Layout';
import { Provider } from 'react-redux';
import store from '../Redux/store';


function App() {
  return (
    <Provider store={store}>
            <Layout>
                    <Routes>
                        {pageRoutes.map(route => {return (
                          <Route key={route.id} path={route.path}  element={route.element} />
                        ) })}
                  </Routes>    
              </Layout>
      </Provider>
  );
}

export default App;