import styled from "styled-components";
import bg1 from "./assets/bg1.jpg";
import Navbar from "./components/Navbar";
import Weather from "./components/Weather";

const StyledApp = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(${bg1});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  z-index: 1;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #121f25;
  width: 100%;
  height: 100%;
  opacity: 0.4;
  mix-blend-mode: lighten;
  z-index: -1;
`;

function App() {
  return (
    <StyledApp>
      <Overlay />
      <Navbar />
      <Weather />
    </StyledApp>
  );
}

export default App;
