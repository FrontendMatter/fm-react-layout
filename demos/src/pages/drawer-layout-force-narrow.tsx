import {DrawerLayout} from "fm-react-layout";
import DrawerContent from "./drawer-content";
import {useRef} from "react";
import DrawerLayoutContent from "./drawer-layout-content";

export const DrawerLayoutForceNarrow = () => {
    const childRef = useRef<{ changeVisibility: () => void }>(null);

    return (
        <DrawerLayout
            ref={childRef}
            forceNarrow
            renderDrawerContent={() => (
                <DrawerContent/>
            )}>
                <DrawerLayoutContent childRef={childRef}/>
        </DrawerLayout>
    );
};

export default DrawerLayoutForceNarrow;