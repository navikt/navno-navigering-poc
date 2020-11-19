import * as React from "react";
import styled from "styled-components/macro";
import { theme } from "../theme";
import { Knapp } from "./Velkommen";
import { useBrukertestContext } from "./brukertestState";

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding: 1rem;
`;

const Style = styled.div`
  border: 0.4rem solid ${theme.colors.navGronn};
  padding: 2rem;
  text-align: center;
  border-radius: 0.3rem;
  font-size: 1.2rem;
  span[role="img"] {
    font-size: 2rem;
  }
`;

function Gratulerer() {
  const [state, dispatch] = useBrukertestContext();

  const oppgave = state.oppgave!;
  const flereOppgaver = state.gjennståendeOppgaver.length > 0;

  const handleNyOppgave = () => dispatch({ type: "nesteOppgave" });

  console.log(state.utførteTester);

  return (
    <Center>
      <Style>
        <h2>
          Gratulerer, du fant frem{" "}
          <span role="img" aria-label="Konfetti">
            🎉
          </span>
        </h2>
        <div>
          <p>
            <b>Du brukte:</b> {oppgave.tidsbruk} sekunder på å løse oppgaven
          </p>
          <p>
            <b>Oppgave:</b> "{oppgave.oppgaveTekst}"
          </p>
          <p>
            <b>Design:</b> "{oppgave.design}"
          </p>
          <p>
            <b>
              Bra jobba! Dette er verdifull informasjon for oss i vårt videre
              arbeid
            </b>
          </p>
        </div>
        {flereOppgaver && (
          <Knapp onClick={handleNyOppgave}>Gjør en oppgave til</Knapp>
        )}
        {!flereOppgaver && (
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
    </Center>
  );
}

export default Gratulerer;
