import {HeaderLayout} from "fm-react-layout";
import Container from "react-bootstrap/Container";
import SampleContent from "./sample-content";
import "./styles/header.css";
import HeaderContent from "./header-content";
import HomeButton from "./home-button";

export const BasicHeaderLayout = () => {
    return (
        <>
            <HeaderLayout
                headerFixed
                headerEffects="waterfall"
                headerCondenses
                headerContentClass={"bg-primary"}
                renderHeaderContent={() => (
                    <HeaderContent/>
                )}
            >
                <div>
                    <Container>
                        <HomeButton/>
                        <SampleContent/>
                    </Container>
                </div>
            </HeaderLayout>
        </>
    );
};

export default BasicHeaderLayout
