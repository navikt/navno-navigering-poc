import { createReducerContext } from "react-use";

type Action = "ingenMeny" | "meny" | "visIkoner" | "skjulIkoner";

const initialState = {
  visMeny: true,
  visIkoner: true,
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
    default:
      console.error("unhandled action:", action);
      return state;
  }
};

export const [useDemoContext, DemoProvider] = createReducerContext(
  reducer,
  initialState
);
