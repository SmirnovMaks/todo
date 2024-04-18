import { RouterProvider } from 'react-router-dom';
import './App.scss';
import { router } from './router';


export const App = () => {


  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}


