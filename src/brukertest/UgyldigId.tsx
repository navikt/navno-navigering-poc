import * as React from "react";
import { useBrukertestContext } from "./brukertestState";
import InstruksjonspanelStyle from "./InstruksjonspanelStyle";
import Emoji from "../components/Emoji";
import { useNavigasjon } from "../App/useNavigasjon";

function UgyldigId() {
  const [, dispatchBrukerTest] = useBrukertestContext();
  const { navigerTil } = useNavigasjon();

  const start = () => {
    dispatchBrukerTest({ type: "tittRundtUtenTest" });
    navigerTil();
  };

  return (
    <InstruksjonspanelStyle>
      <h2>
        Hei, vi kunne ikke finne testen din{" "}
        <Emoji label="Tenkefjes" emoji="🤔" />
      </h2>
      <p>
        Hvis du har fått tilsendt en lenke for brukertest må du klikke på denne
        på nytt for å komme tilbake til testen.
      </p>
      <p>
        Alt du finner på disse sidene er laget for denne testen, dersom du
        trenger ekte informasjon kan du gå til{" "}
        <a href="https://www.nav.no">nav.no</a>.
      </p>
      <button onClick={start}>Se deg rundt uten å gjøre en brukertest</button>
    </InstruksjonspanelStyle>
  );
}

export default UgyldigId;
