import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BoilerPlate from './Modules/BoilerPlate.jsx';
import Homepage from './Modules/PageContent/Homepage.jsx';
import Career from './Modules/PageContent/Career.jsx';
import School from './Modules/PageContent/School.jsx';
import Hobbies from './Modules/PageContent/Hobbies.jsx';
import Contact from './Modules/PageContent/Contact.jsx';
import ErrorPage from "./Modules/PageContent/ErrorPage.jsx";
import './index.css'


const router = createBrowserRouter([
    {
        path: "/",
        element: <BoilerPlate />,
        children: [
            { index: true, element: <Homepage /> },
            { path: 'career', element: <Career /> },
            { path: 'school', element: <School /> },
            { path: 'hobbies', element: <Hobbies /> },
            { path: 'contact', element: <Contact /> },
        ],
        errorElement: <ErrorPage />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
