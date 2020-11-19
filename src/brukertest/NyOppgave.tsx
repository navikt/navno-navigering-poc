import * as React from "react";
import { useBrukertestContext } from "./brukertestState";
import { useDemoContext } from "../DemoControlls/demoContext";
import { useNavigasjon } from "../App/useNavigasjon";
import InstruksjonspanelStyle from "./InstruksjonspanelStyle";

function NyOppgave() {
  const [state, dispatchBrukerTest] = useBrukertestContext();
  const [, dispatchDesign] = useDemoContext();
  const { navigerTil } = useNavigasjon();

  const nesteOppgave = state.gjennståendeOppgaver[0];

  const start = () => {
    dispatchBrukerTest({ type: "startTest" });
    dispatchDesign(nesteOppgave.design);
    navigerTil();
  };

  return (
    <InstruksjonspanelStyle>
      <h2>Oppgave</h2>
      <p>{nesteOppgave.oppgaveTekst}</p>
      <button onClick={start}>Start</button>
    </InstruksjonspanelStyle>
  );
}

export default NyOppgave;
