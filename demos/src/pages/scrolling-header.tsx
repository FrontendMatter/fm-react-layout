import {Header} from "fm-react-layout";
import SampleContent from "./sample-content";
import "./styles/header.css";
import Container from "react-bootstrap/Container";
import HeaderContent from "./header-content";
import HomeButton from "./home-button";

const ScrollingHeader = () => {
    return (
        <div>
            <Header headerContentClass="bg-primary">
                <HeaderContent/>
            </Header>
            <Container>
                <HomeButton/>
                <SampleContent/>
            </Container>
        </div>
    )
}

export default ScrollingHeader;