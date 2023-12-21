import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import './App.css'
import Root from './router/Root';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />} />
    )
);

const App = () => <RouterProvider router={router} />;

export default App
