import {useRef} from "react";
import {Drawer} from "fm-react-layout";
import {Link} from "react-router-dom";
import DrawerContent from "./drawer-content";
import Button from 'react-bootstrap/Button';

const DrawerLeft = () => {
  const childRef = useRef<{changeVisibility: () => void}>(null);

  return (
    <div className="container">
      <div className="d-flex align-items-center mb-4">
        <Button onClick={() => childRef?.current?.changeVisibility()}>
          Toggle Drawer
        </Button>
        <Link className="ms-3" to={"/"}>Go Home</Link>
      </div>
      <Drawer
        ref={childRef}
        opened={false}
      >
        <DrawerContent />
      </Drawer>
    </div>
  )
}

export default DrawerLeft