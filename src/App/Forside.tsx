import * as React from "react";
import { menuData } from "../data/menuData";
import { useAppContext } from "./appContext";
import Lenkepanel from "nav-frontend-lenkepanel";
import { Grid } from "../components/LenkepanelGrid";
import styled from "styled-components";
import { useDemoContext } from "../DemoControlls/demoContext";

const StyledLenkepanel = styled(Lenkepanel)`
.lenkepanel__heading {
display: flex;
align-items: center;
}
    svg {
      width: 2.5rem;
      max-height: 2.5rem;
      margin-right: 1.5rem;
      stroke-width: 1.2;
      flex-shrink: 0;
    }
`;

function Forside() {
  const [, dispatch] = useAppContext();
  const [demoContext, dispatchDemoContext] = useDemoContext();

  return (
    <Grid>
      {menuData.områder.map((område) => (
        <StyledLenkepanel
          href="#"
          tittelProps="normaltekst"
          border
          onClick={() => dispatch({ type: "velgOmråde", område: område })}
        >
          {demoContext.visIkoner && område.ikon}
          <div>
            <h3>{område.title}</h3>
            <p>{område.beskrivelse}</p>
          </div>
        </StyledLenkepanel>
      ))}
    </Grid>
  );
}

export default Forside;
