import * as React from "react";
import { useNavigasjon } from "./appContext";
import Lenkepanel from "nav-frontend-lenkepanel";
import { LenkepanelGrid } from "../components/LenkepanelGrid";
import styled from "styled-components";
import { useDemoContext } from "../DemoControlls/demoContext";

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
`;

function Område() {
  const { område, navigerTil } = useNavigasjon();
  const [demoContext] = useDemoContext();

  return (
    <Style>
      <h2>
        {demoContext.visIkoner && område!.ikon}
        {område!.title}
      </h2>
      <LenkepanelGrid>
        {område!.sider.map((side) => (
          <Lenkepanel
            href="#"
            border
            tittelProps="normaltekst"
            onClick={() => navigerTil(område, side)}
          >
            <h3>{side}</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
              quisquam.
            </p>
          </Lenkepanel>
        ))}
      </LenkepanelGrid>
    </Style>
  );
}

export default Område;
