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
import BasicHeaderLayout from "./pages/basic-header-layout";
import DrawerLayoutWithHeaderLayout from "./pages/drawer-layout-with-header-layout";
import DrawerLayoutForceNarrow from "./pages/drawer-layout-force-narrow";
import SidebarMenu from "./pages/sidebar-menu";

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
        path: "/drawer-layout-with-header-layout",
        element: <DrawerLayoutWithHeaderLayout />,
    },
    {
        path: "/drawer-layout-force-narrow",
        element: <DrawerLayoutForceNarrow />,
    },
    {
        path: "/scrolling-header",
        element: <ScrollingHeader />,
    },
    {
        path: "/fixed-header",
        element: <FixedHeader />,
    },
    {
        path: "/header-layout",
        element: <BasicHeaderLayout />,
    },
    {
        path: "/sidebar-menu",
        element: <SidebarMenu />,
    },
]);
function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App
