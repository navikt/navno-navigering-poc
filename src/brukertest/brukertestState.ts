import { createReducerContext } from "react-use";
import { OmrådeI } from "../data/types";

type Actions =
  | { type: "ferdig" }
  | { type: "nyOppgave"; område: OmrådeI; side: string; beskrivelse: string }
  | { type: "steg"; steg: "string" };

interface Oppgave {
  startTime?: number;
  oppgave?: {
    område: OmrådeI;
    side: string;
  };
  oppgaveTekst?: string;
  history: string[];
  endTime?: number;
}

const initialState: Oppgave = {
  history: [],
};

type State = Oppgave;

function reducer(state: State, action: Actions): State {
  switch (action.type) {
    case "steg":
      return {
        ...state,
        history: [...state.history, action.steg],
      };
    case "ferdig":
      return {
        ...state,
        endTime: performance.now(),
      };
    case "nyOppgave":
      return {
        startTime: performance.now(),
        oppgave: {
          område: action.område,
          side: action.side,
        },
        history: [],
        oppgaveTekst: action.beskrivelse,
      };
  }
}

const [useContext, Provider] = createReducerContext(reducer, initialState);

export const useBrukertestContext = useContext;
export const BrukertestContextProvider = Provider;
