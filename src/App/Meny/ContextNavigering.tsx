import * as React from "react";
import styled, { css } from "styled-components/macro";
import { theme } from "../../theme";
import { useNavigasjon } from "../useNavigasjon";
import { getOmrådeFraTittel } from "../../data/menuDataUtils";

const Style = styled.div`
  padding: 0.5rem 1rem 0;
  border-bottom: 0.1rem solid ${theme.colors.navLysBla};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Knapp = styled.button<{ selected: boolean }>`
  background-color: transparent;
  border: none;
  font-weight: bold;
  margin: 0 1rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  border-bottom: 0.25rem solid transparent;
  ${(props) =>
    props.selected &&
    css`
      border-bottom-color: ${theme.colors.navBla};
    `}
`;

const arbeidsgiverTittel = "Arbeidsgiver";
const samarbeidspartnerTittel = "Samarbeidspartner";

function ContextNavigering() {
  const { navigerTil, område } = useNavigasjon();

  return (
    <Style>
      <Knapp
        selected={
          ![arbeidsgiverTittel, samarbeidspartnerTittel].includes(
            område?.title || ""
          )
        }
        onClick={() => navigerTil()}
      >
        Person
      </Knapp>
      <Knapp
        selected={arbeidsgiverTittel === område?.title}
        onClick={() => navigerTil(getOmrådeFraTittel("Arbeidsgiver"))}
      >
        Arbeidsgiver
      </Knapp>
      <Knapp
        selected={samarbeidspartnerTittel === område?.title}
        onClick={() => navigerTil(getOmrådeFraTittel("Samarbeidspartner"))}
      >
        Samarbeidspartner
      </Knapp>
    </Style>
  );
}

export default ContextNavigering;
