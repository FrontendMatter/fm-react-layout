import {Header} from "fm-react-layout";
import SampleContent from "./sample-content";
import "./styles/header.css";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";

const ScrollingHeader = () => {
    return (
        <div>
            <Header headerContentClass="bg-primary">
                <Container>
                    Header data baby.
                </Container>
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

export default ScrollingHeader;