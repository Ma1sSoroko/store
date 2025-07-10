import { createBrowserRouter, type RouteObject } from 'react-router'
import { Layout } from './components/layout/Layout'
import { AllBooksPage } from './pages/AllBooks'

const routes: RouteObject[] = [
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <AllBooksPage />,
            }
        ]
    }
]

export const router = createBrowserRouter(routes)