import {useRef} from "react";
import {DrawerLayout, HeaderLayout} from "fm-react-layout";
import DrawerContent from "./drawer-content";
import "./styles/header.css";
import DrawerLayoutContent from "./drawer-layout-content";
import HeaderContent from "./header-content";

export const DrawerLayoutWithHeaderLayout = () => {
    const childRef = useRef<{ changeVisibility: () => void }>(null);

    return (
        <>
            <DrawerLayout
                ref={childRef}
                fullbleed
                push
                renderDrawerContent={() => (
                    <DrawerContent/>
                )}
                contentClass={"test"}
            >
                <HeaderLayout
                    headerEffects="waterfall"
                    headerCondenses
                    headerContentClass={"test bg-primary"}
                    renderHeaderContent={() => (
                        <HeaderContent/>
                    )}
                >
                    <DrawerLayoutContent childRef={childRef}/>
                </HeaderLayout>
            </DrawerLayout>
        </>
    );
};

export default DrawerLayoutWithHeaderLayout;