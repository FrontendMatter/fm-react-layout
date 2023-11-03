import Button from "react-bootstrap/Button";
import HomeButton from "./home-button";
import SampleContent from "./sample-content";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup"
import {RefObject} from "react";
import {Link} from "react-router-dom";

export const DrawerLayoutContent = ({childRef}: {childRef:  RefObject<{ changeVisibility: () => void }>}) => {
    return (
        <Container>
            <div className="d-flex align-items-center mb-3">
                <Button onClick={() => childRef?.current?.changeVisibility()}>
                    Toggle Drawer
                </Button>
                <HomeButton className="ms-3"/>
            </div>
            
            <ListGroup className="mb-4">
                <ListGroup.Item>
                    <Link to="/drawer-layout">Basic Drawer Layout</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Link to="/drawer-layout-with-header-layout">Drawer Layout with Header Layout</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Link to="/drawer-layout-force-narrow">Drawer Layout Force Narrow</Link>
                </ListGroup.Item>
            </ListGroup>

            <SampleContent/>
        </Container>
    );
};

export default DrawerLayoutContent;