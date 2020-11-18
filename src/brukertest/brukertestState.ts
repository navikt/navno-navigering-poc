import { createReducerContext } from "react-use";
import { OmrådeI } from "../data/types";
import { getRandomOppgaver } from "./oppgaver";
import { DemoContextActions } from "../DemoControlls/demoContext";

export interface OppgaveConfig {
  område: OmrådeI;
  side: string;
  oppgaveTekst: string;
  design: DemoContextActions;
}

type Actions =
  | { type: "ferdig" }
  | { type: "nesteOppgave" }
  | { type: "startTest" }
  | { type: "event"; name: "string" };

interface Oppgave extends Partial<OppgaveConfig> {
  startTime?: number;
  klikkHistorikk: string[];
  tidsbruk?: number;
}

type State = {
  oppgave?: Oppgave;
  gjennståendeOppgaver: OppgaveConfig[];
  utførteTester: Oppgave[];
  state: "velkommen" | "test" | "gratulerer" | "nyOppgave";
};

const initialState: State = {
  gjennståendeOppgaver: getRandomOppgaver(),
  utførteTester: [],
  state: "velkommen",
};

function reducer(state: State, action: Actions): State {
  const oppgave = state.oppgave;

  switch (action.type) {
    case "event":
      return {
        ...state,
        oppgave: oppgave && {
          ...oppgave,
          klikkHistorikk: [...oppgave.klikkHistorikk, action.name],
        },
      };
    case "nesteOppgave":
      return {
        ...state,
        state: "velkommen",
      };
    case "ferdig":
      const utførtOppgave: Oppgave = {
        ...oppgave!,
        tidsbruk:
          Math.round((performance.now() - oppgave!.startTime!) / 100) / 10,
      };
      return {
        ...state,
        state: "gratulerer",
        oppgave: utførtOppgave,
        utførteTester: [...state.utførteTester, utførtOppgave],
      };
    case "startTest":
      const nesteOppgave = state.gjennståendeOppgaver[0];
      const resterendeOppgaver = state.gjennståendeOppgaver.slice(1);
      return {
        ...state,
        state: "test",
        oppgave: {
          ...nesteOppgave,
          startTime: performance.now(),
          klikkHistorikk: [],
        },
        gjennståendeOppgaver: resterendeOppgaver,
      };
  }
}

const [useContext, Provider] = createReducerContext(reducer, initialState);

export const useBrukertestContext = useContext;
export const BrukertestContextProvider = Provider;
