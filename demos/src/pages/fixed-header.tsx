import {Header} from "fm-react-layout";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";
import SampleContent from "./sample-content";
import "./styles/header.css";

const FixedHeader = () => {
    return (
        <div>
            <Header
                fixed
                effects="waterfall"
                condenses
                classes="bg-primary"
            >
                <div className="headerContent bg-primary">
                    Header data baby.
                </div>
            </Header>
            <Container>
                <Link to="/">Home</Link>
                <SampleContent/>
                <SampleContent/>
                <SampleContent/>
            </Container>
        </div>
    )
}

export default FixedHeader;