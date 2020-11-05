import { createReducerContext } from "react-use";

type Action =
  | "ingenMeny"
  | "meny"
  | "visIkoner"
  | "skjulIkoner"
  | "kortMeny"
  | "langMeny";

const initialState = {
  visMeny: true,
  visIkoner: true,
  langMeny: true,
};

type State = typeof initialState;

const reducer = (state: State, action: Action) => {
  switch (action) {
    case "ingenMeny":
      return {
        ...state,
        visMeny: false,
      };
    case "meny":
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
    case "kortMeny":
      return {
        ...state,
        visMeny: true,
        langMeny: false,
      };
    case "langMeny":
      return {
        ...state,
        visMeny: true,
        langMeny: true,
      };
    default:
      console.error("unhandled action:", action);
      return state;
  }
};

export const [useDemoContext, DemoProvider] = createReducerContext(
  reducer,
  initialState
);
