import * as React from "react";
import { useNavigasjon } from "../appContext";
import NavFrontendChevron from "nav-frontend-chevron";
import styled from "styled-components";
import { useDemoContext } from "../../DemoControlls/demoContext";

const Style = styled.div`
  text-align: center;
`;

const BrødsmuleStyle = styled.button`
  background-color: transparent;
  border: none;
  font-weight: 600;
  font-size: calc(0.8rem + 1.5vmin);
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  &:not(:last-child) {
    > * {
      margin-right: 2vmin;
    }
  }
  &:last-child {
    > *:nth-child(2) {
      display: none;
    }
  }
`;

function Brødsmule(props: { label: string; onClick: () => void }) {
  return (
    <BrødsmuleStyle className="lenke" onClick={props.onClick}>
      <span>{props.label}</span>
      <NavFrontendChevron type="høyre" />
    </BrødsmuleStyle>
  );
}

function Brodsmuler() {
  const { område, side, navigerTil } = useNavigasjon();
  const [demoContext] = useDemoContext();

  if (!demoContext.visBrødsmuler) {
    return null;
  }

  return (
    <Style>
      <Brødsmule label={"nav.no"} onClick={() => navigerTil()} />
      {område && (
        <Brødsmule label={område.title} onClick={() => navigerTil(område)} />
      )}
      {side && <Brødsmule label={side} onClick={() => null} />}
    </Style>
  );
}

export default Brodsmuler;
