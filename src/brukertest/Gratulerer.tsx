import * as React from "react";
import styled from "styled-components/macro";
import { theme } from "../theme";
import { Knapp } from "./Velkommen";
import { useBrukertestContext } from "./brukertestState";

const Style = styled.div`
  border: 0.4rem solid ${theme.colors.navGronn};
  padding: 2rem;
  text-align: center;
  border-radius: 0.3rem;
  font-size: 1.2rem;
`;

function Gratulerer() {
  const [state, dispatch] = useBrukertestContext();

  const avslutt = () => dispatch({ type: "ferdig" });

  const stats = state.endTime && (
    <div>
      Du brukte:
      <p>
        {Math.round((state.endTime - state.startTime!) / 100) / 10} sekunder på
        å løse oppgaven "{state.oppgaveTekst}"
      </p>
      <p>
        Bra jobba! Dette er verdifull informasjon for oss i vårt videre arbeid
      </p>
    </div>
  );

  return (
    <Style>
      <h2>Gratulerer, du fant frem!</h2>
      {stats ? stats : <Knapp onClick={avslutt}>Trykk for å fullføre</Knapp>}
    </Style>
  );
}

export default Gratulerer;
