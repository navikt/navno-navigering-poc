import * as React from "react";
import { menuData } from "../data/menuData";
import { useAppContext } from "./appContext";
import Lenkepanel from "nav-frontend-lenkepanel";
import { Grid } from "../components/LenkepanelGrid";

function Forside() {
  const [, dispatch] = useAppContext();

  return (
    <Grid>
      {menuData.områder.map((område) => (
        <Lenkepanel
          href="#"
          tittelProps="normaltekst"
          border
          onClick={() => dispatch({ type: "velgOmråde", område: område })}
        >
          <h3>{område.title}</h3>
          <p>{område.beskrivelse}</p>
        </Lenkepanel>
      ))}
    </Grid>
  );
}

export default Forside;
