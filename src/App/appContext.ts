import { useHistory, useParams } from "react-router-dom";
import { OmrådeI } from "../data/types";
import { menuData } from "../data/menuData";

type Route = "forside" | "område" | "side";

function getState(område?: string, side?: string): Route {
  if (område && side) return "side";
  else if (område) return "område";
  else return "forside";
}

export const useNavigasjon = () => {
  const params = useParams<{ omrade?: string; side?: string }>();
  const history = useHistory();

  const navigerTil = (område?: OmrådeI, side?: string) => {
    console.log(område, side);
    if (område && side)
      history.push(`/navno-navigering-poc/${område.title}/${side}`);
    else if (område) history.push(`/navno-navigering-poc/${område.title}`);
    else history.push("/navno-navigering-poc");
  };

  return {
    område: menuData.områder.find((it) => it.title === params.omrade),
    side: params.side,
    state: getState(params.omrade, params.side),
    navigerTil,
  };
};
