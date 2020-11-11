import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import DemoControlls from "../DemoControlls/DemoControlls";
import Forside from "./Forside";
import { useNavigasjon } from "./useNavigasjon";
import Område from "./Område";
import Side from "./Side";
import Meny from "./Meny/Meny";
import Footer from "./Footer";

const GlobalStyles = createGlobalStyle`
    .ReactCollapse--collapse {
        transition: height 0.3s;
    }
  svg {
    stroke: currentColor;
  }
`;

const Style = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
  min-height: 100vh;
`;

const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

function App() {
  const { state } = useNavigasjon();

  return (
    <>
      <GlobalStyles />
      <DemoControlls />
      <Style>
        <Meny />
        <Content>
          {state === "forside" && <Forside />}
          {state === "område" && <Område />}
          {state === "side" && <Side />}
        </Content>
        <Footer />
      </Style>
    </>
  );
}

export default App;
