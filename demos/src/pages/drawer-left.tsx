import {useRef} from "react";
import {Drawer} from "fm-react-layout";
import DrawerContent from "./drawer-content";
import Button from 'react-bootstrap/Button';
import HomeButton from "./home-button";

const DrawerLeft = () => {
    const childRef = useRef<{ changeVisibility: () => void }>(null);

    return (
        <div className="container">
            <div className="d-flex align-items-center mb-4">
                <Button onClick={() => childRef?.current?.changeVisibility()}>
                    Toggle Drawer
                </Button>
                <HomeButton/>
            </div>
            <Drawer
                ref={childRef}
                opened={false}
            >
                <DrawerContent/>
            </Drawer>
        </div>
    )
}

export default DrawerLeft