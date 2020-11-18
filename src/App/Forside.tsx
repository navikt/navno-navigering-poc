import * as React from "react";
import { menuData } from "../data/menuData";
import { useDemoContext } from "../DemoControlls/demoContext";
import ToppTrePanel from "../components/ToppTrePanel";
import ContextTabs from "./ContextTabs";
import ForsideInnhold from "./ForsideInnhold";

function Forside() {
  const [demoContext] = useDemoContext();
  const områder = menuData.områder;
  const featured = områder.filter((område) => område.featured);

  return (
    <>
      {demoContext.featuredContent && <ToppTrePanel områder={featured} />}
      {demoContext.contextTabs ? <ContextTabs /> : <ForsideInnhold />}
    </>
  );
}

export default Forside;
