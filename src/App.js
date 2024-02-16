import { lazy,Suspense } from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter,Outlet } from 'react-router-dom';
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

const About =lazy(()=>import('./components/About'));
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
        element:<Suspense fallback={<h1> Loading....</h1>} > <About/></Suspense>,
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

