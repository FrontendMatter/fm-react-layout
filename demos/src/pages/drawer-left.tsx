import {useRef} from "react";
import {Drawer} from "fm-react-layout";

const DrawerLeft = () => {
    const childRef = useRef<{changeVisibility: () => void}>(null);
    return (
        <>
            <div>
                <button onClick={() => childRef?.current?.changeVisibility()}>
                    Open/Close Drawer
                </button>
                <Drawer
                    ref={childRef}
                    opened={false}
                >
                    <div>I am the child</div>
                </Drawer>
            </div>

        </>
    )
}

export default DrawerLeft