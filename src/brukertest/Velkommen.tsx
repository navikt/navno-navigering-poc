import * as React from "react";
import styled from "styled-components/macro";
import { theme } from "../theme";
import { useBrukertestContext } from "./brukertestState";
import { getOmrådeFraTittel } from "../data/menuDataUtils";

const Style = styled.div`
  margin: auto;
  padding: 2rem;
  margin-top: 20vmin;
  max-width: 20rem;
  border: ${theme.colors.navBla} 0.3rem solid;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;

export const Knapp = styled.button`
  border: solid 0.2rem ${theme.colors.navBla};
  border-radius: 0.3rem;
  background: transparent;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
`;

function Velkommen() {
  const [state, dispatch] = useBrukertestContext();

  const tekst =
    "Se for deg at du snart skal pensjonere deg og lurer på hvor mye du vil få i pensjon";

  const start = () =>
    dispatch({
      type: "nyOppgave",
      område: getOmrådeFraTittel("Pensjon")!,
      side: "Vil beregne fremtidig pensjon",
      beskrivelse: tekst,
    });

  return (
    <Style>
      <h2>Hei og velkommen til brukertest</h2>
      <p>{tekst}</p>
      <Knapp onClick={start}>Ok</Knapp>
    </Style>
  );
}

export default Velkommen;
