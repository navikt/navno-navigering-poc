import * as React from "react";
import { useAppContext } from "../appContext";
import NavFrontendChevron from "nav-frontend-chevron";
import styled from "styled-components";


const Style = styled.div`
  text-align: center;
`;

const BrødsmuleStyle = styled.button`
  background-color: transparent;
  border: none;
  font-weight: 600;
  font-size: calc(.8rem + 1.5vmin);
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
  const [appContext, dispatch] = useAppContext();
  const { område, side } = appContext;

  return (
      <Style>
        <Brødsmule label={"nav.no"} onClick={() => dispatch({ type: "clear" })} />
        {område && (
          <Brødsmule
            label={område.title}
            onClick={() => dispatch({ type: "velgOmråde", område: område })}
          />
        )}
        {side && <Brødsmule label={side} onClick={() => null} />}
      </Style>
  );
}

export default Brodsmuler;
