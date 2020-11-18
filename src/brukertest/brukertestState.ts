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
  | { type: "steg"; steg: "string" };

interface Oppgave extends Partial<OppgaveConfig> {
  startTime?: number;
  history: string[];
  endTime?: number;
}

type State = {
  oppgave?: Oppgave;
  gjennståendeOppgaver: OppgaveConfig[];
  state: "velkommen" | "test" | "gratulerer" | "nyOppgave";
};

const initialState: State = {
  gjennståendeOppgaver: getRandomOppgaver(),
  state: "velkommen",
};

function reducer(state: State, action: Actions): State {
  const oppgave = state.oppgave;

  switch (action.type) {
    case "steg":
      return {
        ...state,
        oppgave: oppgave && {
          ...oppgave,
          history: [...oppgave.history, action.steg],
        },
      };
    case "nesteOppgave":
      return {
        ...state,
        state: "velkommen",
      };
    case "ferdig":
      return {
        ...state,
        state: "gratulerer",
        oppgave: oppgave && {
          ...oppgave,
          endTime: performance.now(),
        },
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
          history: [],
        },
        gjennståendeOppgaver: resterendeOppgaver,
      };
  }
}

const [useContext, Provider] = createReducerContext(reducer, initialState);

export const useBrukertestContext = useContext;
export const BrukertestContextProvider = Provider;
