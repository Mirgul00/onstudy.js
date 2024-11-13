import { createBrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";

export const router = createBrowserRouter([
    {
        id: 'Base',
        path: "/",
        element: <MainPage />
    },

]);