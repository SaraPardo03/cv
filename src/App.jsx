
import { RouterProvider, createBrowserRouter, Outlet} from 'react-router-dom';

import ScrollToTop from "./components/ScrollToTop";
import MainNav from './components/MainNav';
import { Home } from './pages/Home';  
import { About } from './pages/About';  
import { Ariane } from './pages/Ariane';
import { Contacts } from './pages/Contacts';
import './sass/main.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';


const router = createBrowserRouter([
  {
    path:"/",
    element:<>
      <ScrollToTop/>
      <Home/>
    </>
  },
  {
    path:"/about",
    element:<>
      <ScrollToTop/>
      <About/>
    </>
  },
  {
    path:"/ariane",
    element:<>
      <ScrollToTop/>
      <Ariane/>
    </>
  },
  {
    path:"/contact",
    element:<>
      <ScrollToTop/>
      <MainNav/>
      <Contacts/>
    </>
  },
]);

function App() {
  return <RouterProvider router={router}>
    <Outlet />
  </RouterProvider>
    
}

export default App
