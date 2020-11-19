import * as React from "react";
import { useBrukertestContext } from "./brukertestState";
import InstruksjonspanelStyle from "./InstruksjonspanelStyle";
import Emoji from "../utils/Emoji";

function Gratulerer() {
  const [state, dispatch] = useBrukertestContext();

  const flereOppgaver = state.gjennståendeOppgaver.length > 0;

  const handleNyOppgave = () => dispatch({ type: "nesteOppgave" });

  console.log(state.utførteTester);

  return (
    <InstruksjonspanelStyle>
      <h2>
        Gratulerer, du fant frem <Emoji label="Konfetti" emoji="🎉" />
      </h2>
      <div>
        <p>
          <b>
            Bra jobba! Dette er verdifull informasjon for oss i vårt videre
            arbeid.
          </b>
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

export default Gratulerer;
