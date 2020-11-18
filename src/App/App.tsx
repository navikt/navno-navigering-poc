import React, { useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components/macro";
import DemoControlls from "../DemoControlls/DemoControlls";
import Forside from "./Forside";
import { useNavigasjon } from "./useNavigasjon";
import Område from "./Område";
import Side from "./Side";
import Header from "./Meny/Header";
import Footer from "./Footer";
import { useDemoContext } from "../DemoControlls/demoContext";
import { useBrukertestContext } from "../brukertest/brukertestState";
import { useSearchParam } from "react-use";
import Velkommen from "../brukertest/Velkommen";

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

const Content = styled.div<{ bredLayout: boolean }>`
  margin-left: auto;
  margin-right: auto;
  padding: 0 2vmin;
  max-width: ${(props) => (props.bredLayout ? "65rem" : "55rem")};
  width: 100%;
`;

function App() {
  const { state, side, område } = useNavigasjon();
  const [demoContext] = useDemoContext();
  const [brukertest, dispatchBrukertest] = useBrukertestContext();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [state, side, område]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // @ts-ignore
      const innerText = e.target?.innerText;
      dispatchBrukertest({ type: "event", name: innerText || "" });
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  if (brukertest.state === "velkommen") {
    return <Velkommen />;
  }

  return (
    <>
      {!demoContext.chevron && <SkjulChevronPaKnapper />}
      <GlobalStyles />
      <DemoControlls />
      <Style>
        <Header />
        <Content bredLayout={demoContext.tillatTreLenkerIBredden}>
          {state === "forside" && <Forside />}
          {state === "område" && <Område område={område!} />}
          {state === "side" && <Side />}
        </Content>
        <Footer />
      </Style>
    </>
  );
}

export default App;
