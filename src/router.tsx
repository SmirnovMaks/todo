import { createBrowserRouter } from "react-router-dom";
import { ToDoListPage } from "./pages/ToDoListPage";
import { Layout } from "./layouts/Layout";
import { NotFound } from "./pages/NotFound";
import { ViewListItem } from "./pages/ViewListItem";
import { ViewList } from "./pages/ViewList";

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
                element: <ViewList />,
            },
            {
                path: '/list/:id',
                element: <ViewListItem />
            }

        ]
    }
])