import React from "react";
import styled from "styled-components";
import DemoControlls from "../DemoControlls/DemoControlls";
import Forside from "./Forside";
import { useAppContext } from "./appContext";
import Område from "./Område";
import Side from "./Side";

const Style = styled.div`
  min-height: 100vh;
`;

function App() {
  const [state] = useAppContext();

  return (
    <>
      <DemoControlls />
      <Style>
        {state.state === "forside" && <Forside />}
        {state.state === "område" && <Område />}
        {state.state === "side" && <Side />}
      </Style>
    </>
  );
}

export default App;
