import { createReducerContext } from "react-use";

type Action =
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
  | "skjulFeatured";

const initialState = {
  visMeny: true,
  visIkoner: true,
  undersiderIMeny: true,
  undersiderPaForside: false,
  visBrødsmuler: true,
  featuredContent: false,
};

type State = typeof initialState;

const reducer = (state: State, action: Action) => {
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
  }
};

export const [useDemoContext, DemoProvider] = createReducerContext(
  reducer,
  initialState
);
