import { OmrådeI } from "./types";
import { menuData } from "./menuData";

export function getOmrådeFraTittel(title?: string): OmrådeI | undefined {
  return menuData.områder.find((område) => område.title === title);
}
