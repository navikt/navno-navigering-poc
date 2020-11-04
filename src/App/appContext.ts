import { createReducerContext } from "react-use";
import { OmrådeI } from "../data/types";

type Action =
  | { type: "velgOmråde"; område: OmrådeI }
  | { type: "velgSide"; side: string }
  | { type: "clear" };

interface State {
  område?: OmrådeI;
  side?: string;
  state: "forside" | "område" | "side";
}

const initialState: State = {
  område: undefined,
  side: undefined,
  state: "forside",
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "velgOmråde":
      return {
        ...state,
        område: action.område,
        side: undefined,
        state: "område",
      };
    case "velgSide":
      return {
        ...state,
        side: action.side,
        state: "side",
      };
    case "clear":
      return {
        ...initialState,
      };
    default:
      console.error("unhandled action:", action);
      return state;
  }
};

export const [useAppContext, AppContextProvider] = createReducerContext(
  reducer,
  initialState
);
