import * as React from "react";
import { useBrukertestContext } from "./brukertestState";
import InstruksjonspanelStyle from "./InstruksjonspanelStyle";

function Velkommen() {
  const [, dispatchBrukerTest] = useBrukertestContext();

  const start = () => {
    dispatchBrukerTest({ type: "nesteOppgave" });
  };

  return (
    <InstruksjonspanelStyle>
      <h2>Hei og velkommen til brukertest!</h2>
      <p>
        Du vil nå få et par oppgaver, også ser vi hvor lett det er for deg å
        finne frem. Alt vi samler inn blir behandlet annonymt, og du kan
        avslutte testen når du vil ved å lukke siden.
      </p>
      <p>
        Om du skulle glemme oppgaven underveis finner du oppgaveteksten på bunn
        av siden, samt mulighet til å avbryte en oppgave om du ikke får den til.
      </p>
      <p>
        Hvis noen oppgaver er vanskelige betyr det at vi har gjort en for dårlig
        jobb med å lage god navigasjon. Da skal vi prøve å lage den bedre.
      </p>
      <p>
        Alt du finner på disse sidene er laget for denne testen, dersom du
        trenger ekte informasjon kan du gå til{" "}
        <a href="https://www.nav.no">nav.no</a>.
      </p>
      <button onClick={start}>Start</button>
    </InstruksjonspanelStyle>
  );
}

export default Velkommen;
