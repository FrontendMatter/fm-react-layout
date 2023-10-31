import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import DrawerLeft from "./pages/drawer-left";
import Home from "./pages/home";
import DrawerRight from "./pages/drawer-right";
import BasicDrawerLayout from "./pages/basic-drawer-layout";
import ScrollingHeader from "./pages/scrolling-header";
import FixedHeader from "./pages/fixed-header";

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
    {
        path: "/scrolling-header",
        element: <ScrollingHeader />,
    },
    {
        path: "/fixed-header",
        element: <FixedHeader />,
    },
]);
function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App
