import React, { useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components/macro";
import DemoControlls from "../DemoControlls/DemoControlls";
import Forside from "./Forside";
import { useNavigasjon } from "./useNavigasjon";
import Område from "./Område";
import Side from "./Side";
import Meny from "./Meny/Meny";
import Footer from "./Footer";
import { useDemoContext } from "../DemoControlls/demoContext";

const GlobalStyles = createGlobalStyle`
    .ReactCollapse--collapse {
        transition: height 0.3s;
    }
  svg {
    stroke: currentColor;
  }
`;

const SkjulChevronPaKnapper = createGlobalStyle`
.lenkepanel__indikator {
  display: none;
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
  max-width: 60rem;
  width: 100%;
`;

function App() {
  const { state, side, område } = useNavigasjon();
  const [demoContext] = useDemoContext();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [state, side, område]);

  return (
    <>
      {!demoContext.chevron && <SkjulChevronPaKnapper />}
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
        Deployed by github
      </Style>
    </>
  );
}

export default App;
