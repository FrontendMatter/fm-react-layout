import {useRef} from "react";
import {Drawer} from "fm-react-layout";
import './styles/drawer.css';
import {Link} from "react-router-dom";

const DrawerRight = () => {
    const childRef = useRef<{changeVisibility: () => void}>(null);

    return (
        <div className="container">
            <button onClick={() => childRef?.current?.changeVisibility()}>
                Open/Close Drawer
            </button>
            <Link to={"/"}>Go Home</Link>
            <Drawer
                ref={childRef}
                opened={false}
                align="end"
            >
                <div className="content">
                    <div>I am the child</div>
                    <div> This is a test</div>
                </div>
            </Drawer>
        </div>
    )
}

export default DrawerRight