import * as React from "react";
import styled, { css } from "styled-components/macro";
import { theme } from "../theme";
import { Knapp } from "./Velkommen";
import { useBrukertestContext } from "./brukertestState";

const Style = styled.div<{ ferdig: boolean }>`
  border: 0.4rem solid ${theme.colors.navGronn};
  padding: 2rem;
  text-align: center;
  border-radius: 0.3rem;
  font-size: 1.2rem;
  ${(props) =>
    props.ferdig &&
    css`
      box-shadow: 0 0 60rem black;
    `};
`;

function Gratulerer() {
  const [state, dispatch] = useBrukertestContext();

  const oppgave = state.oppgave!;
  const flereOppgaver = state.gjennståendeOppgaver.length > 0;

  const avslutt = () => dispatch({ type: "ferdig" });

  const handleNyOppgave = () => dispatch({ type: "nesteOppgave" });

  const ferdig = state.state === "gratulerer";

  const stats = ferdig && (
    <div>
      <p>
        <b>Du brukte:</b>{" "}
        {Math.round((oppgave.endTime! - oppgave.startTime!) / 100) / 10}{" "}
        sekunder på å løse oppgaven
      </p>
      <p>
        <b>Oppgave:</b> "{oppgave.oppgaveTekst}"
      </p>
      <p>
        <b>Design:</b> "{oppgave.design}"
      </p>
      <p>
        <b>
          Bra jobba! Dette er verdifull informasjon for oss i vårt videre arbeid
        </b>
      </p>
    </div>
  );

  return (
    <Style ferdig={ferdig}>
      <h2>Gratulerer, du fant frem! </h2>
      {stats}
      {!ferdig && <Knapp onClick={avslutt}>Trykk for å fullføre</Knapp>}
      {ferdig && flereOppgaver && (
        <Knapp onClick={handleNyOppgave}>Gjør en oppgave til</Knapp>
      )}
      {ferdig && !flereOppgaver && (
        <div>
          <b>
            Det var alle testene vi hadde for nå, men tusen takk for innsatsen
          </b>{" "}
          <p>
            Lukk siden eller gå til <a href="https://www.nav.no">nav.no</a>
          </p>
        </div>
      )}
    </Style>
  );
}

export default Gratulerer;
