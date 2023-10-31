import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

export const HomeButton = ({className = ""}: {className?: string}) => {
    return (
        <Link to="/" className={className}>
            <Button>Home</Button>
        </Link>
    );
};

export default HomeButton;