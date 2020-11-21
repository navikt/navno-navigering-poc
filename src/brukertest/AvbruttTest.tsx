import * as React from "react";
import Emoji from "../components/Emoji";
import { useBrukertestContext } from "./brukertestState";
import InstruksjonspanelStyle from "./InstruksjonspanelStyle";

function AvbruttTest() {
  const [state, dispatch] = useBrukertestContext();

  const flereOppgaver = state.gjennståendeOppgaver.length > 0;

  const handleNyOppgave = () => dispatch({ type: "nesteOppgave" });

  console.log(state.utførteTester);

  return (
    <InstruksjonspanelStyle>
      <h2>Testen ble avbrutt</h2>
      <div>
        <p>
          Hvis oppgaven var vanskelig å løse betyr det at vi har gjort en for
          dårlig jobb. Dette er nyttig informasjon for oss, det betyr at vi må
          forberde navigasjonen.
        </p>
      </div>
      {flereOppgaver && (
        <button onClick={handleNyOppgave}>Gjør en oppgave til</button>
      )}
      {!flereOppgaver && (
        <div>
          <b>
            Det var alle testene vi hadde for nå, men tusen takk for innsatsen.{" "}
            <Emoji label="Smil" emoji="😊" />
          </b>{" "}
          <p>
            Lukk siden eller gå til <a href="https://www.nav.no">nav.no</a>
          </p>
        </div>
      )}
    </InstruksjonspanelStyle>
  );
}

export default AvbruttTest;
