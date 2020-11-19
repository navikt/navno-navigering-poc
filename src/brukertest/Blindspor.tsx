import * as React from "react";
import styled from "styled-components/macro";
import { theme } from "../theme";
import { useBrukertestContext } from "./brukertestState";

const Style = styled.div`
  border: 0.3rem solid ${theme.colors.navBla};
  padding: 2rem;
  text-align: center;
  border-radius: 0.3rem;
  span[role="img"] {
    font-size: 2rem;
  }
`;

function Blindspor() {
  const [state] = useBrukertestContext();
  return (
    <Style>
      <p>
        Hm, dette var nok et blindspor..{" "}
        <span role="img" aria-label="Tenkefjes">
          🤔
        </span>
      </p>
      <p>Oppgaven var: {state.oppgave?.oppgaveTekst}</p>
    </Style>
  );
}

export default Blindspor;
