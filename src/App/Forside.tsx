import * as React from "react";
import { menuData } from "../data/menuData";
import { useNavigasjon } from "./appContext";
import Lenkepanel from "nav-frontend-lenkepanel";
import { LenkepanelGrid } from "../components/LenkepanelGrid";
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
  const [demoContext] = useDemoContext();
  const { navigerTil } = useNavigasjon();

  return (
    <LenkepanelGrid>
      {menuData.områder.map((område) => (
        <StyledLenkepanel
          key={område.title}
          href="#"
          tittelProps="normaltekst"
          border
          onClick={() => navigerTil(område)}
        >
          {demoContext.visIkoner && område.ikon}
          <div>
            <h3>{område.title}</h3>
            <p>{område.beskrivelse}</p>
          </div>
        </StyledLenkepanel>
      ))}
    </LenkepanelGrid>
  );
}

export default Forside;
