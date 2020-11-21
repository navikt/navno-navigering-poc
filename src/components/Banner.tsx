import * as React from "react";
import { ReactNode } from "react";
import styled from "styled-components/macro";
import { theme } from "../theme";
import { OmrådeI } from "../data/types";
import { useNavigasjon } from "../App/useNavigasjon";

const Style = styled.button`
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  background-color: ${theme.colors.navLysGra};
  padding: 1rem;
  border-radius: 0.3rem;
  width: 100%;
  margin: 2rem 0.5rem;
  cursor: pointer;
  svg {
    margin-right: 2em;
    height: 2rem;
    stroke-width: 0;
  }
`;

interface Props {
  ikon: ReactNode;
  title: string;
  område: OmrådeI;
}

function Banner(props: Props) {
  const { navigerTil } = useNavigasjon();

  return (
    <Style onClick={() => navigerTil(props.område)}>
      {props.ikon}
      {props.title}
    </Style>
  );
}

export default Banner;
