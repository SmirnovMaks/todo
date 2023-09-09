import { createBrowserRouter } from "react-router-dom";
import { ToDoListPage } from "./pages/ToDoListPage";
import { Layout } from "./layouts/Layout";
import { NotFound } from "./pages/NotFound";
import { ViewListItem } from "./pages/ViewListItem";
import { ViewList } from "./pages/ViewList";
import { ToDo } from "./models/todoItems";

const todoList: ToDo[] = [
    {
        id: 0,
        text: 'One',
        isDone: false
    },
    {
        id: 1,
        text: 'Two',
        isDone: true
    },
    {
        id: 3,
        text: 'Three',
        isDone: false
    },
    {
        id: 4,
        text: 'Four',
        isDone: true
    }
]

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <ToDoListPage />
            },
            {
                path: '/list',
                element: <ViewList todoList={todoList} />,
            },
            {
                path: '/list/:id',
                element: <ViewListItem todoList={todoList} />
            }

        ]
    }
])