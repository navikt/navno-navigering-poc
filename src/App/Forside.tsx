import * as React from "react";
import { menuData } from "../data/menuData";
import { useNavigasjon } from "./useNavigasjon";
import Lenkepanel from "nav-frontend-lenkepanel";
import { LenkepanelGrid } from "../components/LenkepanelGrid";
import styled from "styled-components/macro";
import { useDemoContext } from "../DemoControlls/demoContext";
import { Undersider } from "./Meny/Undersider";
import { useRef } from "react";
import { runIfEventIsNotInsideRef } from "../utils/reactRef-utils";
import { OmrådeI } from "../data/types";
import ToppTrePanel from "../components/ToppTrePanel";
import Tabs from "nav-frontend-tabs";
import Panel from "nav-frontend-paneler";
import { useState } from "react";
import Område from "./Område";


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
const StyledTabs = styled(Tabs)`
  margin-top: 1rem;
  
  .nav-frontend-tabs__tab-inner--aktiv {
    background: rgba(0,103,197,0.32);
    border-bottom-color: rgba(0,103,197,0.32);
  }
  
`;

const StyledPanel = styled(Panel)`
  .lenkepanel {
    border:none;
  }
  padding: 0 1rem;
  background:rgba(0,103,197,0.32) ;
   borderTop:0;
   borderTopLeftRadius: 0;
   borderTopRightRadius: 0;
  margin-bottom: 1rem;
  
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

function Innhold() {
  const [demoContext] = useDemoContext();
  const områder = menuData.områder;

  const lenkeListe = områder
    .filter((område) => !demoContext.featuredContent || !område.featured)
    .filter(
      (område) => !demoContext.toppnivåNavigering || !område.toppNivåKandidat
    )
    .filter(
      (område) => !demoContext.contextTabs || !område.toppNivåKandidat
    )
    .filter(
      (område) => !demoContext.footerNavigering || !område.footerKandidat
    );

  return (
    <>
      <LenkepanelGrid>
        {lenkeListe.map((område) => (
          <OmrådeKnapp key={område.title} område={område} />
        ))}
      </LenkepanelGrid>
    </>
  )
}
function Forside() {
  const [demoContext] = useDemoContext();
  const områder = menuData.områder;
  const featured = områder.filter((område) => område.featured);

  const [selectedTab, setSelectedTab] = useState("Privatperson");

  const onTabChange = (e: any) => {
    console.log(e)
    setSelectedTab(e.target.textContent);
  }
  return (
    <>
      {demoContext.featuredContent && <ToppTrePanel områder={featured} />}
      {demoContext.contextTabs ?
        <>
          <StyledTabs
            tabs={[{ label: "Privatperson" }, { label: "Arbeidsgiver" }, { label: "Samarbeidspartner" }]}
            onChange={onTabChange}
          />
          <StyledPanel border>
            {selectedTab === "Privatperson" ?
              <Innhold  /> :
              <Område område={områder.find(område => område.title === selectedTab)!} />

            }
          </StyledPanel>
        </> :
        <Innhold  />
      }

    </>
  );
}

export default Forside;
