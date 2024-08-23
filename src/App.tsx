import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min'

// import '@/App.css'
import '@/Custom.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoginPage from "@/pages/LoginPage";
import MainPage from "@/pages/MainPage";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainPage />
        },
        {
            path: "/login",
            element: <LoginPage />
        },

    ])
    return (
        <RouterProvider router={router} />
    )
}

export default App
