import React, { useRef } from "react";
import { useDemoContext } from "../DemoControlls/demoContext";
import { menuData } from "../data/menuData";
import { LenkepanelGrid } from "../components/LenkepanelGrid";
import { OmrådeI } from "../data/types";
import { useNavigasjon } from "./useNavigasjon";
import { runIfEventIsNotInsideRef } from "../utils/reactRef-utils";
import { Undersider } from "./Meny/Undersider";
import styled from "styled-components/macro";
import Lenkepanel from "nav-frontend-lenkepanel";

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

function OmrådeKnapp(props: { område: OmrådeI }) {
  const [demoContext] = useDemoContext();
  const { navigerTil } = useNavigasjon();
  const ref = useRef(null);

  return (
    <StyledLenkepanel
      key={props.område.title}
      href="#"
      tittelProps="normaltekst"
      border={demoContext.border}
      onClick={runIfEventIsNotInsideRef(ref, () => navigerTil(props.område))}
    >
      {demoContext.visIkoner && props.område.ikon}
      <div>
        <h3>{props.område.title}</h3>
        {demoContext.områdeBeskrivelse && <p>{props.område.beskrivelse}</p>}
        {demoContext.undersiderPaForside && (
          <div ref={ref}>
            <Undersider område={props.område} chevron={true} />
          </div>
        )}
      </div>
    </StyledLenkepanel>
  );
}

function ForsideInnhold() {
  const [demoContext] = useDemoContext();
  const områder = menuData.områder;

  const lenkeListe = områder
    .filter((område) => !demoContext.toppTre || !område.toppTreKandidat)
    .filter(
      (område) => !demoContext.contextNavigering || !område.contextKandidat
    )
    .filter((område) => !demoContext.contextTabs || !område.contextKandidat)
    .filter(
      (område) => !demoContext.footerNavigering || !område.footerKandidat
    );

  return (
    <LenkepanelGrid alignStart={!demoContext.border && !demoContext.chevron}>
      {lenkeListe.map((område) => (
        <OmrådeKnapp key={område.title} område={område} />
      ))}
    </LenkepanelGrid>
  );
}

export default ForsideInnhold;
