import * as React from "react";
import styled from "styled-components/macro";
import { theme } from "../../theme";
import { useNavigasjon } from "../useNavigasjon";
import { getOmrådeFraTittel } from "../../data/menuDataUtils";

const Style = styled.div`
  padding: 0.5rem;
  border-bottom: 0.1rem solid ${theme.colors.navLysBla};
  display: flex;
  flex-wrap: wrap;
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
  const { navigerTil } = useNavigasjon();

  return (
    <Style>
      <Knapp onClick={() => navigerTil()}>Person</Knapp>
      <Knapp onClick={() => navigerTil(getOmrådeFraTittel("Arbeidsgiver"))}>
        Arbeidsgiver
      </Knapp>
      <Knapp
        onClick={() => navigerTil(getOmrådeFraTittel("Samarbeidspartner"))}
      >
        Samarbeidspartner
      </Knapp>
    </Style>
  );
}

export default ToppNivåNavigering;
