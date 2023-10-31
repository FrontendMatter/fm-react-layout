import {Link} from "react-router-dom";
import "./styles/home.css";
const Home = () => {
    return (
        <div className="home__container">
            <div>
                This is the Home Page.
            </div>
            <Link to={'/drawer-left'}>Example of a Drawer Left</Link>
            <Link to={'/drawer-right'}>Example of a Drawer Right</Link>
            <Link to={'/drawer-layout'}>Example of a Drawer Layout</Link>
            <Link to={'/scrolling-header'}>Example of a Scrolling Header</Link>
            <Link to={'/fixed-header'}>Example of a Fixed Header</Link>
        </div>
    );
}

export default Home;