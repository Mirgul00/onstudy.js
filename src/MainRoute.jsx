import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import SatPage from "./pages/SatPage/SatPage";
// import IeltsPage from  from "./pages/IeltsPage/IeltsPage";
import IeltsPage from "./pages/IeltsPage/IeltsPage"
export const router = createBrowserRouter([

    {
        id: 'Base',
        path: "/",
        element: <MainPage />
    },

    {
        id: 'SatPage',
        path: "/satpage",
        element: <SatPage />
    },

    {
        id: 'IeltsPage',
        path: "/ieltspage",
        element: <IeltsPage />
    },



]);