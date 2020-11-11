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
  | "toggleToppnivåNavigering";

const initialState = {
  visMeny: true,
  visIkoner: true,
  undersiderIMeny: true,
  undersiderPaForside: false,
  visBrødsmuler: true,
  featuredContent: false,
  border: true,
  chevron: true,
  områdeBeskrivelse: true,
  toppnivåNavigering: false,
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
  }
};

export const [useDemoContext, DemoProvider] = createReducerContext(
  reducer,
  initialState
);
