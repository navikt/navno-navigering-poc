import { useEffect } from "react";
import { useSearchParam } from "react-use";
import { useBrukertestContext } from "../brukertest/brukertestState";

const gyldigeBrukertestLenker = ["utvikling&data", "test"];

function useSetupBrukertest() {
  const testId = useSearchParam("testId") || "N/A";
  const [state, dispatch] = useBrukertestContext();

  useEffect(() => {
    if (state.state === "setup") {
      if (gyldigeBrukertestLenker.includes(testId)) {
        dispatch({
          type: "gyldigTestId",
          testId: testId,
        });
      } else {
        dispatch({ type: "ugyldigTestId" });
      }
    }
  }, [state, dispatch, testId]);
}

export default useSetupBrukertest;
