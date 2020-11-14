import * as React from "react";
import styled from "styled-components/macro";
import { theme } from "../../theme";
import { useNavigasjon } from "../useNavigasjon";
import { menuData } from "../../data/menuData";

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
  const { navigerTil } = useNavigasjon();

  return (
    <Style>
      <Knapp onClick={() => navigerTil()}>Person</Knapp>
      <Knapp
        onClick={() =>
          navigerTil(
            menuData.områder.find((it) => it.title.includes("Arbeidsgiver"))
          )
        }
      >
        Arbeidsgiver
      </Knapp>
      <Knapp
        onClick={() =>
          navigerTil(
            menuData.områder.find((it) =>
              it.title.includes("Samarbeidspartner")
            )
          )
        }
      >
        Samarbeidspartner
      </Knapp>
    </Style>
  );
}

export default ToppNivåNavigering;
