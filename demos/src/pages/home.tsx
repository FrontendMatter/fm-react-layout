import {Link} from "react-router-dom";
import "./styles/home.css";
const Home = () => {
    return (
        <div className="container">
            <div>
                This is the Home Page.
            </div>
            <Link to={'/drawer-left'}>Example of a Drawer Left</Link>
            <Link to={'/drawer-right'}>Example of a Drawer Right</Link>
        </div>
    );
}

export default Home;