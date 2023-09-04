import './App.scss';
import { Header } from './components/Header/Header';
import { ToDoListPage } from './pages/ToDoListPage';


export const App = () => {
  return (
    <>
      <Header />
      <ToDoListPage />
    </>
  );
}


