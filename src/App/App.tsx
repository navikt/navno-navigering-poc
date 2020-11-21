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
import Velkommen from "../brukertest/Velkommen";
import Gratulerer from "../brukertest/Gratulerer";
import NyOppgave from "../brukertest/NyOppgave";
import { logEvent } from "../utils/logging-config";
import useSetupTest from "./useSetupTest";
import UgyldigId from "../brukertest/UgyldigId";
import TestPanel from "../brukertest/TestPanel";

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

const ContentStyle = styled.div<{ bredLayout: boolean }>`
  margin-left: auto;
  margin-right: auto;
  padding: 0 2vmin;
  max-width: ${(props) => (props.bredLayout ? "65rem" : "55rem")};
  width: 100%;
`;

function Content() {
  const [demoContext] = useDemoContext();
  const [brukertest] = useBrukertestContext();
  const { state, område } = useNavigasjon();

  const brukertestState = brukertest.state;

  switch (brukertestState) {
    case "setup":
      return null;
    case "velkommen":
      return <Velkommen />;
    case "ugyldigLenke":
      return <UgyldigId />;
    case "nyOppgave":
      return <NyOppgave />;
    case "gratulerer":
      return <Gratulerer />;
    default:
      return (
        <>
          {!demoContext.chevron && <SkjulChevronPaKnapper />}
          <GlobalStyles />
          <DemoControlls />
          <Style>
            <Header />
            <ContentStyle bredLayout={demoContext.tillatTreLenkerIBredden}>
              {state === "forside" && <Forside />}
              {state === "område" && <Område område={område!} />}
              {state === "side" && <Side />}
            </ContentStyle>
            <Footer />
            <TestPanel />
          </Style>
        </>
      );
  }
}

function App() {
  const { state, side, område } = useNavigasjon();
  const [, dispatchBrukertest] = useBrukertestContext();

  useSetupTest();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [state, side, område]);

  useEffect(() => {
    logEvent("sidevisning");
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // @ts-ignore
      const innerText = e.target?.innerText;
      dispatchBrukertest({ type: "klikk", clickedText: innerText || "" });
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [dispatchBrukertest]);

  return <Content />;
}

export default App;
