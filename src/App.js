
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter,Outlet } from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import Cart from './components/Cart';
import ResMenu from './components/ResMenu';

export function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
    </div>
  );
}
 export const routerProvider=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/cart",
        element:<Cart/>,
      },
      {
        path:"/restaurants/:resId",
        element:<ResMenu/>,
      },
    ],
    errorElement:<Error/>,
  },
  
]);

