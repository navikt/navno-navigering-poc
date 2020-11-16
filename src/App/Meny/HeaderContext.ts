import { createReducerContext } from "react-use";

export type HeaderActions = "openMenu" | "closeMenu" | "toggleMenu";

const initialState = {
  menuOpen: false,
};

type State = typeof initialState;

function reducer(state: State, action: HeaderActions): State {
  switch (action) {
    case "closeMenu":
      return {
        ...state,
        menuOpen: false,
      };
    case "openMenu":
      return {
        ...state,
        menuOpen: true,
      };
    case "toggleMenu":
      return {
        ...state,
        menuOpen: !state.menuOpen,
      };
  }
}

export const [useHeaderContext, HeaderContextProvider] = createReducerContext(
  reducer,
  initialState
);
