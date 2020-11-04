import { createReducerContext } from "react-use";

type Action = "ingenMeny" | "meny";

const initialState = {
  visMeny: true,
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
    default:
      console.error("unhandled action:", action);
      return state;
  }
};

export const [useDemoContext, DemoProvider] = createReducerContext(
  reducer,
  initialState
);
