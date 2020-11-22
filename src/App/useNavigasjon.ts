import { useHistory, useParams } from "react-router-dom";
import { OmrådeI } from "../data/types";
import { getOmrådeFraTittel, getSideFraOmråde } from "../data/menuDataUtils";
import { idFromString } from "../utils/idFromString";

type Route = "forside" | "område" | "side";

function getState(område?: string, side?: string): Route {
  if (område && side) return "side";
  else if (område) return "område";
  else return "forside";
}

export const useNavigasjon = () => {
  const params = useParams<{ omrade?: string; side?: string }>();
  const history = useHistory();

  const lenkeTil = (område?: OmrådeI, side?: string) => {
    if (område && side)
      return `/navno-navigering-poc/${idFromString(
        område.title
      )}/${idFromString(side)}`;
    else if (område)
      return `/navno-navigering-poc/${idFromString(område.title)}`;
    else return "/navno-navigering-poc";
  };

  const navigerTil = (område?: OmrådeI, side?: string) => {
    history.push(lenkeTil(område, side));
  };

  const område = getOmrådeFraTittel(params.omrade);
  return {
    område,
    side: område ? getSideFraOmråde(område, params.side) : undefined,
    state: getState(params.omrade, params.side),
    navigerTil,
    lenkeTil,
  };
};
