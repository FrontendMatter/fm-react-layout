import './App.css'
import {Drawer} from 'fm-react-layout'
import {useRef} from "react";

function App() {
    const childRef = useRef(null);
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

export default App
