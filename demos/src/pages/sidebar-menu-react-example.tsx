import {DrawerLayout, SidebarMenu} from "fm-react-layout";
import DrawerLayoutContent from "./drawer-layout-content";
import {useRef} from "react";

const renderCustomSvg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="sidebar-menu-icon sidebar-menu-icon--left">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
)

const renderIcon = () => (
    <i className="sidebar-menu-icon sidebar-menu-icon--left material-icons">home</i>
)

const SidebarMenuReactExample = () => {

    const childRef = useRef<{ changeVisibility: () => void }>(null);

    return (
        <DrawerLayout
            ref={childRef}
            renderDrawerContent={() => (
                <SidebarMenu items={[
                    {
                        id: "id1",
                        label: "First item",
                        route: "/home", // Define the actual type for the route
                    },
                    {
                        id: "id2",
                        label: "Second Item",
                        route: "/home", // Define the actual type for the route
                        renderIcon: renderCustomSvg,
                    },
                    {
                        id: "id3",
                        label: "Third Item",
                        route: "/",
                        active: true,
                        renderIcon: renderIcon,
                    },
                    {
                        id: "dashboard",
                        label: "dashboard",
                        children: [
                            {
                                label: "Active SubMenu",
                                active: true,
                                route: ""
                            },
                            {
                                label: "Inactive",
                                route: ""
                            }
                        ],
                    }
                ]}/>
            )}
        >
            <DrawerLayoutContent childRef={childRef}/>
        </DrawerLayout>
    );
};

export default SidebarMenuReactExample;