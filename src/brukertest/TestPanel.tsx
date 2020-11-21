import * as React from "react";
import { useBrukertestContext } from "./brukertestState";
import { theme } from "../theme";
import styled from "styled-components/macro";
import { Knapp } from "nav-frontend-knapper";

const Style = styled.div`
  padding: 1rem;
  border: 0.3rem ${theme.colors.navGronn} dashed;
  background-color: ${theme.colors.navGronnLighten80};
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    margin: 1rem 0;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 80rem;
  flex-wrap: wrap;
  h4 {
    margin-bottom: 0.3rem;
  }
  p {
    margin-top: 0;
  }
  > div {
    margin: 0.5rem;
  }
`;

function TestPanel() {
  const [state, dispatch] = useBrukertestContext();

  if (state.state === "titteUtenTest") {
    return null;
  }

  return (
    <Style>
      <h3>Brukertest</h3>
      <Flex>
        <div>
          <h4>Oppgavetekst</h4>
          <p>{state.oppgave?.oppgaveTekst}</p>
        </div>
        <div>
          <h4>Utførte oppgaver</h4>
          <p>
            {state.utførteTester.length}/
            {state.utførteTester.length + state.gjennståendeOppgaver.length + 1}
          </p>
        </div>
      </Flex>
      <Knapp onClick={() => dispatch({ type: "avbryt" })}>Avbryt oppgave</Knapp>
    </Style>
  );
}

export default TestPanel;
