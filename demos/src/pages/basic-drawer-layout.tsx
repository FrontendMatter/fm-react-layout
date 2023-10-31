import {DrawerLayout} from "fm-react-layout";
import {useRef} from "react";
import SampleContent from "./sample-content";
import DrawerContent from "./drawer-content";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import HomeButton from "./home-button";

const BasicDrawerLayout = () => {
    const childRef = useRef<{ changeVisibility: () => void }>(null);

    return (
        <>
            <DrawerLayout
                ref={childRef}
                renderDrawerContent={() => (
                    <DrawerContent/>
                )}>
                <Container>
                    <div className="d-flex align-items-center mb-4">
                        <Button onClick={() => childRef?.current?.changeVisibility()}>
                            Toggle Drawer
                        </Button>
                        <HomeButton className="ms-3"/>
                    </div>

                    <SampleContent/>
                </Container>
            </DrawerLayout>
        </>
    );
}

export default BasicDrawerLayout;