import {DrawerLayout} from "fm-react-layout";
import {useRef} from "react";
import "./styles/drawer.css"
import {Link} from "react-router-dom";
import SampleContent from "./sample-content";

const BasicDrawerLayout = () => {
    const childRef = useRef<{changeVisibility: () => void}>(null);

    return (
        <>
            <DrawerLayout
                ref={childRef}
                renderDrawerContent={() => (
                <div className="content">
                    <div>
                        Inside Drawer content:)
                    </div>
                    <div>
                        Bing Bong!
                    </div>
                </div>
            )}>
                <div className="drawer-layout-container">
                    <div>
                        Inside the layout
                    </div>
                    <Link to={"/"}>Go Home</Link>
                    <button onClick={() => childRef?.current?.changeVisibility()}>
                        Open/Close Drawer
                    </button>
                    <SampleContent />
                </div>
            </DrawerLayout>
        </>
    );
}

export default BasicDrawerLayout;