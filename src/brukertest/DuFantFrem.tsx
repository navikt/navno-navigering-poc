import * as React from "react";
import styled from "styled-components/macro";
import Emoji from "../components/Emoji";
import { theme } from "../theme";
import { useBrukertestContext } from "./brukertestState";

const Style = styled.div`
  border: 0.4rem solid ${theme.colors.navGronn};
  padding: 2rem;
  text-align: center;
  border-radius: 0.3rem;
  font-size: 1.2rem;
`;

const Knapp = styled.button`
  border: solid 0.2rem ${theme.colors.navBla};
  border-radius: 0.3rem;
  background: transparent;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  margin-top: 2rem;
`;

function DuFantFrem() {
  const [, dispatch] = useBrukertestContext();

  const avslutt = () => dispatch({ type: "ferdig" });

  return (
    <Style>
      <h2>
        Gratulerer, du fant frem <Emoji label="Konfetti" emoji="🎉" />
      </h2>
      <Knapp onClick={avslutt}>Trykk for å fullføre</Knapp>
    </Style>
  );
}

export default DuFantFrem;
