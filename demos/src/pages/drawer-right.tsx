import {useRef} from "react";
import {Drawer} from "fm-react-layout";
import {Link} from "react-router-dom";
import DrawerContent from "./drawer-content";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const DrawerRight = () => {
  const childRef = useRef<{changeVisibility: () => void}>(null);

  return (
    <Container>
      <div className="d-flex align-items-center mb-4">
        <Button onClick={() => childRef?.current?.changeVisibility()}>
          Toggle Drawer
        </Button>
        <Link className="ms-3" to={"/"}>Go Home</Link>
      </div>
      <Drawer
        ref={childRef}
        opened={false}
        align="end"
      >
        <DrawerContent />
      </Drawer>
    </Container>
  )
}

export default DrawerRight