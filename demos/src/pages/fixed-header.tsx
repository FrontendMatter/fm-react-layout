import {Header} from "fm-react-layout";
import Container from "react-bootstrap/Container";
import SampleContent from "./sample-content";
import "./styles/header.css";
import HeaderContent from "./header-content";
import HomeButton from "./home-button";

const FixedHeader = () => {
    return (
        <div>
            <Header
                fixed
                effects="waterfall"
                condenses
                classes="bg-primary"
            >
                <HeaderContent/>
            </Header>
            <Container>
                <HomeButton/>
                <SampleContent/>
            </Container>
        </div>
    )
}

export default FixedHeader;