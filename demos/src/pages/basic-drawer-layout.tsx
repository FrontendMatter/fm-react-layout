import {DrawerLayout} from "fm-react-layout";
import {useRef} from "react";
import DrawerContent from "./drawer-content";
import DrawerLayoutContent from "./drawer-layout-content";

const BasicDrawerLayout = () => {
    const childRef = useRef<{ changeVisibility: () => void }>(null);

    return (
        <DrawerLayout
            ref={childRef}
            renderDrawerContent={() => (
                <DrawerContent/>
            )}>
            <DrawerLayoutContent childRef={childRef}/>
        </DrawerLayout>
    );
}

export default BasicDrawerLayout;