import * as React from "react";
import { IkonButtonStyle } from "./MenyButton";
import SøkIkon from "../Ikoner/SøkIkon";
import styled from "styled-components/macro";

const Style = styled(IkonButtonStyle)`
  margin-left: 1rem;
  svg {
    height: 1.4rem;
    stroke-width: 1.6;
    margin-right: 0.5rem;
  }
`;

function Søk(props: React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <Style {...props}>
      <SøkIkon />
      <span>Søk</span>
    </Style>
  );
}

export default Søk;
