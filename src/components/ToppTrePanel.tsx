import * as React from "react";
import { OmrådeI } from "../data/types";
import styled from "styled-components/macro";
import { useNavigasjon } from "../App/useNavigasjon";
import { theme } from "../theme";
import { useDemoContext } from "../DemoControlls/demoContext";

interface Props {
  områder: OmrådeI[];
}

const Style = styled.div`
  padding: 0.5rem;
  margin-top: 2rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  grid-auto-rows: minmax(12rem, auto);
`;

const Panel = styled.button`
  overflow: hidden;
  background-color: ${theme.colors.navBla};
  padding: 1rem;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    transform: scale(1.05);
  }
  svg {
    flex-shrink: 0;
    width: 2.5rem;
    max-height: 2.5rem;
    margin-right: 1rem;
    stroke-width: 1.2;
    transform: scale(3.5) translate(1rem, 0.5rem);
    opacity: 0.3;
  }
`;

const PanelContent = styled.div`
  align-self: flex-start;
  flex-grow: 1;
  h3 {
    font-size: 1.5rem;
  }
  h3,
  p {
    margin: 0.25rem 0;
  }
`;

function ToppTrePanel(props: Props) {
  const navigasjon = useNavigasjon();
  const [demoContext] = useDemoContext();

  return (
    <Style>
      {props.områder.map((område) => (
        <Panel key={område.title} onClick={() => navigasjon.navigerTil(område)}>
          {demoContext.visIkoner && område.ikon}
          <PanelContent>
            <h3>{område.title}</h3>
            <p>{område.beskrivelse}</p>
          </PanelContent>
        </Panel>
      ))}
    </Style>
  );
}

export default ToppTrePanel;
