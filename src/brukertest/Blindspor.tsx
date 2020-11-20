import * as React from "react";
import styled from "styled-components/macro";
import Emoji from "../components/Emoji";
import { theme } from "../theme";
import { useBrukertestContext } from "./brukertestState";

const Style = styled.div`
  border: 0.3rem solid ${theme.colors.navBla};
  padding: 2rem;
  text-align: center;
  border-radius: 0.3rem;
  font-weight: bold;
`;

function Blindspor() {
  const [state] = useBrukertestContext();
  return (
    <Style>
      <p>
        Hm, dette var nok et blindspor.. <Emoji label="Tenkefjes" emoji="🤔" />
      </p>
      <p>
        Oppgaven var: <em>{state.oppgave?.oppgaveTekst}</em>
      </p>
    </Style>
  );
}

export default Blindspor;
