import * as React from "react";
import styled from "styled-components/macro";
import { theme } from "../../theme";

const Style = styled.div`
  padding: 0.5rem;
  border-bottom: 0.1rem solid ${theme.colors.navLysBla};
  display: flex;
  justify-content: center;
`;

const Knapp = styled.button`
  background-color: transparent;
  border: none;
  font-weight: bold;
  margin: 0 1rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

function ToppNivåNavigering() {
  return (
    <Style>
      <Knapp>Person</Knapp>
      <Knapp>Arbeidsgiver</Knapp>
      <Knapp>Sammarbeidspartner</Knapp>
    </Style>
  );
}

export default ToppNivåNavigering;
