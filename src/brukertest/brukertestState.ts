import { createReducerContext } from "react-use";
import { OmrådeI } from "../data/types";
import { getRandomOppgaver } from "./oppgaver";
import { DemoContextActions } from "../DemoControlls/demoContext";
import { logEvent } from "../utils/logging-config";

export interface OppgaveConfig {
  område: OmrådeI;
  side: string;
  oppgaveTekst: string;
  design: DemoContextActions;
}

type Actions =
  | { type: "ferdig" }
  | { type: "avbryt" }
  | { type: "ugyldigTestId" }
  | { type: "gyldigTestId"; testId: string }
  | { type: "tittRundtUtenTest" }
  | { type: "nesteOppgave" }
  | { type: "startTest" }
  | { type: "klikk"; clickedText: string };

interface Oppgave extends Partial<OppgaveConfig> {
  startTime?: number;
  klikkHistorikk: string[];
  tidsbruk?: number;
}

export type BrukertestState = {
  oppgave?: Oppgave;
  gjennståendeOppgaver: OppgaveConfig[];
  utførteTester: Oppgave[];
  testId?: string;
  state:
    | "setup"
    | "velkommen"
    | "test"
    | "gratulerer"
    | "testAvbrutt"
    | "nyOppgave"
    | "ugyldigLenke"
    | "titteUtenTest";
};

const initialState: BrukertestState = {
  gjennståendeOppgaver: getRandomOppgaver(),
  utførteTester: [],
  state: "setup",
};

const logUtførtOppgave = (utførtOppgave: Oppgave, testId: string) => {
  logEvent("utført-oppgave", {
    oppgaveTekst: utførtOppgave.oppgaveTekst,
    tidsbruk: utførtOppgave.tidsbruk,
    design: utførtOppgave.design,
    antallKlikk: utførtOppgave.klikkHistorikk.length,
    testGruppe: testId,
  });
};

const logAvbruttOppgave = (utførtOppgave: Oppgave, testId: string) => {
  logEvent("avbrutt-oppgave", {
    oppgaveTekst: utførtOppgave.oppgaveTekst,
    tidsbruk: utførtOppgave.tidsbruk,
    design: utførtOppgave.design,
    antallKlikk: utførtOppgave.klikkHistorikk.length,
    testGruppe: testId,
  });
};

function reducer(state: BrukertestState, action: Actions): BrukertestState {
  const oppgave = state.oppgave;

  const tidsbruk = oppgave
    ? Math.round((performance.now() - oppgave.startTime!) / 100) / 10
    : NaN;

  const utførtOppgave: Oppgave = {
    ...oppgave!,
    tidsbruk: tidsbruk,
  };

  switch (action.type) {
    case "klikk":
      return {
        ...state,
        oppgave: oppgave && {
          ...oppgave,
          klikkHistorikk: [
            ...oppgave.klikkHistorikk,
            `${tidsbruk}s - ${action.clickedText.slice(0, 60)}`,
          ],
        },
      };
    case "nesteOppgave":
      return {
        ...state,
        state: "nyOppgave",
      };
    case "ferdig":
      logUtførtOppgave(utførtOppgave, state.testId!);
      return {
        ...state,
        state: "gratulerer",
        oppgave: utførtOppgave,
        utførteTester: [...state.utførteTester, utførtOppgave],
      };
    case "avbryt":
      logAvbruttOppgave(utførtOppgave, state.testId!);
      return {
        ...state,
        state: "testAvbrutt",
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
    case "gyldigTestId":
      return {
        ...state,
        testId: action.testId,
        state: "velkommen",
      };
    case "ugyldigTestId":
      return {
        ...state,
        state: "ugyldigLenke",
      };
    case "tittRundtUtenTest":
      return {
        ...state,
        state: "titteUtenTest",
      };
  }
}

const [useContext, Provider] = createReducerContext(reducer, initialState);

export const useBrukertestContext = useContext;
export const BrukertestContextProvider = Provider;
