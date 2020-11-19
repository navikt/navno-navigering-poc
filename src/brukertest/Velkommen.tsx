import * as React from "react";
import styled from "styled-components/macro";
import { theme } from "../theme";
import { useBrukertestContext } from "./brukertestState";
import { useDemoContext } from "../DemoControlls/demoContext";
import { useNavigasjon } from "../App/useNavigasjon";

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding: 1rem;
`;

const Style = styled.div`
  margin: auto;
  padding: 2rem;
  max-width: 25rem;
  border: ${theme.colors.navBla} 0.3rem solid;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;

export const Knapp = styled.button`
  border: solid 0.2rem ${theme.colors.navBla};
  border-radius: 0.3rem;
  background: transparent;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  margin-top: 2rem;
`;

function Velkommen() {
  const [state, dispatchBrukerTest] = useBrukertestContext();
  const [, dispatchDesign] = useDemoContext();
  const { navigerTil } = useNavigasjon();

  const nesteOppgave = state.gjennståendeOppgaver[0];

  const start = () => {
    dispatchBrukerTest({ type: "startTest" });
    dispatchDesign(nesteOppgave.design);
    navigerTil();
  };

  return (
    <Center>
      <Style>
        <h2>Hei og velkommen til brukertest</h2>
        <p>{nesteOppgave.oppgaveTekst}</p>
        <Knapp onClick={start}>Start</Knapp>
      </Style>
    </Center>
  );
}

export default Velkommen;
