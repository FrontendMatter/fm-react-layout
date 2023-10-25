import {Link} from "react-router-dom";
import "./styles/home.css";
const Home = () => {
    return (
        <div className="container">
            <div>
                This is the Home Page.
            </div>
            <Link to={'/drawer-left'}>Go to Drawer example</Link>
        </div>
    );
}

export default Home;