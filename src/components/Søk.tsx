import * as React from "react";
import { IkonButtonStyle } from "./MenyButton";
import SøkIkon from "../Ikoner/SøkIkon";
import styled from "styled-components/macro";
import { useRef, useState } from "react";
import { useClickAway } from "react-use";
import { theme } from "../theme";

const Style = styled(IkonButtonStyle)`
  position: relative;
  margin-left: 1rem;
  svg {
    height: 1.4rem;
    stroke-width: 1.6;
    margin-right: 0.5rem;
  }
`;

const FunkerikkeWarning = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 15rem;
  padding: 1.5rem;
  background-color: white;
  border: solid 0.3rem ${theme.colors.redError};
  border-radius: 0.3rem;
  box-shadow: 0 0 4rem #888;
`;

function Søk(props: React.HTMLAttributes<HTMLButtonElement>) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <Style {...props} ref={ref} onClick={() => setOpen(!open)}>
      <SøkIkon />
      <span>Søk</span>
      {open && (
        <FunkerikkeWarning>
          Det er dessverre ikke mulig å bruke søk på denne testsiden
        </FunkerikkeWarning>
      )}
    </Style>
  );
}

export default Søk;
