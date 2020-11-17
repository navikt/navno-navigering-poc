import { createReducerContext } from "react-use";

export type DemoContextActions =
  | "skjulMeny"
  | "visMeny"
  | "visIkoner"
  | "skjulIkoner"
  | "ikkeVisUndersiderIMeny"
  | "visUndersiderIMeny"
  | "visBrødsmuler"
  | "skjulBrødsmuler"
  | "visUndersiderPaForside"
  | "skjulUndersiderPaForside"
  | "visFeatured"
  | "skjulFeatured"
  | "toggleBorder"
  | "toggleChevron"
  | "toggleOmrådebeskrivelse"
  | "toggleToppnivåNavigering"
  | "toggleFooterNavigering"
  | "toggleContextTabs"
  | "toggleSøkIHeader"
  | "toggleSøkIMeny"
  | "toggleTillatTreIBredden"
  | "brukertestMinimalist"
  | "brukertestMaksimalist"
  | "brukertestFavoritt";

const initialState = {
  visMeny: true,
  visIkoner: true,
  undersiderIMeny: false,
  undersiderPaForside: false,
  visBrødsmuler: true,
  featuredContent: false,
  border: true,
  chevron: true,
  områdeBeskrivelse: true,
  toppnivåNavigering: false,
  footerNavigering: false,
  contextTabs: false,
  søkIHeader: false,
  søkIMeny: false,
  tillatTreLenkerIBredden: false,
};

type State = typeof initialState;

const reducer = (state: State, action: DemoContextActions) => {
  switch (action) {
    case "skjulMeny":
      return {
        ...state,
        visMeny: false,
      };
    case "visMeny":
      return {
        ...state,
        visMeny: true,
      };
    case "skjulIkoner":
      return {
        ...state,
        visIkoner: false,
      };
    case "visIkoner":
      return {
        ...state,
        visIkoner: true,
      };
    case "ikkeVisUndersiderIMeny":
      return {
        ...state,
        visMeny: true,
        undersiderIMeny: false,
      };
    case "visUndersiderIMeny":
      return {
        ...state,
        visMeny: true,
        undersiderIMeny: true,
      };
    case "visBrødsmuler":
      return {
        ...state,
        visBrødsmuler: true,
      };
    case "skjulBrødsmuler":
      return {
        ...state,
        visBrødsmuler: false,
      };
    case "skjulUndersiderPaForside":
      return {
        ...state,
        undersiderPaForside: false,
      };
    case "visUndersiderPaForside":
      return {
        ...state,
        undersiderPaForside: true,
      };
    case "visFeatured":
      return {
        ...state,
        featuredContent: true,
      };
    case "skjulFeatured":
      return {
        ...state,
        featuredContent: false,
      };
    case "toggleBorder":
      return {
        ...state,
        border: !state.border,
      };
    case "toggleChevron":
      return {
        ...state,
        chevron: !state.chevron,
      };
    case "toggleOmrådebeskrivelse":
      return {
        ...state,
        områdeBeskrivelse: !state.områdeBeskrivelse,
      };
    case "toggleToppnivåNavigering":
      return {
        ...state,
        toppnivåNavigering: !state.toppnivåNavigering,
      };
    case "toggleFooterNavigering":
      return {
        ...state,
        footerNavigering: !state.footerNavigering,
      };
    case "toggleContextTabs":
      return {
        ...state,
        contextTabs: !state.contextTabs,
      };
    case "toggleSøkIMeny":
      return {
        ...state,
        søkIMeny: !state.søkIMeny,
      };
    case "toggleSøkIHeader":
      return {
        ...state,
        søkIHeader: !state.søkIHeader,
      };
    case "toggleTillatTreIBredden":
      return {
        ...state,
        tillatTreLenkerIBredden: !state.tillatTreLenkerIBredden,
      };
    case "brukertestMinimalist":
      return {
        ...initialState,
        områdeBeskrivelse: false,
      };
    case "brukertestMaksimalist":
      return {
        ...initialState,
        undersiderPaForside: true,
        søkIHeader: true,
        søkIMeny: true,
        toppnivåNavigering: true,
        footerNavigering: true,
        featuredContent: true,
      };
    case "brukertestFavoritt":
      return {
        ...initialState,
        tillatTreLenkerIBredden: true,
        chevron: false,
        border: false,
        footerNavigering: true,
        toppnivåNavigering: true,
      };
  }
};

export const [useDemoContext, DemoProvider] = createReducerContext(
  reducer,
  initialState
);
