import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './App.css'
import DrawerLeft from "./pages/drawer-left";
import Home from "./pages/home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/drawer-left",
        element: <DrawerLeft />,
    },
]);
function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App
