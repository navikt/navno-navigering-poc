import * as React from "react";
import { menuData } from "../data/menuData";
import { useNavigasjon } from "./useNavigasjon";
import Lenkepanel from "nav-frontend-lenkepanel";
import { LenkepanelGrid } from "../components/LenkepanelGrid";
import styled from "styled-components/macro";
import { useDemoContext } from "../DemoControlls/demoContext";
import { Undersider } from "./Meny/PopDown";
import { useRef } from "react";
import { runIfEventIsNotInsideRef } from "../utils/reactRef-utils";
import { OmrådeI } from "../data/types";
import ToppTrePanel from "../components/ToppTrePanel";

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

function Område(props: { område: OmrådeI }) {
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
            <Undersider
              område={props.område}
              hanldeNaviger={navigerTil}
              chevron={true}
            />
          </div>
        )}
      </div>
    </StyledLenkepanel>
  );
}

function Forside() {
  const [demoContext] = useDemoContext();
  const områder = menuData.områder;

  const featured = områder.filter((område) => område.featured);
  const notFeatured = områder.filter((område) => !område.featured);
  const lenkeListe = demoContext.featuredContent ? notFeatured : områder;

  return (
    <>
      {demoContext.featuredContent && <ToppTrePanel områder={featured} />}
      <LenkepanelGrid>
        {lenkeListe.map((område) => (
          <Område key={område.title} område={område} />
        ))}
      </LenkepanelGrid>
    </>
  );
}

export default Forside;
