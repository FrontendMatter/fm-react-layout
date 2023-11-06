import {DrawerLayout, SidebarMenu} from "fm-react-layout";
import DrawerLayoutContent from "./drawer-layout-content";
import {useRef} from "react";
import { useLocation } from 'react-router-dom';

const sideBarItems = [
    {
        id: "id1",
        label: "First item",
        route: "/side-id1",
    },
    {
        id: "id2",
        label: "Second Item",
        route: "/side-id2",
        icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>),
    },
    {
        id: "id3",
        label: "Third Item",
        route: "/side-id3",
        icon: (<i className="material-icons">home</i>),
    },
    {
        id: "dashboard",
        label: "dashboard",
        children: [
            {
                label: "Active SubMenu",
                route: "/side-id4"
            },
            {
                label: "Inactive",
                route: "/side-id5"
            }
        ],
    }
];

const SidebarMenuReactExample = () => {

    const childRef = useRef<{ changeVisibility: () => void }>(null);
    const {pathname} = useLocation();

    return (
        <DrawerLayout
            ref={childRef}
            renderDrawerContent={() => (
                <SidebarMenu items={sideBarItems} route={pathname}/>
            )}
        >
            <DrawerLayoutContent childRef={childRef}/>
        </DrawerLayout>
    );
};

export default SidebarMenuReactExample;