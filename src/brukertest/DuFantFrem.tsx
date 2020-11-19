import * as React from "react";
import styled from "styled-components/macro";
import { theme } from "../theme";
import { Knapp } from "./Velkommen";
import { useBrukertestContext } from "./brukertestState";

const Style = styled.div`
  border: 0.4rem solid ${theme.colors.navGronn};
  padding: 2rem;
  text-align: center;
  border-radius: 0.3rem;
  font-size: 1.2rem;
  span[role="img"] {
    font-size: 2rem;
  }
`;

function DuFantFrem() {
  const [, dispatch] = useBrukertestContext();

  const avslutt = () => dispatch({ type: "ferdig" });

  return (
    <Style>
      <h2>
        Gratulerer, du fant frem{" "}
        <span role="img" aria-label="Konfetti">
          🎉
        </span>
      </h2>
      <Knapp onClick={avslutt}>Trykk for å fullføre</Knapp>
    </Style>
  );
}

export default DuFantFrem;
