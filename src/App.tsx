import { RouterProvider } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header/Header';
import { ToDoListPage } from './pages/ToDoListPage';
import { router } from './router';


export const App = () => {


  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}


