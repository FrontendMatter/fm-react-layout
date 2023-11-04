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
            <Link to={'/drawer-layout-with-header-layout'}>Example of a Drawer Layout With Header Layout</Link>
            <Link to={'/drawer-layout-force-narrow'}>Example of a Drawer Layout Force Narrow</Link>
            <Link to={'/scrolling-header'}>Example of a Scrolling Header</Link>
            <Link to={'/fixed-header'}>Example of a Fixed Header</Link>
            <Link to={'/header-layout'}>Example of a Header Layout</Link>
            <Link to={'/sidebar-menu'}>Example of a Sidebar Menu</Link>
            <Link to={'/sidebar-menu-react'}>Example of a Sidebar Menu React</Link>
        </div>
    );
}

export default Home;