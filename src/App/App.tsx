import React from "react";
import styled from "styled-components";
import DemoControlls from "../DemoControlls/DemoControlls";
import Forside from "./Forside";
import { useAppContext } from "./appContext";
import Område from "./Område";
import Side from "./Side";
import Meny from "./Meny/Meny";
import Footer from "./Footer";

const Style = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 1fr;
    min-height: 100vh;
    justify-content: space-between;
`;

function App() {
  const [state] = useAppContext();

  return (
    <Style>
      <DemoControlls />
      <Meny />
        {state.state === "forside" && <Forside />}
        {state.state === "område" && <Område />}
        {state.state === "side" && <Side />}
      <Footer />
    </Style>
  );
}

export default App;
