import { OmrådeI } from "./types";
import { menuData } from "./menuData";
import { idFromString } from "../utils/idFromString";

export function getOmrådeFraTittel(title?: string): OmrådeI | undefined {
  return menuData.områder.find(
    (område) => idFromString(område.title) === idFromString(title || "")
  );
}

export function getSideFraOmråde(
  område: OmrådeI,
  sideId?: string
): string | undefined {
  return område.sider.find(
    (side) => idFromString(side) === idFromString(sideId || "")
  );
}
