// import logo from './logo.svg';
import './App.css';
// import Buscador from './components/Buscador';
// import Footer from './components/Footer';
// import Header from './components/Header';
// import Paginador from './components/Paginador';
// import TarjetaNoticia from './components/TarjetaNoticia';
import PaginaBuscador from './pagina/PaginaBuscador';
// import PaginaDetalle from './pagina/PaginaDetalle';

import {
  createBrowserRouter,
  RouterProvider,
  Router
} from 'react-router-dom';
import Error404 from './components/Errores/404';

const router = createBrowserRouter([
 
  
  {
    path: "/",
    element: <PaginaBuscador />,
    errorElement: <Error404 />
  },
]);

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;