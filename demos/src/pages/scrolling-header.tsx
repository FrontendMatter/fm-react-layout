import {Header} from "fm-react-layout";
import SampleContent from "./sample-content";
import "./styles/header.css";

const ScrollingHeader = () => {
  return (
    <div>
      <Header headerContentClass="headerContent">
        <div>
          Header data baby.
        </div>
      </Header>

      <SampleContent/>
      <SampleContent/>
      <SampleContent/>
    </div>
  )
}

export default ScrollingHeader;