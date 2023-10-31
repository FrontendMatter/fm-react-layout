import Button from "react-bootstrap/Button";
import {List} from "react-bootstrap-icons";
import "./styles/header.css";
export const HeaderContent = () => {
    return (
        <div className="headerContent bg-primary" >
            <Button>
                <List size={25}/>
            </Button>
        </div>
    );
};

export default HeaderContent;
