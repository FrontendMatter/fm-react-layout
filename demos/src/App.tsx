import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './App.css'
import DrawerLeft from "./pages/drawer-left";
import Home from "./pages/home";
import DrawerRight from "./pages/drawer-right";
import BasicDrawerLayout from "./pages/basic-drawer-layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/drawer-left",
        element: <DrawerLeft />,
    },
    {
        path: "/drawer-right",
        element: <DrawerRight />,
    },
    {
        path: "/drawer-layout",
        element: <BasicDrawerLayout />,
    },
]);
function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App
