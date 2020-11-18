import * as React from "react";
import { useNavigasjon } from "./useNavigasjon";
import Lenkepanel from "nav-frontend-lenkepanel";
import { LenkepanelGrid } from "../components/LenkepanelGrid";
import styled from "styled-components/macro";
import { useDemoContext } from "../DemoControlls/demoContext";
import { OmrådeI } from "../data/types";

const Style = styled.div`
  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  svg {
    width: 2.5rem;
    max-height: 2.5rem;
    margin-right: 1.5rem;
    stroke-width: 1.2;
  }
  display: flex;
  flex-direction: column;
`;

const Beskrivelse = styled.div`
  text-align: center;
  font-size: 1.2rem;
`;

function Område(props: { område: OmrådeI }) {
  const område = props.område;
  const { navigerTil } = useNavigasjon();
  const [demoContext] = useDemoContext();

  return (
    <Style>
      <h2>
        {demoContext.visIkoner && område!.ikon}
        {område!.title}
      </h2>
      <Beskrivelse>{område.beskrivelse}</Beskrivelse>
      <LenkepanelGrid alignStart={!demoContext.border && !demoContext.chevron}>
        {område!.sider.map((side) => (
          <Lenkepanel
            key={side}
            href="#"
            border={demoContext.border}
            tittelProps="normaltekst"
            onClick={() => navigerTil(område, side)}
          >
            <h3>{side}</h3>
          </Lenkepanel>
        ))}
      </LenkepanelGrid>
    </Style>
  );
}

export default Område;
