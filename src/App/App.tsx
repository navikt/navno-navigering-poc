import React from "react";
import styled from "styled-components";
import DemoControlls from "../DemoControlls/DemoControlls";
import Forside from "./Forside";
import { useNavigasjon } from "./useNavigasjon";
import Område from "./Område";
import Side from "./Side";
import Meny from "./Meny/Meny";
import Footer from "./Footer";

const Style = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
  min-height: 100vh;
  svg {
    stroke: currentColor;
  }
`;

function App() {
  const { state } = useNavigasjon();

  return (
    <>
      <DemoControlls />
      <Style>
        <Meny />
        {state === "forside" && <Forside />}
        {state === "område" && <Område />}
        {state === "side" && <Side />}
        <Footer />
      </Style>
    </>
  );
}

export default App;
